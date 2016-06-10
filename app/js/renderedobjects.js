//TODO: Maybe switch from classes to a factory pattern?
class RenderedObject {
    //Abstract. A draggable element
    constructor (id, x, y, type, contents) {
        this._id = id;
        this._x = x;
        this._y = y;
        this._type = type;
        this._contents = contents;
    }
    get id () { return this._id; }
    get type () { return this._type; }
    get contentDiv () { return this._contentDiv; } //div, contains just the content
    get containerDiv () { return this._containerDiv; } //div, also includes any snapboxes and snapped elements

    //Creates the DOM elements and children to the parent parameter. Only call this once!
    createElements(parent) {
        let container = $("<div></div>", {
            "id": this._id,
            "class": this._type + "Container",
            "style": "left: " + this._x + "px; top: " + this._y + "px",
        });
        let contentDraggable = $("<div></div>", {
            "class":  this._type,
        });
        let content = $("<div></div>", {
            "class": this._type + "Text",
        }).html(this._contents);
        content.appendTo(contentDraggable);
        this._contentDiv = content;
        contentDraggable.appendTo(container);
        container.appendTo(parent);
        container.draggable();
        this._containerDiv = container;
        return container;
    }
}

class SnapObject extends RenderedObject { 
    //Abstract. A RenderedObject that snaps to snapboxes
    constructor (id, x, y, type, contents, snapTo, snapboxes) {
        super (id, x, y, type, contents, snapboxes);
        this._snapTo = snapTo;

        this._lastSnapped = null;
    }

    //Override to configure snapping
    createElements(parent) {
        let elem = super.createElements(parent);

        if (this._snapTo != null)
            elem.draggable("option", {
                snap: "." + this._snapTo +  "snapbox",
                snapMode: "inner",
                snapTolerance: 9,
                start: () => { this._onStart(elem); },
                stop: () => { this._onStop(elem); }
            });
        //elem.on("click", () => {alert(this._lastSnapped)});
        return elem;
    }

    _onStart(dragger) {
        $(".snapbox").each(function() {
            $(dragger).trigger("dragStart", dragger);
        });
    }

    _onStop(dragger) {
        console.log(this._lastSnapped);
        let lastSnapped = this._lastSnapped;
        //Thanks to this answer: http://stackoverflow.com/a/5181159
        /* Get the possible snap targets: */
        let snapElements = dragger.data('ui-draggable').snapElements;

        /* Pull out only the snap targets that are "snapping": */
        let snappedTo = $.map(snapElements, function(element) {
            return element.snapping ? element.item : null;
        });

        //If it isn't snapping to anything, make sure it is the child of the playground div
        if (snappedTo.length == 0) {
            if (lastSnapped) {
                let top = dragger.offset().top;
                let left = dragger.offset().left;
                dragger.detach().appendTo($("#playground"));
                dragger.offset({top: top, left: left});
                $(lastSnapped).trigger("unsnapped");
                this._lastSnapped = null;
            }
        }
        else {
            let snapped = null;
            if (snappedTo.length > 1) { //Select the closest snapped element
                let closest;
                let closestDistance = 10000;
                for (let i = 1; i < snappedTo.length; i++) {
                    let s = $(snappedTo[i]);
                    console.log(snappedTo.length, i);
                    let distance = Math.sqrt(
                        Math.pow(dragger.offset().left - s.offset().left, 2) +
                        Math.pow(dragger.offset().top - s.offset().top, 2));
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closest = s;
                    }
                }
                snapped = closest;
            }
            else if (snappedTo.length == 1)
                snapped = snappedTo[0];
            dragger.detach().appendTo(snapped);
            dragger.css({"left": 0, "top": 0});
            $(snapped).trigger("snapped", dragger);
            if (lastSnapped != null && lastSnapped != snapped)
                $(lastSnapped).trigger("unsnapped");
            this._lastSnapped = snapped;
        }
        $(".snapbox").each(function() {
            $(this).trigger("dragStop");
        });

    }

}

class HasSnapboxes extends SnapObject {
    
    constructor (id, x, y, type, contents, snapTo) {
        super(id, x, y, type, contents, snapTo);
        this._leftSnapped = null;
        this._rightSnapped = null;
    }

    get snapped() {
        return {left: this._leftSnapped, right: this._rightSnapped};
    }

    set onBothSnapped(onBothSnapped) {
        this._onBothSnapped = onBothSnapped;
    }

    set onUnsnapped(onUnsnapped) {
        this._onUnsnapped = onUnsnapped;
    }
    //Override
    createElements(parent) {
        let element = super.createElements(parent);
        let me = this;
        $("<div></div>", {
            class: this.type + "snapbox snapbox snapboxLeft"
        }).on("dragStart", function(event, dragger) {
            if (!me.snapped.left || $(me.snapped.left).is(dragger))
                $(this).css("border", "1px dotted black");
        }).on("dragStop", function(event) {
            if (me.snapped.left)
                $(this).css("border", "none");
        }).on("snapped", function (event, dragger) {
            me._leftSnapped = dragger;
            if ($(me.snapped.right).is(dragger))
                me._rightSnapped = null;
            if(me.snapped.right)
                if (me._onBothSnapped != null) me._onBothSnapped();
            console.log("left snapped", $(me.snapped.left).attr("id"), $(me.snapped.right).attr("id"));
        }).on("unsnapped", function (event) {
            if (me.snapped.left && me.snapped.right)
                if (me._onUnsnapped != null) me._onUnsnapped();
            me._leftSnapped = null;
        }).prependTo(element);

        $("<div></div>", {
            class: this.type + "snapbox snapbox snapboxRight"
        }).on("dragStart", function(event, dragger) {
            if (!me.snapped.right || $(me.snapped.right).is(dragger))
                $(this).css("border", "1px dotted black");
        }).on("dragStop", function(event) {
            if (me.snapped.right)
                $(this).css("border", "none");
        }).on("snapped", function (event, dragger) {

            me._rightSnapped = dragger;
            if ($(me.snapped.left).is(dragger))
                me._leftSnapped = null;
            if(me.snapped.left)
                if (me._onBothSnapped != null) me._onBothSnapped();
            console.log("right snapped", $(me.snapped.left).attr("id"), $(me.snapped.right).attr("id"));
        }).on("unsnapped", function (event) {
            if (me.snapped.left && me.snapped.right)
                if (me._onUnsnapped != null) me._onUnsnapped();
            me._rightSnapped = null;
        }).prependTo(element);
    }
}

class RenderedNumber extends SnapObject {
    constructor (id, x, y, number) {
        super(id, x, y, "number", number, "operation");
        this._number = number;
    }

    get number () { return this._number; }
}

import { Animator } from "app/js/animator";
class RenderedOperation extends HasSnapboxes {
    constructor (id, x, y, operation) {
        let contents = "";
        let color = "";
        switch (operation) { //TODO: Make these values constants somewhere?
            case "add":
                contents = "+";
                break;
            case "subtract":
                contents = "&minus;";
                break;
            case "multiply":
                contents = "&times;";
                break;
            case "divide":
                contents = "&divide;";
                break;
        }
        super (id, x, y, "operation", contents, "number");
        super.onBothSnapped = this._onBothSnapped;
        super.onUnsnapped = this._onUnsnapped;
        this._operation = operation;
        this._color = color;
    }

    _onBothSnapped() {
        console.log("both snapped");
        Animator.addClass(this.contentDiv, this._operation + " snapped");
    }

    _onUnsnapped() {
        Animator.removeClass(this.contentDiv, this._operation + " snapped");
    }

    //Override
    createElements(parent) {
        super.createElements(parent);
    }
    get operation() { return this._operation; }
}

export { RenderedNumber, RenderedOperation };
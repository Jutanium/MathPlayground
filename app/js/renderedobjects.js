//TODO: Maybe switch from classes to a factory pattern?
class RenderedObject {
    //A draggable element
    constructor (id, x, y, type, contents, draggable = true) {
        this._id = id;
        this._x = x;
        this._y = y;
        this._type = type;
        this._contents = contents;
        this._draggable = draggable;
    }
    get id () { return this._id; }
    get type () { return this._type; }
    get contentDiv () { return this._contentDiv; } //div, contains just the content
    get containerDiv () { return this._containerDiv; } //div, also includes any snapboxes and snapped elements
    set contents (contents) {
        this._contentDiv.html(contents);
    }
    //Creates the DOM elements and children to the parent parameter. Only call this once!
    createElements(parent) {
        let container = $("<div></div>", {
            "id": this._id,
            "class": this._type + "-container",
            "style": "left: " + this._x + "px; top: " + this._y + "px",
        });
        let contentDraggable = $("<div></div>", {
            "class":  this._type,
        });
        let content = $("<div></div>", {
            "class": this._type + "-text",
        }).html(this._contents);
        content.appendTo(contentDraggable);
        this._contentDiv = content;
        contentDraggable.appendTo(container);
        container.appendTo(parent);
        if (this._draggable) container.draggable();
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
        let lastSnapped = this._lastSnapped;
        //Thanks to this answer: http://stackoverflow.com/a/5181159
        /* Get the possible snap targets: */
        const snapElements = dragger.data('ui-draggable').snapElements;

        /* Pull out only the snap targets that are "snapping": */
        const snappedTo = $.map(snapElements, function(element) {
            return element.snapping ? element.item : null;
        });

        //If it isn't snapping to anything, make sure it is the child of the playground div
        if (snappedTo.length == 0) {
            if (lastSnapped) {
                const top = dragger.offset().top;
                const left = dragger.offset().left;
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
                    const s = $(snappedTo[i]);
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

    set onBothSnapped(event) {
        this._onBothSnapped = event;
    }

    set onUnsnapped(event) {
        this._onUnsnapped = event;
    }
    //Override
    createElements(parent) {
        const element = super.createElements(parent);
        const me = this;

        $("<div></div>", {
            class: this.type + "snapbox snapbox snapbox-left"
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
            class: this.type + "snapbox snapbox snapbox-right"
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
        return element;
    }
}

class RenderedNumber extends SnapObject {
    constructor (id, x, y, number) {
        super(id, x, y, "number", number, "operation");
        this._number = number;
    }

    get number () { return this._number; }
}

import AnimatorUtils from "app/js/animatorutils";
class RenderedOperation extends HasSnapboxes {
    constructor (id, x, y, operation, contents, animatorClass) {
        super (id, x, y, "operation", contents, "number");
        super.onBothSnapped = this.onBothSnapped;
        super.onUnsnapped = this.onUnsnapped;
        this._operation = operation;
        if (animatorClass) {
            this._animatorClass = animatorClass;
            this.onClick = () => {
                if (this._animator)
                    this._animator.drawGo();
            }
        }
    }

    onBothSnapped() {
        console.log("both snapped");
        AnimatorUtils.addClass(this.contentDiv, this._operation + " snapped");

        if (this._animatorClass) {
            if (!this._animator) {
                this._animator = new this._animatorClass(this.containerDiv);
                return;
            }
            if ($(this.snapped.left).attr("id") != this._lastLeft || $(this.snapped.right).attr("id") != this._lastRight) {
                console.log("tossing old add animator");
                this._animator.removeElements();
                this._animator = new this._animatorClass(this.containerDiv);
            }
        }
    }

    onUnsnapped() {
        AnimatorUtils.removeClass(this.contentDiv, this._operation + " snapped");

        this._lastLeft = $(this.snapped.left).attr("id");
        this._lastRight = $(this.snapped.right).attr("id");
        if (this._animator)
            this._animator.goAway();
    }

    set onClick (event) { this._onClick = event}
    //Override
    createElements(parent) {
        return super.createElements(parent).on("click", () => {
            if (this.snapped.left && this.snapped.right) {
                if (this._onClick) this._onClick();
            }
        });
    }
    get operation() { return this._operation; }
}

import AddAnimator from "app/js/animations/add";
class RenderedAdd extends RenderedOperation {
    constructor (id, x, y) {
        super (id, x, y, "add", "+", AddAnimator);
    }
}

class RenderedSubtract extends RenderedOperation {
    constructor (id, x, y) {
        super (id, x, y, "subtract", "&minus;");
    }
}

class RenderedMultiply extends RenderedOperation {
    constructor (id, x, y) {
        super (id, x, y, "multiply", "&times;");
    }
}

class RenderedDivide extends RenderedOperation {
    constructor (id, x, y) {
        super (id, x, y, "divide", "&divide;");
    }
}
class RenderedEquals extends RenderedObject {
    constructor (id, x, y) {
        super (id, x, y, "number", "=", false);
    }

    tickBy (by = 1) {
        if (!this._value) {
            this._value = 0;
        }
        this._value += by;
        this.contents = "=" + "&nbsp;" + this._value;
    }

    set value (value) {
        this._value = value;
        this.contents = "=" + "&nbsp;" + value;
    }
}
export { RenderedEquals, RenderedNumber, RenderedOperation, RenderedAdd, RenderedSubtract, RenderedMultiply, RenderedDivide };
import AnimatorUtils from "app/js/animatorutils";

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
    get containerDiv () { return this._containerDiv; } //div, also includes other stuff: snapboxes and snapped elements for example
    set contents (contents) {
        this._contentDiv.html(contents);
    }
    //Creates the DOM elements and children to the parent parameter. Only call this once!
    createElements(parent) {
        const container = $("<div></div>")
            .attr("id", this._id)
            .addClass(this._type + "-container")
            .css({left: this._x, top: this._y});


        const content = $("<div></div>")
            .addClass(this._type + "-text")
            .html(this._contents);

        content.appendTo(container);
        container.appendTo(parent);

        if (this._draggable) container.draggable();

        this._contentDiv = content;
        this._containerDiv = container;
        return container;
    }
}

class SnapObject extends RenderedObject {
    //Abstract. A RenderedObject that snaps to snapboxes
    constructor (id, x, y, type, contents, snapTo, snapboxes, draggable) {
        super (id, x, y, type, contents, snapboxes, draggable);
        this._snapTo = snapTo;

        this._lastSnapped = null;
    }

    //Override to configure snapping
    createElements(parent) {
        const elem = super.createElements(parent);

        if (elem.data("ui-draggable") && this._snapTo != null)
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
                dragger.css({position: 'absolute'})
                dragger.css("width", "auto");
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
                    let distance = Math.sqrt( //Distance formula :) Pre-Algebra was not for nothing!
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
            dragger.css({position: "relative", "left": 0, "top": 0});
            $(snapped).trigger("snapped", dragger);
            if (lastSnapped != null && !$(lastSnapped).is($(snapped)))
                $(lastSnapped).trigger("unsnapped");
            this._lastSnapped = snapped;
        }
        $(".snapbox").each(function() {
            $(this).trigger("dragStop", dragger);
        });

    }

}

//TODO: Make this work or add a new classes for up/down (fraction) snapboxes and matrix snapboxes
class HasSnapboxes extends SnapObject { //Abstract.

    constructor (id, x, y, type, contents, snapTo, draggable) {
        super(id, x, y, type, contents, snapTo, draggable);
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

    //For manual attaching
    snapLeft(number) {
        const numberDiv = number.containerDiv;
        if (numberDiv && this._leftSnapbox) {
            numberDiv.css({"left":0, "top":0});
            //this.fixLeftMarginIssue(number.containerDiv)
            number._lastSnapped = this._leftSnapbox;
            this._leftSnapbox.append(numberDiv);
            this._leftSnapbox.trigger("snapped", numberDiv);
            this._leftSnapbox.trigger("dragStop", numberDiv);
        }
    }
    snapRight(number) {
        const numberDiv = number._containerDiv;
        if (numberDiv && this._rightSnapbox) {
            numberDiv.css({"left":0, "top":0});
            number._lastSnapped = this._rightSnapbox;
            this._rightSnapbox.append(numberDiv);
            this._rightSnapbox.trigger("snapped", numberDiv);
            this._rightSnapbox.trigger("dragStop", numberDiv);
        }
    }

    //Because big numbers caused problems on the left
    /*fixLeftBoxIssue(numberContainer) {
        const textElement = numberContainer.find(".number-text");
        const defaultWidth = AnimatorUtils.numWidth;

        this._leftSnapbox.css("margin-left", "-=" + (textElement.width() - defaultWidth) * .9); //TODO: (low priority) find out from where this magic number derives
    }*/
    //Override
    createElements(parent) {
        const element = super.createElements(parent);
        const _this = this;

        this._leftSnapbox = $("<div></div>")
            .addClass(this.type + "snapbox snapbox snapbox-left border")
            .on("dragStart", function(event, dragger) {
                if (!_this.snapped.left || $(_this.snapped.left).is(dragger))
                {
                    $(this).addClass("border");
                }
            }).on("dragStop", function(event, dragger) {
                if (_this.snapped.left) $(this).removeClass("border");
            }).on("snapped", function (event, dragger) {
                _this._leftSnapped = dragger;
                /*if ($(dragger).hasClass("number-container"))
                {
                    console.log("fired");
                    //_this.fixLeftBoxIssue($(dragger));
                    //$(this).css("width", $(dragger).find(".number-text").width());
                }*/
                if ($(_this.snapped.right).is(dragger))
                    _this._rightSnapped = null;
                if(_this.snapped.right)
                    if (_this._onBothSnapped != null) _this._onBothSnapped();
                $(this).removeClass(_this.type + "snapbox");
                console.log("left snapped", $(_this.snapped.left).attr("id"), $(_this.snapped.right).attr("id"));
            }).on("unsnapped", function (event) {
                console.log("leftUnsnapped");
                if (_this.snapped.left && _this.snapped.right)
                    if (_this._onUnsnapped != null) _this._onUnsnapped();
                _this._leftSnapped = null;
                $(this).addClass(_this.type + "snapbox");
            })
            .prependTo(element);

        this._rightSnapbox = $("<div></div>")
            .addClass(this.type + "snapbox snapbox snapbox-right border")
            .on("dragStart", function(event, dragger) {
                if (!_this.snapped.right || $(_this.snapped.right).is(dragger))
                    $(this).addClass("border");
            })
            .on("dragStop", function(event) {
                if (_this.snapped.right)
                    $(this).removeClass("border");
            })
            .on("snapped", function (event, dragger) {
                _this._rightSnapped = dragger;
                /*if ($(dragger).hasClass("number-container")) {
                    $(this).css("width", $(dragger).find(".number-text").width());
                }*/
                if ($(_this.snapped.left).is(dragger))
                    _this._leftSnapped = null;
                if(_this.snapped.left)
                    if (_this._onBothSnapped != null) _this._onBothSnapped();
                $(this).removeClass(_this.type + "snapbox");
            })
            .on("unsnapped", function (event) {
                if (_this.snapped.left && _this.snapped.right)
                    if (_this._onUnsnapped != null) _this._onUnsnapped();
                _this._rightSnapped = null;
                $(this).addClass(_this.type + "snapbox");
            }).appendTo(element);
            return element;
    }
}

class RenderedNumber extends SnapObject {
    constructor (name, x, y, number, draggable) {
        super("number"+number+"-"+name, x, y, "number", number, "operation", draggable);
        this._number = number;
    }

    get number () { return this._number; }

    set setNumber(number) {
        this._number = number;
        this.contents = number;
    }

    tickBy(by = 1) {
        this.setNumber = this._number + by;
    }
}

class RenderedOperation extends HasSnapboxes { //Abstract
    constructor (id, x, y, operation, contents, animatorClass) {
        super (id, x, y, "operation", contents/*, "number"*/);

        super.onBothSnapped = this.onBothSnapped;
        super.onUnsnapped = this.onUnsnapped;

        this._operation = operation;

        //jQuery onClick calls this onClick, set in the createElements method
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
                this._animator = this._animatorClass(this.containerDiv);
                return;
            }
            if ($(this.snapped.left).attr("id") != this._lastLeft || $(this.snapped.right).attr("id") != this._lastRight) {
                console.log("tossing old add animator");
                this._animator.removeElements();
                this._animator = this._animatorClass(this.containerDiv);
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

import Controller from "app/js/controller";

class RenderedAdd extends RenderedOperation {
    constructor (name, x, y) {
        //TODO: possibly move the getAnimations into this
        super ("add-"+name, x, y, "add", "+", Controller.getAddAnimation);
    }
}

class RenderedSubtract extends RenderedOperation {
    constructor (name, x, y) {
        super ("subtract-"+name, x, y, "subtract", "&minus;", Controller.getSubtractAnimation);
    }
}

class RenderedMultiply extends RenderedOperation {
    constructor (name, x, y) {
        super ("multiply-"+name, x, y, "multiply", "&times;", Controller.getMultiplyAnimation);
    }
}

class RenderedDivide extends RenderedOperation {
    constructor (name, x, y) {
        super ("divide-"+name, x, y, "divide", "&divide;", Controller.getDivideAnimation);
    }
}
import Utils from "app/js/animatorutils";
class RenderedEquals extends RenderedObject {
    constructor (id, x, y) {
        super (id, x, y, "equals number", "=", false);
    }

    tickBy (by = 1) {
        if (!this._value) {
            this._value = 0;
        }
        this._value += by;
        this.contents = `=&nbsp;<span class="${Utils.answerClass}">${this._value}</span>`;
    }

    set value (value) {
        this._value = value;
        this.contents = `=&nbsp;<span class="${Utils.answerClass}">${value}</span>`;
    }
}
export { RenderedObject, RenderedEquals, RenderedNumber, RenderedOperation, RenderedAdd, RenderedSubtract, RenderedMultiply, RenderedDivide };
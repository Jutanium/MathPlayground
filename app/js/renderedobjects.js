class RenderedObject { //Abstract. A draggable element
    constructor (id, x, y, type, contents) {
        this._id = id;
        this._x = x;
        this._y = y;
        this._type = type;
        this._contents = contents;
    }
    get id () { return this._id; }
    get type () { return this._type; }

    snapboxes (element) {
        //template method. Subclasses should override this function and make their snapboxes
    }

    //Creates the DOM elements and children to the parent parameter. Only call this once!
    createElements(parent) {
        let container = $("<div></div>", {
            "id": this._id,
            "class": this._type + "Container",
            "style": "left: " + this._x + "px; top: " + this._y + "px"
        });
        let contentDraggable = $("<div></div>", {
            "class": "draggable " + this._type,
        });
        let content = $("<div></div>", {
            "class": this._type + "Text",
        }).html(this._contents);
        content.appendTo(contentDraggable);
        contentDraggable.appendTo(container);
        container.appendTo(parent);
        container.draggable();
        this.snapboxes (container);
        return container;
    }
}

class SnapObject extends RenderedObject { //Abstract. A RenderedObject that snaps to snapboxes
    constructor (id, x, y, type, contents, snapTo, onSnap) {
        super (id, x, y, type, contents);
        this._snapTo = snapTo;
        this._onSnap = onSnap;
    }

    //Override to configure snapping
    createElements(parent) {
        let elem = super.createElements(parent);

        let lastOffset = null; //closure state variable
        let onStop = function () {
            //Thanks to this answer: http://stackoverflow.com/a/5181159
            let dragger = $(this);
            /* Get the possible snap targets: */
            let snapElements = dragger.data('ui-draggable').snapElements;

            /* Pull out only the snap targets that are "snapping": */
            let snappedTo = $.map(snapElements, function(element) {
                return element.snapping ? element.item : null;
            });

            if (snappedTo.length == 0) {
                if (lastOffset != null) {
                    let top = dragger.offset().top;
                    let left = dragger.offset().left;
                    dragger.detach().appendTo($("#playground"));
                    dragger.offset({top: top, left: left});
                    lastOffset = null;
                }
                return;
            }
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

            lastOffset = snapped;
            dragger.detach().appendTo(snapped);
            dragger.css({"left": 0, "top": 0});
            //dragger.position({"my": "top left", "at": "top left", "of": snapped});
        };
        if (this._snapTo != null)
            elem.draggable("option", {
                snap: "." + this._snapTo +  "snapbox",
                snapMode: "inner",
                snapTolerance: 9,
                stop: onStop
            });
        return elem;
    }
}

class HasSnapboxes extends SnapObject {
    constructor (id, x, y, type, contents, snapTo, onSnap) {
        super(id, x, y, type, contents, snapTo, onSnap);
    }

    //Override
    snapboxes (element) {
        $("<div></div>", {
            class: this.type + "snapbox snapboxLeft"
        }).prependTo(element);

        $("<div></div>", {
            class: this.type + "snapbox snapboxRight"
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

class RenderedOperation extends HasSnapboxes {
    constructor (id, x, y, operation) {
        let contents = "";
        switch (operation) {
            case "add": contents = "+"; break;
            case "subtract": contents = "&minus;"; break;
            case "multiply": contents = "&times;"; break;
            case "divide": contents = "&divide;"; break;
        }
        super (id, x, y, "operation", contents, "number");
        this._operation = operation;
    }

    get operation() { return this._operation; }
}

export { RenderedNumber, RenderedOperation };
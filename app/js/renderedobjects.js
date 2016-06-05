class RenderedObject {
    constructor (id, x, y, type, contents) {
        this._id = id;
        this._x = x;
        this._y = y;
        this._type = type;
        this._contents = contents;
    }
    get id () { return this._id; }
    get type () { return this._type; }

    snapSpots (element) { //template method

    }

    render(parent) {
        parent.append("<div id='" + this._id + "' class='draggable " + this._type + "' " +
            "style='left: " + this._x + "px; top: "+ this._y + "px'> " + this._contents + "</div>");
        let element =  $('#'+this._id);
        element.draggable();
        this.snapSpots (element);
        return element;
    }


}

class SnapObject extends RenderedObject { //TODO: Snapspots
    constructor (id, x, y, type, contents, snapTo, onStop) {
        super (id, x, y, type, contents);
        this._snapTo = snapTo;
        this._onStop = onStop;
    }

    //Override
    render(parent) {
        let elem = super.render(parent);
        elem.draggable("option", {snap: "." + this._snapTo, snapMode: "outerHoriz", stop: this._onStop});

        return elem;
    }
}
class RenderedNumber extends SnapObject {
    constructor (id, x, y, number) {
        super(id, x, y, "number", number, "operation");
        this._number = number;
    }

    get number () { return this._number; }
}

class RenderedOperation extends SnapObject {
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
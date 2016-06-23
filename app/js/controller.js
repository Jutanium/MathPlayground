import { RenderedNumber, RenderedAdd, RenderedSubtract, RenderedMultiply, RenderedDivide} from "app/js/renderedobjects";
import AddShort from "app/js/animations/addshort";
import AddLong from "app/js/animations/addlong";
import MultiplyShort from "app/js/animations/multiplyshort";
export default class Controller {
    
    constructor (parentDiv) {
        this._parentDiv = parentDiv;
        this._idCounter = 0;
        this._objects = new Map();
    }

    createOperator(ObjClass, parameters) {
        let x, y, attachLeft, attachRight;
        if (parameters) {
            x = parameters.x;
            y = parameters.y;
            attachLeft = parameters.attachLeft;
            attachRight = parameters.attachRight;
        }

        if (x == null && y == null) {
            const pos = this._getRandomPos();
            x = pos.x;
            y = pos.y;
        }
        const object = new ObjClass(this._idCounter++, x, y);
        object.createElements(this._parentDiv);

        if (attachLeft) {
            object.snapLeft(attachLeft);
        }
        if (attachRight) {
            object.snapRight(attachRight);
        }

        this._objects.set(object.id, object);
        return object;
    }
    createAdd(parameters) {
        return this.createOperator(RenderedAdd, parameters);
    }
    static getAddAnimation(container) {
        const firstOp = container.children(".snapbox-left").find(".number-text").text();
        const secondOp = container.children(".snapbox-right").find(".number-text").text();
        if (firstOp > 20 && secondOp > 20)
            return new AddLong(container);
        return new AddShort(container);
    }

    createMultiply(parameters) {
        return this.createOperator(RenderedMultiply, parameters);
    }
    static getMultiplyAnimation(container) {
        return new MultiplyShort(container);
    }

    createSubtract(parameters) {
        return this.createOperator(RenderedSubtract, parameters);
    }

    createDivide(parameters) {
        return this.createOperator(RenderedDivide, parameters);
    }

    createNumber(number, parameters) {
        let x, y;
        if (parameters) {
            x = parameters.x;
            y = parameters.y;
        }
        if (x == null && y == null) {
            const pos = this._getRandomPos();
            x = pos.x;
            y = pos.y;
        }
        const object = new RenderedNumber(this._idCounter++, x, y, number);
        object.createElements(this._parentDiv);
        return object;
    }

    _getRandomPos() {
        //TODO: Make objects not spawn on top of each other?
        return {
            x: Math.floor(Math.random() * this._parentDiv.width() / 3) + this._parentDiv.width() / 3,
            y: Math.floor(Math.random() * this._parentDiv.height() * 0.2)
        };
    }
}
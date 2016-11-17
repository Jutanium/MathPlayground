import { RenderedNumber, RenderedAdd, RenderedSubtract, RenderedMultiply, RenderedDivide } from "app/js/renderedobjects";
import AddShort from "app/js/animations/addshort";
import AddLong from "app/js/animations/addlong";
import SubtractShort from "app/js/animations/subtractshort";
import SubtractLong from "app/js/animations/subtractlong";
import MultiplyShort from "app/js/animations/multiplyshort";
import MultiplyLong from "app/js/animations/multiplylong";
import DivideShort from "app/js/animations/divideshort";
import DivideLong from "app/js/animations/dividelong";
import DivideConcept from "app/js/animations/divideconcept";

export default class Controller {
    constructor(parentDiv) {
        this._parentDiv = parentDiv;
        this._idCounter = 0;
        this._objects = new Map();
    }

    printObjects() {
        let string = "";
        for (let key of this._objects.keys()) {
            string += key + ", ";
        }
        console.log(string);
    }
    removeObject(id) {
        const obj = this._objects;
        //Loop through its id-bearing children to get any attached objects and remove those from the map
        $(`#${id}`).find('[id]').each(
            function() {
                const id = $(this).attr("id");
                if (obj.has(id)) {
                    obj.get(id).removeElements();
                    obj.delete(id);
                }
            }
        );
        if (obj.has(id)) {
            obj.get(id).removeElements();
            obj.delete(id);
        }
    }
    createOperator(ObjClass, parameters) {
        let x, y, attachLeft, attachRight;

        if (parameters) {
            x = parameters.x;
            y = parameters.y;
            attachLeft = parameters.attachLeft;
            attachRight = parameters.attachRight;
        }

        if (!x && !y) {
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

        // TODO: Create better algorithm to decide between long and short animation
        if (firstOp > 20 && secondOp > 20)
            return new AddLong(container);
        return new AddShort(container);
    }

    createMultiply(parameters) {
        return this.createOperator(RenderedMultiply, parameters);
    }
    static getMultiplyAnimation(container) {
        const firstOp = container.children(".snapbox-left").find(".number-text").text();
        const secondOp = container.children(".snapbox-right").find(".number-text").text();

        if (firstOp > 10 || secondOp > 10) {
            return new MultiplyLong(container);
        }

        return new MultiplyShort(container);
    }

    createSubtract(parameters) {
        return this.createOperator(RenderedSubtract, parameters);
    }
    static getSubtractAnimation(container) {
        const firstOp = container.children(".snapbox-left").find(".number-text").text();
        const secondOp = container.children(".snapbox-right").find(".number-text").text();

        // TODO: Create better algorithm to decide between long and short animation
        if (firstOp > 20 || secondOp > 20)
            return new SubtractLong(container);
        return new SubtractShort(container);
    }

    createDivide(parameters) {
        return this.createOperator(RenderedDivide, parameters);
    }
    static getDivideAnimation(container) {
        const firstOp = container.children(".snapbox-left").find(".number-text").text();
        const secondOp = container.children(".snapbox-right").find(".number-text").text();

        if (firstOp <= 144 && secondOp <= 12 && firstOp / secondOp <= 12) return new DivideShort(container);

        return new DivideConcept(container); // TODO: Change to DivideLong for long division animation
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

        this._objects.set(object.id, object);
        this.printObjects();
        return object;
    }

    _getRandomPos() {
        //TODO: Make objects not spawn on top of each other?
        return {
            x: Math.floor(Math.random() * this._parentDiv.width() / 3),
            y: Math.floor(Math.random() * this._parentDiv.height() * 0.2)
        };
    }
}
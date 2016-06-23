
export default class Parser {
    constructor (controller) {
        this._controller = controller;
    }

    parseAndCreate(text) {
        const add = /(\d+)\+(\d+)/.exec(text);
        const multiply = /(\d+)\*(\d+)/.exec(text);
        const number = /(\d+)/.exec(text);
        if (add != null) {
            this._controller.createAdd({
                attachLeft: this._controller.createNumber(add[1]),
                attachRight: this._controller.createNumber(add[2])
            });
        }
        else if (multiply != null) {
            this._controller.createMultiply({
                attachLeft: this._controller.createNumber(multiply[1]),
                attachRight: this._controller.createNumber(multiply[2])
            });
        }
        else if (number != null) {
            this._controller.createNumber(number[0]);
        }
    }
}
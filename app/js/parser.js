
export default class Parser {
    constructor (controller) {
        this._controller = controller;
    }

    parseAndCreate(text) {
        const add = /(\d+)\+(\d+)/.exec(text);
        const subtract = /(\d+)\-(\d+)/.exec(text);
        const multiply = /(\d+)\*(\d+)/.exec(text);
        const divide = /(\(\d+)\)\/(\(\d+)\)/.exec(text);
        const number = /(\d+)/.exec(text);

        if (add) {
            this._controller.createAdd({
                attachLeft: this._controller.createNumber(add[1]),
                attachRight: this._controller.createNumber(add[2])
            });
        } else if (subtract) {
            this._controller.createSubtract({
                attachLeft: this._controller.createNumber(subtract[1]),
                attachRight: this._controller.createNumber(subtract[2])
            });
        } else if (multiply) {
            this._controller.createMultiply({
                attachLeft: this._controller.createNumber(multiply[1]),
                attachRight: this._controller.createNumber(multiply[2])
            });
        } else if (divide) {
            this._controller.createDivide({
                attachLeft: this._controller.createNumber(divide[1]),
                attachRight: this._controller.createNumber(divide[2])
            })
        } else if (number) {
            this._controller.createNumber(number[0]);
        }
    }
}
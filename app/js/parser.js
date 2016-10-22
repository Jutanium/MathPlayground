
export default class Parser {
    constructor (controller) {
        this._controller = controller;
    }

    parseAndCreate(text) {
        console.log(text);
        const add = /(\d+)*\+(\d+)*/.exec(text);
        const subtract = /(\d+)*\-(\d+)*/.exec(text);
        const multiply = /(\d+)*\*(\d+)*/.exec(text);
        const divide = /(?:\((\d+)\))*\/(?:\((\d+)\))*/.exec(text);
        const number = /(\d+)/.exec(text);

        if (add) {
            let params = {};
            if (add[1])
                params.attachLeft = this._controller.createNumber(add[1]);
            if (add[2])
                params.attachRight = this._controller.createNumber(add[2]);
            this._controller.createAdd(params);
        } else if (subtract) {
            let params = {};
            if (subtract[1])
                params.attachLeft = this._controller.createNumber(subtract[1]);
            if (subtract[2])
                params.attachRight = this._controller.createNumber(subtract[2]);
            this._controller.createSubtract(params);
        } else if (multiply) {
            let params = {};
            if (multiply[1])
                params.attachLeft = this._controller.createNumber(multiply[1]);
            if (multiply[2])
                params.attachRight = this._controller.createNumber(multiply[2]);
            this._controller.createMultiply(params);
        } else if (divide) {
            let params = {};
            if (divide[1])
                params.attachLeft = this._controller.createNumber(divide[1]);
            if (divide[2])
                params.attachRight = this._controller.createNumber(divide[2]);
            this._controller.createDivide(params);
        } else if (number) {
            this._controller.createNumber(number[0]);
        }
    }
}
//main.js
"use strict";
import Controller from "app/js/controller";
import Parser from "app/js/parser";
import { TweenMax, TimelineMax } from "gsap";
import { Snap } from "snap.svg";
const MQ = MathQuill.getInterface(2);
let magicBox;
const playgroundDiv = $('#playground');
const controller = new Controller(playgroundDiv);
const parser = new Parser(controller);
$(document).ready(function() {
    magicBox = MQ.MathField(document.getElementById('magic-box'), {
        handlers: {
            edit: onBoxEdit,
            enter: onBoxEnter
        }
    });

    controller.createDivide({attachLeft: controller.createNumber(42), attachRight: controller.createNumber(6)});
    controller.createDivide({attachLeft: controller.createNumber(4), attachRight: controller.createNumber(613)});
    controller.createDivide({attachLeft: controller.createNumber(613), attachRight: controller.createNumber(4)});
});

function onBoxEdit() {

}

function onBoxEnter() {
    parser.parseAndCreate(magicBox.text());
}


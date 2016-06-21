//main.js
"use strict";
import { RenderedNumber, RenderedAdd, RenderedSubtract, RenderedMultiply, RenderedDivide} from "app/js/renderedobjects";

const MQ = MathQuill.getInterface(2);
let magicBox;
const playgroundDiv = $('#playground');
$(document).ready()
{
    magicBox = MQ.MathField(document.getElementById('magic-box'), {
        handlers: {
            edit: onBoxEdit,
            enter: onBoxEnter
        }
    });


    
}
function onBoxEdit() {

}

function onBoxEnter() {
    alert (magicBox.text());

    new RenderedNumber('test5', 100, 100, 5).createElements(playgroundDiv);
    new RenderedNumber('test4', 200, 200, 4).createElements(playgroundDiv);
    new RenderedAdd('testAdd', 250, 250).createElements(playgroundDiv);
    new RenderedSubtract('testSubtract', 500, 250).createElements(playgroundDiv);
    new RenderedMultiply('testMultiply', 600, 100).createElements(playgroundDiv);
    new RenderedNumber('test32', 400, 250, 32).createElements(playgroundDiv);
    new RenderedNumber('test9', 400, 100, 9).createElements(playgroundDiv);
    new RenderedNumber('test2', 400, 250, 2).createElements(playgroundDiv);
    new RenderedNumber('test8', 400, 100, 8).createElements(playgroundDiv);
}


//main.js
"use strict";
let MQ = MathQuill.getInterface(2);
let magicBox;
let playgroundDiv = $('#playground');
import { RenderedNumber, RenderedOperation} from "app/js/renderedobjects";
$(document).ready()
{
    magicBox = MQ.MathField(document.getElementById('magic-box'), {
        handlers: {
            edit: onBoxEdit,
            enter: onBoxEnter
        }
    });
    $('#testdragger').draggable();
    $('#testdragger').draggable("option", {snap: "#testsnapbox", snapMode: "inner", snapTolerance: 10});
}
function onBoxEdit() {

}

function onBoxEnter() {

    new RenderedNumber('testy', 0, 0, 5).render(playgroundDiv);
    new RenderedNumber('testy2', 200, 200, 2).render(playgroundDiv);
    new RenderedOperation('testy3', 250, 250, 'divide').render(playgroundDiv);
    new RenderedOperation('testy4', 250, 250, 'multiply').render(playgroundDiv);
    new RenderedOperation('testy5', 250, 250, 'add').render(playgroundDiv);
    new RenderedOperation('testy6', 250, 250, 'subtract').render(playgroundDiv);
}


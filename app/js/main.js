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
    $('#testoperation').draggable();
    $('#testsnapboxcontainer').draggable();
    $('#testdragger').draggable();
    let lastOffset;
    $('#testdragger').draggable("option", {snap: "#testsnapbox", snapMode: "inner", containment: "#playground", snapTolerance: 10, stop:
        function( event, ui ) {
            //Thanks to this answer: http://stackoverflow.com/a/5181159
            let dragger = $(this);
            /* Get the possible snap targets: */
            let snapElements = dragger.data('ui-draggable').snapElements;

            /* Pull out only the snap targets that are "snapping": */
            let snappedTo = $.map(snapElements, function(element) {
                return element.snapping ? element.item : null;
            });

            if (snappedTo[0] != null) {
                let snapped = $(snappedTo[0]);
                lastOffset = snapped;
                dragger.detach().appendTo(snapped);
                dragger.position({"my": "top left", "at": "top left", "of": snapped});
            }
            else {
                let top = dragger.offset().top;
                let left = dragger.offset().left;
                dragger.detach().appendTo(playgroundDiv);
                if (lastOffset != null) {
                    dragger.offset({top: top, left: left});
                    lastOffset = null;
                }

            }
        }});
}
function onBoxEdit() {

}

function onBoxEnter() {
    new RenderedNumber('testy', 100, 100, 5).createElements(playgroundDiv);
    new RenderedNumber('testy2', 200, 200, 2).createElements(playgroundDiv);
    new RenderedOperation('testy3', 250, 250, 'divide').createElements(playgroundDiv);
    new RenderedOperation('testy4', 300, 250, 'multiply').createElements(playgroundDiv);
    new RenderedNumber('testy5', 400, 250, 7).createElements(playgroundDiv);
}


//main.js
"use strict";
import Controller from "app/js/controller";
import Parser from "app/js/parser";
import { TweenMax, TimelineMax } from "gsap";
import { Snap } from "snap.svg";
import { RenderedNumber } from "app/js/renderedobjects"
const MQ = MathQuill.getInterface(2);
let magicBox;
const playgroundDiv = $('#playground');
const controller = new Controller(playgroundDiv);
const parser = new Parser(controller);
$(document).ready(function() {
    magicBox = MQ.MathField(document.getElementById('mathquill-box'), {
        handlers: {
            edit: onBoxEdit,
            enter: onBoxEnter
        }
    });

    controller.createDivide({attachLeft: controller.createNumber(613), attachRight: controller.createNumber(42)});
    controller.createDivide({attachLeft: controller.createNumber(42), attachRight: controller.createNumber(613)});

    $("#trash")
        .droppable({
            activate: function (event, ui) {
                TweenMax.to($(this), 0.5, {opacity: 0.2})
            },
            deactivate: function (event, ui) { TweenMax.to($(this), 0.2, {opacity: 0}) },
            over: function (event, ui) { TweenMax.to($(this), 0.2, {opacity: 1}) },
            out: function (event, ui) { TweenMax.to($(this), 0.2, {opacity: 0.2}) },
            drop: function (event, ui) {
                console.log("dropped on trash");
                if (ui.helper.hasClass("helper"))
                {
                    ui.helper.remove();
                    console.log("helper")
                }
                controller.removeObject(ui.draggable.attr("id"));
            },
            greedy: true
        })

    $("#playground")
        .droppable({
            drop: (event, ui) => {
                const parse = ui.draggable.attr("parse");
                if (parse) {
                    const isOperator = "+-*/".includes(parse);
                    parser.parseAndCreate(parse).containerDiv.css({
                        left: ui.helper.position().left - (isOperator ? 55 : 0), //Because (0,0) of a renderedoperator isn't the + or - or / or * sign
                        top: ui.helper.position().top - (isOperator ? 72 : 0),
                        position: "absolute"
                    });
                }
                /*if (number && ui.helper.hasClass("helper")) //If it has the number attribute then it's a new number drag helper
                     controller.createNumber(number, 0, 0).containerDiv.css({
                         left: ui.helper.position().left,
                         top: ui.helper.position().top,
                         position: "absolute"
                     });*/
            }
        });


    let left = 5;
    $(".dropdown-content .number-box").draggable({
        //We make the appropriate draggable helper look exactly like the number that will be created in the droppable event above.
        //I did try it the simpler way with the helper being the created object but, long story, it didn't work. Neither did setting helper to "clone" because the clone was appended to the disappearing dropdown div
        helper: function() {
            const number = $(this).attr("parse");
            return new RenderedNumber("temphelper", 0, 0, number).createElements(playgroundDiv).addClass("helper");
        },
        stop: function( e, ui ) {

        }
    })
        .each(function() {
            //Since jQuery UI draggable objects are automatically set to position: absolute, we have to
            // manually position our divs in the dropdown menu
            $(this).css("left", left);
            left += 30;
    })

    $(".operation-draggable").draggable({
        helper: "clone"
    })
});

function onBoxEdit() {

}

function onBoxEnter() {
    parser.parseAndCreate(magicBox.text());
}

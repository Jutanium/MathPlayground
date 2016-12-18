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

    controller.createDivide({x: 200, y: 160, attachLeft: controller.createNumber(42), attachRight: controller.createNumber(6)});
    controller.createMultiply({x: 400, y: 44, attachLeft: controller.createNumber(274), attachRight: controller.createNumber(13)});
    controller.createSubtract({x: 600, y: -30, attachLeft: controller.createNumber(123), attachRight: controller.createNumber(45)});
    controller.createAdd({x: 800, y: -68, attachLeft: controller.createNumber(49), attachRight: controller.createNumber(173)});
    controller.createSubtract({x: 1000, y: -64});
    controller.createDivide({x: 500, y: 100, attachLeft: controller.createNumber(425), attachRight: controller.createNumber(25)});
    controller.createNumber(Math.floor(Math.random() * 9) + 1 , {x: 950, y: -60});
    controller.createNumber(Math.floor(Math.random() * 9) + 1 , {x: 1100, y: -50});

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
                    const renderednum = parser.parseAndCreate(parse);
                    const obj = renderednum.containerDiv.css({
                        left: ui.helper.position().left - (isOperator ? 55 : 0), //Because (0,0) of a renderedoperator isn't the + or - or / or * sign
                        top: ui.helper.position().top - (isOperator ? 72 : 0),
                        position: "absolute"
                    });

                    if (!isOperator)
                    {
                        const snapped = renderednum.getSnapped(ui.draggable);
                        if (snapped) {
                            obj.detach().appendTo(snapped);
                            obj.css({position: "relative", "left": 0, "top": 0});
                            $(snapped).trigger("snapped", obj).trigger("dragStop", obj);
                            renderednum._lastSnapped = snapped;
                        }
                    }
                }
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

        },
        snap: ".snapbox",
        snapMode: "inner",
        snapTolerance: 9,
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

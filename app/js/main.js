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

    controller.createDivide({attachLeft: controller.createNumber(42), attachRight: controller.createNumber(6)});
    controller.createMultiply({attachLeft: controller.createNumber(274), attachRight: controller.createNumber(13)});
    controller.createSubtract({attachLeft: controller.createNumber(123), attachRight: controller.createNumber(45)});
    controller.createAdd({attachLeft: controller.createNumber(49), attachRight: controller.createNumber(173)});

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
                console.log("dropped on playground");
                const number = ui.draggable.attr("number");
                if (number && ui.helper.hasClass("helper")) //If it has the number attribute then it's a new number drag helper
                     controller.createNumber(number, 0, 0).containerDiv.css({
                         left: ui.helper.position().left,
                         top: ui.helper.position().top,
                         position: "absolute"
                     });
            }
        });


    let left = 5;
    $(".dropdown-content .number-box").draggable({
        //We make the appropriate draggable helper look exactly like the number that will be created in the droppable event above.
        //I did try it the simpler way with the helper being the created object but, long story, it didn't work
        helper: function() {
            const number = $(this).attr("number");
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

});

function onBoxEdit() {

}

function onBoxEnter() {
    parser.parseAndCreate(magicBox.text());
}

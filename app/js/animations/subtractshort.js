/**
 * Created by Matthew Sklar on 7/7/2016.
 */

import { TweenMax, TimelineMax } from "gsap";
import { Snap } from "snap.svg";
import { RenderedObject, RenderedNumber, RenderedEquals } from "app/js/renderedobjects";
import Utils from "app/js/animatorutils";

export default class ShortSubtractAnimator {
    constructor (containerElement) {
        const elem = containerElement;
        this._container = elem;
        this._leftBox = elem.children(".snapbox-left");
        this._rightBox = elem.children(".snapbox-right");
        this._timeline = new TimelineMax();
        this._svgId = this._container.attr("id") + "-animation";
    }

    drawGo() {
        if (this._drawn) {
            this.go();
            return;
        }
        this._drawn = true;

        const firstOp = parseInt(this._leftBox.find(".number-text").text());
        const secondOp = parseInt(this._rightBox.find(".number-text").text());
        const allZero = firstOp === 0 && secondOp === 0;
        const svgWidth = 300;
        const svgHeight = 150;
        const svgId = this._svgId;

        const numWidth = Utils.numWidth;

        const canvas = Snap(svgWidth, svgHeight);
        canvas.node.id = svgId;
        $(canvas.node).css({"margin-left": "-" + (svgWidth / 2 - this._container.width() / 2) + "px", "margin-top": "0.5em"});
        this._container.append(canvas.node);

        const leftLine = svgWidth / 2 - 25;
        const rightLine = svgWidth / 2 + 25;

        let squaresPerRow = 3;
        while (Math.max(firstOp, secondOp) > squaresPerRow * squaresPerRow) squaresPerRow += 1;

        const leftSquares = new Array(firstOp);
        const rightSquares = new Array(secondOp);
        const squareWidth = leftLine / squaresPerRow * .75;
        const squareMargins = leftLine / squaresPerRow * .25;

        //Position the squares
        for (let i = 0; i < firstOp; i++) {
            const squareX = i % squaresPerRow * (squareWidth + squareMargins) + squareMargins / 2;
            const squareY = Math.floor(i / squaresPerRow) * (squareWidth + squareMargins) + squareMargins / 2;
            const square = Utils.drawSquare(canvas, squareX, squareY, squareWidth);
            leftSquares[i] = "#" + (square.node.id = svgId + "-left-" + i);
        }
        for (let i = 0; i < secondOp; i++) {
            const squareX = i % squaresPerRow * (squareWidth + squareMargins) + squareMargins / 2 + rightLine;
            const squareY = Math.floor(i / squaresPerRow) * (squareWidth + squareMargins) + squareMargins / 2;
            const square = Utils.drawSquare(canvas, squareX, squareY, squareWidth, Utils.drawMinus);
            rightSquares[i] = "#" + (square.node.id = svgId + "-right-" + i);
        }

        const operand = this._container.find(".operation-text");

        let equalsX = this._rightBox.position().left + this._rightBox.outerWidth(true) + operand.width() / 2;
        let equalsY = 0;
        if (!allZero) {
            equalsX = svgWidth / 2 + operand.width();
            equalsY = svgHeight / 2 + operand.width() / 2;
        }

        const equals = new RenderedEquals(svgId + "-equals", equalsX, equalsY);
        this._equals = equals;
        const equalsDiv = equals.createElements(this._container);
        equalsDiv.css("opacity", 0);

        //Move the boxes
        if (!allZero) {
            this._timeline.to(this._leftBox, 1, {"margin-left": -leftLine / 2 - (numWidth * 3) / 2, ease: Power1.easeInOut}, "-=1");
            this._timeline.to(this._rightBox, 1, {"margin-left": (svgWidth - rightLine) / 2 + (numWidth * 3 - this._rightBox.width()) * .5, ease: Power1.easeInOut}, "-=1");
        }

        //Drop the squares
        const dropOverlap = Math.max(firstOp, secondOp) <= 9 ? "-=0.35" : "-=0.45";
        for (let i = 0; i < leftSquares.length; i++) {
            this._timeline.from(leftSquares[i], 0.5, {
                y: "-=200",
                ease: Power1.easeOut
            }, dropOverlap);
        }

        if (rightSquares.length > 0) {
            this._timeline.from(rightSquares[0], 0.5, {
                y: "-=200",
                delay: 0.1,
                ease: Power1.easeOut
            });
        }

        for (let i = 1; i < rightSquares.length; i++) {
            this._timeline.from(rightSquares[i], 0.5, {
                y: "-=200",
                ease: Power1.easeOut,
            }, dropOverlap);
        }

        if (allZero) {
            this._timeline.call( () => equals.value = 0);
        }

        // TODO: See if better way to wait
        this._timeline.to(leftSquares[0], 1.0, {});

        //Merge the squares
        const leftTotalSquareWidth = squaresPerRow * (squareWidth + squareMargins);
        const moveSquares = svgWidth / 2 - leftTotalSquareWidth / 2;

        for (let i = 0; i < leftSquares.length; i++) {
            this._timeline.to(leftSquares[i], 0.5, {
                x: moveSquares,
                ease: Power1.easeOut
            }, "-=0.5");
        }

        for (let i = 0; i < rightSquares.length; i++) {
            this._timeline.to(rightSquares[i], 0.5, {
                x: -moveSquares,
                ease: Power1.easeOut
            }, "-=0.5");
        }

        const max = Math.max(leftSquares.length, rightSquares.length);
        const min = Math.min(leftSquares.length, rightSquares.length);

        // TODO: See if better way to wait
        this._timeline.to(leftSquares[0], 1.0, {});

        //Fade combined squares
        const fadeSpeed = .7;
        for (let i = 0; i < min; i++) {
            this._timeline.call(() => Utils.toggleInsides(leftSquares[i]));
            this._timeline.to(leftSquares[i], fadeSpeed, {
                autoAlpha: .05
            }, "-=" + fadeSpeed);

            this._timeline.call(() => Utils.toggleInsides(rightSquares[i]));
            this._timeline.to(rightSquares[i], fadeSpeed, {
                autoAlpha: .05
            }, "-=" + fadeSpeed);
        }

        this._timeline.to(equalsDiv, 1, {opacity: 1, ease: Power1.easeIn});

        //Count unfaded squares
        this._timeline.addLabel("beforeCount");
        const countDuration = 3.6 / Math.max(9, Math.max(firstOp, secondOp));

        // FIXME: 0 is under = instead of to the left of it on Windows Chrome
        equals.value = 0;

        for (let i = min; i < max; i++) {
            const remainingSquares = (leftSquares.length > min) ? leftSquares : rightSquares;
            const rect = $(remainingSquares[i]).is("rect") ? $(remainingSquares[i]) : $(remainingSquares[i]).find("rect");
            this._timeline.set(rect, {"stroke-width": 2});
            this._timeline.to(rect, countDuration, {"stroke": "orange", onStart: () => {
                equals.tickBy((leftSquares.length > min) ? 1 : -1);
            }});
        }
    }

    go() {
        this._equals.value = "";
        this._timeline.timeScale(1);
        this._timeline.play(0);
    }

    goAway() {
        if (this._drawn) {
            if (this._timeline.time() > this._timeline.getLabelTime("beforeCount"))
                this._timeline.seek("beforeCount");
            this._timeline.reverse();
            this._timeline.timeScale(16);
        }
    }

    removeElements() {
        $("#" + this._svgId).remove();
        $("#" + this._svgId + "-equals").remove();
    }
}
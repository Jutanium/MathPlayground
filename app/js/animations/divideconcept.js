/**
 * Created by Matthew on 11/15/2016.
 */
import { Power3, TweenMax, TimelineMax } from "gsap";
import { Snap } from "snap.svg";
import { RenderedEquals, RenderedObject, RenderedNumber } from "app/js/renderedobjects";
import Utils from "app/js/animatorutils";

export default class ConceptDivideAnimation {
    constructor(containerElement) {
        const elem = containerElement;

        this._leftBox = elem.children(".snapbox-left");
        this._rightBox = elem.children(".snapbox-right");
        this._container = elem;
        this._timeline = new TimelineMax();
        this._animationId = this._container.attr("id") + "-animation";
        this._svgId = this._container.attr("id") + "-animation";
        this._toRemove = [];
    }

    drawGo() {
        if (this._drawn) {
            this.go();

            return;
        }

        this._drawn = true;

        // Utilities
        const numWidth = Utils.numWidth;
        const intLength = Utils.intLength;

        // Operators
        const firstOp = parseInt(this._leftBox.find(".number-text").text());
        const secondOp = parseInt(this._rightBox.find(".number-text").text());

        // Parameters
        const letterSpacing = 18;
        const numSpacing = numWidth + letterSpacing;

        const canvasWidth = numSpacing * intLength(firstOp) - letterSpacing;
        const squaresPerRow = 10;
        const leftLine = canvasWidth;
        const squareWidth = leftLine / squaresPerRow * .75;
        const squareMargins = leftLine / squaresPerRow * .25;
        const vectorHeight = (squareWidth + squareMargins) * secondOp;
        // TODO: Fix canvas height
        const canvasHeight = canvasWidth / squaresPerRow * Math.ceil(firstOp / squaresPerRow) + vectorHeight;

        const divisorArray = firstOp.toString().split("").map(i => parseInt(i));

        const globalEase = Power3.easeOut;

        const squareArray = [];

        // Canvas
        const canvas = Snap(canvasWidth + 1, canvasHeight);

        canvas.node.id = this._svgId;
        $(canvas.node).css({
            position: "absolute",
            top: numSpacing * 2 + letterSpacing,
            left: (this._container.width() - numSpacing * intLength(firstOp * 10)) / 2 + letterSpacing,
        });

        this._container.append(canvas.node);

        // Dividend
        const dividend = new RenderedNumber(
            `${this._svgId}-dividend`,
            0,
            letterSpacing / 2 + 3,
            firstOp,
            false
        );
        const dividendDiv = dividend
            .createElements(this._container)
            .css({
                position: "absolute",
            });

        this._toRemove.push(dividendDiv);

        // Squares
        const createSquare = (x, y, width) => {
            return Utils.drawSquare(canvas, x, y, width);
        };

        divisorArray.forEach((value, index) => {
            const currentSquares = [];

            for (let i = 0; i < value; i++) {
                const square = createSquare(index * (numWidth + letterSpacing), i * (numWidth + letterSpacing) + 1, numWidth);

                currentSquares[i] = "#" + (square.node.id = this._svgId + index + "-" + i);
            }

            squareArray[index] = currentSquares;
        });

        /* Timeline */
        // TODO: Improve dividendDiv centering left algorithm
        this._timeline
            .to(dividendDiv, .5, {
                paddingTop: `${letterSpacing}px`,
                paddingLeft: `${letterSpacing}px`,
                letterSpacing: `${letterSpacing}px`,
                left: (this._container.width() - numSpacing * intLength(firstOp * 10)) / 2,
                top: numSpacing,
            });  /* Position the dividend */


        const staggerLength = 2;

        const squareTime = 1;
        const stagger = staggerLength / firstOp.toString().split("").reduce((callB, init) => { return parseInt(callB) + parseInt(init) });

        squareArray.forEach(value => {
            value.forEach(val => {
                this._timeline.from(val, squareTime, {
                    y: -canvasHeight,
                    opacity: 0,
                    ease: Power3.easeOut,
                }, `-=${squareTime - stagger}`);
            })
        });
    }

    go() {
        this._timeline.timeScale(1);
        this._timeline.play(0);
    }

    goAway() {
        if (this._drawn) {
            //if (this._timeline.time() > this._timeline.getLabelTime("beforeCount"))
            //    this._timeline.seek("beforeCount");
            this._timeline.reverse();
            this._timeline.timeScale(8);
        }
    }

    removeElements() {
        $(`#${this._svgId}`).remove();
        $(`#${this._svgId}-equals`).remove();
    }
}
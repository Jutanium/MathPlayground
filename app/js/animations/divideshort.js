/**
 * Created by Matthew on 9/15/2016.
 */
import { Power3, TweenMax, TimelineMax } from "gsap";
import { Snap } from "snap.svg";
import { RenderedEquals, RenderedObject, RenderedNumber } from "app/js/renderedobjects";
import Utils from "app/js/animatorutils";

export default class ShortDivideAnimator {
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

        // Operators
        const firstOp = parseInt(this._leftBox.find(".number-text").text());
        const secondOp = parseInt(this._rightBox.find(".number-text").text());

        // Parameters
        const squaresPerRow = 10;

        const svgWidth = 300;
        const svgHeight = svgWidth / squaresPerRow * Math.ceil(firstOp / squaresPerRow);

        const leftLine = svgWidth;
        const squareWidth = leftLine / squaresPerRow * .75;
        const squareMargins = leftLine / squaresPerRow * .25;

        // Canvas
        const canvas = Snap(svgWidth, svgHeight);

        canvas.node.id = this._svgId;
        $(canvas.node).css({
            position: "absolute",
            top: "50px",
            left: `-${svgWidth / 2 - numWidth * 2.5 - 25 / 2}px`,
        });

        this._container.append(canvas.node);

        // Squares
        let squareArray = [];

        const allZero = firstOp === 0 && secondOp === 0;

        const createSquare = (x, y, width) => {
            return Utils.drawSquare(canvas, x, y, width);
        }

        // Position squares
        for (let i = 0; i < firstOp; i++) {
            const square = createSquare(
                i % squaresPerRow * (squareWidth + squareMargins) + squareMargins / 2,
                Math.floor(i / squaresPerRow) * (squareWidth + squareMargins) + squareMargins / 2,
                squareWidth
            );

            squareArray[i] = "#" + (square.node.id = this._svgId + i);
        }

        /* Timeline */
        const squareTime = 1;
        const stagger = .1;

        squareArray.forEach((square) => {
            // Animate square entrance
            this._timeline.from(square, squareTime, {
                x: "-100",
                opacity: 0,
                ease: Power3.easeOut,
            }, `-=${squareTime - stagger}`);

            // TODO: Subtract 1 from firstOp
        });

        // Amount of full vectors
        const vectorNum = Math.floor(firstOp / secondOp);

        // Fill vectors with squares
        for (let i = 0; i < vectorNum; i++) {
            // TODO: Move last x squares to vector
        }
    }

    go() {
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
        $(`#${this._svgId}`).remove();
        $(`#${this._svgId}-equals`).remove();
    }
}
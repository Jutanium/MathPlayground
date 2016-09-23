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

        const canvasWidth = 300;

        const leftLine = canvasWidth;
        const squareWidth = leftLine / squaresPerRow * .75;
        const squareMargins = leftLine / squaresPerRow * .25;
        const vectorHeight = (squareWidth + squareMargins) * secondOp;

        const canvasHeight = canvasWidth / squaresPerRow * Math.ceil(firstOp / squaresPerRow) + vectorHeight; // TODO: Improve

        // Canvas
        const canvas = Snap(canvasWidth, canvasHeight);

        canvas.node.id = this._svgId;
        $(canvas.node).css({
            position: "absolute",
            top: "50px",
            left: `-${canvasWidth / 2 - numWidth * 2.5 - 25 / 2}px`,
        });

        this._container.append(canvas.node);

        // Squares
        let squareArray = [];

        const allZero = firstOp === 0 && secondOp === 0;

        const createSquare = (x, y, width) => {
            return Utils.drawSquare(canvas, x, y, width);
        }


        // Create and position equals sign
        const equals = new RenderedEquals(
            `${this._svgId}-equals`,
            this._container.width() + squareWidth + squareMargins,
            this._container.height() + canvasHeight - vectorHeight / 2 - squareMargins
        );
        const equalsDiv = equals
            .createElements(this._container)
            .css("opacity", 0);

        // Create and position squares
        for (let i = 0; i < firstOp; i++) {
            const x = i % squaresPerRow * (squareWidth + squareMargins) + squareMargins / 2;
            const y = Math.floor(i / squaresPerRow) * (squareWidth + squareMargins) + squareMargins / 2;

            const square = createSquare(
                x,
                y,
                squareWidth
            );

            squareArray[i] = ["#" + (square.node.id = this._svgId + i), x, y];
        }

        /* Timeline */
        const squareTime = 1;
        const stagger = 0; // .1

        squareArray.forEach((square) => {
            // Animate square entrance
            this._timeline.from(square[0], squareTime, {
                x: "-100px",
                opacity: 0,
                ease: Power3.easeOut,
            }, `-=${squareTime - stagger}`);

            // TODO: Subtract 1 from firstOp
        });

        // Amount of full vectors
        const vectorNum = Math.floor(firstOp / secondOp);

        // Fill vectors with squares
        for (let i = 0; i < vectorNum; i++) {
            for (let j = 0; j < secondOp; j++) {
                const square = squareArray[squareArray.length - i * secondOp - j - 1];

                const currX = square[1];
                const currY = square[2];

                const targetX = i * (canvasWidth / (secondOp + 1));
                const targetY = canvasHeight - (squareWidth) * (j + 1) - squareMargins;

                this._timeline.to(square[0], .5, {
                    x: targetX - currX,
                    y: targetY - currY,
                    ease: Power3.easeOut,
                }, "-=.5"); // If you have "-=.5" then it looks really cool
            }

            // Wait
            this._timeline.to("", .5, { });
        }

        // Show equals
        this._timeline.to(equalsDiv, .5, { opacity: 0 });
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
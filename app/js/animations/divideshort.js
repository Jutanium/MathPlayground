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
        const letterSpacing = 18;

        const squaresPerRow = 10;

        const canvasWidth = 300;

        const leftLine = canvasWidth;
        const squareWidth = leftLine / squaresPerRow * .75;
        const squareMargins = leftLine / squaresPerRow * .25;
        const vectorHeight = (squareWidth + squareMargins) * secondOp;

        const canvasHeight = canvasWidth / squaresPerRow * Math.ceil(firstOp / squaresPerRow) + vectorHeight;

        // Canvas
        const canvas = Snap(canvasWidth, canvasHeight);

        canvas.node.id = this._svgId;
        $(canvas.node).css({
            position: "absolute",
            top: "50px",
            left: `-${canvasWidth / 2 - numWidth * 2.5 - 25 / 2}px`,
        });

        this._container.append(canvas.node);

        // Squares (array, start X, start Y, current X, current Y)
        let squareArray = [];

        const allZero = firstOp === 0 && secondOp === 0;

        const createSquare = (x, y, width) => {
            return Utils.drawSquare(canvas, x, y, width);
        };

        // Create and position equals sign
        const vectorMid = vectorHeight / 2 - squareMargins;
        const equalsX = this._container.width() + squareWidth + squareMargins;
        const equalsY = this._container.height() + canvasHeight - vectorMid;

        const equals = new RenderedEquals(
            `${this._svgId}-equals`,
            equalsX,
            equalsY
        );
        const equalsDiv = equals
            .createElements(this._container)
            .css({ opacity: 0 });

        // Create and position whole number answer
        const wholeX = equalsX + numWidth + letterSpacing;
        const wholeColor = "#FFD700";
        const wholeAnswer = new RenderedNumber(
            `${this._svgId}-whole`,
            wholeX,
            equalsY,
            0,
            false
        );
        const wholeDiv = wholeAnswer
            .createElements(this._container)
            .css({
                position: "absolute",
                opacity: 0,
                color: wholeColor,
            });
        const upDivs = [equalsDiv, wholeDiv];

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
        this._timeline.to(this._leftBox, .5, { color: "blue" });

        const staggerLength = 3;

        const squareTime = 1;
        const stagger = staggerLength / firstOp;

        squareArray.forEach((square) => {
            // Animate square entrance
            this._timeline.from(square[0], squareTime, {
                x: "-100px",
                opacity: 0,
                ease: Power3.easeOut,
            }, `-=${squareTime - stagger}`);
        });

        this._timeline
            .to(this._leftBox, .5, { color: "black" })
            .to(this._rightBox, .5, { color: "blue" }, "-=.5");

        // Amount of full vectors
        const fullVectorNum = Math.floor(firstOp / secondOp);

        // Remainder vector n
        const remainder = firstOp - fullVectorNum * secondOp;

        // If their is a remainder
        const isRemainder = remainder != 0;

        // Amount of vectors
        const vectorNum = fullVectorNum + (isRemainder ? 1 : 0);

        // Reset whole number answer
        this._timeline.add(() => wholeAnswer.setNumber = 0);

        // Show equals and whole number answer
        this._timeline.to([equalsDiv, wholeDiv], .5, {opacity: 1});

        // Fill vectors with squares
        for (let i = 0; i < vectorNum; i++) {
            const remainderTime = isRemainder && i === vectorNum - 1;

            const entries = remainderTime ? remainder : secondOp;

            for (let j = 0; j < entries; j++) {
                const index = firstOp - i * secondOp - j - 1;

                const square = squareArray[index];

                const targetX = i * (canvasWidth / (firstOp / secondOp + (isRemainder ? 1 : 0)));
                const targetY = canvasHeight - (squareWidth) * (j + 1) - squareMargins;

                // Move the squares
                this._timeline.to(square[0], .5, {
                    x: targetX - square[1],
                    y: targetY - square[2],
                    ease: Power3.easeOut,
                }, "-=.5");
            }

            // Add 1 to the whole numbers if the iteration is not the remainder vector
            if (!remainderTime) this._timeline.add(() => wholeAnswer.tickBy());

            // Wait after each vector is filled
            this._timeline.to("", .6, { });
        }

        this._timeline.to(this._rightBox, .5, { color: "black" });

        // If their is a remainder animate it
        if (isRemainder) {
            const remainderColor = "#2cc31c";

            // Create and position R letter
            const rX = wholeX + numWidth * fullVectorNum.toString().length;
            const rLetter = new RenderedNumber(
                `${this._svgId}-whole`,
                rX,
                equalsY,
                "R",
                false
            );
            const rLetterDiv = rLetter
                .createElements(this._container)
                .css({
                    position: "absolute",
                    opacity: 0,
                });

            upDivs.push(rLetterDiv);

            // Create and position remainder number answer
            const remainderX = rX + numWidth + letterSpacing / 2;
            const remainderAnswer = new RenderedNumber(
                `${this._svgId}-whole`,
                remainderX,
                equalsY,
                0,
                false
            );
            const remainderDiv = remainderAnswer
                .createElements(this._container)
                .css({
                    position: "absolute",
                    opacity: 0,
                    color: remainderColor,
                });

            upDivs.push(remainderDiv);

            // Reset remainder answer
            this._timeline.add(() => remainderAnswer.setNumber = 0);

            // Show R and remainder
            this._timeline.to([rLetterDiv, remainderDiv], .5, {opacity: 1});

            for (let i = 0; i < remainder; i++) {
                const square = squareArray[remainder - i - 1];

                this._timeline.to($(square[0]).find("rect"), .5, {
                    fill: remainderColor,
                });

                this._timeline.add(() => remainderAnswer.tickBy(), "-=.5");
            }
        }

        // Wait between counting quotient and filling shifting up
        this._timeline.to("", .5, { });

        // Move elements up to minimize white space
        squareArray.forEach((val, index) => {
            let targetY;

            if (isRemainder) {
                if (index < remainder) {
                    targetY = squareWidth * (secondOp - 1) - index % secondOp * squareWidth;
                } else {
                    targetY = index % secondOp * squareWidth;
                }
            } else {
                targetY = index % secondOp * squareWidth;
            }

            this._timeline.to(val[0], .5, {
                y: targetY - val[2],
                ease: Power3.easeOut,
            }, "-=.5");
        });

        // Move answer up with squares to minimize whitespace
        this._timeline.to(upDivs, .5, {
            top: numWidth + secondOp * squareWidth / 2 + squareMargins,
            ease: Power3.easeOut,
        }, "-=.5")
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
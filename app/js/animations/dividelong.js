/**
 * Created by Matthew on 9/15/2016.
 */
import { Power3, TweenMax, TimelineMax } from "gsap";
import { Snap } from "snap.svg";
import { RenderedEquals, RenderedObject, RenderedNumber } from "app/js/renderedobjects";
import Utils from "app/js/animatorutils";

export default class LongDivideAnimator {
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
        const divideSign = this._container.find(".operation-text");

        // Parameters
        const letterSpacing = 18;
        const middleSpace = (intLength(firstOp) + intLength(secondOp) + 2) * numWidth + 2 * letterSpacing +
            divideSign.width() + intLength(firstOp) * (numWidth + letterSpacing);

        const divisorArray = firstOp.toString().split("").map(i => parseInt(i));

        // Divide
        const divideLeft =  -(numWidth + letterSpacing) * intLength(firstOp) - 2 * letterSpacing;
        const divideTop = 3 * numWidth + letterSpacing + numWidth / 2;

        const divide = new RenderedObject(`${this._svgId}-divide`, 0, 0, "", "", false);
        const divideDiv = divide
            .createElements(this._container)
            .css({
                position: "absolute",
                left: divideLeft,
                top: divideTop,
                "border-left": "1px solid black",
                "border-top": "1px solid black",
            });

        // Dividend
        const dividend = new RenderedNumber(`${this._svgId}-dividend`, 0, 0, firstOp, false);
        const dividendDiv = dividend
            .createElements(this._container)
            .css({
                "padding-top": `${letterSpacing}px`,
                "padding-left": `${letterSpacing}px`,
                "letter-spacing": `${letterSpacing}px`,
            });

        divide.contents = dividendDiv;

        // Divisor
        // TODO: Right align correctly
        const divisorLeft = ((intLength(firstOp) > intLength(secondOp)) ?
        numWidth * (intLength(firstOp) - intLength(secondOp) + 1) + letterSpacing : 0);
        const divisorTop = numWidth / 2;

        const divisor = new RenderedNumber(`${this._svgId}-divisor`, divisorLeft, divisorTop, secondOp, false);
        const divisorDiv = divisor
            .createElements(this._container)
            .css({
                position: "absolute",
                opacity: 0,
            });

        // Divisor Box
        const divisorTopPos = divideTop + letterSpacing;
        const divisorBoxLeftPos = divideLeft + middleSpace;

        const divisorBox = new RenderedNumber(
            `${this._svgId}-divisor-box`,
            divisorBoxLeftPos,
            divisorTopPos,
            firstOp,
            false
        );
        const divisorBoxDiv = divisorBox
            .createElements(this._container)
            .css({
                position: "absolute",
                opacity: 1,
                "letter-spacing": `${letterSpacing}px`,
            });

        // Canvas
        // TODO: Replace 10 with the largest digit

        const canvas = Snap(intLength(firstOp) * (numWidth + letterSpacing), numWidth * 10);
        canvas.node.id = this._svgId;
        $(canvas.node).css({
            position: "absolute",
            left: divideLeft + middleSpace,
            top: divisorTopPos + numWidth + letterSpacing,
        });
        this._container.append(canvas.node);

        const createSquare = (x, y, width) => {
            return Utils.drawSquare(canvas, x, y, width);
        };

        // Timeline
        const enterTime = .5;

        const divisorLeftPos = divideLeft - numWidth * intLength(secondOp) - letterSpacing;

        this._timeline
            .from(dividendDiv, enterTime, {
                position: "absolute",
                left: -divideLeft - 1,
                top: -divideTop + numWidth / 2 - 1,
                padding: 0,
                "letter-spacing": 0,
                opacity: 0,
                ease: Power3.easeOut
            })  /* Enter the dividend from the firstOp */
            .to(divisorDiv, enterTime, {
                left: divisorLeftPos,
                top: divisorTopPos,
                opacity: 1,
                ease: Power3.easeOut,
            }, `-=${enterTime}`)  /* Move the divisor from the secondOp */
            .from(divisorBoxDiv, enterTime, {
                position: "absolute",
                left: 0,
                top: numWidth / 2,
                padding: 0,
                "letter-spacing": 0,
                opacity: 1,
                ease: Power3.easeOut
            }, `-=${enterTime}`);  /* Move the divisor box part from the firstOp */

        divisorArray.forEach((value, index) => {
            for (let i = 0; i < value; i++) {
                createSquare(index * (numWidth + letterSpacing), i * (numWidth + letterSpacing), numWidth);
            }
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
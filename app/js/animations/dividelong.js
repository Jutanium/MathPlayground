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

        // Parameters
        const letterSpacing = 18;
        const numSpacing = numWidth + letterSpacing;

        const divisorArray = firstOp.toString().split("").map(i => parseInt(i));

        const globalEase = Power3.easeOut;

        // Divide
        const divideLeft = 0;
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
        this._toRemove.push(divideDiv);

        // Side
        const divideWidth = divideDiv.width();
        const leftPosOfCol = (col) => divideLeft + divideWidth + letterSpacing;
        const sideY = divideTop + (divideDiv.height() - letterSpacing) / 2;

        const side = new RenderedObject(this._animationId + "-side",
            leftPosOfCol(-1),
            sideY,
            "small",
            "<span id='leftOp'></span><span id='divide'>&divide;</span><span id='rightOp'></span></span>"+
            "<span id='equals'>=</span>",
            false
        );
        const sideDiv = side
            .createElements(this._container)
            .css({
                position: "absolute",
                "font-size": "2em",
                display: "inline-block",
                opacity: 0,
            });
        this._toRemove.push(sideDiv);

        const sideLeft = side
            .containerDiv.find("#leftOp")
            .css({
                color: "red",
                "padding-right": letterSpacing,
            });
        const sideRight = side
            .containerDiv.find("#rightOp")
            .css({
                color: "red",
                "padding-right": letterSpacing,
            });
        const sideDivide = side
            .containerDiv.find("#divide")
            .css({
                "font-weight": "bold",
                "padding-right": letterSpacing,
            });
        const sideEquals = side.containerDiv.find("#equals");

        const sideBot = new RenderedObject(this._animationId + "-sidebot",
            leftPosOfCol(-1),
            sideY + numWidth + letterSpacing,
            "small",
            "<span id='leftBotOp'></span><span id='times'>&times;</span><span id='rightBotOp'></span></span>"+
            "<span id='equalsBot'>=</span>",
            false
        );
        const sideBotDiv = sideBot
            .createElements(this._container)
            .css({
                position: "absolute",
                "font-size": "2em",
                display: "inline-block",
                opacity: 0,
            });
        this._toRemove.push(sideBotDiv);
        
        const sideBotLeft = sideBot
            .containerDiv.find("#leftBotOp")
            .css({
                color: "red",
                "padding-right": letterSpacing,
            });
        const sideBotRight = sideBot
            .containerDiv.find("#rightBotOp")
            .css({
                color: "red",
                "padding-right": letterSpacing,
            });
        const sideBotDivide = sideBot
            .containerDiv.find("#times")
            .css({
                "font-weight": "bold",
                "padding-right": letterSpacing,
            });
        const sideBotEquals = sideBot.containerDiv.find("#equalsBot");

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
                ease: globalEase,
            })  /* Enter the dividend from the firstOp */
            .to(divisorDiv, enterTime, {
                left: divisorLeftPos,
                top: divideTop + letterSpacing,
                opacity: 1,
                ease: globalEase,
            }, `-=${enterTime}`) /* Move the divisor from the secondOp */
            .to("", .5, { });  /* Wait */

        // Show division steps
        const dividendLeft = divideLeft + letterSpacing;

        let answerNums = [];
        let leftVal = divisorArray[0];

        divisorArray.forEach((value, index) => {
            const wholeValue = Math.floor(leftVal / secondOp);
            const subtractValue = secondOp * wholeValue;
            const sideAnswerLeft = sideDiv.position().left + sideDiv.width() + letterSpacing + intLength(wholeValue) * numSpacing;

            // Whole answer
            const answerWhole = new RenderedNumber(
                `${this._animationId}-answerwhole-${index}`,
                0,
                sideY,
                wholeValue,
                false
            );
            const answerWholeDiv = answerWhole
                .createElements(this._container)
                .css({
                    opacity: 0,
                })
                .addClass(Utils.answerClass);
            answerNums.push(answerWhole);
            this._toRemove.push(answerWholeDiv);

            // Value to subtract by
            const subtractVal = new RenderedNumber(
                `${this._animationId}-subtractval-${index}`,
                sideBotDiv.position().left + sideBotDiv.width() + letterSpacing,
                sideY + numWidth + letterSpacing,
                subtractValue,
                false
            );
            const subtractValDiv = subtractVal
                .createElements(this._container)
                .css({
                    opacity: 0,
                    "letter-spacing": letterSpacing,
                })
                .addClass(Utils.answerClass);
            answerNums.push(subtractVal);
            this._toRemove.push(subtractValDiv);

            // Value after subtraction
            const botVal = new RenderedNumber(
                `${this._animationId}-botval-${index}`,
                dividendLeft + (index + 1 - intLength(leftVal - subtractValue)) * numSpacing,
                sideY + (index + 1) * 2 * numSpacing,
                leftVal - subtractValue,
                false
            );
            const botValDiv = botVal
                .createElements(this._container)
                .css({
                    position: "absolute",
                    opacity: 0,
                    "letter-spacing": letterSpacing,
                    color: "blue",
                });
            this._toRemove.push(botValDiv);

            const minus = new RenderedObject(
                `${this._animationId}-minus-${index}`,
                divideLeft - letterSpacing,
                divideTop + letterSpacing + index * 2 * numSpacing + numSpacing,
                "small",
                "<span id='minus'>&minus;</span>",
                false
            );
            const minusDiv = minus
                .createElements(this._container)
                .css({
                    position: "absolute",
                    "font-size": "2em",
                    "font-weight": "bold",
                    opacity: 0,
                });
            this._toRemove.push(minusDiv);

            // Render sub equal sign
            const subEquals = new RenderedObject(
                `${this._animationId}-subequals-${index}`,
                divideLeft,
                divideTop + numSpacing + index * 2 * numSpacing + numSpacing + letterSpacing / 4,
                "",
                "<span id='subEquals'><hr></span>",
                false
            );
            const subEqualsDiv = subEquals.createElements(this._container);

            subEqualsDiv.css({
                position: "absolute",
                width: divideWidth,
                opacity: 0,
            });

            this._toRemove.push(subEqualsDiv);

            this._timeline
                .set(sideLeft, { text: String(leftVal) })  /* Set the top left side number */
                .set(sideRight, { text: String(secondOp) })  /* Set the top right side number */
                .set(answerWholeDiv, { left: sideDiv.position().left + sideDiv.width() })
                .to(sideDiv, 1, {
                    opacity: 1,
                    ease: globalEase,
                })  /* Show the top side equation */
                .to(answerWholeDiv, 0.5, {
                    opacity: 1,
                    ease: globalEase,
                })  /* Fade in the top side answer */
                .set(sideBotLeft, { text: String(secondOp) })  /* Set the bottom left side number */
                .set(sideBotRight, { text: String(wholeValue) })  /* Set the bottom right side number */
                .to(sideBotDiv, 1, {
                    opacity: 1,
                    ease: globalEase,
                })  /* Show the bot side equation */
                .to(subtractValDiv, 0.5, {
                    opacity: 1,
                    ease: globalEase,
                })  /* Fade in the bottom side answer */
                .to(answerWholeDiv, 1, {
                    left: dividendLeft + index * numSpacing,
                    top: divideTop - numWidth - letterSpacing,
                    ease: globalEase,
                })  /* Move the top side answer to the answer */
                .to(subtractValDiv, 1, {
                    left: dividendLeft,
                    top: divideTop + letterSpacing + index * 2 * numSpacing + numSpacing,
                    ease: globalEase,
                }, "-=1")  /* Move the bot side answer to its location to show subtraction (sync with answerWholeDiv) */
                .to(minusDiv, .5, {
                    opacity: 1,
                    ease: globalEase,
                })  /* Show the minus sign */
                .to(subEqualsDiv, .5, {
                    opacity: 1,
                    ease: globalEase,
                }, "-=1")  /* Show the sub equals (sync with minusDiv) */
                .to(botValDiv, 1, {
                    opacity: 1,
                    ease: globalEase,
                })  /* Show the bot value after subtraction */
                .to([sideDiv, sideBotDiv], 1, {
                    opacity: 0,
                    ease: globalEase,
                });  /* Hide the side equations */

            if (index < divisorArray.length - 1) {
                const nextVal = new RenderedNumber(
                    `${this._animationId}-nextval-${index}`,
                    dividendLeft + (index + 1) * numSpacing,
                    sideY,
                    divisorArray[index + 1],
                    false
                );
                const nextValDiv = nextVal
                    .createElements(this._container)
                    .css({
                        position: "absolute",
                        color: "black",
                        opacity: 0,
                    });
                this._toRemove.push(nextValDiv);

                this._timeline.to(nextValDiv, 1, {
                    top: sideY + (index + 1) * 2 * numSpacing,
                    color: "blue",
                    opacity: 1,
                    ease: globalEase,
                });
            } else if (leftVal - subtractValue != 0) {
                // Remainder "R"
                const rLetter = new RenderedNumber(
                    `${this._animationId}-R`,
                    dividendLeft + (index + 1) * numSpacing,
                    divideTop - numWidth - letterSpacing,
                    "R",
                    false
                );
                const rLetterDiv = rLetter
                    .createElements(this._container)
                    .css({
                        position: "absolute",
                        opacity: 0,
                    });

                this._toRemove.push(rLetterDiv);

                // Remainder value
                const remainder = new RenderedNumber(
                    `${this._animationId}-remainder`,
                    dividendLeft + (index + 1 - intLength(leftVal - subtractValue)) * numSpacing,
                    sideY + (index + 1) * 2 * numSpacing,
                    leftVal - subtractValue,
                    false
                );
                // TODO: Start as same color (blue) then transition to #2cc31c
                const remainderDiv = remainder
                    .createElements(this._container)
                    .css({
                        position: "absolute",
                        "letter-spacing": letterSpacing,
                        color: "blue",
                        opacity: 0,
                    });

                this._toRemove.push(remainderDiv);

                this._timeline
                    .to(rLetterDiv, 1, {
                        opacity: 1,
                        ease: globalEase,
                    })  /* Show the "R" for remainder */
                    .to(remainderDiv, 1, {
                        left: dividendLeft + (index + 2) * numSpacing,
                        top: divideTop - numWidth - letterSpacing,
                        color: "#2cc31c",
                        opacity: 1,
                        ease: globalEase,
                    }, "-=1");  /* Move and show the remainder value (sync with rLetterDiv) */
            }

            leftVal = parseInt("" + (leftVal - subtractValue) + divisorArray[index + 1])
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
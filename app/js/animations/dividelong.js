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
        const numSpacing = numWidth + letterSpacing;
        const middleSpace = (intLength(firstOp) + intLength(secondOp) + 2) * numWidth + 2 * letterSpacing +
            divideSign.width() + intLength(firstOp) * numSpacing;

        const divisorArray = firstOp.toString().split("").map(i => parseInt(i));

        // Divide
        const divideLeft =  -numSpacing * intLength(firstOp) - 2 * letterSpacing;
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
        const canvas = Snap(intLength(firstOp) * numSpacing, numWidth * 10);
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

        // Create squares
        const squareEnterTime = 1;
        const stagger = .1;

        let squareArray = [];
        let num = 0;

        this._timeline.to("", 1, {});  // Wait

        divisorArray.forEach((value, index) => {
            for (let i = 0; i < value; i++) {
                const square = createSquare(index * numSpacing, i * numSpacing, numWidth);
                squareArray[num] = "#" + (square.node.id = this._svgId + value + "-" + i);

                this._timeline.from(squareArray[num], squareEnterTime, {
                    y: "-100px",
                    opacity: 0,
                    ease: Power3.easeOut,
                }, `-=${squareEnterTime - stagger}`);

                num++;
            }
        });

        // Show division steps
        const dividendLeft = divideLeft + letterSpacing;
        let answerNums = [];
        let leftVal = divisorArray[0];

        divisorArray.forEach((value, index) => {
            const wholeValue = Math.floor(leftVal / secondOp);
            const subtractValue = secondOp * wholeValue;
            const postValue = leftVal - subtractValue;

            // Whole answer
            const answerWhole = new RenderedNumber(
                `${this._animationId}-answerwhole-${index}`,
                sideDiv.position().left + sideDiv.width() + letterSpacing,
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
                dividendLeft,
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
                .to(sideDiv, .5, { opacity: 1 })  /* Show the top side equation */
                .to(answerWholeDiv, 0.5, { opacity: 1 })  /* Fade in the top side answer */
                .set(sideBotLeft, { text: String(secondOp) })  /* Set the bottom left side number */
                .set(sideBotRight, { text: String(wholeValue) })  /* Set the bottom right side number */
                .to(sideBotDiv, .5, { opacity: 1 })  /* Show the bot side equation */
                .to(subtractValDiv, 0.5, { opacity: 1 })  /* Fade in the bottom side answer */
                .to(answerWholeDiv, .5, {
                    left: dividendLeft + index * numSpacing,
                    top: divideTop - numWidth - letterSpacing,
                })  /* Move the top side answer to the answer */
                .to(subtractValDiv, .5, {
                    left: dividendLeft,
                    top: divideTop + letterSpacing + index * 2 * numSpacing + numSpacing,
                }, "-=.5")  /* Move the bot side answer to its location to show subtraction */
                .to(minusDiv, .5, { opacity: 1 })  /* Show the minus sign */
                .to(subEqualsDiv, .5, { opacity: 1 }, "-=.5")  /* Show the sub equals */
                .to(botValDiv, .5, { opacity: 1 })  /* Show the bot value after subtraction */
                .to([sideDiv, sideBotDiv], .5, { opacity: 0 });  /* Hide the side equations */

            if (index < divisorArray.length) {
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
                        color: "green",
                        opacity: 0,
                    });
                this._toRemove.push(nextValDiv);

                this._timeline.to(nextValDiv, .5, {
                    top: sideY + (index + 1) * 2 * numSpacing,
                    opacity: 1,
                });
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
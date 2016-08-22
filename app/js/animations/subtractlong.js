import { TweenMax, TimelineMax } from "gsap";
import { Snap } from "snap.svg";
import { RenderedObject, RenderedNumber, RenderedEquals } from "app/js/renderedobjects";
import Utils from "app/js/animatorutils";

export default class LongSubtractAnimator {
    constructor(containerElement) {
        this._container = containerElement;
        this._timeline = new TimelineMax();
        this._animationId = this._container.attr("id") + "-animation";
        this._toRemove = [];
    }

    drawGo() {
        if (this._drawn) {
            this.go();
            return;
        }

        this._drawn = true;

        const negativeClass = Utils.negativeClass;

        const leftBox = this._container.children(".snapbox-left");
        const rightBox = this._container.children(".snapbox-right");
        let topBox = leftBox, botBox = rightBox;
        const leftBoxText = leftBox.find(".number-text").text();
        const rightBoxText = rightBox.find(".number-text").text();
        let isNegative = false;

        if (parseInt(leftBoxText) < parseInt(rightBoxText)) {
            topBox = rightBox;
            botBox = leftBox;
            isNegative = true;
            //Later on, the boxes physically switch.
        }

        const topOpText = topBox.find(".number-text").text();
        const botOpText = botBox.find(".number-text").text();

        const topOpArray = topOpText.split("").map((c) => parseInt(c));
        const botOpArray = botOpText.split("").map((c) => parseInt(c));
        const topOpReversed = topOpArray.slice().reverse();
        const botOpReversed = botOpArray.slice().reverse();

        let topOpSpans = [];
        const newTopHtml = topOpArray.reduce((prev, curr, currIndex, array) => {
            const id = this._animationId + "-topOp-" + (array.length - currIndex);
            topOpSpans.unshift("#" + id);
            return `${prev}<span class='${this._animationId}-operand' id='${id}'>${curr}</span>`;
        }, "");
        topBox.find(".number-text").html(newTopHtml);

        let botOpSpans = [];
        const newBotHtml = botOpArray.reduce((prev, curr, currIndex, array) => {
            const id = this._animationId + "-bottomOp-" + (array.length - currIndex);
            botOpSpans.unshift("#" + id);
            return `${prev}<span class='${this._animationId}-operand' id='${id}'>${curr}</span>`;
        }, "");
        botBox.find(".number-text").html(newBotHtml);

        const subtractSets = topOpReversed.map((currentValue, index) => {
            const array = [];
            array.push(currentValue);
            if (botOpReversed[index] != null) array.push(botOpReversed[index]);
            return array;
        });

        const numWidth = Utils.numWidth;

        const heightMultiplier = 1.4;
        const letterSpacing = 18;

        const leftLine = 0;

        const minus = this._container.find(".operation-text");
        const minusLeft = leftLine;

        //Starting from right; i.e. column 0 is ones column
        function leftPosOfColumn(column) {
            return leftLine + minus.width() + numWidth / 2 + (topOpArray.length - 1 - column) * (numWidth + letterSpacing);
        }

        const equals = new RenderedEquals(this._animationId + "-equals", minusLeft, rightBox.height() * heightMultiplier * 2);
        const equalsDiv = equals.createElements(this._container);
        equalsDiv.css("opacity", 0);
        this._equals = equals;
        this._toRemove.push(equalsDiv);

        let negativeSign;
        if (isNegative) {
            negativeSign = new RenderedObject(this._animationId + "-negativeSign",
                minus.width() - 2,
                rightBox.height() * heightMultiplier * 2 - equals.containerDiv.height() / 2,
                "small",
                "-", false
            );

            negativeSign.createElements(this._container).css({
                position: "absolute",
                "opacity": 0,
            });

            negativeSign.contentDiv.css({
                "font-size": "3em",
            }).addClass(negativeClass);
        }
        const side = new RenderedObject(this._animationId + "-side",
            leftPosOfColumn(-1),
            rightBox.height() * .75,
            "small",
            "<span id='leftOp'></span><span id='minus'>&minus;</span><span id='rightOp'></span></span>"+
            "<span id='equals'>=</span>",
            false
        );

        side.createElements(this._container);
        side.containerDiv.css({
            "font-size": "2em",
            "display": "inline-block",
            "position": "absolute",
            //"letter-spacing": "10px"
        });
        this._toRemove.push(side.containerDiv);

        const sideLeft = side.containerDiv.find("#leftOp");
        const sideRight = side.containerDiv.find("#rightOp");
        const sideMinus = side.containerDiv.find("#minus");
        const sideEquals = side.containerDiv.find("#equals");
        sideLeft.css({
            "color": "red",
            "padding-right": letterSpacing,
        });
        sideRight.css({
            "color": "red",
            "padding-right": letterSpacing,
        });
        sideMinus.css({
            "font-weight": "bold",
            "padding-right": letterSpacing,
        });

        //Timeline time!
        this._timeline.to(leftBox, 1, {
            "position": "absolute",
            "left": leftLine + minus.width() + (leftBox.width() - leftBox.outerWidth(true)) + numWidth +
            (Math.max(0, rightBoxText.length - leftBoxText.length) * (numWidth + letterSpacing)),
        });
        this._timeline.to(rightBox, 1, {
            "position": "absolute",
            "left": leftLine - (rightBox.outerWidth(true) - rightBox.width()) + minus.width() + numWidth / 2 +
            (Math.max(0, leftBoxText.length - rightBoxText.length) * (numWidth + letterSpacing)),
            "top": numWidth * 3
        }, "-=1");

        //Animate padding (a bit choppy unfortunately, not sure if autoRound makes a difference).
        $("." + this._animationId + "-operand").css("autoRound", false);
        this._timeline.to("." + this._animationId + "-operand", 0.5, {"padding-right": letterSpacing}, "-=0.5");

        //Move minus down next to big box
        this._timeline.to(minus, 1, {
            "position": "absolute",
            "left": minusLeft,
            "top": rightBox.height() * heightMultiplier,
        }, "-=1");

        //Fade in big equals
        this._timeline.to(equalsDiv, 1, {opacity: 1, ease: Power1.easeInOut}, "-=.75");

        if (isNegative) {
            console.log("negative");
            //Flip Operators
            this._timeline.to(botBox, 1, {
                "top": numWidth * 3
            });
            this._timeline.to(topBox, 1, {
                "top": numWidth
            }, "-=1");

            this._timeline.to(negativeSign.containerDiv, 1, {
                opacity: 1,
            }, "-=1");
        }

        const borrow = (column) => {
            let lastOne;
            if (subtractSets[column + 1][0] === 0)
                lastOne = borrow(column + 1);
            subtractSets[column][0] += 10;
            const one = new RenderedNumber(
                `${this._animationId}-newOne-${column}`,
                leftPosOfColumn(column) - numWidth / 2,
                2, //Trust me it looks better
                1,
                false
            );
            one.createElements(this._container).css("position", "absolute");
            one.contentDiv.css({
                "font-size": "2em",
            });
            const left = topOpReversed[column + 1];
            let newLeft = left - 1;
            if (left === 0) {
                newLeft = 9;
                this._timeline.to(lastOne._containerDiv, 1, {opacity: 0});
            }

            this._timeline.to(topOpSpans[column+1], 1, {
                text: String(newLeft),
                className: "+=" + Utils.carryClass,
            }, "-=0.6");
            subtractSets[column+1][0] -= 1;
            this._timeline.from(one.containerDiv, 1, {
                opacity: 0,
                left: leftPosOfColumn(column+1),
            }, "-=0.5");

            return one;
        }

        const answerNums = [];
        subtractSets.forEach((subtractSet, i) => {
            //Move the number down as the answer if it is the only number
            if (subtractSet.length === 1) {
                const copy = new RenderedNumber(this._animationId + "-side-answerLast-" + i,
                    leftPosOfColumn(i),
                    0,
                    subtractSet[0], false
                );
                copy.createElements(this._container).css({
                    "opacity": 0,
                })
                .addClass(Utils.answerClass);
                this._timeline.to(copy.containerDiv, 1, {
                    opacity: 1,
                    top: rightBox.height() * heightMultiplier * 2,
                    ease: Power1.easeOut
                });
                answerNums.push(copy);
                this._toRemove.push(copy);
                return;
            }

            this._timeline.to(topOpSpans[i] + "," + botOpSpans[i], 0.5, {color: "red"});

            if (subtractSet[0] < subtractSet[1]) {
                borrow(i);
            }

            const difference = subtractSets[i][0] - subtractSets[i][1];

            this._timeline.set(sideLeft, {"text": String(subtractSet[0])});
            this._timeline.set(sideRight, {"text": String(subtractSet[1])});

            let answer = new RenderedNumber(`${this._animationId}-answer-${i}`,
                side.containerDiv.position().left + side.containerDiv.width() + letterSpacing
                    //Because .width() above does not account for runtime changes, we manually have to check for
                    //whether a carry happened or not
                    + numWidth * ((String(subtractSet[0]).split("").length === 2) ? 2 : 1),
                side.containerDiv.height() - numWidth / 2,
                difference,
                false
            );
            answer.createElements(this._container);
            answer.contentDiv.css({"font-size": "2em"});
            answer.containerDiv.addClass(Utils.answerClass);

            answerNums.push(answer);
            this._toRemove.push(answer.containerDiv);

            this._timeline.fromTo([sideLeft, sideRight], 1.5, {opacity: 0}, {opacity: 1}, "+=0.5");
            this._timeline.fromTo(sideMinus, 1.5, {opacity: 0}, {opacity: 1, className: `+=${negativeClass}`}, "-=1.5");
            this._timeline.fromTo(sideEquals, 1, {opacity: 0}, {opacity: 1}, "-=0.3");
            this._timeline.fromTo(answer.containerDiv, 1, {opacity: 0}, {opacity: 1});

            this._timeline.to(answer.containerDiv, 1, {
                left: leftPosOfColumn(i),
                top: rightBox.height() * heightMultiplier + numWidth * 2,
                "font-size": numWidth
            });

            this._timeline.to([sideLeft, sideRight, sideMinus, sideEquals], 1, {opacity: 0});
            this._timeline.to(topOpSpans[i] + "," + botOpSpans[i], 1, {color: "black"}, "-=1")
        });

        let shiftNegative = 0;

        this._timeline.add("beforeTrim");

        this._timeline.addLabel("trimZeroes");
        answerNums.reverse().every((answer) => {
            if (answer.number === 0) {
                this._timeline.to(answer.containerDiv, 1, {opacity: 0}, "trimZeroes");
                shiftNegative += numWidth + letterSpacing;
                return true;
            }
            return false;
        });

        if (isNegative)
            this._timeline.add(() => {
                if (shiftNegative != 0) {
                    this._timeline.to(negativeSign.containerDiv, 1, {left: "+=" + shiftNegative});
                    shiftNegative = 0; //Because closures
                }
            });

    }

    go() {
        this._equals.value = "";
        this._timeline.timeScale(1);
        this._timeline.play(0);
    }

    goAway() {
        if (this._drawn) {
            if (this._timeline.time() > this._timeline.getLabelTime("beforeTrim"))
                this._timeline.seek("beforeTrim");
            this._timeline.reverse();
            this._timeline.timeScale(16);
        }
    }

    removeElements() {
        this._toRemove.forEach(element => $(element).remove());
    }
}
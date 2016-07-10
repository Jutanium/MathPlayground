/**
 * Created by Matthew Sklar on 7/08/2016.
 */

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
        const carryColor = "#FFC300";

        const leftBox = this._container.children(".snapbox-left");
        const rightBox = this._container.children(".snapbox-right");
        const firstOpText = leftBox.find(".number-text").text();
        const secondOpText = rightBox.find(".number-text").text();

        const firstOp = parseInt(firstOpText);
        const secondOp = parseInt(secondOpText);

        const biggerOpLength = Math.max(firstOpText.length, secondOpText.length);

        const firstOpArray = firstOpText.split("").map((c) => parseInt(c));
        const secondOpArray = secondOpText.split("").map((c) => parseInt(c));

        let firstOpSpans = [];
        const newLeftHtml = firstOpArray.reduce((prev, curr, currIndex, array) => {
            const id = this._animationId + "-firstOp-" + (array.length - currIndex);
            firstOpSpans.unshift("#" + id);
            return prev + "<span class='" + this._animationId + "-operand' id='" + id + "'>" + curr + "</span>";
        }, "");

        let secondOpSpans = [];
        const newRightHtml = secondOpArray.reduce((prev, curr, currIndex, array) => {
            const id = this._animationId + "-secondOp-" + (array.length - currIndex);
            secondOpSpans.unshift("#" + id);
            return prev + "<span class='" + this._animationId + "-operand' id='" + id + "'>" + curr + "</span>";
        }, "");

        leftBox.find(".number-text").html(newLeftHtml);
        rightBox.find(".number-text").html(newRightHtml);

        const numWidth = Utils.numWidth;

        const heightMultiplier = 1.4;
        const letterSpacing = 10;

        const leftLine = 0;

        const minus = this._container.find(".operation");
        //If AB + CD = XYZ, we need to move the  minus and equals over to account for the new digit.
        const minusLeft = leftLine - (String(firstOp + secondOp).length - biggerOpLength) * (numWidth + letterSpacing);

        const equals = new RenderedEquals(this._animationId + "-equals", minusLeft, rightBox.height() * heightMultiplier * 2);
        const equalsDiv = equals.createElements(this._container);
        equalsDiv.css("opacity", 0);
        this._toRemove.push(equalsDiv);

        const leftSide = new RenderedObject(this._animationId + "-leftside", 0, 0, "small",
            "<span id='leftMinus'>-</span>", false
        );

        leftSide.createElements(this._container);

        const sideMinusLeft = leftSide.containerDiv.find("#leftMinus");
        sideMinusLeft.css("color", "blue");
        sideMinusLeft.css("font-size", "3em");
        sideMinusLeft.css("visibility", "hidden");

        const side = new RenderedObject(this._animationId + "-side",
            leftLine + minus.width() + (biggerOpLength + 1) * (numWidth + letterSpacing),
            rightBox.height() * .75,
            "small",
            "<span id='op'><span id='carryOp'></span>" +
            "<span id='leftOp'></span><span id='minus'>-</span><span id='rightOp'>" +
            "</span></span><span id='equals'>=</span>",
            false
        );

        side.createElements(this._container);
        side.containerDiv.css({
            "font-size": "2em",
            "display": "inline-block",
            "position": "absolute",
            "letter-spacing": "10px"
        });
        this._toRemove.push(side.containerDiv);

        const sideLeft = side.containerDiv.find("#leftOp");
        const sideRight = side.containerDiv.find("#rightOp");
        const sideMinus = side.containerDiv.find("#minus");
        sideLeft.css("color", "red");
        sideRight.css("color", "red");
        sideMinus.css("font-weight", "bold");

        this._timeline.to(leftBox, 1, {
            "left": leftLine + minus.width() + (leftBox.width() - leftBox.outerWidth(true)) + numWidth / 2 +
            (Math.max(0, secondOpText.length - firstOpText.length) * (numWidth + letterSpacing))
        });
        this._timeline.to(rightBox, 1, {
            "left": leftLine - (rightBox.outerWidth(true) - rightBox.width()) + minus.width() + numWidth / 2 +
            (Math.max(0, firstOpText.length - secondOpText.length) * (numWidth + letterSpacing)),
            "top": rightBox.height() * heightMultiplier
        }, "-=1");


        //Move minus down next to big box
        this._timeline.to(minus, 1, {
            "position": "absolute",
            "left": minusLeft,
            "top": rightBox.height() * heightMultiplier
        }, "-=1");

        //Animate padding (a bit choppy unfortunately, not sure if autoRound makes a difference).
        $("." + this._animationId + "-operand").css("autoRound", false);

        this._timeline.to("." + this._animationId + "-operand", 0.5, {"padding-right": letterSpacing}, "-=0.2");
        //Fade in big equals
        //noinspection JSUnresolvedVariable
        this._timeline.to(equalsDiv, 1, {opacity: 1, ease: Power1.easeInOut}, "-=.75");

        let isNegative = false;

        //noinspection JSSuspiciousNameCombination
        let topBox = leftBox, botBox = rightBox;

        //Flip if needed
        if (firstOp < secondOp) {
            //noinspection JSSuspiciousNameCombination
            topBox = rightBox;
            botBox = leftBox;

            isNegative = true;

            //Minus if flip
            this._timeline.to(sideMinusLeft, 1, {
                "position": "absolute",
                "autoAlpha": 1
            });

            //Flip Operators
            this._timeline.to(leftBox, 1, {
                "top": rightBox.height() * heightMultiplier
            }, "-=1");
            this._timeline.to(rightBox, 1, {
                "top": 0
            }, "-=1");
        }

        const topOpText = topBox.find(".number-text").text();
        const botOpText = botBox.find(".number-text").text();

        const topOpArray = topOpText.split("").map((c) => parseInt(c));
        const botOpArray = botOpText.split("").map((c) => parseInt(c));
        const topOpReversed = topOpArray.slice().reverse();
        const botOpReversed = botOpArray.slice().reverse();

        const subSets = topOpReversed.map((currentValue, index) => {
            const array = [];
            array.push(currentValue);
            if (botOpReversed[index] != null) array.push(botOpReversed[index]);
            return array;
        });

        let currentTopLayer = subSets.map(() => {
            return 0;
        });

        subSets.map((subSet, i) => {
            if (subSet.length === 1) { // Move the number down as the answer if it is the only number
                const top = firstOpText.length > secondOpText.length ? rightBox.height() * heightMultiplier : 0;
                // const toCopy = lastCarried.containerDiv || ;
                const copy = new RenderedNumber(this._animationId + "-side-answerLast-" + i,
                    leftLine + minus.width() + numWidth / 2 + (biggerOpLength - i - 1) * (numWidth + letterSpacing),
                    top,
                    subSet[0], false
                );
                copy.createElements(this._container).css({
                    "opacity": 0,
                    "color": "blue"
                });

                //noinspection JSUnresolvedVariable
                this._timeline.to(copy.containerDiv, 1, {
                    opacity: 1,
                    color: "black",
                    top: rightBox.height() * heightMultiplier * 2,
                    ease: Power1.easeOut
                });
                this._toRemove.push(copy);
                return;
            }

            if (subSet[0] < subSet[1]) {
                subSet[0] += 10;

                const crossOutAndAddTop = index => {
                    const xPos = leftLine + minus.width() + numWidth / 2 + (biggerOpLength - index - 1) *
                        (numWidth + letterSpacing);
                    const yPosBot = -(rightBox.height() * currentTopLayer[index]);

                    //noinspection JSUnresolvedVariable
                    const crossOut = new RenderedNumber(`${this.animationId}-crossOut`,
                        xPos + numWidth / 4,
                        yPosBot,
                        "/", false
                    );
                    crossOut.createElements(this._container).css({"font-weight": "bold"});
                    this._toRemove.push(crossOut.containerDiv);

                    currentTopLayer[index] += 1;

                    const top = new RenderedNumber(`${this._animationId}-top-${index}`,
                        xPos,
                        yPosBot - rightBox.height(), subSets[index][0], false
                    );
                    top.createElements(this._container);
                    top.contentDiv.css({"font-size": "2em", "color": carryColor});
                    this._toRemove.push(top.containerDiv);

                    this._timeline.fromTo(crossOut.containerDiv, 0.5, {"autoAlpha": 0}, {"autoAlpha": 1});
                    this._timeline.fromTo(top.containerDiv, 0.5, {"autoAlpha": 0}, {"autoAlpha": 1});
                };

                crossOutAndAddTop(i);

                for (let j = i + 1; j < subSets.length; j++) {
                    if (subSets[j][0] === 0) {
                        subSets[j][0] = 9;
                        crossOutAndAddTop(j);
                    } else {
                        subSets[j][0] -= 1;
                        crossOutAndAddTop(j);
                        break;
                    }
                }
            }

            const difference = subSets[i].reduce((a, b) => a - b);

            this._timeline.set(sideLeft, {"text": String(subSet[0])});
            this._timeline.set(sideRight, {"text": String(subSet[1])});

            let answer = new RenderedNumber(`${this._animationId}-answer-${i}`,
                side.containerDiv.position().left + side.containerDiv.width() + numWidth * ((String(subSet[0]).split("").length === 2) ? 3 : 2),
                side.containerDiv.height() - numWidth / 4, difference, false
            );
            answer.createElements(this._container);
            answer.contentDiv.css({"font-size": "2em"});
            this._toRemove.push(answer.containerDiv);

            this._timeline.fromTo(`#${this._animationId}-side #op`, 1, {autoAlpha: 0}, {autoAlpha: 1});
            this._timeline.to(`#${this._animationId}-side #minus`, 1, {color: "#0074D9"}, "-=0.5");
            this._timeline.fromTo("#" + this._animationId + "-side #equals", 1, {autoAlpha: 0}, {autoAlpha: 1}, "-=0.3");
            this._timeline.fromTo(answer.containerDiv, 1, {autoAlpha: 0}, {autoAlpha: 1});

            this._timeline.to(answer.containerDiv, 1, {
                left: leftLine + minus.width() + numWidth / 2 + (biggerOpLength - i - 1) * (numWidth + letterSpacing),
                top: rightBox.height() * heightMultiplier * 2,
                "font-size": numWidth
            });

            this._timeline.to(`#${this._animationId}-side #op`, 1, {autoAlpha: 0});
            this._timeline.to(`#${this._animationId}-side #equals`, 1, {autoAlpha: 0}, "-=1");
        });

        if (isNegative) this._timeline.to(sideMinusLeft, 1.0, {
            color: "black",
            "left": minus.width() - 5,
            "top": rightBox.height() * heightMultiplier * 2 - equals.containerDiv.height() / 2
        });
    }

    go() {
        this._equals.value = "";
        this._timeline.timeScale(1);
        this._timeline.play(0);
    }

    goAway() {
        if (this._drawn) {
            this._timeline.reverse();
            this._timeline.timeScale(16);
        }
    }

    removeElements() {
        this._toRemove.forEach(element => $(element).remove());
    }
}
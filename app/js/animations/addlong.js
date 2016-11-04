import { Power1, TweenMax, TimelineMax } from "gsap";
import { Snap } from "snap.svg";
import { RenderedObject, RenderedNumber, RenderedEquals } from "app/js/renderedobjects";
import Utils from "app/js/animatorutils";

export default class LongAddAnimator {
    constructor(containerElement) {
        this._container = containerElement;
        this._timeline = new TimelineMax();
        this._animationId = this._container.attr("id") + "-animation";
        this._toRemove = [];
        this._topBox = this._container.children(".snapbox-left");
        this._botBox = this._container.children(".snapbox-right");

        //For restoring later
        this._topNumber = this._topBox.children(".number-container");
        this._topHtml = this._topNumber.html();
        this._botNumber = this._botBox.children(".number-container");
        this._botHtml = this._botNumber.html();
    }

    drawGo() {
        if (this._drawn) {
            this.go();
            return;
        }
        this._drawn = true;

        const topBox = this._topBox;
        const botBox = this._botBox;
        const firstOpText = topBox.find(".number-text").text();
        const secondOpText = botBox.find(".number-text").text();

        const firstOp = parseInt(firstOpText);
        const secondOp = parseInt(secondOpText);

        const biggerOpLength = Math.max(firstOpText.length, secondOpText.length);

        const firstOpArray = firstOpText.split("").map(c => parseInt(c));
        const secondOpArray = secondOpText.split("").map(c => parseInt(c));
        const firstOpReversed = firstOpArray.slice().reverse();
        const secondOpReversed = secondOpArray.slice().reverse();

        const topOpData= Utils.individualNumberHtml(firstOpArray, this);
        const firstOpSpans = topOpData.spans;
        const newLeftHtml = topOpData.html;

        const botOpData = Utils.individualNumberHtml(secondOpArray, this, "botOp");
        const secondOpSpans = botOpData.spans;
        const newRightHtml = botOpData.html;

        const addSets = firstOp > secondOp ?
                firstOpReversed.map((currentValue, index) => {
                    const array = [];
                    if (secondOpReversed[index] != null) array.push(secondOpReversed[index]);
                    array.push(currentValue);
                    return array;
                })
                :
                secondOpReversed.map((currentValue, index) => {
                    const array = [];
                    array.push(currentValue);
                    if (firstOpReversed[index] != null) array.push(firstOpReversed[index]);
                    return array;
                })
            ;

        console.log(addSets);

        topBox.find(".number-text").html(newLeftHtml);
        botBox.find(".number-text").html(newRightHtml);

        const numWidth = Utils.numWidth;

        const heightMultiplier = 1.5;
        const letterSpacing = 10;

        const leftLine = 0;

        const plus = this._container.find(".operation-text");
        //If AB + CD = XYZ, we need to move the plus and equals over to account for the new digit.
        const plusLeft = leftLine - (String(firstOp + secondOp).length - biggerOpLength) * (numWidth + letterSpacing);

        const equals = new RenderedEquals(this._animationId + "-equals", plusLeft, botBox.height() * heightMultiplier * 2);
        const equalsDiv = equals.createElements(this._container);
        equalsDiv.css("opacity", 0);
        this._toRemove.push(equalsDiv);

        const side = new RenderedObject(this._animationId + "-side",
            leftLine + plus.width() + (biggerOpLength + 1) * (numWidth + letterSpacing),
            botBox.height() * .75,
            "small",
            "<span id='op'><span id='carryOp'></span>" +
            "<span id='leftOp'></span><span id='plus'>+</span><span id='rightOp'>" +
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

        const sideOp = side.containerDiv.find("#op");
        const sideCarry = side.containerDiv.find("#carryOp");
        const sideLeft = side.containerDiv.find("#leftOp");
        const sideRight = side.containerDiv.find("#rightOp");
        const sidePlus = side.containerDiv.find("#plus");
        const sideEquals = side.containerDiv.find("#equals");

        sideCarry.css("color", "#FFC300");
        sideLeft.css("color", "red");
        sideRight.css("color", "red");
        sidePlus.css("font-weight", "bold");

        //Timeline time!
        //THESE NEXT TWO POSITIONS TOOK DAYS TO FIGURE OUT they are responsible for moving things over depending
        //on which number has more digits and by how much. Margins fluck slit up, which is why I have expressions like
        //box.width() - box.outerWidth(true), which returns the margin
        this._timeline.to(topBox, 1, {
            "position": "absolute",
            "left": Utils.positionTopBox(leftLine, plus, topBox, numWidth, secondOpText, firstOpText, letterSpacing),
            "top": numWidth * 3,
        });
        this._timeline.to(botBox, 1, {
            "left": Utils.positionBotBox(leftLine, plus, botBox, numWidth, secondOpText, firstOpText, letterSpacing),
        }, "-=1");
        //Move plus down next to big box
        this._timeline.to(plus, 1, {
            "position": "absolute",
            "left": plusLeft,
            "top": botBox.height() * heightMultiplier
        }, "-=1");

        //Animate padding (a bit choppy unfortunately, not sure if autoRound makes a difference).
        $("." + this._animationId + "-operand").css("autoRound", false);

        this._timeline.to("." + this._animationId + "-operand", 0.5, {"padding-right": letterSpacing}, "-=0.2");
        //Fade in big equals
        this._timeline.to(equalsDiv, 1, {opacity: 1, ease: Power1.easeInOut}, "-=.75");

        let answerNumbers = [];

        let lastCarried;

        for (let i = 0; i < addSets.length; i++) {
            const addSet = addSets[i];

            if (addSet.length === 1) { //If there's nothing to add to, just move the number down.
                const top = firstOpText.length > secondOpText.length ? botBox.height() * heightMultiplier : 0;

                const copy = new RenderedNumber(this._animationId + "-side-answerLast-" + i,
                    leftLine + plus.width() + numWidth / 2 + (biggerOpLength - i - 1) * (numWidth + letterSpacing),
                    top,
                    addSet[0], false
                );
                copy.createElements(this._container).css({
                    "opacity": 0,
                }).addClass(Utils.answerClass);
                this._timeline.to(copy.containerDiv, 1, {
                    opacity: 1,
                    top: botBox.height() * heightMultiplier * 2,
                    ease: Power1.easeOut
                });
                this._toRemove.push(copy);
                continue;
            }

            let showPlus = true;
            if (lastCarried) {
                this._timeline.set(sideCarry, {"text": String(addSet[addSet.length - 1]) + "+"});
                this._timeline.set(sideLeft, {"text": String(addSet[addSet.length - 2])});
                if (addSet.length === 3)
                    this._timeline.set(sideRight, {"text": String(addSet[addSet.length - 3])});
                else if (addSet.length === 2) {
                    showPlus = false;
                    this._timeline.set([sidePlus, sideRight], {"display": "none"});
                }
            }
            else {
                this._timeline.set(sideLeft, {"text": String(addSet[addSet.length - 1])});
                this._timeline.set(sideRight, {"text": String(addSet[addSet.length - 2])});
            }

            console.log(addSet);

            const sum = (addSet.reduce((a, b) => a + b)).toString().split("");

            let answerLeft, answerRight;

            console.log(`sum: ${sum[0]}`);
            answerLeft = new RenderedNumber(this._animationId + "-side-answerLeft-" + i,
                side.containerDiv.position().left + side.containerDiv.width() + (addSet[2] ? numWidth * 4.5 : numWidth * 2),
                side.containerDiv.height() - numWidth / 2, sum[0], false);
            answerLeft.createElements(this._container);
            answerLeft.contentDiv.css({"font-size": "2em"});
            answerLeft.containerDiv.addClass(Utils.answerClass);
            this._toRemove.push(answerLeft.containerDiv);

            if (sum.length == 2) {
                answerRight = new RenderedNumber(this._animationId + "-side-answerRight-" + i,
                    answerLeft.containerDiv.position().left + answerLeft.containerDiv.width(),
                    answerLeft.containerDiv.position().top, sum[1], false);
                answerRight.createElements(this._container);
                answerRight.contentDiv.css({"font-size": "2em"});
                answerRight.containerDiv.addClass(Utils.answerClass);
                this._toRemove.push(answerRight.containerDiv);

                if (i + 1 === addSets.length) {
                    addSets.push([parseInt(sum[0])]);
                }
                else {
                    addSets[i + 1].push(parseInt(sum[0]));
                }
            }
            else
                answerLeft.containerDiv.addClass(Utils.answerClass);
            this._timeline.to(firstOpSpans[i] + "," + secondOpSpans[i], 0.5, {color: "red"});

            this._timeline.fromTo([sideLeft, sideRight, sideCarry], 1, {opacity: 0}, {opacity: 1});
            if (showPlus) {
                this._timeline.set(sidePlus, {display: ""});
                this._timeline.fromTo(sidePlus, 1, {opacity: 0, color: "black"}, {opacity: 1, color: "#0074D9"}, "-=1");
            }
            else this._timeline.set(sidePlus, {display: "none"});

            this._timeline.fromTo(sideEquals, 1, {opacity: 0}, {opacity: 1}, "-=0.01");

            this._timeline.fromTo(answerLeft.containerDiv, 1, {opacity: 0}, {opacity: 1}, "-=1");

            if (answerRight)
                this._timeline.fromTo(answerRight.containerDiv, 1, {opacity: 0}, {opacity: 1}, "-=1");

            const moveDown = answerRight ? answerRight : answerLeft;

            this._timeline.to(moveDown.containerDiv, 1, {
                left: leftLine + plus.width() + numWidth / 2 + (biggerOpLength - i - 1) * (numWidth + letterSpacing),
                top: botBox.height() * heightMultiplier + numWidth * 2,
                "font-size": numWidth
            });

            if (answerRight) { //Move up
                this._timeline.to(answerLeft.containerDiv, 1, {
                    left: leftLine + plus.width() + numWidth / 2 + (biggerOpLength - i - 2) * (numWidth + letterSpacing),
                    top: botBox.height() * -heightMultiplier + numWidth / 2,
                    "font-size": numWidth,
                    className: "+=" + Utils.carryClass
                }, "-=1");
                lastCarried = true;
            }
            else lastCarried = false;

            this._timeline.to([sideCarry, sideLeft, sideRight, sidePlus, sideEquals], 1, {opacity: 0});
            this._timeline.set([sideCarry, sideLeft, sideRight], {text: ""});
            this._timeline.to(firstOpSpans[i] + "," + secondOpSpans[i], 1, {color: "black"}, "-=1");

            // this._timeline.fromTo(answerLeft.containerDiv, 1, {opacity: 1}, {opacity: 0}, "-=1");
        }


        this._equals = equals;
        return this._timeline;

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
        //When we're done with this set of numbers, restore their original html (we modified them in the animation, surrounding each number with a span)
        this._topNumber.html(this._topHtml);
        this._botNumber.html(this._botHtml);

        this._toRemove.forEach(element => $(element).remove());
    }

}
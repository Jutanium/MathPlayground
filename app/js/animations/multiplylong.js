import { Power1, TweenMax, TimelineMax } from "gsap";
import { Snap } from "snap.svg";
import { RenderedEquals, RenderedObject, RenderedNumber } from "app/js/renderedobjects";
import Utils from "app/js/animatorutils";

export default class LongMultiplyAnimator {
    constructor(containerElement) {
        const elem = containerElement;

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
        const negativeClass = Utils.negativeClass;
        const numWidth = Utils.numWidth;

        // Parameters
        const heightCoefficient = 1.4;
        const letterSpacing = 18;
        const leftLine = 0;

        const subEquationColor = "yellow";

        const times = this._container.find(".operation-text");

        // Boxes
        const leftBox = this._container.children(".snapbox-left");
        const rightBox = this._container.children(".snapbox-right");

        let topBox = leftBox, botBox = rightBox;

        // Box text
        const topOpText = topBox.find(".number-text").text();
        const botOpText = botBox.find(".number-text").text();

        // Operation arrays
        const topOpArray = topOpText.split("").map(c => parseInt(c));
        const botOpArray = botOpText.split("").map(c => parseInt(c));

        const topOpReversed = topOpArray.slice().reverse();
        const botOpReversed = botOpArray.slice().reverse();

        // Detect if answer is positive or negative
        let isNegative = false;

        if (topOpText / Math.abs(topOpText) != botOpText / Math.abs(botOpText)) isNegative = true;

        // Set up HTML for individual numbers
        const topOpTuple = Utils.individualNumberHtml(topOpArray, this);
        const topOpSpans = topOpTuple[0];
        const newTopHtml = topOpTuple[1];

        topBox.find(".number-text").html(newTopHtml);

        const botOpTuple = Utils.individualNumberHtml(botOpArray, this, "botOp");
        const botOpSpans = botOpTuple[0];
        const newBotHtml = botOpTuple[1];

        botBox.find(".number-text").html(newBotHtml);

        // Width of the box
        const width = times.width() + numWidth / 2 + Math.max(topOpArray.length, botOpArray.length)
            * (letterSpacing + numWidth);

        /*
         * Get the left position for elements of the side equation
         */
        const leftPosOfColumn = (column) => {
            return times.width() + numWidth / 2 + (topOpArray.length - 1 - column) * (numWidth + letterSpacing);
        }

        // Render equal sign
        const equals = new RenderedObject(this._animationId + "-equals",
            0,
            rightBox.height() * heightCoefficient * 2,
            "",
            "<span id='equals'><hr></span>",
            false);
        const equalsDiv = equals.createElements(this._container);

        equalsDiv.css({
            "position": "absolute",
            "opacity": 0,
            "width": width
        });

        this._equals = equals;
        this._toRemove.push(equalsDiv);

        // Render sub equal sign
        const subEquals = new RenderedObject(this._animationId + "-subEquals",
            0,
            rightBox.height() * heightCoefficient * 4,
            "",
            "<span id='subEquals'><hr></span>",
            false);
        const subEqualsDiv = subEquals.createElements(this._container);

        subEqualsDiv.css({
            "position": "absolute",
            "opacity": 0,
            "width": width
        });

        this._toRemove.push(subEqualsDiv);

        // Render side equation
        const side = new RenderedObject(this._animationId + "-side",
            width,
            rightBox.height() * .75,
            "small",
            "<span id='leftOp'></span><span id='times'>*</span><span id='rightOp'></span></span>"+
            "<span id='equals'>=</span>",
            false
        );
        const sideDiv = side.createElements(this._container);

        sideDiv.css({
            "font-size": "2em",
            "display": "inline-block",
            "position": "absolute",
        });

        this._toRemove.push(sideDiv);

        // Side components
        const sideLeft = side.containerDiv.find("#leftOp");
        const sideRight = side.containerDiv.find("#rightOp");
        const sideProduct = side.containerDiv.find("#times");
        const sideEquals = side.containerDiv.find("#equals");

        sideLeft.css({
            "color": "red",
            "padding-right": letterSpacing,
        });
        sideRight.css({
            "color": "red",
            "padding-right": letterSpacing,
        });
        sideProduct.css({
            "font-weight": "bold",
            "padding-right": letterSpacing,
        });

        // Timeline
        // Fade is equals line
        this._timeline.to(equalsDiv, 1, { opacity: 1, ease: Power1.easeInOut });

        // Fade in top box
        this._timeline.to(leftBox, 1, {
            "position": "absolute",
            "left": Utils.positionTopBox(leftLine, times, leftBox, numWidth, botOpText, topOpText, letterSpacing),
        }, "-=1");

        // Fade in bot box
        this._timeline.to(rightBox, 1, {
            "position": "absolute",
            "left": Utils.positionBotBox(leftLine, times, rightBox, numWidth, botOpText, topOpText, letterSpacing),
            "top": numWidth * 3
        }, "-=1");

        // Fade in times
        this._timeline.to(times, 1, {
            "position": "absolute",
            "left": 0,
            "top": rightBox.height() * heightCoefficient
        }, "-=1");

        // Add padding between numbers
        this._timeline.to("." + this._animationId + "-operand", 0.5, {"padding-right": letterSpacing}, "-=0.5");

        // Create sub-equations
        let sum = 0;
        let i = 0;
        let topAnswer = null;

        let additionNums = [];

        botOpReversed.forEach((botValue, botIndex) => {
            botValue *= Math.pow(10, botIndex);

            // Highlight bot value
            this._timeline.to(botOpSpans[botIndex], .5, { color: "red" });

            topOpReversed.forEach((topValue, topIndex) => {
                i++;

                // Highlight top value
                this._timeline.to(topOpSpans[topIndex], .5, { color: "red" }, "-=.5");

                topValue *= Math.pow(10, topIndex);

                // Product of current side multiplication
                const product = topValue * botValue;

                additionNums.push(product);

                this._timeline.set(sideLeft, {"text": String(topValue)});
                this._timeline.set(sideRight, {"text": String(botValue)});

                const answer = new RenderedNumber(`${this._animationId}-answer-${i}`,
                    side.containerDiv.position().left + side.containerDiv.width() + letterSpacing
                    + numWidth * ((String(topValue).split("").length === 2) ? 2 : 1),
                    side.containerDiv.height() - numWidth / 2,
                    product,
                    false
                );
                let answerDiv = answer.createElements(this._container);
                answer.contentDiv.css({"font-size": "2em"});
                answer.containerDiv.addClass(Utils.answerClass);

                this._toRemove.push(answerDiv);

                sum += product;

                this._timeline.fromTo([sideLeft, sideRight], 1.5, {opacity: 0}, {opacity: 1}, "+=0.5");
                this._timeline.fromTo(sideProduct, 1.5, {opacity: 0}, {opacity: 1, className: `+=${negativeClass}`}, "-=1.5");
                this._timeline.fromTo(sideEquals, 1, {opacity: 0}, {opacity: 1}, "-=0.3");
                this._timeline.fromTo(answerDiv, 1, {opacity: 0}, {opacity: 1});

                // Move product to top of sub-addition equation
                this._timeline.to(answerDiv, 1, {
                    left: width - (product.toString().length * (letterSpacing + numWidth)),
                    top: 10 + rightBox.height() * heightCoefficient + numWidth * 2 * (additionNums.length),
                    "font-size": numWidth,
                    "letter-spacing": `${letterSpacing}px`,
                    "color": subEquationColor
                });

                if (additionNums.length === 1) topAnswer = answerDiv;

                if (additionNums.length === 2) {
                    additionNums[0] = additionNums[0] + additionNums[1];
                    additionNums.splice(1, 1);

                    this._timeline.to(subEqualsDiv, .5, { opacity: 1 });

                    const subAnswer = new RenderedNumber(`${this._animationId}-answer-${i}`,
                        width - (additionNums[0].toString().length * (letterSpacing + numWidth)),
                        10 + rightBox.height() * heightCoefficient + numWidth * 6,
                        additionNums[0],
                        false
                    );

                    const subAnswerDiv = subAnswer.createElements(this._container);
                    subAnswerDiv.css({
                        "opacity": 0,
                        "letter-spacing": `${letterSpacing}px`,
                        "color": subEquationColor
                    });
                    subAnswerDiv.addClass(Utils.answerClass);

                    this._toRemove.push(subAnswerDiv);

                    // Show sum
                    this._timeline.to(subAnswerDiv, .5, { opacity: 1 });

                    // Animation wait
                    this._timeline.to(subAnswerDiv, 1, { });

                    // Replace top sub addition with sum
                    this._timeline.to(subAnswerDiv, 1, {
                        left: width - (additionNums[0].toString().length * (letterSpacing + numWidth)),
                        top: 10 + rightBox.height() * heightCoefficient + numWidth * 2,
                        "letter-spacing": `${letterSpacing}px`
                    });

                    // Remove previous addition
                    this._timeline.to([topAnswer, answerDiv], 1, { opacity: 0 }, "-=1");

                    topAnswer = subAnswerDiv;

                    // Garbage collection
                    this._timeline.add(() => answerDiv.remove());
                }

                // Hide side equation
                this._timeline.to([sideLeft, sideRight, sideProduct, sideEquals], 1, {opacity: 0});

                // Un-highlight top value
                this._timeline.to(topOpSpans[topIndex], .5, { color: "black" });
            });

            // Un-highlight bot value
            this._timeline.to(botOpSpans[botIndex], .5, { color: "black" });
        });

        // Turn answer green
        this._timeline.to(topAnswer, 1, { "color": "green" }, "-=3");

        // Hide sub equal sign
        this._timeline.to(subEqualsDiv, .5, { "opacity": 0 }, "-=3");

        // Garbage Collection
        this._timeline.add(() => {
            sideLeft.remove();
            sideRight.remove();
            sideProduct.remove();
            sideEquals.remove();
            subEqualsDiv.remove();
        });

        console.log(sum);

        $("." + this._animationId + "-operand").css("autoRound", false);
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
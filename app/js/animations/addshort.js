import { TweenMax, TimelineMax } from "gsap";
import { Snap } from "snap.svg";
import { RenderedEquals } from "app/js/renderedobjects";
import Utils from "app/js/animatorutils";
export default class ShortAddAnimator {
    
    constructor (containerElement) {
        const elem = containerElement;
        this._container = elem;
        this._leftBox = elem.children(".snapbox-left");
        this._rightBox = elem.children(".snapbox-right");
        this._timeline = new TimelineMax();
        this._svgId = this._container.attr("id") + "-animation";
    }

    drawGo() {
        if (this._drawn)
        {
            this.go();
            return;
        }
        this._drawn = true;
        const firstOp = parseInt(this._leftBox.find(".number-text").text());
        const secondOp = parseInt(this._rightBox.find(".number-text").text());
        const allZero = firstOp === 0 && secondOp === 0;
        const svgWidth = 300;
        const svgHeight = 150;
        const svgId = this._svgId;

        const numWidth = Utils.numWidth;
        
        const canvas = Snap(svgWidth, svgHeight);
        canvas.node.id = svgId;
        //console.log("-" + (svgWidth / 2 - this._container.width() / 2) + "px");
        $(canvas.node).css({"margin-left": "-" + (svgWidth / 2 - this._container.width() / 2) + "px", "margin-top": "0.5em"});
        this._container.append(canvas.node);

        const leftLine = svgWidth / 2 - 25;
        const rightLine = svgWidth / 2 + 25;

        let squaresPerRow = 3;
        while (Math.max(firstOp, secondOp) > squaresPerRow * squaresPerRow)
        {
            squaresPerRow += 1;
        }

        const leftSquares = new Array(firstOp);
        const rightSquares = new Array(secondOp);
        //console.log(secondOp, rightSquares.length, new Array(0).length, rightSquares, parseInt(secondOp));
        const squareWidth = leftLine / squaresPerRow * .75;
        const squareMargins = leftLine / squaresPerRow * .25;

        //Position the squares
        for (let i = 0; i < firstOp; i++) {
            const squareX = i % squaresPerRow * (squareWidth + squareMargins) + squareMargins / 2;
            const squareY = Math.floor(i / squaresPerRow) * (squareWidth + squareMargins) + squareMargins / 2;
            const square = Utils.drawSquare(canvas, squareX, squareY, squareWidth);
            leftSquares[i] = "#" + (square.node.id = svgId + "-left-" + i);
        }
        for (let i = 0; i < secondOp; i++) {
            const squareX = i % squaresPerRow * (squareWidth + squareMargins) + squareMargins / 2 + rightLine;
            const squareY = Math.floor(i / squaresPerRow) * (squareWidth + squareMargins) + squareMargins / 2;
            const square = Utils.drawSquare(canvas, squareX, squareY, squareWidth);
            rightSquares[i] = "#" + (square.node.id = svgId + "-right-" + i);
        }


        const plus = this._container.find(".operation-text");

        let equalsX = this._rightBox.position().left + this._rightBox.outerWidth(true) + plus.width() / 2;
        let equalsY = 0;
        if (!allZero) {
            equalsX = svgWidth / 2 + plus.width();
            equalsY = svgHeight / 2 + plus.width() / 2;
        }
        const equals = new RenderedEquals(svgId+"-equals", equalsX, equalsY);
        const equalsDiv = equals.createElements(this._container);
        equalsDiv.css("opacity", 0);

        //Move the boxes
        if (!allZero) {
            this._timeline.to(plus, 1, {"margin-top": svgHeight / 2, ease: Power1.easeInOut});
            this._timeline.to(this._leftBox, 1, {"margin-left": -leftLine / 2 - (numWidth * 3 - this._leftBox.width()) / 2, ease: Power1.easeInOut}, "-=1");
            this._timeline.to(this._rightBox, 1, {"margin-left": (svgWidth - rightLine) / 2 + (numWidth * 3 - this._rightBox.width()) * .5, ease: Power1.easeInOut}, "-=1");
        }


        //Drop the squares
        const dropOverlap = Math.max(firstOp, secondOp) <= 9 ? "-=0.35" : "-=0.45";
        for (let i = 0; i < leftSquares.length; i++) {
            this._timeline.from(leftSquares[i], 0.5, {
                y: "-=200",
                ease: Power1.easeOut,
            }, dropOverlap);
        }

        if (rightSquares.length > 0) {
            this._timeline.from(rightSquares[0], 0.5, {
                y: "-=200",
                delay: 0.1,
                ease: Power1.easeOut
            });
        }

        for (let i = 1; i < rightSquares.length; i++) {
            this._timeline.from(rightSquares[i], 0.5, {
                y: "-=200",
                ease: Power1.easeOut,
            }, dropOverlap);
        }

        this._timeline.to(equalsDiv, 1, {opacity: 1, ease: Power1.easeIn});
        
        //Count the squares

        if (allZero)
            equals.value = 0;
        this._timeline.addLabel("beforeCount");
        const countDuration = 3.6 / Math.max(9, Math.max(firstOp, secondOp)); //Because this arbitrary number looks good (3.6 / 9 = .4 which also looks good). I could change it.
        for (let i = 0; i < leftSquares.length; i++) {
            const rect = $(leftSquares[i]).is("rect") ? $(leftSquares[i]) : $(leftSquares[i]).find("rect");
            this._timeline.set(rect, {"stroke-width": 2});
            this._timeline.to(rect, countDuration, {"stroke": "orange", onStart: () => {
                equals.tickBy(1);
            }});
        }

        for (let i = 0; i < rightSquares.length; i++) {
            console.log(rightSquares.length);
            const rect = $(rightSquares[i]).is("rect") ? $(rightSquares[i]) : $(rightSquares[i]).find("rect");
            this._timeline.set(rect, {"stroke-width": 2});
            this._timeline.to(rect, countDuration, {"stroke": "orange", onStart: () => {
                 equals.tickBy(1);
            }});
        }

        this._equals = equals;
       // equals.css("margin-top", svgHeight / 2);
        //equals.css("margin-left", svgWidth / 2);
        //$("#snap-test").draggable();
    }

    go() {
        this._equals.value = "";
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
        $("#" + this._svgId).remove();
        $("#" + this._svgId + "-equals").remove();
    }

}
import { TweenMax, TimelineMax } from "gsap";
import { Snap } from "snap.svg";
import { RenderedEquals } from "app/js/renderedobjects";
import Utils from "app/js/animatorutils";
export default class ShortMultiplyAnimator {

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
        const firstOp = this._leftBox.find(".number-text").text();
        const secondOp = this._rightBox.find(".number-text").text();
        const svgWidth = 300;
        const svgHeight = 300;
        const svgId = this._svgId;

        const canvas = Snap(svgWidth, svgHeight);
        canvas.node.id = svgId;
        $(canvas.node).css({"margin-left": "-" + (svgWidth / 2 - this._container.width() * .6) + "px", "margin-top": "0.5em"});
        this._container.append(canvas.node);

        const squares = new Array(firstOp);

        //Position the squares
        const squareWidth = Math.min(Math.min(svgWidth, svgHeight) / Math.max(firstOp, secondOp), 32) * .75;
        const squareMargin = Math.min(Math.min(svgWidth, svgHeight) / Math.max(firstOp, secondOp), 32) * .25;
        const startLeft = (svgWidth - secondOp * (squareWidth + squareMargin)) / 2;
        for (let y = 0; y < firstOp; y++) {
            squares[y] = new Array(secondOp);
            for (let x = 0; x < secondOp; x++) {
                const square = Utils.drawSquare(canvas, (squareWidth + squareMargin) * x + startLeft,
                    (squareWidth + squareMargin) * y + 2 /*because stroke*/, squareWidth);
                squares[y][x] = "#" + (square.node.id = svgId + "-" + x + "-" + y);
            }
        }

        const actualWidth = (squareWidth + squareMargin) * secondOp;
        const actualHeight = (squareWidth + squareMargin) * firstOp;

        //Move the boxes
        this._timeline.to(this._leftBox, 1, {
            "margin-left":  -actualWidth / 2 - this._leftBox.width() / 2,
            "margin-top": actualHeight / 2 + this._leftBox.height() / 2,
            ease: Power1.easeInOut});
        this._timeline.to(this._rightBox, 1, {
            "margin-left": 0,
            "margin-top": actualHeight + this._rightBox.height() * 1.5,
            ease: Power1.easeInOut
        }, "-=1");
        const operator = this._container.find(".operation-text");
        this._timeline.to(operator, 1, {
            "margin-left": -actualWidth / 2 - operator.width() / 2,
            "margin-top": actualHeight + operator.width(),
            ease: Power1.easeInOut
        }, "-=1");

        //Fade in the squares
        for (let y = squares.length - 1; y >= 0; y--) {
            this._timeline.from(squares[y][0], 0.5, {delay: 0.5, opacity: 0, ease: Power4.easeNone});
            for (let x = 1; x < secondOp; x++) {
                this._timeline.from(squares[y][x], 0.5, {opacity: 0, ease: Power4.easeNone}, "-=0.5");
            }
        }

        //Fade in equals
        const equals = new RenderedEquals(svgId+"-equals", actualWidth / 2 + operator.width(), actualHeight / 2 + operator.width() * .75);
        const equalsDiv = equals.createElements(this._container);
        equalsDiv.css("opacity", 0);
        this._timeline.to(equalsDiv, 1, {opacity: 1, ease: Power1.easeInOut});

        this._timeline.addLabel("beforeCount");
        //Count the squares
        for (let y = squares.length - 1; y >= 0; y--) {
            for (let x = 0; x < secondOp; x++) {
                const rect = $(squares[y][x]).is("rect") ? $(squares[y][x]) : $(squares[y][x]).find("rect");
                this._timeline.set(rect, {delay: (x == 0 ? 0.5 : 0), "stroke-width": 2});
                this._timeline.to(rect, 0.1, {stroke: "orange", onStart: () => {
                    equals.tickBy(1);
                }});
            }
        }

        this._equals = equals;

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
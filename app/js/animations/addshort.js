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
        const firstOp = this._leftBox.find(".number-text").text();
        const secondOp = this._rightBox.find(".number-text").text();
        const svgWidth = 300;
        const svgHeight = 150;
        const svgId = this._svgId;

        const canvas = Snap(svgWidth, svgHeight);
        canvas.node.id = svgId;
        //console.log("-" + (svgWidth / 2 - this._container.width() / 2) + "px");
        $(canvas.node).css({"margin-left": "-" + (svgWidth / 2 - this._container.width() / 2) + "px", "margin-top": "0.5em"});
        this._container.append(canvas.node);

        const leftLine = svgWidth / 2 - 25;
        const rightLine = svgWidth / 2 + 25;

        // canvas.line(leftLine, 0, leftLine, svgHeight)
        //     .attr({
        //         stroke: "black",
        //         strokeWidth: 1,
        //         shapeRendering: "crispEdges"
        //     });
        // canvas.line(rightLine, 0, rightLine, svgHeight)
        //     .attr({
        //         stroke: "black",
        //         strokeWidth: 1,
        //         shapeRendering: "crispEdges"
        //     });
        /*const plusWidth = (rightLine - leftLine) - (rightLine - leftLine) / 2;
        const plus = canvas.path(
            "M".concat((svgWidth / 2) + " " + (svgHeight / 2 - plusWidth / 2))
            + "L".concat((svgWidth / 2) + " " + (svgHeight / 2 + plusWidth / 2))
            + "M".concat((svgWidth / 2 - plusWidth / 2) + " " + (svgHeight / 2))
            + "L".concat((svgWidth / 2 + plusWidth / 2) + " " + (svgHeight / 2))
        )  .attr({
            stroke: "#0074D9",
            strokeWidth: 3,
            shapeRendering: "crispEdges"
        });*/

        let squaresPerRow = 3;
        while (Math.max(firstOp, secondOp) > squaresPerRow * squaresPerRow)
        {
            squaresPerRow += 1;
        }

        const leftSquares = new Array(firstOp);
        const rightSquares = new Array(secondOp);
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
        const equals = new RenderedEquals(svgId+"-equals", svgWidth / 2 + plus.width(), svgHeight / 2 + plus.width() / 2);
        const equalsDiv = equals.createElements(this._container);
        equalsDiv.css("opacity", 0);

        //Move the boxes
        this._timeline.to(plus, 1, {"margin-top": svgHeight / 2, ease: Power1.easeInOut});
        //TODO: Get this 72 into a constants class. (It's 3 * the width of a single digit)
        this._timeline.to(this._leftBox, 1, {"margin-left": -leftLine / 2 - (72 - this._leftBox.width()) / 2, ease: Power1.easeInOut}, "-=1");
        this._timeline.to(this._rightBox, 1, {"margin-left": (svgWidth - rightLine) / 2 + (72 - this._rightBox.width()) * .5, ease: Power1.easeInOut}, "-=1");

        //Drop the squares
        const dropOverlap = Math.max(firstOp, secondOp) <= 9 ? "-=0.35" : "-=0.45";
        for (let i = 0; i < leftSquares.length; i++) {
            this._timeline.from(leftSquares[i], 0.5, {
                y: "-=200",
                ease: Power1.easeOut,
            }, dropOverlap);
        }
        this._timeline.from(rightSquares[0], 0.5, {
            y: "-=200",
            delay: 0.1,
            ease: Power1.easeOut
        });
        for (let i = 1; i < rightSquares.length; i++) {
            this._timeline.from(rightSquares[i], 0.5, {
                y: "-=200",
                ease: Power1.easeOut,
            }, dropOverlap);
        }

        this._timeline.to(equalsDiv, 1, {opacity: 1, ease: Power1.easeIn});
        
        //Count the squares
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
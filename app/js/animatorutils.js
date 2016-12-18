import { TweenMax, TimelineMax } from "gsap";

export default class Utils {

    static get numWidth() { return 24; }

    static get answerClass () { return "answer"; }
    static get carryClass() { return "carry"; }
    static get negativeClass() { return "negative"; }

    static addClass(element, newClass, duration = 0.6) {
        //noinspection JSUnresolvedVariable
        TweenMax.to(element, duration, {className: "+=" + newClass, ease: Power1.easeNone});
    }

    static removeClass(element, newClass, duration = 0.6) {
        //noinspection JSUnresolvedVariable
        TweenMax.to(element, duration, {className: "-=" + newClass, ease: Power1.easeNone});
    }

    static drawSquare(snap, x, y, width, drawPath = this.drawPlus) {
        const square = snap.rect(x, y, width, width)
            .attr({
                fill: "yellow",
                stroke: "black",
                strokeWidth: 1,
                shapeRendering: "crispEdges"
            });

        if (width > 15) {
            const sign = drawPath(snap, x, y, width);

            return snap.g().add(square, sign);
        }

        return square;
    }

    static insidesOn(square) {
        const path = $(square).find("path");
        path.css("opacity", 1);
    }
    static toggleInsides(square) {
        const path = $(square).find("path");

        if (path.css("opacity") === 0) path.css("opacity", 1);
        else path.css("opacity", 0);
    }

    static drawPlus(snap, x, y, width) {
        return snap.path(
            "M".concat((x + width / 2) + " " + (y + width / 4))
            + "L".concat((x + width / 2) + " " + (y + width - width / 4))
            + "M".concat((x + width / 4) + " " + (y + width / 2))
            + "L".concat((x + width - width / 4) + " " + (y + width / 2))
        ).attr({
            stroke: "red",
            strokeWidth: 1,
            shapeRendering: "crispEdges"
        });
    }

    static drawMinus(snap, x, y, width) {
        return snap.path(
            "M".concat((x + width / 4) + " " + (y + width / 2))
            + "L".concat((x + width - width / 4) + " " + (y + width / 2))
        ).attr({
            stroke: "blue",
            strokeWidth: 1,
            shapeRendering: "crispEdges"
        });
    }

    static individualNumberHtml(opArray, animation, op = "topOp") {
        let opSpans = [];

        const newHtml = opArray.reduce((prev, curr, currIndex, array) => {
            const id = animation._animationId + op + (array.length - currIndex);
            opSpans.unshift(`#${id}`);
            return `${prev}<span class='${animation._animationId}-operand' id='${id}'>${curr}</span>`;
        }, "");

        return {spans: opSpans, html: newHtml};
    }

    static positionTopBox(startPos, operand, box, numWidth, botBoxText, topBoxText, letterSpacing) {
         return startPos + operand.width() + (box.width() - box.outerWidth(true)) + numWidth +
             (Math.max(0, botBoxText.length - topBoxText.length) * (numWidth + letterSpacing));
    }

    static positionBotBox(startPos, operand, box, numWidth, botBoxText, topBoxText, letterSpacing) {
        return startPos - (box.outerWidth(true) - box.width()) + operand.width() + numWidth / 2 +
            (Math.max(0, topBoxText.length - botBoxText.length) * (numWidth + letterSpacing));
    }

    static intLength(num) {
        return num.toString().length;
    }
}
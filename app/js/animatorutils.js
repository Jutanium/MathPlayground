import { TweenMax, TimelineMax } from "gsap";

export default class Utils {   

    static addClass(element, newClass, duration = 0.6) {
        TweenMax.to(element, duration, {className: "+=" + newClass, ease:Power1.easeNone});
    }

    static removeClass(element, newClass, duration = 0.6) {
        TweenMax.to(element, duration, {className: "-=" + newClass, ease:Power1.easeNone});
    }

    static drawSquare(snap, x, y, width) {
        const square = snap.rect(x, y, width, width)
            .attr({
                fill: "yellow",
                stroke: "black",
                strokeWidth: 1,
                shapeRendering: "crispEdges"
            });
        if (width > 15) {
            const plus = snap.path(
                "M".concat((x + width / 2) + " " + (y + width / 4))
                + "L".concat((x + width / 2) + " " + (y + width - width / 4))
                + "M".concat((x + width / 4) + " " + (y + width / 2))
                + "L".concat((x + width - width / 4) + " " + (y + width / 2))
            ).attr({
                stroke: "red",
                strokeWidth: 1,
                shapeRendering: "crispEdges"
            });
            return snap.g().add(square, plus);
        }
        return square;
    }
}

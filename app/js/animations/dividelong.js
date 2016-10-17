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

        // Operators
        const firstOp = parseInt(this._leftBox.find(".number-text").text());
        const secondOp = parseInt(this._rightBox.find(".number-text").text());

        const divide = new RenderedObject(`${this._svgId}-divide`, 0, 0, "", "", false);
        const divideDiv = divide
            .createElements(this._container)
            .css({
                position: "absolute",
                "border-left": "1px solid black",
                "border-top": "1px solid black",
            });

        // Timeline
        this._timeline
            .to([this._leftBox, this._rightBox], .5, { top: numWidth })
            .to(this._rightBox, .5, { left: 100 })
            .add(() => divide.contents = this._leftBox, .5)
            .to(divideDiv, .5, { top: 100 })
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
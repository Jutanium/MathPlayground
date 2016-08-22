import { Power1, TweenMax, TimelineMax } from "gsap";
import { Snap } from "snap.svg";
import { RenderedEquals } from "app/js/renderedobjects";
import Utils from "app/js/animatorutils";

export default class LongMultiplyAnimator {
    constructor(containerElement) {
        const elem = containerElement;

        this._container = elem;
        this._leftBox = elem.children(".snapbox-left");
        this._rightBox = elem.children(".snapbox-right");
        this._timeline = new TimelineMax();
        this._svgId = this._container.attr("id") + "-animation";
    }

    drawGo() {
        if (this._drawn) {
            this.go();
            
            return;
        }
    }
}
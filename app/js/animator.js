import { TweenMax, TimelineMax } from "gsap";

export class Animator {

    static colorTween(element, color, onComplete, duration = 0.5, ) {
        TweenMax.to(element, duration,
            {color: color, ease: Power1.easeNone, onComplete: onComplete});
    }

    static addClass(element, newClass, duration = 0.6) {
        TweenMax.to(element, duration, {className: "+=" + newClass, ease:Power1.easeNone});
    }

    static removeClass(element, newClass, duration = 0.6) {
        TweenMax.to(element, duration, {className: "-=" + newClass, ease:Power1.easeNone});
    }
}
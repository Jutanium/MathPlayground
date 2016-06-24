/**
 * Created by Dan Jutan on 6/22/2016.
 */
import { TweenMax, TimelineMax } from "gsap";
import { Snap } from "snap.svg";
import * as Objects from "app/js/renderedobjects";
import Utils from "app/js/animatorutils";
export default class LongAddAnimator {
    constructor (containerElement) {
        this._container = containerElement;
        this._timeline = new TimelineMax();
        this._animationId = this._container.attr("id") + "-animation";
    }

    drawGo() {
        if (this._drawn)
        {
            this.go();
            return;
        }
        this._drawn = true;
        const leftBox = this._container.children(".snapbox-left");
        const rightBox = this._container.children(".snapbox-right");

        const firstOpText = leftBox.find(".number-text").text();
        const secondOpText = rightBox.find(".number-text").text();
        const firstOp = parseInt(firstOpText);
        const secondOp = parseInt(secondOpText);
        const firstOpArray = firstOpText.split("").map((c) => parseInt(c));
        const secondOpArray= secondOpText.split("").map((c) => parseInt(c));

        let firstOpSpans = new Array();
        const newLeftHtml = firstOpArray.reduce( (prev, curr, currIndex, array) => {
            const id = this._animationId+"-firstOp-"+(array.length - currIndex);
            firstOpSpans.unshift("#" + id);
           return prev + "<span class='"+this._animationId + "-operand' id='" + id + "'>" + curr + "</span>";
        }, "");
        console.log(firstOpSpans);
        let secondOpSpans = new Array();
        const newRightHtml = secondOpArray.reduce( (prev, curr, currIndex, array) => {
            const id = this._animationId+"-secondOp-"+(array.length - currIndex);
            secondOpSpans.unshift("#" + id);
            return prev + "<span class='"+this._animationId + "-operand' id='"+id +"'>" + curr + "</span>";
        }, "");
        console.log(secondOpSpans);

        leftBox.find(".number-text").html(newLeftHtml);
        rightBox.find(".number-text").html(newRightHtml);
        /*const svgWidth = (firstOp.length * 2 + 1) * 24;
        const svgHeight = 200;
        const svgId = this._svgId;

        const canvas = Snap(svgWidth, svgHeight);
        canvas.node.id = svgId;
        $(canvas.node).css({"margin-left": "-" + (svgWidth / 2 - this._container.width() / 2), "margin-top": "0.5em", border: '1px solid black'});
        this._container.append(canvas.node);*/
        const letterSpacing = 10;
        this._timeline.to(leftBox, 1, {
            "margin-left": parseInt(rightBox.css("margin-left")) - (firstOpText.length - secondOpText.length) * 24
                - parseInt(leftBox.css("left")) - (firstOp > secondOp ? letterSpacing : -letterSpacing),
            "margin-top": "+=" + rightBox.height() * 1.2,
        });

        const plus = this._container.find(".operation-text");
        this._timeline.to(plus, 1, {
            "margin-left": "-=" + /*((firstOp + secondOp).toString().length - 2) * */ 24,
            "margin-top": "+=" + rightBox.height() * 1.2
        }, "-=1");

        $("." + this._animationId + "-operand").css("autoRound", false);
        this._timeline.to("." + this._animationId + "-operand", 0.5, {"padding-right": letterSpacing}, "-=0.2");
        /*this._timeline.to(leftBox, 1, {"letter-spacing": letterSpacing + "px"});
        this._timeline.to(rightBox, 1, {
            "letter-spacing": letterSpacing + "px"
        }, "-=1");*/
        const equals = new Objects.RenderedEquals(this._animationId+"-equals", -24, rightBox.height() * 2.4);
        const equalsDiv = equals.createElements(this._container);
        equalsDiv.css("opacity", 0);
        this._timeline.to(equalsDiv, 1, {opacity: 1, ease: Power1.easeInOut}, "-=.75");

        this._timeline.to(firstOpSpans[0] + "," + secondOpSpans[0], 0.5, {color: "red"});
        const test = new Objects.RenderedObject("test",
            0, leftBox.height() * 1.5,
            "small",
            secondOpArray[0] + "+" + firstOpArray[0] + "=" + secondOpArray[0]+firstOpArray[0],
            false
        );
        test.createElements(this._container);

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
//main.js
"use strict";

var _testy = require('testy');

var MQ = MathQuill.getInterface(2);
var magicBox = MQ.MathField(document.getElementById('magic-box'), {
    handlers: {
        edit: onBoxEdit,
        enter: onBoxEnter
    }
});

function onBoxEdit() {}

function onBoxEnter() {}
alert((0, _testy.square)(11));
//# sourceMappingURL=main.js.map
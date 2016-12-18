!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1","2"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
$__System.register("3", ["4", "5"], function (_export) {
    var _createClass, _classCallCheck, Parser;

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }],
        execute: function () {
            "use strict";

            Parser = (function () {
                function Parser(controller) {
                    _classCallCheck(this, Parser);

                    this._controller = controller;
                }

                _createClass(Parser, [{
                    key: "parseAndCreate",
                    value: function parseAndCreate(text) {
                        console.log(text);
                        var add = /(\d+)*\+(\d+)*/.exec(text);
                        var subtract = /(\d+)*\-(\d+)*/.exec(text);
                        var multiply = /(\d+)*\*(\d+)*/.exec(text);
                        var divide = /(?:\((\d+)\))*\/(?:\((\d+)\))*/.exec(text);
                        var number = /(\d+)/.exec(text);

                        if (add) {
                            var params = {};
                            if (add[1]) params.attachLeft = this._controller.createNumber(add[1]);
                            if (add[2]) params.attachRight = this._controller.createNumber(add[2]);
                            return this._controller.createAdd(params);
                        } else if (subtract) {
                            var params = {};
                            if (subtract[1]) params.attachLeft = this._controller.createNumber(subtract[1]);
                            if (subtract[2]) params.attachRight = this._controller.createNumber(subtract[2]);
                            return this._controller.createSubtract(params);
                        } else if (multiply) {
                            var params = {};
                            if (multiply[1]) params.attachLeft = this._controller.createNumber(multiply[1]);
                            if (multiply[2]) params.attachRight = this._controller.createNumber(multiply[2]);
                            return this._controller.createMultiply(params);
                        } else if (divide) {
                            var params = {};
                            if (divide[1]) params.attachLeft = this._controller.createNumber(divide[1]);
                            if (divide[2]) params.attachRight = this._controller.createNumber(divide[2]);
                            return this._controller.createDivide(params);
                        } else if (number) {
                            return this._controller.createNumber(number[0]);
                        }
                    }
                }]);

                return Parser;
            })();

            _export("default", Parser);
        }
    };
});
$__System.registerDynamic("6", ["7"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var _Object$getOwnPropertyDescriptor = $__require('7')["default"];
  exports["default"] = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      _again = false;
      if (object === null)
        object = Function.prototype;
      var desc = _Object$getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          desc = parent = undefined;
          continue _function;
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("8", ["9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('9');
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
  return module.exports;
});

$__System.registerDynamic("a", ["8"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = {
    "default": $__require('8'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("b", ["9", "c", "d", "e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var getDesc = $__require('9').getDesc,
      isObject = $__require('c'),
      anObject = $__require('d');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('e')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  return module.exports;
});

$__System.registerDynamic("f", ["10", "b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('10');
  $export($export.S, 'Object', {setPrototypeOf: $__require('b').set});
  return module.exports;
});

$__System.registerDynamic("11", ["f", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('f');
  module.exports = $__require('12').Object.setPrototypeOf;
  return module.exports;
});

$__System.registerDynamic("13", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = {
    "default": $__require('11'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("14", ["a", "13"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var _Object$create = $__require('a')["default"];
  var _Object$setPrototypeOf = $__require('13')["default"];
  exports["default"] = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = _Object$create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("15", ["10", "12", "16"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('10'),
      core = $__require('12'),
      fails = $__require('16');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  return module.exports;
});

$__System.registerDynamic("17", ["18", "15"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var toIObject = $__require('18');
  $__require('15')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor) {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
  return module.exports;
});

$__System.registerDynamic("19", ["9", "17"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('9');
  $__require('17');
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("7", ["19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = {
    "default": $__require('19'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("1a", ["7"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var _Object$getOwnPropertyDescriptor = $__require('7')["default"];
  exports["default"] = function set(object, property, value, receiver) {
    var desc = _Object$getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);
      if (parent !== null) {
        set(parent, property, value, receiver);
      }
    } else if ("value" in desc && desc.writable) {
      desc.value = value;
    } else {
      var setter = desc.set;
      if (setter !== undefined) {
        setter.call(receiver, value);
      }
    }
    return value;
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("1b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  "format cjs";
  return module.exports;
});

$__System.registerDynamic("1c", ["12", "9", "1d", "1e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var core = $__require('12'),
      $ = $__require('9'),
      DESCRIPTORS = $__require('1d'),
      SPECIES = $__require('1e')('species');
  module.exports = function(KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES])
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  return module.exports;
});

$__System.registerDynamic("1f", ["9", "20", "21", "e", "22", "23", "24", "25", "26", "27", "28", "c", "1c", "1d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('9'),
      hide = $__require('20'),
      redefineAll = $__require('21'),
      ctx = $__require('e'),
      strictNew = $__require('22'),
      defined = $__require('23'),
      forOf = $__require('24'),
      $iterDefine = $__require('25'),
      step = $__require('26'),
      ID = $__require('27')('id'),
      $has = $__require('28'),
      isObject = $__require('c'),
      setSpecies = $__require('1c'),
      DESCRIPTORS = $__require('1d'),
      isExtensible = Object.isExtensible || isObject,
      SIZE = DESCRIPTORS ? '_s' : 'size',
      id = 0;
  var fastKey = function(it, create) {
    if (!isObject(it))
      return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!$has(it, ID)) {
      if (!isExtensible(it))
        return 'F';
      if (!create)
        return 'E';
      hide(it, ID, ++id);
    }
    return 'O' + it[ID];
  };
  var getEntry = function(that, key) {
    var index = fastKey(key),
        entry;
    if (index !== 'F')
      return that._i[index];
    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key)
        return entry;
    }
  };
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function(that, iterable) {
        strictNew(that, C, NAME);
        that._i = $.create(null);
        that._f = undefined;
        that._l = undefined;
        that[SIZE] = 0;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        clear: function clear() {
          for (var that = this,
              data = that._i,
              entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p)
              entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        'delete': function(key) {
          var that = this,
              entry = getEntry(that, key);
          if (entry) {
            var next = entry.n,
                prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev)
              prev.n = next;
            if (next)
              next.p = prev;
            if (that._f == entry)
              that._f = next;
            if (that._l == entry)
              that._l = prev;
            that[SIZE]--;
          }
          return !!entry;
        },
        forEach: function forEach(callbackfn) {
          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
              entry;
          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this);
            while (entry && entry.r)
              entry = entry.p;
          }
        },
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      if (DESCRIPTORS)
        $.setDesc(C.prototype, 'size', {get: function() {
            return defined(this[SIZE]);
          }});
      return C;
    },
    def: function(that, key, value) {
      var entry = getEntry(that, key),
          prev,
          index;
      if (entry) {
        entry.v = value;
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          k: key,
          v: value,
          p: prev = that._l,
          n: undefined,
          r: false
        };
        if (!that._f)
          that._f = entry;
        if (prev)
          prev.n = entry;
        that[SIZE]++;
        if (index !== 'F')
          that._i[index] = entry;
      }
      return that;
    },
    getEntry: getEntry,
    setStrong: function(C, NAME, IS_MAP) {
      $iterDefine(C, NAME, function(iterated, kind) {
        this._t = iterated;
        this._k = kind;
        this._l = undefined;
      }, function() {
        var that = this,
            kind = that._k,
            entry = that._l;
        while (entry && entry.r)
          entry = entry.p;
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          that._t = undefined;
          return step(1);
        }
        if (kind == 'keys')
          return step(0, entry.k);
        if (kind == 'values')
          return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
      setSpecies(NAME);
    }
  };
  return module.exports;
});

$__System.registerDynamic("21", ["29"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var redefine = $__require('29');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  return module.exports;
});

$__System.registerDynamic("22", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("2a", ["9", "2b", "10", "16", "20", "21", "24", "22", "c", "2c", "1d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('9'),
      global = $__require('2b'),
      $export = $__require('10'),
      fails = $__require('16'),
      hide = $__require('20'),
      redefineAll = $__require('21'),
      forOf = $__require('24'),
      strictNew = $__require('22'),
      isObject = $__require('c'),
      setToStringTag = $__require('2c'),
      DESCRIPTORS = $__require('1d');
  module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME],
        C = Base,
        ADDER = IS_MAP ? 'set' : 'add',
        proto = C && C.prototype,
        O = {};
    if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function() {
      new C().entries().next();
    }))) {
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
    } else {
      C = wrapper(function(target, iterable) {
        strictNew(target, C, NAME);
        target._c = new Base;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, target[ADDER], target);
      });
      $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','), function(KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear'))
          hide(C.prototype, KEY, function(a, b) {
            if (!IS_ADDER && IS_WEAK && !isObject(a))
              return KEY == 'get' ? undefined : false;
            var result = this._c[KEY](a === 0 ? 0 : a, b);
            return IS_ADDER ? this : result;
          });
      });
      if ('size' in proto)
        $.setDesc(C.prototype, 'size', {get: function() {
            return this._c.size;
          }});
    }
    setToStringTag(C, NAME);
    O[NAME] = C;
    $export($export.G + $export.W + $export.F, O);
    if (!IS_WEAK)
      common.setStrong(C, NAME, IS_MAP);
    return C;
  };
  return module.exports;
});

$__System.registerDynamic("2d", ["1f", "2a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var strong = $__require('1f');
  $__require('2a')('Map', function(get) {
    return function Map() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    get: function get(key) {
      var entry = strong.getEntry(this, key);
      return entry && entry.v;
    },
    set: function set(key, value) {
      return strong.def(this, key === 0 ? 0 : key, value);
    }
  }, strong, true);
  return module.exports;
});

$__System.registerDynamic("2e", ["d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var anObject = $__require('d');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});

$__System.registerDynamic("2f", ["30", "1e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var Iterators = $__require('30'),
      ITERATOR = $__require('1e')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  return module.exports;
});

$__System.registerDynamic("31", ["32"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var toInteger = $__require('32'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});

$__System.registerDynamic("24", ["e", "2e", "2f", "d", "31", "33"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var ctx = $__require('e'),
      call = $__require('2e'),
      isArrayIter = $__require('2f'),
      anObject = $__require('d'),
      toLength = $__require('31'),
      getIterFn = $__require('33');
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  return module.exports;
});

$__System.registerDynamic("34", ["24", "35"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var forOf = $__require('24'),
      classof = $__require('35');
  module.exports = function(NAME) {
    return function toJSON() {
      if (classof(this) != NAME)
        throw TypeError(NAME + "#toJSON isn't generic");
      var arr = [];
      forOf(this, false, arr.push, arr);
      return arr;
    };
  };
  return module.exports;
});

$__System.registerDynamic("36", ["10", "34"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('10');
  $export($export.P, 'Map', {toJSON: $__require('34')('Map')});
  return module.exports;
});

$__System.registerDynamic("37", ["1b", "38", "39", "2d", "36", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('1b');
  $__require('38');
  $__require('39');
  $__require('2d');
  $__require('36');
  module.exports = $__require('12').Map;
  return module.exports;
});

$__System.registerDynamic("3a", ["37"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = {
    "default": $__require('37'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("3b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function() {};
  return module.exports;
});

$__System.registerDynamic("26", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  return module.exports;
});

$__System.registerDynamic("3c", ["3d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var cof = $__require('3d');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

$__System.registerDynamic("18", ["3c", "23"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var IObject = $__require('3c'),
      defined = $__require('23');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("3e", ["3b", "26", "30", "18", "25"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var addToUnscopables = $__require('3b'),
      step = $__require('26'),
      Iterators = $__require('30'),
      toIObject = $__require('18');
  module.exports = $__require('25')(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  return module.exports;
});

$__System.registerDynamic("39", ["3e", "30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('3e');
  var Iterators = $__require('30');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  return module.exports;
});

$__System.registerDynamic("32", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});

$__System.registerDynamic("23", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("3f", ["32", "23"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var toInteger = $__require('32'),
      defined = $__require('23');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});

$__System.registerDynamic("40", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = true;
  return module.exports;
});

$__System.registerDynamic("41", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("e", ["41"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var aFunction = $__require('41');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

$__System.registerDynamic("10", ["2b", "12", "e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('2b'),
      core = $__require('12'),
      ctx = $__require('e'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});

$__System.registerDynamic("29", ["20"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('20');
  return module.exports;
});

$__System.registerDynamic("42", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});

$__System.registerDynamic("16", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("1d", ["16"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = !$__require('16')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

$__System.registerDynamic("20", ["9", "42", "1d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('9'),
      createDesc = $__require('42');
  module.exports = $__require('1d') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});

$__System.registerDynamic("43", ["9", "42", "2c", "20", "1e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('9'),
      descriptor = $__require('42'),
      setToStringTag = $__require('2c'),
      IteratorPrototype = {};
  $__require('20')(IteratorPrototype, $__require('1e')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});

$__System.registerDynamic("28", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("2c", ["9", "28", "1e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var def = $__require('9').setDesc,
      has = $__require('28'),
      TAG = $__require('1e')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  return module.exports;
});

$__System.registerDynamic("25", ["40", "10", "29", "20", "28", "30", "43", "2c", "9", "1e"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('40'),
      $export = $__require('10'),
      redefine = $__require('29'),
      hide = $__require('20'),
      has = $__require('28'),
      Iterators = $__require('30'),
      $iterCreate = $__require('43'),
      setToStringTag = $__require('2c'),
      getProto = $__require('9').getProto,
      ITERATOR = $__require('1e')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});

$__System.registerDynamic("38", ["3f", "25"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $at = $__require('3f')(true);
  $__require('25')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});

$__System.registerDynamic("c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

$__System.registerDynamic("d", ["c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var isObject = $__require('c');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("3d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});

$__System.registerDynamic("35", ["3d", "1e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var cof = $__require('3d'),
      TAG = $__require('1e')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  return module.exports;
});

$__System.registerDynamic("44", ["2b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('2b'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});

$__System.registerDynamic("27", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});

$__System.registerDynamic("2b", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("1e", ["44", "27", "2b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var store = $__require('44')('wks'),
      uid = $__require('27'),
      Symbol = $__require('2b').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  return module.exports;
});

$__System.registerDynamic("30", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = {};
  return module.exports;
});

$__System.registerDynamic("33", ["35", "1e", "30", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var classof = $__require('35'),
      ITERATOR = $__require('1e')('iterator'),
      Iterators = $__require('30');
  module.exports = $__require('12').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});

$__System.registerDynamic("12", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("45", ["d", "33", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var anObject = $__require('d'),
      get = $__require('33');
  module.exports = $__require('12').getIterator = function(it) {
    var iterFn = get(it);
    if (typeof iterFn != 'function')
      throw TypeError(it + ' is not iterable!');
    return anObject(iterFn.call(it));
  };
  return module.exports;
});

$__System.registerDynamic("46", ["39", "38", "45"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('39');
  $__require('38');
  module.exports = $__require('45');
  return module.exports;
});

$__System.registerDynamic("47", ["46"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = {
    "default": $__require('46'),
    __esModule: true
  };
  return module.exports;
});

$__System.register("48", ["4", "5", "49", "4c", "4a", "4b"], function (_export) {
    var _createClass, _classCallCheck, Snap, Power1, TweenMax, TimelineMax, RenderedEquals, Utils, ShortAddAnimator;

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_3) {
            Snap = _3.Snap;
        }, function (_c) {
            Power1 = _c.Power1;
            TweenMax = _c.TweenMax;
            TimelineMax = _c.TimelineMax;
        }, function (_a) {
            RenderedEquals = _a.RenderedEquals;
        }, function (_b) {
            Utils = _b["default"];
        }],
        execute: function () {
            "use strict";

            ShortAddAnimator = (function () {
                function ShortAddAnimator(containerElement) {
                    _classCallCheck(this, ShortAddAnimator);

                    var elem = containerElement;
                    this._container = elem;
                    this._leftBox = elem.children(".snapbox-left");
                    this._rightBox = elem.children(".snapbox-right");
                    this._timeline = new TimelineMax();
                    this._svgId = this._container.attr("id") + "-animation";
                }

                _createClass(ShortAddAnimator, [{
                    key: "drawGo",
                    value: function drawGo() {
                        if (this._drawn) {
                            this.go();
                            return;
                        }
                        this._drawn = true;
                        var firstOp = parseInt(this._leftBox.find(".number-text").text());
                        var secondOp = parseInt(this._rightBox.find(".number-text").text());
                        var allZero = firstOp === 0 && secondOp === 0;
                        var svgWidth = 300;
                        var svgHeight = svgWidth / 2;
                        var svgId = this._svgId;

                        var squaresPerRow = 3;
                        while (Math.max(firstOp, secondOp) > squaresPerRow * squaresPerRow) {
                            squaresPerRow += 1;
                        }

                        var numWidth = Utils.numWidth;

                        var plus = this._container.find(".operation-text");

                        var canvas = Snap(svgWidth, svgHeight);
                        canvas.node.id = svgId;
                        //console.log("-" + (svgWidth / 2 - this._container.width() / 2) + "px");
                        $(canvas.node).css({
                            position: "absolute",
                            top: "50px",
                            left: "-" + (svgWidth / 2 - numWidth * 2.5) + "px"
                        });
                        this._container.append(canvas.node);

                        var lineGap = 25;
                        var leftLine = svgWidth / 2 - lineGap;
                        var rightLine = svgWidth / 2 + lineGap;

                        var leftSquares = new Array(firstOp);
                        var rightSquares = new Array(secondOp);
                        //console.log(secondOp, rightSquares.length, new Array(0).length, rightSquares, parseInt(secondOp));
                        var squareWidth = leftLine / squaresPerRow * .75;
                        var squareMargins = leftLine / squaresPerRow * .25;

                        //Position the squares
                        for (var i = 0; i < firstOp; i++) {
                            var squareX = i % squaresPerRow * (squareWidth + squareMargins) + squareMargins / 2;
                            var squareY = Math.floor(i / squaresPerRow) * (squareWidth + squareMargins) + squareMargins / 2;
                            var square = Utils.drawSquare(canvas, squareX, squareY, squareWidth);
                            leftSquares[i] = "#" + (square.node.id = svgId + "-left-" + i);
                        }
                        for (var i = 0; i < secondOp; i++) {
                            var squareX = i % squaresPerRow * (squareWidth + squareMargins) + squareMargins / 2 + rightLine;
                            var squareY = Math.floor(i / squaresPerRow) * (squareWidth + squareMargins) + squareMargins / 2;
                            var square = Utils.drawSquare(canvas, squareX, squareY, squareWidth);
                            rightSquares[i] = "#" + (square.node.id = svgId + "-right-" + i);
                        }

                        var equalsX = this._rightBox.position().left + this._rightBox.outerWidth(true) + plus.width() / 2;
                        var equalsY = numWidth / 2;
                        if (!allZero) {
                            equalsX = svgWidth / 2 + lineGap * 3;
                            equalsY = svgHeight / 2 + plus.width() * 3 / 4;
                        }
                        var equals = new RenderedEquals(svgId + "-equals", equalsX, equalsY);
                        this._equals = equals;
                        var equalsDiv = equals.createElements(this._container);
                        equalsDiv.css({ "opacity": 0 });

                        //Move the boxes
                        if (!allZero) {
                            this._timeline.to(plus, 1, { "position": "relative", "top": svgHeight / 2 + plus.width() / 3, ease: Power1.easeInOut });
                            this._timeline.to(this._leftBox, 1, {
                                "left": -leftLine / 3 + numWidth / 4,
                                ease: Power1.easeInOut
                            }, "-=1");
                            this._timeline.to(this._rightBox, 1, {
                                "left": rightLine / 3 - numWidth / 4,
                                ease: Power1.easeInOut
                            }, "-=1");
                        }

                        //Drop the squares
                        var dropOverlap = Math.max(firstOp, secondOp) <= 9 ? "-=0.35" : "-=0.45";

                        this._timeline.to(this._leftBox.find(".number-container"), 0.5, { className: "+=dropshadow" });

                        for (var i = 0; i < leftSquares.length; i++) {
                            this._timeline.from(leftSquares[i], 0.5, {
                                y: "-=200",
                                ease: Power1.easeOut
                            }, dropOverlap);
                        }

                        this._timeline.to(this._leftBox.find(".number-container"), 0.5, { className: "-=dropshadow" });
                        this._timeline.to(this._rightBox.find(".number-container"), 0.5, { className: "+=dropshadow" });

                        if (rightSquares.length > 0) {
                            this._timeline.from(rightSquares[0], 0.5, {
                                y: "-=200",
                                delay: 0.1,
                                ease: Power1.easeOut
                            });
                        }

                        for (var i = 1; i < rightSquares.length; i++) {
                            this._timeline.from(rightSquares[i], 0.5, {
                                y: "-=200",
                                ease: Power1.easeOut
                            }, dropOverlap);
                        }

                        this._timeline.to(this._rightBox.find(".number-container"), 0.5, { className: "-=dropshadow" });

                        if (allZero) {
                            this._timeline.call(function () {
                                return equals.value = 0;
                            });
                        }
                        this._timeline.to(equalsDiv, 1, { opacity: 1, ease: Power1.easeIn });

                        //Count the squares
                        this._timeline.addLabel("beforeCount");

                        var countDuration = 3.6 / Math.max(9, Math.max(firstOp, secondOp)); //Because this arbitrary number looks good (3.6 / 9 = .4 which also looks good). I could change it.
                        for (var i = 0; i < leftSquares.length; i++) {
                            var rect = $(leftSquares[i]).is("rect") ? $(leftSquares[i]) : $(leftSquares[i]).find("rect");
                            this._timeline.set(rect, { "stroke-width": 2 });
                            this._timeline.to(rect, countDuration, {
                                "stroke": "orange", onStart: function onStart() {
                                    equals.tickBy(1);
                                }
                            });
                        }

                        for (var i = 0; i < rightSquares.length; i++) {
                            console.log(rightSquares.length);
                            var rect = $(rightSquares[i]).is("rect") ? $(rightSquares[i]) : $(rightSquares[i]).find("rect");
                            this._timeline.set(rect, { "stroke-width": 2 });
                            this._timeline.to(rect, countDuration, {
                                "stroke": "orange", onStart: function onStart() {
                                    equals.tickBy(1);
                                }
                            });
                        }
                    }
                }, {
                    key: "go",
                    value: function go() {
                        this._equals.value = "";
                        this._timeline.timeScale(1);
                        this._timeline.play(0);
                    }
                }, {
                    key: "goAway",
                    value: function goAway() {
                        if (this._drawn) {
                            if (this._timeline.time() > this._timeline.getLabelTime("beforeCount")) this._timeline.seek("beforeCount");
                            this._timeline.reverse();
                            this._timeline.timeScale(16);
                        }
                    }
                }, {
                    key: "removeElements",
                    value: function removeElements() {
                        $("#" + this._svgId).remove();
                        $("#" + this._svgId + "-equals").remove();
                    }
                }]);

                return ShortAddAnimator;
            })();

            _export("default", ShortAddAnimator);
        }
    };
});
$__System.register("2", ["4", "5", "49", "4c", "4a", "4b"], function (_export) {
    var _createClass, _classCallCheck, Snap, Power1, TweenMax, TimelineMax, RenderedObject, RenderedNumber, RenderedEquals, Utils, LongAddAnimator;

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_3) {
            Snap = _3.Snap;
        }, function (_c) {
            Power1 = _c.Power1;
            TweenMax = _c.TweenMax;
            TimelineMax = _c.TimelineMax;
        }, function (_a) {
            RenderedObject = _a.RenderedObject;
            RenderedNumber = _a.RenderedNumber;
            RenderedEquals = _a.RenderedEquals;
        }, function (_b) {
            Utils = _b["default"];
        }],
        execute: function () {
            "use strict";

            LongAddAnimator = (function () {
                function LongAddAnimator(containerElement) {
                    _classCallCheck(this, LongAddAnimator);

                    this._container = containerElement;
                    this._timeline = new TimelineMax();
                    this._animationId = this._container.attr("id") + "-animation";
                    this._toRemove = [];
                    this._topBox = this._container.children(".snapbox-left");
                    this._botBox = this._container.children(".snapbox-right");

                    //For restoring later
                    this._topNumber = this._topBox.children(".number-container");
                    this._topHtml = this._topNumber.html();
                    this._botNumber = this._botBox.children(".number-container");
                    this._botHtml = this._botNumber.html();
                }

                _createClass(LongAddAnimator, [{
                    key: "drawGo",
                    value: function drawGo() {
                        if (this._drawn) {
                            this.go();
                            return;
                        }
                        this._drawn = true;

                        var topBox = this._topBox;
                        var botBox = this._botBox;
                        var firstOpText = topBox.find(".number-text").text();
                        var secondOpText = botBox.find(".number-text").text();

                        var firstOp = parseInt(firstOpText);
                        var secondOp = parseInt(secondOpText);

                        var biggerOpLength = Math.max(firstOpText.length, secondOpText.length);

                        var firstOpArray = firstOpText.split("").map(function (c) {
                            return parseInt(c);
                        });
                        var secondOpArray = secondOpText.split("").map(function (c) {
                            return parseInt(c);
                        });
                        var firstOpReversed = firstOpArray.slice().reverse();
                        var secondOpReversed = secondOpArray.slice().reverse();

                        var topOpData = Utils.individualNumberHtml(firstOpArray, this);
                        var firstOpSpans = topOpData.spans;
                        var newLeftHtml = topOpData.html;

                        var botOpData = Utils.individualNumberHtml(secondOpArray, this, "botOp");
                        var secondOpSpans = botOpData.spans;
                        var newRightHtml = botOpData.html;

                        var addSets = firstOp > secondOp ? firstOpReversed.map(function (currentValue, index) {
                            var array = [];
                            if (secondOpReversed[index] != null) array.push(secondOpReversed[index]);
                            array.push(currentValue);
                            return array;
                        }) : secondOpReversed.map(function (currentValue, index) {
                            var array = [];
                            array.push(currentValue);
                            if (firstOpReversed[index] != null) array.push(firstOpReversed[index]);
                            return array;
                        });

                        console.log(addSets);

                        topBox.find(".number-text").html(newLeftHtml);
                        botBox.find(".number-text").html(newRightHtml);

                        var numWidth = Utils.numWidth;

                        var heightMultiplier = 1.5;
                        var letterSpacing = 10;

                        var leftLine = 0;

                        var plus = this._container.find(".operation-text");
                        //If AB + CD = XYZ, we need to move the plus and equals over to account for the new digit.
                        var plusLeft = leftLine - (String(firstOp + secondOp).length - biggerOpLength) * (numWidth + letterSpacing);

                        var equals = new RenderedEquals(this._animationId + "-equals", plusLeft, botBox.height() * heightMultiplier * 2);
                        var equalsDiv = equals.createElements(this._container);
                        equalsDiv.css("opacity", 0);
                        this._toRemove.push(equalsDiv);

                        var side = new RenderedObject(this._animationId + "-side", leftLine + plus.width() + (biggerOpLength + 1) * (numWidth + letterSpacing), botBox.height() * .75, "small", "<span id='op'><span id='carryOp'></span>" + "<span id='leftOp'></span><span id='plus'>+</span><span id='rightOp'>" + "</span></span><span id='equals'>=</span>", false);

                        side.createElements(this._container);
                        side.containerDiv.css({
                            "font-size": "2em",
                            "display": "inline-block",
                            "position": "absolute",
                            "letter-spacing": "10px"
                        });
                        this._toRemove.push(side.containerDiv);

                        var sideOp = side.containerDiv.find("#op");
                        var sideCarry = side.containerDiv.find("#carryOp");
                        var sideLeft = side.containerDiv.find("#leftOp");
                        var sideRight = side.containerDiv.find("#rightOp");
                        var sidePlus = side.containerDiv.find("#plus");
                        var sideEquals = side.containerDiv.find("#equals");

                        sideCarry.css("color", "#FFC300");
                        sideLeft.css("color", "red");
                        sideRight.css("color", "red");
                        sidePlus.css("font-weight", "bold");

                        //Timeline time!
                        //THESE NEXT TWO POSITIONS TOOK DAYS TO FIGURE OUT they are responsible for moving things over depending
                        //on which number has more digits and by how much. Margins fluck slit up, which is why I have expressions like
                        //box.width() - box.outerWidth(true), which returns the margin
                        this._timeline.to(topBox, 1, {
                            "position": "absolute",
                            "left": Utils.positionTopBox(leftLine, plus, topBox, numWidth, secondOpText, firstOpText, letterSpacing),
                            "top": numWidth * 3
                        });
                        this._timeline.to(botBox, 1, {
                            "left": Utils.positionBotBox(leftLine, plus, botBox, numWidth, secondOpText, firstOpText, letterSpacing)
                        }, "-=1");
                        //Move plus down next to big box
                        this._timeline.to(plus, 1, {
                            "position": "absolute",
                            "left": plusLeft,
                            "top": botBox.height() * heightMultiplier
                        }, "-=1");

                        //Animate padding (a bit choppy unfortunately, not sure if autoRound makes a difference).
                        $("." + this._animationId + "-operand").css("autoRound", false);

                        this._timeline.to("." + this._animationId + "-operand", 0.5, { "padding-right": letterSpacing }, "-=0.2");
                        //Fade in big equals
                        this._timeline.to(equalsDiv, 1, { opacity: 1, ease: Power1.easeInOut }, "-=.75");

                        var answerNumbers = [];

                        var lastCarried = undefined;

                        for (var i = 0; i < addSets.length; i++) {
                            var addSet = addSets[i];

                            if (addSet.length === 1) {
                                //If there's nothing to add to, just move the number down.
                                var _top = firstOpText.length > secondOpText.length ? botBox.height() * heightMultiplier : 0;

                                var copy = new RenderedNumber(this._animationId + "-side-answerLast-" + i, leftLine + plus.width() + numWidth / 2 + (biggerOpLength - i - 1) * (numWidth + letterSpacing), _top, addSet[0], false);
                                copy.createElements(this._container).css({
                                    "opacity": 0
                                }).addClass(Utils.answerClass);
                                this._timeline.to(copy.containerDiv, 1, {
                                    opacity: 1,
                                    top: botBox.height() * heightMultiplier * 2,
                                    ease: Power1.easeOut
                                });
                                this._toRemove.push(copy);
                                continue;
                            }

                            var showPlus = true;
                            if (lastCarried) {
                                this._timeline.set(sideCarry, { "text": String(addSet[addSet.length - 1]) + "+" });
                                this._timeline.set(sideLeft, { "text": String(addSet[addSet.length - 2]) });
                                if (addSet.length === 3) this._timeline.set(sideRight, { "text": String(addSet[addSet.length - 3]) });else if (addSet.length === 2) {
                                    showPlus = false;
                                    this._timeline.set([sidePlus, sideRight], { "display": "none" });
                                }
                            } else {
                                this._timeline.set(sideLeft, { "text": String(addSet[addSet.length - 1]) });
                                this._timeline.set(sideRight, { "text": String(addSet[addSet.length - 2]) });
                            }

                            console.log(addSet);

                            var sum = addSet.reduce(function (a, b) {
                                return a + b;
                            }).toString().split("");

                            var answerLeft = undefined,
                                answerRight = undefined;

                            console.log("sum: " + sum[0]);
                            answerLeft = new RenderedNumber(this._animationId + "-side-answerLeft-" + i, side.containerDiv.position().left + side.containerDiv.width() + (addSet[2] ? numWidth * 4.5 : numWidth * 2), side.containerDiv.height() - numWidth / 2, sum[0], false);
                            answerLeft.createElements(this._container);
                            answerLeft.contentDiv.css({ "font-size": "2em" });
                            answerLeft.containerDiv.addClass(Utils.answerClass);
                            this._toRemove.push(answerLeft.containerDiv);

                            if (sum.length == 2) {
                                answerRight = new RenderedNumber(this._animationId + "-side-answerRight-" + i, answerLeft.containerDiv.position().left + answerLeft.containerDiv.width(), answerLeft.containerDiv.position().top, sum[1], false);
                                answerRight.createElements(this._container);
                                answerRight.contentDiv.css({ "font-size": "2em" });
                                answerRight.containerDiv.addClass(Utils.answerClass);
                                this._toRemove.push(answerRight.containerDiv);

                                if (i + 1 === addSets.length) {
                                    addSets.push([parseInt(sum[0])]);
                                } else {
                                    addSets[i + 1].push(parseInt(sum[0]));
                                }
                            } else answerLeft.containerDiv.addClass(Utils.answerClass);
                            this._timeline.to(firstOpSpans[i] + "," + secondOpSpans[i], 0.5, { color: "red" });

                            this._timeline.fromTo([sideLeft, sideRight, sideCarry], 1, { opacity: 0 }, { opacity: 1 });
                            if (showPlus) {
                                this._timeline.set(sidePlus, { display: "" });
                                this._timeline.fromTo(sidePlus, 1, { opacity: 0, color: "black" }, { opacity: 1, color: "#0074D9" }, "-=1");
                            } else this._timeline.set(sidePlus, { display: "none" });

                            this._timeline.fromTo(sideEquals, 1, { opacity: 0 }, { opacity: 1 }, "-=0.01");

                            this._timeline.fromTo(answerLeft.containerDiv, 1, { opacity: 0 }, { opacity: 1 }, "-=1");

                            if (answerRight) this._timeline.fromTo(answerRight.containerDiv, 1, { opacity: 0 }, { opacity: 1 }, "-=1");

                            var moveDown = answerRight ? answerRight : answerLeft;

                            this._timeline.to(moveDown.containerDiv, 1, {
                                left: leftLine + plus.width() + numWidth / 2 + (biggerOpLength - i - 1) * (numWidth + letterSpacing),
                                top: botBox.height() * heightMultiplier + numWidth * 2,
                                "font-size": numWidth
                            });

                            if (answerRight) {
                                //Move up
                                this._timeline.to(answerLeft.containerDiv, 1, {
                                    left: leftLine + plus.width() + numWidth / 2 + (biggerOpLength - i - 2) * (numWidth + letterSpacing),
                                    top: botBox.height() * -heightMultiplier + numWidth / 2,
                                    "font-size": numWidth,
                                    className: "+=" + Utils.carryClass
                                }, "-=1");
                                lastCarried = true;
                            } else lastCarried = false;

                            this._timeline.to([sideCarry, sideLeft, sideRight, sidePlus, sideEquals], 1, { opacity: 0 });
                            this._timeline.set([sideCarry, sideLeft, sideRight], { text: "" });
                            this._timeline.to(firstOpSpans[i] + "," + secondOpSpans[i], 1, { color: "black" }, "-=1");

                            // this._timeline.fromTo(answerLeft.containerDiv, 1, {opacity: 1}, {opacity: 0}, "-=1");
                        }

                        this._equals = equals;
                        return this._timeline;
                    }
                }, {
                    key: "go",
                    value: function go() {
                        this._equals.value = "";
                        this._timeline.timeScale(1);
                        this._timeline.play(0);
                    }
                }, {
                    key: "goAway",
                    value: function goAway() {
                        if (this._drawn) {
                            this._timeline.reverse();
                            this._timeline.timeScale(16);
                        }
                    }
                }, {
                    key: "removeElements",
                    value: function removeElements() {
                        //When we're done with this set of numbers, restore their original html (we modified them in the animation, surrounding each number with a span)
                        this._topNumber.html(this._topHtml);
                        this._botNumber.html(this._botHtml);

                        this._toRemove.forEach(function (element) {
                            return $(element).remove();
                        });
                    }
                }]);

                return LongAddAnimator;
            })();

            _export("default", LongAddAnimator);
        }
    };
});
$__System.register("4d", ["4", "5", "49", "4c", "4a", "4b"], function (_export) {
    var _createClass, _classCallCheck, Snap, Power1, TweenMax, TimelineMax, RenderedObject, RenderedNumber, RenderedEquals, Utils, ShortSubtractAnimator;

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_3) {
            Snap = _3.Snap;
        }, function (_c) {
            Power1 = _c.Power1;
            TweenMax = _c.TweenMax;
            TimelineMax = _c.TimelineMax;
        }, function (_a) {
            RenderedObject = _a.RenderedObject;
            RenderedNumber = _a.RenderedNumber;
            RenderedEquals = _a.RenderedEquals;
        }, function (_b) {
            Utils = _b["default"];
        }],
        execute: function () {
            "use strict";

            ShortSubtractAnimator = (function () {
                function ShortSubtractAnimator(containerElement) {
                    _classCallCheck(this, ShortSubtractAnimator);

                    var elem = containerElement;
                    this._container = elem;
                    this._leftBox = elem.children(".snapbox-left");
                    this._rightBox = elem.children(".snapbox-right");
                    this._timeline = new TimelineMax();
                    this._svgId = this._container.attr("id") + "-animation";
                }

                _createClass(ShortSubtractAnimator, [{
                    key: "drawGo",
                    value: function drawGo() {
                        var _this = this;

                        if (this._drawn) {
                            this.go();
                            return;
                        }
                        this._drawn = true;

                        var firstOp = parseInt(this._leftBox.find(".number-text").text());
                        var secondOp = parseInt(this._rightBox.find(".number-text").text());
                        var allZero = firstOp === 0 && secondOp === 0;
                        console.log(allZero);
                        var svgWidth = 300;
                        var svgHeight = svgWidth / 2;
                        var svgId = this._svgId;

                        var numWidth = Utils.numWidth;

                        var canvas = Snap(svgWidth, svgHeight);
                        canvas.node.id = svgId;
                        $(canvas.node).css({
                            position: "absolute",
                            top: "50px",
                            left: "-" + (svgWidth / 2 - numWidth * 2.5) + "px"
                        });
                        this._container.append(canvas.node);

                        var lineGap = 25;
                        var leftLine = svgWidth / 2 - lineGap;
                        var rightLine = svgWidth / 2 + lineGap;

                        var squaresPerRow = 3;
                        while (Math.max(firstOp, secondOp) > squaresPerRow * squaresPerRow) squaresPerRow += 1;

                        var leftSquares = new Array(firstOp);
                        var rightSquares = new Array(secondOp);
                        var squareWidth = leftLine / squaresPerRow * .75;
                        var squareMargins = leftLine / squaresPerRow * .25;

                        //Position the squares
                        for (var i = 0; i < firstOp; i++) {
                            var squareX = i % squaresPerRow * (squareWidth + squareMargins) + squareMargins / 2;
                            var squareY = Math.floor(i / squaresPerRow) * (squareWidth + squareMargins) + squareMargins / 2;
                            var square = Utils.drawSquare(canvas, squareX, squareY, squareWidth);
                            leftSquares[i] = "#" + (square.node.id = svgId + "-left-" + i);
                        }
                        for (var i = 0; i < secondOp; i++) {
                            var squareX = i % squaresPerRow * (squareWidth + squareMargins) + squareMargins / 2 + rightLine;
                            var squareY = Math.floor(i / squaresPerRow) * (squareWidth + squareMargins) + squareMargins / 2;
                            var square = Utils.drawSquare(canvas, squareX, squareY, squareWidth, Utils.drawMinus);
                            rightSquares[i] = "#" + (square.node.id = svgId + "-right-" + i);
                        }

                        var operator = this._container.find(".operation-text");

                        var equalsX = this._rightBox.position().left + this._rightBox.outerWidth(true) + operator.width() / 2;
                        var equalsY = 0;
                        if (!allZero) {
                            equalsX = svgWidth / 2 + operator.width();
                            equalsY = svgHeight / 2 + operator.width() / 2;
                        }

                        var equals = new RenderedEquals(svgId + "-equals", equalsX, equalsY);
                        this._equals = equals;
                        var equalsDiv = equals.createElements(this._container);
                        equalsDiv.css("opacity", 0);

                        //Move the boxes
                        if (!allZero) {
                            this._timeline.to(this._leftBox, 1, {
                                "left": -leftLine / 3 + numWidth / 4,
                                ease: Power1.easeInOut
                            }, "-=1");
                            this._timeline.to(this._rightBox, 1, {
                                "left": rightLine / 3 - numWidth / 4,
                                ease: Power1.easeInOut
                            }, "-=1");
                        }

                        //Drop the squares
                        this._timeline.to(this._leftBox.find(".number-container"), 0.5, { className: "+=dropshadow" });

                        var dropOverlap = Math.max(firstOp, secondOp) <= 9 ? "-=0.35" : "-=0.45";

                        var _loop = function (i) {
                            _this._timeline.call(function () {
                                Utils.insidesOn(leftSquares[i]);
                            }); //Ensure that the signs are on the squares
                            _this._timeline.from(leftSquares[i], 0.5, {
                                y: "-=200",
                                ease: Power1.easeOut
                            }, dropOverlap);
                        };

                        for (var i = 0; i < leftSquares.length; i++) {
                            _loop(i);
                        }

                        this._timeline.to(this._leftBox.find(".number-container"), 0.5, { className: "-=dropshadow" });

                        this._timeline.to(this._rightBox.find(".number-container"), 0.5, { className: "+=dropshadow" });

                        if (rightSquares.length > 0) {
                            this._timeline.call(function () {
                                Utils.insidesOn(rightSquares[0]);
                            });
                            this._timeline.from(rightSquares[0], 0.5, {
                                y: "-=200",
                                delay: 0.1,
                                ease: Power1.easeOut
                            });
                        }

                        var _loop2 = function (i) {
                            _this._timeline.call(function () {
                                Utils.insidesOn(rightSquares[i]);
                            });
                            _this._timeline.from(rightSquares[i], 0.5, {
                                y: "-=200",
                                ease: Power1.easeOut
                            }, dropOverlap);
                        };

                        for (var i = 1; i < rightSquares.length; i++) {
                            _loop2(i);
                        }

                        this._timeline.to(this._rightBox.find(".number-container"), 0.5, { className: "-=dropshadow" });

                        if (allZero) {
                            this._timeline.call(function () {
                                equals.value = 0;
                            });
                        }

                        //Merge the squares
                        this._timeline.to(operator, 0.2, { className: "+=dropshadow" });
                        var leftTotalSquareWidth = squaresPerRow * (squareWidth + squareMargins);
                        var moveSquares = svgWidth / 2 - leftTotalSquareWidth / 2;

                        if (leftSquares.length > 0) {
                            this._timeline.to(leftSquares[0], 0.5, {
                                x: moveSquares,
                                ease: Power1.easeOut
                            }, "+=1");
                        }
                        for (var i = 1; i < leftSquares.length; i++) {
                            this._timeline.to(leftSquares[i], 0.5, {
                                x: moveSquares,
                                ease: Power1.easeOut
                            }, "-=0.5");
                        }

                        for (var i = 0; i < rightSquares.length; i++) {
                            this._timeline.to(rightSquares[i], 0.5, {
                                x: -moveSquares,
                                ease: Power1.easeOut
                            }, "-=0.5");
                        }

                        var max = Math.max(leftSquares.length, rightSquares.length);
                        var min = Math.min(leftSquares.length, rightSquares.length);

                        //Fade combined squares
                        this._timeline.addLabel("fading", "+=1");
                        var fadeSpeed = .7;

                        var _loop3 = function (i) {
                            _this._timeline.call(function () {
                                return Utils.toggleInsides(leftSquares[i]);
                            });
                            _this._timeline.to(leftSquares[i], fadeSpeed, {
                                autoAlpha: .05
                            }, "fading-=" + fadeSpeed);

                            _this._timeline.call(function () {
                                return Utils.toggleInsides(rightSquares[i]);
                            });
                            _this._timeline.to(rightSquares[i], fadeSpeed, {
                                autoAlpha: .05
                            }, "fading-=" + fadeSpeed);
                        };

                        for (var i = 0; i < min; i++) {
                            _loop3(i);
                        }

                        this._timeline.to(equalsDiv, 1, { opacity: 1, ease: Power1.easeIn });

                        this._timeline.to(operator, 0.2, { className: "-=dropshadow" }, "fading-=0.24");
                        //Count unfaded squares
                        this._timeline.addLabel("beforeCount");
                        var countDuration = 3.6 / Math.max(9, Math.max(firstOp, secondOp));

                        if (max - min === 0) {
                            this._timeline.call(function () {
                                equals.value = 0;
                            });
                        }

                        for (var i = min; i < max; i++) {
                            var remainingSquares = leftSquares.length > min ? leftSquares : rightSquares;
                            var rect = $(remainingSquares[i]).is("rect") ? $(remainingSquares[i]) : $(remainingSquares[i]).find("rect");
                            this._timeline.set(rect, { "stroke-width": 2 });
                            this._timeline.to(rect, countDuration, {
                                "stroke": "orange", onStart: function onStart() {
                                    equals.tickBy(leftSquares.length > min ? 1 : -1);
                                }
                            });
                        }
                    }
                }, {
                    key: "go",
                    value: function go() {
                        this._equals.value = "";
                        this._timeline.timeScale(1);
                        this._timeline.play(0);
                    }
                }, {
                    key: "goAway",
                    value: function goAway() {
                        if (this._drawn) {
                            if (this._timeline.time() > this._timeline.getLabelTime("beforeCount")) this._timeline.seek("beforeCount");
                            this._timeline.reverse();
                            this._timeline.timeScale(16);
                        }
                    }
                }, {
                    key: "removeElements",
                    value: function removeElements() {
                        $("#" + this._svgId).remove();
                        $("#" + this._svgId + "-equals").remove();
                    }
                }]);

                return ShortSubtractAnimator;
            })();

            _export("default", ShortSubtractAnimator);
        }
    };
});
$__System.register("4e", ["4", "5", "49", "4c", "4a", "4b"], function (_export) {
    var _createClass, _classCallCheck, Snap, Power1, TweenMax, TimelineMax, RenderedObject, RenderedNumber, RenderedEquals, Utils, LongSubtractAnimator;

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_3) {
            Snap = _3.Snap;
        }, function (_c) {
            Power1 = _c.Power1;
            TweenMax = _c.TweenMax;
            TimelineMax = _c.TimelineMax;
        }, function (_a) {
            RenderedObject = _a.RenderedObject;
            RenderedNumber = _a.RenderedNumber;
            RenderedEquals = _a.RenderedEquals;
        }, function (_b) {
            Utils = _b["default"];
        }],
        execute: function () {
            "use strict";

            LongSubtractAnimator = (function () {
                function LongSubtractAnimator(containerElement) {
                    _classCallCheck(this, LongSubtractAnimator);

                    this._container = containerElement;
                    this._timeline = new TimelineMax();
                    this._animationId = this._container.attr("id") + "-animation";
                    this._toRemove = [];
                    this._topBox = this._container.children(".snapbox-left");
                    this._botBox = this._container.children(".snapbox-right");
                    //For restoring later
                    this._topNumber = this._topBox.children(".number-container");
                    this._topHtml = this._topNumber.html();
                    this._botNumber = this._botBox.children(".number-container");
                    this._botHtml = this._botNumber.html();
                }

                _createClass(LongSubtractAnimator, [{
                    key: "drawGo",
                    value: function drawGo() {
                        var _this = this;

                        if (this._drawn) {
                            this.go();
                            return;
                        }

                        this._drawn = true;

                        var negativeClass = Utils.negativeClass;

                        var leftBox = this._topBox;
                        var rightBox = this._botBox;
                        var topBox = leftBox,
                            botBox = rightBox;
                        var leftBoxText = leftBox.find(".number-text").text();
                        var rightBoxText = rightBox.find(".number-text").text();
                        var isNegative = false;

                        if (parseInt(leftBoxText) < parseInt(rightBoxText)) {
                            topBox = rightBox;
                            botBox = leftBox;
                            isNegative = true;
                            //Later on, the boxes physically switch.
                        }

                        var topOpText = topBox.find(".number-text").text();
                        var botOpText = botBox.find(".number-text").text();

                        var topOpArray = topOpText.split("").map(function (c) {
                            return parseInt(c);
                        });
                        var botOpArray = botOpText.split("").map(function (c) {
                            return parseInt(c);
                        });
                        var topOpReversed = topOpArray.slice().reverse();
                        var botOpReversed = botOpArray.slice().reverse();

                        var topOpData = Utils.individualNumberHtml(topOpArray, this);
                        var topOpSpans = topOpData.spans;
                        var newTopHtml = topOpData.html;

                        topBox.find(".number-text").html(newTopHtml);

                        var botOpData = Utils.individualNumberHtml(botOpArray, this, "botOp");
                        var botOpSpans = botOpData.spans;
                        var newBotHtml = botOpData.html;

                        botBox.find(".number-text").html(newBotHtml);

                        var subtractSets = topOpReversed.map(function (currentValue, index) {
                            var array = [];
                            array.push(currentValue);
                            if (botOpReversed[index] != null) array.push(botOpReversed[index]);
                            return array;
                        });

                        var numWidth = Utils.numWidth;

                        var heightMultiplier = 1.5;
                        var letterSpacing = 18;

                        var leftLine = 0;

                        var minus = this._container.find(".operation-text");
                        var minusLeft = leftLine;

                        //Starting from right; i.e. column 0 is ones column
                        function leftPosOfColumn(column) {
                            return leftLine + minus.width() + numWidth / 2 + (topOpArray.length - 1 - column) * (numWidth + letterSpacing);
                        }

                        var equals = new RenderedEquals(this._animationId + "-equals", minusLeft, rightBox.height() * heightMultiplier * 2);
                        var equalsDiv = equals.createElements(this._container);
                        equalsDiv.css("opacity", 0);
                        this._equals = equals;
                        this._toRemove.push(equalsDiv);

                        var negativeSign = undefined;
                        if (isNegative) {
                            negativeSign = new RenderedObject(this._animationId + "-negativeSign", minus.width() - 2, rightBox.height() * heightMultiplier * 2 - equals.containerDiv.height() / 2, "small", "-", false);

                            negativeSign.createElements(this._container).css({
                                position: "absolute",
                                "opacity": 0
                            });

                            negativeSign.contentDiv.css({
                                "font-size": "3em"
                            }).addClass(negativeClass);
                        }
                        var side = new RenderedObject(this._animationId + "-side", leftPosOfColumn(-1), rightBox.height() * .75, "small", "<span id='leftOp'></span><span id='minus'>&minus;</span><span id='rightOp'></span></span>" + "<span id='equals'>=</span>", false);

                        side.createElements(this._container);
                        side.containerDiv.css({
                            "font-size": "2em",
                            "display": "inline-block",
                            "position": "absolute"
                        });
                        //"letter-spacing": "10px"
                        this._toRemove.push(side.containerDiv);

                        var sideLeft = side.containerDiv.find("#leftOp");
                        var sideRight = side.containerDiv.find("#rightOp");
                        var sideMinus = side.containerDiv.find("#minus");
                        var sideEquals = side.containerDiv.find("#equals");
                        sideLeft.css({
                            "color": "red",
                            "padding-right": letterSpacing
                        });
                        sideRight.css({
                            "color": "red",
                            "padding-right": letterSpacing
                        });
                        sideMinus.css({
                            "font-weight": "bold",
                            "padding-right": letterSpacing
                        });

                        //Timeline time!
                        this._timeline.to(leftBox, 1, {
                            "position": "absolute",
                            "left": Utils.positionTopBox(leftLine, minus, leftBox, numWidth, rightBoxText, leftBoxText, letterSpacing),
                            "top": numWidth
                        });
                        this._timeline.to(rightBox, 1, {
                            "position": "absolute",
                            "left": Utils.positionBotBox(leftLine, minus, rightBox, numWidth, rightBoxText, leftBoxText, letterSpacing),
                            "top": numWidth * 3
                        }, "-=1");

                        //Animate padding (a bit choppy unfortunately, not sure if autoRound makes a difference).
                        $("." + this._animationId + "-operand").css("autoRound", false);
                        this._timeline.to("." + this._animationId + "-operand", 0.5, { "padding-right": letterSpacing }, "-=0.5");

                        //Move minus down next to big box
                        this._timeline.to(minus, 1, {
                            "position": "absolute",
                            "left": minusLeft,
                            "top": rightBox.height() * heightMultiplier
                        }, "-=1");

                        //Fade in big equals
                        this._timeline.to(equalsDiv, 1, { opacity: 1, ease: Power1.easeInOut }, "-=.75");

                        if (isNegative) {
                            console.log("negative");
                            //Flip Operators
                            this._timeline.to(botBox, 1, {
                                "top": numWidth * 3
                            });
                            this._timeline.to(topBox, 1, {
                                "top": numWidth
                            }, "-=1");

                            this._timeline.to(negativeSign.containerDiv, 1, {
                                opacity: 1
                            }, "-=1");
                        }

                        var borrow = function borrow(column) {
                            var lastOne = undefined;
                            if (subtractSets[column + 1][0] === 0) lastOne = borrow(column + 1);
                            subtractSets[column][0] += 10;
                            var one = new RenderedNumber(_this._animationId + "-newOne-" + column, leftPosOfColumn(column) - numWidth / 2, 4, //Trust me it looks better I dont believe you
                            1, false);
                            one.createElements(_this._container).css("position", "absolute");
                            one.contentDiv.css({
                                "font-size": "2em"
                            });
                            var left = topOpReversed[column + 1];
                            var newLeft = left - 1;
                            if (left === 0) {
                                newLeft = 9;
                                _this._timeline.to(lastOne._containerDiv, 1, { opacity: 0 });
                            }

                            _this._timeline.to(topOpSpans[column + 1], 1, {
                                text: String(newLeft),
                                className: "+=" + Utils.carryClass
                            }, "-=0.6");
                            subtractSets[column + 1][0] -= 1;
                            _this._timeline.from(one.containerDiv, 1, {
                                opacity: 0,
                                left: leftPosOfColumn(column + 1)
                            }, "-=0.5");

                            return one;
                        };

                        var answerNums = [];
                        subtractSets.forEach(function (subtractSet, i) {
                            //Move the number down as the answer if it is the only number
                            if (subtractSet.length === 1) {
                                var copy = new RenderedNumber(_this._animationId + "-side-answerLast-" + i, leftPosOfColumn(i), 0, subtractSet[0], false);
                                copy.createElements(_this._container).css({
                                    "opacity": 0
                                }).addClass(Utils.answerClass);
                                _this._timeline.to(copy.containerDiv, 1, {
                                    opacity: 1,
                                    top: rightBox.height() * heightMultiplier + numWidth * 2.2,
                                    ease: Power1.easeOut
                                });
                                answerNums.push(copy);
                                _this._toRemove.push(copy);
                                return;
                            }

                            _this._timeline.to(topOpSpans[i] + "," + botOpSpans[i], 0.5, { color: "red" });

                            if (subtractSet[0] < subtractSet[1]) {
                                borrow(i);
                            }

                            var difference = subtractSets[i][0] - subtractSets[i][1];

                            _this._timeline.set(sideLeft, { "text": String(subtractSet[0]) });
                            _this._timeline.set(sideRight, { "text": String(subtractSet[1]) });

                            var answer = new RenderedNumber(_this._animationId + "-answer-" + i, side.containerDiv.position().left + side.containerDiv.width() + letterSpacing
                            //Because .width() above does not account for runtime changes, we manually have to check for
                            //whether a carry happened or not
                             + numWidth * (String(subtractSet[0]).split("").length === 2 ? 2 : 1), side.containerDiv.height() - numWidth / 2, difference, false);
                            answer.createElements(_this._container);
                            answer.contentDiv.css({ "font-size": "2em" });
                            answer.containerDiv.addClass(Utils.answerClass);

                            answerNums.push(answer);
                            _this._toRemove.push(answer.containerDiv);

                            _this._timeline.fromTo([sideLeft, sideRight], 1.5, { opacity: 0 }, { opacity: 1 }, "+=0.5");
                            _this._timeline.fromTo(sideMinus, 1.5, { opacity: 0 }, { opacity: 1, className: "+=" + negativeClass }, "-=1.5");
                            _this._timeline.fromTo(sideEquals, 1, { opacity: 0 }, { opacity: 1 }, "-=0.3");
                            _this._timeline.fromTo(answer.containerDiv, 1, { opacity: 0 }, { opacity: 1 });

                            _this._timeline.to(answer.containerDiv, 1, {
                                left: leftPosOfColumn(i),
                                top: rightBox.height() * heightMultiplier + numWidth * 2.2,
                                "font-size": numWidth
                            });

                            _this._timeline.to([sideLeft, sideRight, sideMinus, sideEquals], 1, { opacity: 0 });
                            _this._timeline.to(topOpSpans[i] + "," + botOpSpans[i], 1, { color: "black" }, "-=1");
                        });

                        var shiftNegative = 0;

                        this._timeline.add("beforeTrim");

                        this._timeline.addLabel("trimZeroes");
                        answerNums.reverse().every(function (answer) {
                            if (answer.number === 0) {
                                _this._timeline.to(answer.containerDiv, 1, { opacity: 0 }, "trimZeroes");
                                shiftNegative += numWidth + letterSpacing;
                                return true;
                            }
                            return false;
                        });

                        if (isNegative) this._timeline.add(function () {
                            if (shiftNegative != 0) {
                                _this._timeline.to(negativeSign.containerDiv, 1, { left: "+=" + shiftNegative });
                                shiftNegative = 0; //Because closures
                            }
                        });
                    }
                }, {
                    key: "go",
                    value: function go() {
                        this._equals.value = "";
                        this._timeline.timeScale(1);
                        this._timeline.play(0);
                    }
                }, {
                    key: "goAway",
                    value: function goAway() {
                        if (this._drawn) {
                            if (this._timeline.time() > this._timeline.getLabelTime("beforeTrim")) this._timeline.seek("beforeTrim");
                            this._timeline.reverse();
                            this._timeline.timeScale(16);
                        }
                    }
                }, {
                    key: "removeElements",
                    value: function removeElements() {
                        //When we're done with this set of numbers, restore their original html (we modified them in the animation, surrounding each number with a span)
                        this._topNumber.html(this._topHtml);
                        this._botNumber.html(this._botHtml);

                        this._toRemove.forEach(function (element) {
                            return $(element).remove();
                        });
                    }
                }]);

                return LongSubtractAnimator;
            })();

            _export("default", LongSubtractAnimator);
        }
    };
});
$__System.register("4f", ["4", "5", "49", "4c", "4a", "4b"], function (_export) {
    var _createClass, _classCallCheck, Snap, Power1, TweenMax, TimelineMax, RenderedEquals, Utils, ShortMultiplyAnimator;

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_3) {
            Snap = _3.Snap;
        }, function (_c) {
            Power1 = _c.Power1;
            TweenMax = _c.TweenMax;
            TimelineMax = _c.TimelineMax;
        }, function (_a) {
            RenderedEquals = _a.RenderedEquals;
        }, function (_b) {
            Utils = _b["default"];
        }],
        execute: function () {
            "use strict";

            ShortMultiplyAnimator = (function () {
                function ShortMultiplyAnimator(containerElement) {
                    _classCallCheck(this, ShortMultiplyAnimator);

                    var elem = containerElement;
                    this._container = elem;
                    this._leftBox = elem.children(".snapbox-left");
                    this._rightBox = elem.children(".snapbox-right");
                    this._timeline = new TimelineMax();
                    this._svgId = this._container.attr("id") + "-animation";
                }

                _createClass(ShortMultiplyAnimator, [{
                    key: "drawGo",
                    value: function drawGo() {
                        if (this._drawn) {
                            this.go();
                            return;
                        }

                        this._drawn = true;

                        var firstOp = parseInt(this._leftBox.find(".number-text").text());
                        var secondOp = parseInt(this._rightBox.find(".number-text").text());

                        var svgWidth = 300;
                        var svgHeight = 300;
                        var svgId = this._svgId;

                        var zero = firstOp === 0 || secondOp === 0;

                        var canvas = Snap(svgWidth, svgHeight);

                        var numWidth = Utils.numWidth;
                        canvas.node.id = svgId;
                        $(canvas.node).css({
                            position: "absolute",
                            "z-index": "-1",
                            top: "50px",
                            left: "-" + svgWidth / 2 + "px"
                        });
                        this._container.append(canvas.node);

                        var squares = new Array(firstOp);

                        //Position the squares
                        var squareWidth = Math.min(Math.min(svgWidth, svgHeight) / Math.max(firstOp, secondOp), 32) * .75;
                        var squareMargin = Math.min(Math.min(svgWidth, svgHeight) / Math.max(firstOp, secondOp), 32) * .25;
                        var startLeft = (svgWidth - secondOp * (squareWidth + squareMargin)) / 2;
                        for (var y = 0; y < firstOp; y++) {
                            if (secondOp > 0) {
                                squares[y] = new Array(secondOp);
                                for (var x = 0; x < secondOp; x++) {
                                    var square = Utils.drawSquare(canvas, (squareWidth + squareMargin) * x + startLeft, (squareWidth + squareMargin) * y + 2, /*because stroke*/squareWidth);
                                    squares[y][x] = "#" + (square.node.id = svgId + "-" + x + "-" + y);
                                }
                            }
                        }

                        var actualWidth = (squareWidth + squareMargin) * secondOp;
                        var actualHeight = (squareWidth + squareMargin) * firstOp;
                        console.log(actualWidth, actualHeight);

                        var operator = this._container.find(".operation-text");

                        //Move the boxes
                        if (!zero) {
                            this._timeline.to(this._leftBox, 1, {
                                "left": -actualWidth / 2 - numWidth * 2,
                                "top": actualHeight / 2 + numWidth * 2,
                                ease: Power1.easeInOut
                            });
                            this._timeline.to(this._rightBox, 1, {
                                "left": actualWidth / 2,
                                "top": actualHeight + numWidth * 3,
                                ease: Power1.easeInOut
                            }, "-=1");
                            this._timeline.to(operator, 1, {
                                "margin-left": -actualWidth / 2 - numWidth * 4, //Operator needs to stay position: relative so the left box doesn't collapse. Hence we use margin-left and margin-top instead of left and top
                                "margin-top": actualHeight + numWidth * 2,
                                ease: Power1.easeInOut
                            }, "-=1");

                            //Fade in the squares
                            for (var y = squares.length - 1; y >= 0; y--) {
                                this._timeline.from(squares[y][0], 0.5, { delay: 0.5, opacity: 0, ease: Power4.easeNone });
                                for (var x = 1; x < secondOp; x++) {
                                    this._timeline.from(squares[y][x], 0.5, { opacity: 0, ease: Power4.easeNone }, "-=0.5");
                                }
                            }
                        }

                        //Fade in equals
                        var equalsX = this._rightBox.position().left + this._rightBox.outerWidth(true) + operator.width() / 2;
                        var equalsY = 0;
                        console.log(zero);
                        if (!zero) {
                            equalsX = actualWidth / 2 + numWidth;
                            equalsY = actualHeight / 2 + numWidth;
                        }

                        var equals = new RenderedEquals(svgId + "-equals", equalsX, equalsY); //actualWidth / 2 + operator.width(), actualHeight / 2 + operator.width() * .75);
                        this._equals = equals;
                        var equalsDiv = equals.createElements(this._container);
                        equalsDiv.css("opacity", 0);
                        if (zero) {
                            this._timeline.call(function () {
                                return equals.value = 0;
                            });
                        }
                        //noinspection JSUnresolvedVariable
                        this._timeline.to(equalsDiv, 1, { opacity: 1, ease: Power1.easeInOut });

                        this._timeline.addLabel("beforeCount");
                        //Count the squares
                        for (var y = squares.length - 1; y >= 0; y--) {
                            for (var x = 0; x < secondOp; x++) {
                                var rect = $(squares[y][x]).is("rect") ? $(squares[y][x]) : $(squares[y][x]).find("rect");
                                this._timeline.set(rect, { delay: x == 0 ? 0.5 : 0, "stroke-width": 2 });
                                this._timeline.to(rect, 0.1, {
                                    stroke: "orange", onStart: function onStart() {
                                        equals.tickBy(1);
                                    }
                                });
                            }
                        }
                    }
                }, {
                    key: "go",
                    value: function go() {
                        this._equals.value = "";
                        this._timeline.timeScale(1);
                        this._timeline.play(0);
                    }
                }, {
                    key: "goAway",
                    value: function goAway() {
                        if (this._drawn) {
                            if (this._timeline.time() > this._timeline.getLabelTime("beforeCount")) this._timeline.seek("beforeCount");
                            this._timeline.reverse();
                            this._timeline.timeScale(16);
                        }
                    }
                }, {
                    key: "removeElements",
                    value: function removeElements() {
                        $("#" + this._svgId).remove();
                        $("#" + this._svgId + "-equals").remove();
                    }
                }]);

                return ShortMultiplyAnimator;
            })();

            _export("default", ShortMultiplyAnimator);
        }
    };
});
$__System.register("50", ["4", "5", "49", "4c", "4a", "4b"], function (_export) {
    var _createClass, _classCallCheck, Snap, Power3, TweenMax, TimelineMax, RenderedEquals, RenderedObject, RenderedNumber, Utils, LongMultiplyAnimator;

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_3) {
            Snap = _3.Snap;
        }, function (_c) {
            Power3 = _c.Power3;
            TweenMax = _c.TweenMax;
            TimelineMax = _c.TimelineMax;
        }, function (_a) {
            RenderedEquals = _a.RenderedEquals;
            RenderedObject = _a.RenderedObject;
            RenderedNumber = _a.RenderedNumber;
        }, function (_b) {
            Utils = _b["default"];
        }],
        execute: function () {
            "use strict";

            LongMultiplyAnimator = (function () {
                function LongMultiplyAnimator(containerElement) {
                    _classCallCheck(this, LongMultiplyAnimator);

                    var elem = containerElement;

                    this._container = elem;
                    this._timeline = new TimelineMax();
                    this._animationId = elem.attr("id") + "-animation";
                    this._svgId = elem.attr("id") + "-animation";
                    this._toRemove = [];
                    this._topBox = elem.children(".snapbox-left");
                    this._botBox = elem.children(".snapbox-right");
                    //For restoring later
                    this._topNumber = this._topBox.children(".number-container");
                    this._topHtml = this._topNumber.html();
                    this._botNumber = this._botBox.children(".number-container");
                    this._botHtml = this._botNumber.html();
                }

                _createClass(LongMultiplyAnimator, [{
                    key: "drawGo",
                    value: function drawGo() {
                        var _this = this;

                        if (this._drawn) {
                            this.go();

                            return;
                        }

                        this._drawn = true;

                        // Utilities
                        var negativeClass = Utils.negativeClass;
                        var numWidth = Utils.numWidth;

                        // Parameters
                        var heightCoefficient = 1.4;
                        var letterSpacing = 18;
                        var leftLine = 0;
                        var fadeOpacity = .3;

                        var subEquationColor = "blue";

                        var times = this._container.find(".operation-text");

                        // Boxes
                        var topBox = this._topBox;
                        var botBox = this._botBox;

                        // Box text
                        var topOpText = topBox.find(".number-text").text();
                        var botOpText = botBox.find(".number-text").text();

                        // Operation arrays
                        var topOpArray = topOpText.split("").map(function (c) {
                            return parseInt(c);
                        });
                        var botOpArray = botOpText.split("").map(function (c) {
                            return parseInt(c);
                        });

                        var topOpReversed = topOpArray.slice().reverse();
                        var botOpReversed = botOpArray.slice().reverse();

                        // Detect if answer is positive or negative - NEGATIVE PRODUCTS NOT YET IMPLEMENTED
                        var isNegative = false;
                        if (botOpText * topOpText < 0) isNegative = true;

                        // Set up HTML for individual numbers

                        var topOpData = Utils.individualNumberHtml(topOpArray, this);
                        var topOpSpans = topOpData.spans;
                        var newTopHtml = topOpData.html;

                        topBox.find(".number-text").html(newTopHtml);

                        var botOpData = Utils.individualNumberHtml(botOpArray, this, "botOp");
                        var botOpSpans = botOpData.spans;
                        var newBotHtml = botOpData.html;

                        botBox.find(".number-text").html(newBotHtml);

                        // Product of the equation
                        var product = topOpText * botOpText;

                        // Width of the box
                        var topWidth = times.width() + numWidth / 2 + Math.max(topOpArray.length, botOpArray.length) * (letterSpacing + numWidth);

                        var botWidth = times.width() + numWidth / 2 + String(product).split("").length * (letterSpacing + numWidth);

                        var subLeftLine = topWidth - botWidth;

                        // Render equal sign
                        var equals = new RenderedObject(this._animationId + "-equals", 0, botBox.height() * heightCoefficient * 2, "", "<span id='equals'><hr></span>", false);
                        var equalsDiv = equals.createElements(this._container);

                        equalsDiv.css({
                            "position": "absolute",
                            "opacity": 0,
                            "width": topWidth
                        });

                        this._equals = equals;
                        this._toRemove.push(equalsDiv);

                        // Render sub equal sign
                        var subEquals = new RenderedObject(this._animationId + "-subEquals", subLeftLine, equalsDiv.height() + botBox.height() * heightCoefficient * 4, "", "<span id='subEquals'><hr></span>", false);
                        var subEqualsDiv = subEquals.createElements(this._container);

                        subEqualsDiv.css({
                            "position": "absolute",
                            "opacity": 0,
                            "width": botWidth
                        });

                        this._toRemove.push(subEqualsDiv);

                        // Render sub plus
                        var subPlus = new RenderedObject(this._animationId + "-subPlus", subLeftLine, equalsDiv.height() / 2 + 3 * (botBox.height() * heightCoefficient), "", "<span>+</span>", false);
                        var subPlusDiv = subPlus.createElements(this._container);

                        subPlusDiv.css({
                            "position": "absolute",
                            "font-size": "3em",
                            "color": "#0074D9",
                            "font-weight": "bold",
                            "opacity": 0
                        });

                        this._toRemove.push(subPlusDiv);

                        // Render side equation
                        var side = new RenderedObject(this._animationId + "-side", topWidth, botBox.height() * .75, "small", "<span id='leftOp'></span><span id='times'>&times</span><span id='rightOp'></span></span>" + "<span id='equals'>=</span>", false);
                        var sideDiv = side.createElements(this._container);

                        sideDiv.css({
                            "font-size": "2em",
                            display: "inline-block",
                            position: "absolute"
                        });

                        this._toRemove.push(sideDiv);

                        // Side components
                        var sideLeft = sideDiv.find("#leftOp");
                        var sideRight = sideDiv.find("#rightOp");
                        var sideProduct = sideDiv.find("#times");
                        var sideEquals = sideDiv.find("#equals");

                        sideLeft.css({
                            color: "red",
                            "padding-right": letterSpacing
                        });
                        sideRight.css({
                            color: "red",
                            "padding-right": letterSpacing
                        });
                        sideProduct.css({
                            "font-weight": "bold",
                            "padding-right": letterSpacing
                        }).addClass(negativeClass);

                        var fade = Power3.easeOut;

                        /* Timeline */
                        this._timeline.to(equalsDiv, 1, {
                            opacity: 1,
                            ease: fade
                        }) /* Fade is equal line, sub equal line, and plus */
                        .to(topBox, 1, {
                            position: "absolute",
                            left: Utils.positionTopBox(leftLine, times, topBox, numWidth, botOpText, topOpText, letterSpacing),
                            ease: fade
                        }, "-=1") /* Fade in top box */
                        .to(botBox, 1, {
                            position: "absolute",
                            left: Utils.positionBotBox(leftLine, times, botBox, numWidth, botOpText, topOpText, letterSpacing),
                            top: numWidth * 3,
                            ease: fade
                        }, "-=1") /* Fade in bot box */
                        .to(times, 1, {
                            position: "absolute",
                            left: 0,
                            top: botBox.height() * heightCoefficient,
                            ease: fade
                        }, "-=1") /* Fade in times */
                        .to("." + this._animationId + "-operand", 1, {
                            "padding-right": letterSpacing,
                            ease: fade
                        }, "-=1"); /* Add padding between numbers */

                        //The reverse animation will start here and go backwards. Excludes all the subequations
                        this._timeline.addLabel("reverseStart");

                        // Create sub-equations
                        var sum = 0;
                        var i = 0;
                        var topAnswer = null;

                        var additionNums = [];

                        botOpReversed.forEach(function (botValue, botIndex) {
                            botValue *= Math.pow(10, botIndex);

                            _this._timeline.to(botOpSpans[botIndex], .75, {
                                color: "red",
                                ease: fade
                            }); /* Highlight bot value */

                            // Fade unused bot values
                            botOpReversed.forEach(function (value, i) {
                                if (i > botIndex) {
                                    _this._timeline.to(botOpSpans[i], .75, {
                                        opacity: fadeOpacity,
                                        ease: fade
                                    }, "-=.75");
                                }
                            });

                            topOpReversed.forEach(function (topValue, topIndex) {
                                i++;

                                _this._timeline.to(topOpSpans[topIndex], .75, {
                                    color: "red",
                                    ease: fade
                                }, "-=.75"); /* Highlight top value */

                                // Fade unused top values
                                topOpReversed.forEach(function (value, i) {
                                    if (i > topIndex) {
                                        _this._timeline.to(topOpSpans[i], .75, {
                                            opacity: fadeOpacity,
                                            ease: fade
                                        }, "-=.75");
                                    }
                                });

                                topValue *= Math.pow(10, topIndex);

                                // Product of current side multiplication
                                var product = topValue * botValue;

                                additionNums.push(product);

                                _this._timeline.set(sideLeft, { text: String(topValue) });
                                _this._timeline.set(sideRight, { text: String(botValue) });

                                var digits = String(product).split("").length;

                                var answer = new RenderedNumber(_this._animationId + "-answer-" + i, sideDiv.position().left + sideDiv.width() + letterSpacing + 16 * digits, sideDiv.height() - numWidth / 2, product, false);

                                var answerDiv = answer.createElements(_this._container);
                                answer.contentDiv.css("font-size", "2em");
                                answerDiv.addClass(Utils.answerClass);

                                _this._toRemove.push(answerDiv);

                                sum += product;

                                // Side Equation
                                _this._timeline.fromTo([sideLeft, sideRight, sideProduct], .75, { opacity: 0 }, {
                                    opacity: 1,
                                    ease: fade
                                }, "+=.25") /* Fade in side left, right, and times */
                                .fromTo(sideEquals, .75, { opacity: 0 }, {
                                    opacity: 1,
                                    ease: fade
                                }) /* Fade in side equals */
                                .fromTo(answerDiv, .75, { opacity: 0 }, {
                                    opacity: 1,
                                    ease: fade
                                }); /* Fade in side equation product */

                                // Move product to top of sub-addition equation
                                _this._timeline.to(answerDiv, 1.25, {
                                    left: topWidth - product.toString().length * (letterSpacing + numWidth),
                                    top: equalsDiv.height() + (2 + (additionNums.length - 1)) * (botBox.height() * heightCoefficient),
                                    "font-size": numWidth,
                                    "letter-spacing": letterSpacing + "px",
                                    color: subEquationColor,
                                    ease: fade
                                });

                                if (additionNums.length === 1) topAnswer = answerDiv;

                                if (additionNums.length === 2) {
                                    _this._timeline.to([subEqualsDiv, subPlusDiv], 1, {
                                        opacity: 1,
                                        ease: fade
                                    }, "-=1.25");

                                    additionNums[0] = additionNums[0] + additionNums[1];
                                    additionNums.splice(1, 1);

                                    var subAnswer = new RenderedNumber(_this._animationId + "-answer-" + i, topWidth - additionNums[0].toString().length * (letterSpacing + numWidth), 2 * equalsDiv.height() + botBox.height() * heightCoefficient * 4, additionNums[0], false);

                                    var subAnswerDiv = subAnswer.createElements(_this._container);
                                    subAnswerDiv.css({
                                        opacity: 0,
                                        "letter-spacing": letterSpacing + "px",
                                        color: subEquationColor
                                    });
                                    subAnswerDiv.addClass(Utils.answerClass);

                                    _this._toRemove.push(subAnswerDiv);

                                    _this._timeline.to(subAnswerDiv, 1, {
                                        opacity: 1,
                                        ease: fade
                                    }, "+=.25") /* Show sum */
                                    .to(subAnswerDiv, 1, {
                                        left: topWidth - additionNums[0].toString().length * (letterSpacing + numWidth),
                                        top: equalsDiv.height() + botBox.height() * heightCoefficient + numWidth * 2,
                                        "letter-spacing": letterSpacing + "px",
                                        ease: fade
                                    }) /* Replace top sub addition with sum */
                                    .to([topAnswer, answerDiv], 1, {
                                        opacity: 0,
                                        ease: fade
                                    }, "-=1") /* Remove previous addition */
                                    .to([subEqualsDiv, subPlusDiv], 1, {
                                        opacity: 0,
                                        ease: fade
                                    }, "-=1"); /* Fade out sub equation operands */

                                    topAnswer = subAnswerDiv;
                                }

                                _this._timeline.to([sideLeft, sideRight, sideProduct, sideEquals], .75, {
                                    opacity: 0,
                                    ease: fade
                                }) /* Hide side equation */
                                .to(topOpSpans[topIndex], .75, {
                                    color: "black",
                                    ease: fade
                                }, "-=.75"); /* Un-highlight top value */

                                // Un-fade unused top values
                                topOpReversed.forEach(function (value, i) {
                                    if (i > topIndex) {
                                        _this._timeline.to(topOpSpans[i], .75, {
                                            opacity: 1,
                                            ease: fade
                                        }, "-=.75");
                                    }
                                });
                            });

                            // Un-highlight bot value
                            _this._timeline.to(botOpSpans[botIndex], .75, {
                                color: "black",
                                ease: fade
                            }, "-=.75");

                            // Un-fade unused bot values
                            botOpReversed.forEach(function (value, i) {
                                if (i > botIndex) {
                                    _this._timeline.to(botOpSpans[i], .5, {
                                        opacity: 1,
                                        ease: fade
                                    }, "-=.5");
                                }
                            });
                        });

                        // Turn answer green
                        this._timeline.to(topAnswer, .75, {
                            color: "green",
                            ease: fade
                        }, "-=2.5");

                        $("." + this._animationId + "-operand").css("autoRound", false);
                    }
                }, {
                    key: "go",
                    value: function go() {
                        this._equals.value = "";
                        this._timeline.timeScale(1);
                        this._timeline.play(0);
                    }
                }, {
                    key: "goAway",
                    value: function goAway() {
                        if (this._drawn) {
                            if (this._timeline.time() > this._timeline.getLabelTime("reverseStart")) this._timeline.seek("reverseStart");
                            this._timeline.reverse();
                            this._timeline.timeScale(16);
                        }
                    }
                }, {
                    key: "removeElements",
                    value: function removeElements() {
                        //When we're done with this set of numbers, restore their original html (we modified them in the animation, surrounding each number with a span)
                        this._topNumber.html(this._topHtml);
                        this._botNumber.html(this._botHtml);

                        this._toRemove.forEach(function (element) {
                            return $(element).remove();
                        });
                    }
                }]);

                return LongMultiplyAnimator;
            })();

            _export("default", LongMultiplyAnimator);
        }
    };
});
$__System.register("51", ["4", "5", "49", "4c", "4a", "4b"], function (_export) {
    var _createClass, _classCallCheck, Snap, Power3, TweenMax, TimelineMax, RenderedEquals, RenderedObject, RenderedNumber, Utils, ShortDivideAnimator;

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_3) {
            Snap = _3.Snap;
        }, function (_c) {
            Power3 = _c.Power3;
            TweenMax = _c.TweenMax;
            TimelineMax = _c.TimelineMax;
        }, function (_a) {
            RenderedEquals = _a.RenderedEquals;
            RenderedObject = _a.RenderedObject;
            RenderedNumber = _a.RenderedNumber;
        }, function (_b) {
            Utils = _b["default"];
        }],
        execute: function () {
            /**
             * Created by Matthew on 9/15/2016.
             */
            "use strict";

            ShortDivideAnimator = (function () {
                function ShortDivideAnimator(containerElement) {
                    _classCallCheck(this, ShortDivideAnimator);

                    var elem = containerElement;

                    this._leftBox = elem.children(".snapbox-left");
                    this._rightBox = elem.children(".snapbox-right");
                    this._container = elem;
                    this._timeline = new TimelineMax();
                    this._animationId = this._container.attr("id") + "-animation";
                    this._svgId = this._container.attr("id") + "-animation";
                    this._toRemove = [];
                }

                _createClass(ShortDivideAnimator, [{
                    key: "drawGo",
                    value: function drawGo() {
                        var _this = this;

                        if (this._drawn) {
                            this.go();

                            return;
                        }

                        this._drawn = true;

                        // Utilities
                        var numWidth = Utils.numWidth;

                        // Operators
                        var firstOp = parseInt(this._leftBox.find(".number-text").text());
                        var secondOp = parseInt(this._rightBox.find(".number-text").text());

                        // Parameters
                        var letterSpacing = 18;

                        var squaresPerRow = 10;

                        var canvasWidth = 300;

                        var leftLine = canvasWidth;
                        var squareWidth = leftLine / squaresPerRow * .75;
                        var squareMargins = leftLine / squaresPerRow * .25;
                        var vectorHeight = (squareWidth + squareMargins) * secondOp;

                        var canvasHeight = canvasWidth / squaresPerRow * Math.ceil(firstOp / squaresPerRow) + vectorHeight;

                        // Canvas
                        var canvas = Snap(canvasWidth, canvasHeight);

                        canvas.node.id = this._svgId;
                        $(canvas.node).css({
                            position: "absolute",
                            top: "50px",
                            left: "-" + (canvasWidth / 2 - numWidth * 2.5 - 25 / 2) + "px"
                        });

                        this._container.append(canvas.node);

                        // Squares (array, start X, start Y, current X, current Y)
                        var squareArray = [];

                        if (firstOp === 0 && secondOp === 0) {
                            var _equals = new RenderedEquals(this._svgId + "-equals", this._rightBox.position().left + this._leftBox.position().outerWidth(true) + numWidth / 2, numWidth / 2);
                            var _equalsDiv = _equals.createElements(this._container);
                            _equalsDiv.css({ opacity: 0 });

                            this._timeline.to(_equalsDiv, .5, { opacity: 1 });

                            return;
                        }

                        var createSquare = function createSquare(x, y, width) {
                            return Utils.drawSquare(canvas, x, y, width);
                        };

                        // Create and position equals sign
                        var vectorMid = vectorHeight / 2 - squareMargins;
                        var equalsX = this._container.width() + squareWidth + squareMargins;
                        var equalsY = this._container.height() + canvasHeight - vectorMid;

                        var equals = new RenderedEquals(this._svgId + "-equals", equalsX, equalsY);
                        var equalsDiv = equals.createElements(this._container).css({ opacity: 0 });

                        // Create and position whole number answer
                        var wholeX = equalsX + numWidth + letterSpacing;
                        var wholeColor = "#FFD700";
                        var wholeAnswer = new RenderedNumber(this._svgId + "-whole", wholeX, equalsY, 0, false);
                        var wholeDiv = wholeAnswer.createElements(this._container).css({
                            position: "absolute",
                            opacity: 0,
                            color: wholeColor
                        });
                        var upDivs = [equalsDiv, wholeDiv];

                        // Create and position squares
                        for (var i = 0; i < firstOp; i++) {
                            var x = i % squaresPerRow * (squareWidth + squareMargins) + squareMargins / 2 + 1;
                            var y = Math.floor(i / squaresPerRow) * (squareWidth + squareMargins) + squareMargins / 2;

                            var square = createSquare(x, y, squareWidth);

                            squareArray[i] = ["#" + (square.node.id = this._svgId + i), x, y];
                        }

                        /* Timeline */
                        this._timeline.to(this._leftBox.find(".number-container"), .5, { color: "blue", className: "+=dropshadow" });

                        var staggerLength = 3;

                        var squareTime = 1;
                        var stagger = staggerLength / firstOp;

                        squareArray.forEach(function (square) {
                            // Animate square entrance
                            _this._timeline.from(square[0], squareTime, {
                                x: "-100px",
                                opacity: 0,
                                ease: Power3.easeOut
                            }, "-=" + (squareTime - stagger));
                        });

                        this._timeline.to(this._leftBox.find(".number-container"), .5, { color: "black", className: "-=dropshadow" }).to(this._rightBox.find(".number-container"), .5, { color: "blue", className: "+=dropshadow" }, "-=.5");

                        // Amount of full vectors
                        var fullVectorNum = Math.floor(firstOp / secondOp);

                        // Remainder vector n
                        var remainder = firstOp - fullVectorNum * secondOp;

                        // If there is a remainder
                        var isRemainder = remainder != 0;

                        // Amount of vectors
                        var vectorNum = fullVectorNum + (isRemainder ? 1 : 0);

                        //TODO: Do we want the reverse animation starting from this, or is it good how it is?
                        //this._timeline.addLabel("beforeCount");

                        this._timeline.add(function () {
                            return wholeAnswer.setNumber = 0;
                        }) /* Reset whole number answer */
                        .to([equalsDiv, wholeDiv], .5, { opacity: 1 }); /* Show equals and whole number answer */

                        // Fill vectors with squares
                        for (var i = 0; i < vectorNum; i++) {
                            var remainderTime = isRemainder && i === vectorNum - 1;

                            var entries = remainderTime ? remainder : secondOp;

                            for (var j = 0; j < entries; j++) {
                                var index = firstOp - i * secondOp - j - 1;

                                var square = squareArray[index];

                                var targetX = i * (canvasWidth / vectorNum);
                                var targetY = canvasHeight - squareWidth * (j + 1) - squareMargins;
                                console.log(targetX);
                                // Move the squares
                                this._timeline.to(square[0], .5, {
                                    x: targetX - square[1] + 1,
                                    y: targetY - square[2],
                                    ease: Power3.easeOut
                                }, "-=.5");
                            }

                            // Add 1 to the whole numbers if the iteration is not the remainder vector
                            if (!remainderTime) this._timeline.add(function () {
                                return wholeAnswer.tickBy();
                            }, "-=.5");

                            // Wait after each vector is filled
                            this._timeline.to("", .5, {});
                        }

                        this._timeline.to(this._rightBox.find(".number-container"), .5, { color: "black", className: "-=dropshadow" });

                        // If there is a remainder animate it
                        if (isRemainder) {
                            (function () {
                                var remainderColor = "#2cc31c";

                                // Create and position R letter
                                var rX = wholeX + numWidth * fullVectorNum.toString().length;
                                var rLetter = new RenderedNumber(_this._svgId + "-whole", rX, equalsY, "R", false);
                                var rLetterDiv = rLetter.createElements(_this._container).css({
                                    position: "absolute",
                                    opacity: 0
                                });

                                upDivs.push(rLetterDiv);

                                // Create and position remainder number answer
                                var remainderX = rX + numWidth + letterSpacing / 2;
                                var remainderAnswer = new RenderedNumber(_this._svgId + "-whole", remainderX, equalsY, 0, false);
                                var remainderDiv = remainderAnswer.createElements(_this._container).css({
                                    position: "absolute",
                                    opacity: 0,
                                    color: remainderColor
                                });

                                upDivs.push(remainderDiv);

                                _this._timeline.add(function () {
                                    return remainderAnswer.setNumber = 0;
                                }) /* Reset remainder answer */
                                .to([rLetterDiv, remainderDiv], .5, { opacity: 1 }); /* Show R and remainder */

                                for (var i = 0; i < remainder; i++) {
                                    var square = squareArray[remainder - i - 1];

                                    _this._timeline.to($(square[0]).find("rect"), .5, {
                                        fill: remainderColor
                                    }).add(function () {
                                        return remainderAnswer.tickBy();
                                    }, "-=.5");
                                }
                            })();
                        }

                        // Wait between counting quotient and filling shifting up Dan: I don't think we need a wait here.
                        //this._timeline.to("", .5, { });

                        // Move elements up to minimize white space
                        squareArray.forEach(function (val, index) {
                            var targetY = undefined;

                            if (isRemainder) {
                                if (index < remainder) {
                                    targetY = squareWidth * (secondOp - 1) - index % secondOp * squareWidth;
                                } else {
                                    targetY = index % secondOp * squareWidth;
                                }
                            } else {
                                targetY = index % secondOp * squareWidth;
                            }

                            _this._timeline.to(val[0], .5, {
                                y: targetY - val[2] + 2,
                                ease: Power3.easeOut
                            }, "-=.5");
                        });

                        // Move answer up with squares to minimize whitespace
                        this._timeline.to(upDivs, .5, {
                            top: numWidth + secondOp * squareWidth / 2 + squareMargins,
                            ease: Power3.easeOut
                        }, "-=.5");
                    }
                }, {
                    key: "go",
                    value: function go() {
                        this._timeline.timeScale(1);
                        this._timeline.play(0);
                    }
                }, {
                    key: "goAway",
                    value: function goAway() {
                        if (this._drawn) {
                            //if (this._timeline.time() > this._timeline.getLabelTime("beforeCount"))
                            //    this._timeline.seek("beforeCount");
                            this._timeline.reverse();
                            this._timeline.timeScale(8);
                        }
                    }
                }, {
                    key: "removeElements",
                    value: function removeElements() {
                        $("#" + this._svgId).remove();
                        $("#" + this._svgId + "-equals").remove();
                    }
                }]);

                return ShortDivideAnimator;
            })();

            _export("default", ShortDivideAnimator);
        }
    };
});
$__System.register("52", ["4", "5", "49", "4c", "4a", "4b"], function (_export) {
    var _createClass, _classCallCheck, Snap, Power3, TweenMax, TimelineMax, RenderedEquals, RenderedObject, RenderedNumber, Utils, LongDivideAnimator;

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_3) {
            Snap = _3.Snap;
        }, function (_c) {
            Power3 = _c.Power3;
            TweenMax = _c.TweenMax;
            TimelineMax = _c.TimelineMax;
        }, function (_a) {
            RenderedEquals = _a.RenderedEquals;
            RenderedObject = _a.RenderedObject;
            RenderedNumber = _a.RenderedNumber;
        }, function (_b) {
            Utils = _b["default"];
        }],
        execute: function () {
            /**
             * Created by Matthew on 9/15/2016.
             */
            "use strict";

            LongDivideAnimator = (function () {
                function LongDivideAnimator(containerElement) {
                    _classCallCheck(this, LongDivideAnimator);

                    var elem = containerElement;

                    this._leftBox = elem.children(".snapbox-left");
                    this._rightBox = elem.children(".snapbox-right");
                    this._container = elem;
                    this._timeline = new TimelineMax();
                    this._animationId = this._container.attr("id") + "-animation";
                    this._svgId = this._container.attr("id") + "-animation";
                    this._toRemove = [];
                }

                _createClass(LongDivideAnimator, [{
                    key: "drawGo",
                    value: function drawGo() {
                        var _this = this;

                        if (this._drawn) {
                            this.go();

                            return;
                        }

                        this._drawn = true;

                        // Utilities
                        var numWidth = Utils.numWidth;
                        var intLength = Utils.intLength;

                        // Operators
                        var firstOp = parseInt(this._leftBox.find(".number-text").text());
                        var secondOp = parseInt(this._rightBox.find(".number-text").text());

                        // Parameters
                        var letterSpacing = 18;
                        var numSpacing = numWidth + letterSpacing;

                        var divisorArray = firstOp.toString().split("").map(function (i) {
                            return parseInt(i);
                        });

                        var globalEase = Power3.easeOut;

                        // Divide
                        var divideLeft = 0;
                        var divideTop = 3 * numWidth + letterSpacing + numWidth / 2;

                        var divide = new RenderedObject(this._svgId + "-divide", 0, 0, "", "", false);
                        var divideDiv = divide.createElements(this._container).css({
                            position: "absolute",
                            left: divideLeft,
                            top: divideTop,
                            "border-left": "1px solid black",
                            "border-top": "1px solid black"
                        });

                        // Dividend
                        var dividend = new RenderedNumber(this._svgId + "-dividend", 0, 0, firstOp, false);
                        var dividendDiv = dividend.createElements(this._container).css({
                            "padding-top": letterSpacing + "px",
                            "padding-left": letterSpacing + "px",
                            "letter-spacing": letterSpacing + "px"
                        });

                        divide.contents = dividendDiv;

                        // Divisor
                        var divisorLeft = intLength(firstOp) > intLength(secondOp) ? numWidth * (intLength(firstOp) - intLength(secondOp) + 1) + letterSpacing : 0;
                        var divisorTop = numWidth / 2;

                        var divisor = new RenderedNumber(this._svgId + "-divisor", divisorLeft, divisorTop, secondOp, false);
                        var divisorDiv = divisor.createElements(this._container).css({
                            position: "absolute",
                            opacity: 0
                        });
                        this._toRemove.push(divideDiv);

                        // Side
                        var divideWidth = divideDiv.width();
                        var leftPosOfCol = function leftPosOfCol(col) {
                            return divideLeft + divideWidth + letterSpacing;
                        };
                        var sideY = divideTop + (divideDiv.height() - letterSpacing) / 2;

                        var side = new RenderedObject(this._animationId + "-side", leftPosOfCol(-1), sideY, "small", "<span id='leftOp'></span><span id='divide'>&divide;</span><span id='rightOp'></span></span>" + "<span id='equals'>=</span>", false);
                        var sideDiv = side.createElements(this._container).css({
                            position: "absolute",
                            fontSize: 32,
                            display: "inline-block",
                            opacity: 0
                        });
                        this._toRemove.push(sideDiv);

                        var sideLeft = side.containerDiv.find("#leftOp").css({
                            color: "red",
                            paddingRight: letterSpacing
                        });
                        var sideRight = side.containerDiv.find("#rightOp").css({
                            color: "red",
                            paddingRight: letterSpacing
                        });
                        var sideDivide = side.containerDiv.find("#divide").css({
                            fontWeight: "bold",
                            paddingRight: letterSpacing
                        });
                        var sideEquals = side.containerDiv.find("#equals");

                        var sideBot = new RenderedObject(this._animationId + "-sidebot", leftPosOfCol(-1), sideY + numWidth + letterSpacing, "small", "<span id='leftBotOp'></span><span id='times'>&times;</span><span id='rightBotOp'></span></span>" + "<span id='equalsBot'>=</span>", false);
                        var sideBotDiv = sideBot.createElements(this._container).css({
                            position: "absolute",
                            fontSize: 32,
                            display: "inline-block",
                            opacity: 0
                        });
                        this._toRemove.push(sideBotDiv);

                        var sideBotLeft = sideBot.containerDiv.find("#leftBotOp").css({
                            color: "red",
                            paddingRight: letterSpacing,
                            opacity: 0
                        });
                        var sideBotRight = sideBot.containerDiv.find("#rightBotOp").css({
                            color: "red",
                            paddingRight: letterSpacing,
                            opacity: 0
                        });
                        var sideBotDivide = sideBot.containerDiv.find("#times").css({
                            fontWeight: "bold",
                            paddingRight: letterSpacing
                        });
                        var sideBotEquals = sideBot.containerDiv.find("#equalsBot");

                        // Timeline
                        var enterTime = .5;

                        var divisorLeftPos = divideLeft - numWidth * intLength(secondOp) - letterSpacing;

                        this._timeline.from(dividendDiv, enterTime, {
                            position: "absolute",
                            left: -divideLeft - 1,
                            top: -divideTop + numWidth / 2 - 1,
                            padding: 0,
                            "letter-spacing": 0,
                            opacity: 0,
                            ease: globalEase
                        }) /* Enter the dividend from the firstOp */
                        .to(divisorDiv, enterTime, {
                            left: divisorLeftPos,
                            top: divideTop + letterSpacing,
                            opacity: 1,
                            ease: globalEase
                        }, "-=" + enterTime) /* Move the divisor from the secondOp */
                        .to("", .5, {}); /* Wait */

                        // Show division steps
                        var dividendLeft = divideLeft + letterSpacing;
                        var smallNumWidth = 16;

                        var answerNums = [];
                        var leftVal = divisorArray[0];

                        divisorArray.forEach(function (value, index) {
                            var wholeValue = Math.floor(leftVal / secondOp);
                            var subtractValue = secondOp * wholeValue;
                            var wholeValueLeft = sideDiv.position().left + smallNumWidth * (6 + intLength(leftVal) + intLength(secondOp));

                            // Whole answer
                            var answerWhole = new RenderedNumber(_this._animationId + "-answerwhole-" + index, wholeValueLeft, sideY, wholeValue, false);
                            var answerWholeDiv = answerWhole.createElements(_this._container).css({
                                opacity: 0
                            });

                            answerWhole.containerDiv.addClass(Utils.answerClass);
                            answerNums.push(answerWhole);
                            _this._toRemove.push(answerWholeDiv);

                            // Value to subtract by
                            var subtractVal = new RenderedNumber(_this._animationId + "-subtractval-" + index, sideBotDiv.position().left + smallNumWidth * (6 + intLength(leftVal) + intLength(secondOp)), sideY + numWidth + letterSpacing, subtractValue, false);
                            var subtractValDiv = subtractVal.createElements(_this._container).css({
                                opacity: 0
                            }).addClass(Utils.answerClass);
                            answerNums.push(subtractVal);
                            _this._toRemove.push(subtractValDiv);

                            // Value after subtraction
                            var botVal = new RenderedNumber(_this._animationId + "-botval-" + index, dividendLeft + (index + 1 - intLength(leftVal - subtractValue)) * numSpacing, sideY + (index + 1) * 2 * numSpacing, leftVal - subtractValue, false);
                            var botValDiv = botVal.createElements(_this._container).css({
                                position: "absolute",
                                opacity: 0,
                                letterSpacing: letterSpacing,
                                color: "blue"
                            });
                            _this._toRemove.push(botValDiv);

                            var minus = new RenderedObject(_this._animationId + "-minus-" + index, divideLeft - letterSpacing, divideTop + letterSpacing + index * 2 * numSpacing + numSpacing, "small", "<span id='minus'>&minus;</span>", false);
                            var minusDiv = minus.createElements(_this._container).css({
                                position: "absolute",
                                fontSize: 32,
                                fontWeight: "bold",
                                opacity: 0
                            });
                            _this._toRemove.push(minusDiv);

                            // Render sub equal sign
                            var subEquals = new RenderedObject(_this._animationId + "-subequals-" + index, divideLeft, divideTop + numSpacing + index * 2 * numSpacing + numSpacing + letterSpacing / 4, "", "<span id='subEquals'><hr></span>", false);
                            var subEqualsDiv = subEquals.createElements(_this._container);

                            subEqualsDiv.css({
                                position: "absolute",
                                width: divideWidth,
                                opacity: 0
                            });

                            _this._toRemove.push(subEqualsDiv);

                            // Render copy of top side equation secondOp for clarification
                            var secondOpCopy = new RenderedNumber(_this._animationId + "-secandopcopy-" + index, sideDiv.position().left + smallNumWidth * (3.5 - 1 / 9 + intLength(wholeValue)), sideY + 2, secondOp, false);
                            var secondOpCopyDiv = secondOpCopy.createElements(_this._container).css({
                                position: "absolute",
                                fontSize: 32 / 3,
                                color: "red",
                                opacity: 0
                            });
                            _this._toRemove.push(secondOpCopyDiv);

                            // Render copy of wholeValue for clarification
                            var wholeValueCopy = new RenderedNumber(_this._animationId + "-wholevaluecopy-" + index, wholeValueLeft, sideY, wholeValue, false);
                            var wholeValueCopyDiv = wholeValueCopy.createElements(_this._container).css({
                                position: "absolute",
                                color: "#2cc31c",
                                opacity: 0
                            });
                            _this._toRemove.push(answerWholeDiv);

                            _this._timeline.set(sideLeft, { text: String(leftVal) }) /* Set the top left side number */
                            .set(sideRight, { text: String(secondOp) }) /* Set the top right side number */
                            .to(sideDiv, 1, {
                                opacity: 1,
                                ease: globalEase
                            }) /* Show the top side equation */
                            .to(answerWholeDiv, 0.5, {
                                opacity: 1,
                                ease: globalEase
                            }) /* Fade in the top side answer */
                            .set(sideBotLeft, { text: String(secondOp) }) /* Set the bottom left side number */
                            .set(sideBotRight, { text: String(wholeValue) }) /* Set the bottom right side number */
                            .set([wholeValueCopyDiv, secondOpCopyDiv], { opacity: 1 }) /* Show faded side info */
                            .to(wholeValueCopyDiv, 1, {
                                left: sideBotDiv.position().left + smallNumWidth * (3.5 - 1 / 9 + intLength(secondOp)),
                                top: sideY + numWidth + letterSpacing + smallNumWidth / 3 - 2,
                                fontSize: 32 / 3,
                                color: "red",
                                opacity: 1
                            }) /* Move top side answer to bot side equation position */
                            .to(secondOpCopyDiv, 1, {
                                left: sideBotDiv.position().left,
                                top: sideY + numWidth + letterSpacing + smallNumWidth / 3 - 2,
                                opacity: 1
                            }, "-=1") /* Move the top side second op to the bot side equation position */
                            .to(sideBotDiv, 1, {
                                opacity: 1,
                                ease: globalEase
                            }) /* Show the bot side equation */
                            .to(subtractValDiv, 0.5, {
                                opacity: 1,
                                ease: globalEase
                            }) /* Fade in the bottom side answer */
                            .to(answerWholeDiv, 1.5, {
                                left: dividendLeft + index * numSpacing,
                                top: divideTop - numWidth - letterSpacing,
                                ease: globalEase
                            }) /* Move the top side answer to the answer */
                            // Fix this positioning (im done trying, i have spent the last 4 days working on this "left" line and I can't find what I'm missing. It's your problem now Dan (it needs to right-align with the sub-subtract equation) nm I solved this but I like my comment I am proud of the literary work that went into it and I shall keep it unless it begins to annoy me
                            .to(subtractValDiv, 1.5, {
                                left: dividendLeft + numSpacing * (index + 1 - intLength(leftVal)),
                                top: divideTop + letterSpacing + index * 2 * numSpacing + numSpacing,
                                letterSpacing: letterSpacing + "px",
                                ease: globalEase
                            }, "-=1.5") /* Move the bot side answer to its location to show subtraction (sync with answerWholeDiv) */
                            .to(minusDiv, 0.5, {
                                opacity: 1,
                                ease: globalEase
                            }) /* Show the minus sign */
                            .to(subEqualsDiv, 0.5, {
                                opacity: 1,
                                ease: globalEase
                            }, "-=1") /* Show the sub equals (sync with minusDiv) */
                            .to(botValDiv, 1, {
                                opacity: 1,
                                ease: globalEase
                            }) /* Show the bot value after subtraction */
                            .to([sideDiv, sideBotDiv, wholeValueCopyDiv, secondOpCopyDiv], 1, {
                                opacity: 0,
                                ease: globalEase
                            }); /* Hide the side equations */

                            if (index < divisorArray.length - 1) {
                                var nextVal = new RenderedNumber(_this._animationId + "-nextval-" + index, dividendLeft + (index + 1) * numSpacing, sideY, divisorArray[index + 1], false);
                                var nextValDiv = nextVal.createElements(_this._container).css({
                                    position: "absolute",
                                    color: "black",
                                    opacity: 0
                                });
                                _this._toRemove.push(nextValDiv);

                                _this._timeline.to(nextValDiv, 1, {
                                    top: sideY + (index + 1) * 2 * numSpacing,
                                    color: "blue",
                                    opacity: 1,
                                    ease: globalEase
                                });
                            } else if (leftVal - subtractValue != 0) {
                                // Remainder "R"
                                var rLetter = new RenderedNumber(_this._animationId + "-R", dividendLeft + (index + 1) * numSpacing, divideTop - numWidth - letterSpacing, "R", false);
                                var rLetterDiv = rLetter.createElements(_this._container).css({
                                    position: "absolute",
                                    opacity: 0
                                });

                                _this._toRemove.push(rLetterDiv);

                                // Remainder value
                                var remainder = new RenderedNumber(_this._animationId + "-remainder", dividendLeft + (index + 1 - intLength(leftVal - subtractValue)) * numSpacing, sideY + (index + 1) * 2 * numSpacing, leftVal - subtractValue, false);
                                var remainderDiv = remainder.createElements(_this._container).css({
                                    position: "absolute",
                                    letterSpacing: letterSpacing,
                                    color: "blue",
                                    opacity: 0
                                });

                                _this._toRemove.push(remainderDiv);

                                _this._timeline.to(rLetterDiv, 1.5, {
                                    opacity: 1,
                                    ease: globalEase
                                }) /* Show the "R" for remainder */
                                .to(remainderDiv, 1.5, {
                                    left: dividendLeft + (index + 2) * numSpacing,
                                    top: divideTop - numWidth - letterSpacing,
                                    color: "#2cc31c",
                                    opacity: 1,
                                    ease: globalEase
                                }, "-=1.5"); /* Move and show the remainder value (sync with rLetterDiv) */
                            }

                            leftVal = parseInt("" + (leftVal - subtractValue) + divisorArray[index + 1]);
                        });
                    }
                }, {
                    key: "go",
                    value: function go() {
                        this._timeline.timeScale(1);
                        this._timeline.play(0);
                    }
                }, {
                    key: "goAway",
                    value: function goAway() {
                        if (this._drawn) {
                            //if (this._timeline.time() > this._timeline.getLabelTime("beforeCount"))
                            //    this._timeline.seek("beforeCount");
                            this._timeline.reverse();
                            this._timeline.timeScale(8);
                        }
                    }
                }, {
                    key: "removeElements",
                    value: function removeElements() {
                        $("#" + this._svgId).remove();
                        $("#" + this._svgId + "-equals").remove();
                    }
                }]);

                return LongDivideAnimator;
            })();

            _export("default", LongDivideAnimator);
        }
    };
});
$__System.registerDynamic("53", [], false, function ($__require, $__exports, $__module) {
    var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

    (function ($__global) {
        /* */
        "format global";
        // Snap.svg 0.4.1
        //
        // Copyright (c) 2013 – 2015 Adobe Systems Incorporated. All rights reserved.
        //
        // Licensed under the Apache License, Version 2.0 (the "License");
        // you may not use this file except in compliance with the License.
        // You may obtain a copy of the License at
        //
        // http://www.apache.org/licenses/LICENSE-2.0
        //
        // Unless required by applicable law or agreed to in writing, software
        // distributed under the License is distributed on an "AS IS" BASIS,
        // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        // See the License for the specific language governing permissions and
        // limitations under the License.
        //
        // build: 2015-04-13

        // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
        //
        // Licensed under the Apache License, Version 2.0 (the "License");
        // you may not use this file except in compliance with the License.
        // You may obtain a copy of the License at
        //
        // http://www.apache.org/licenses/LICENSE-2.0
        //
        // Unless required by applicable law or agreed to in writing, software
        // distributed under the License is distributed on an "AS IS" BASIS,
        // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        // See the License for the specific language governing permissions and
        // limitations under the License.
        // ┌────────────────────────────────────────────────────────────┐ \\
        // │ Eve 0.4.2 - JavaScript Events Library                      │ \\
        // ├────────────────────────────────────────────────────────────┤ \\
        // │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
        // └────────────────────────────────────────────────────────────┘ \\

        (function (glob) {
            var version = "0.4.2",
                has = "hasOwnProperty",
                separator = /[\.\/]/,
                comaseparator = /\s*,\s*/,
                wildcard = "*",
                fun = function () {},
                numsort = function (a, b) {
                return a - b;
            },
                current_event,
                stop,
                events = { n: {} },
                firstDefined = function () {
                for (var i = 0, ii = this.length; i < ii; i++) {
                    if (typeof this[i] != "undefined") {
                        return this[i];
                    }
                }
            },
                lastDefined = function () {
                var i = this.length;
                while (--i) {
                    if (typeof this[i] != "undefined") {
                        return this[i];
                    }
                }
            },

            /*\
             * eve
             [ method ]
              * Fires event with given `name`, given scope and other parameters.
              > Arguments
              - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
             - scope (object) context for the event handlers
             - varargs (...) the rest of arguments will be sent to event handlers
              = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
            \*/
            eve = function (name, scope) {
                name = String(name);
                var e = events,
                    oldstop = stop,
                    args = Array.prototype.slice.call(arguments, 2),
                    listeners = eve.listeners(name),
                    z = 0,
                    f = false,
                    l,
                    indexed = [],
                    queue = {},
                    out = [],
                    ce = current_event,
                    errors = [];
                out.firstDefined = firstDefined;
                out.lastDefined = lastDefined;
                current_event = name;
                stop = 0;
                for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
                    indexed.push(listeners[i].zIndex);
                    if (listeners[i].zIndex < 0) {
                        queue[listeners[i].zIndex] = listeners[i];
                    }
                }
                indexed.sort(numsort);
                while (indexed[z] < 0) {
                    l = queue[indexed[z++]];
                    out.push(l.apply(scope, args));
                    if (stop) {
                        stop = oldstop;
                        return out;
                    }
                }
                for (i = 0; i < ii; i++) {
                    l = listeners[i];
                    if ("zIndex" in l) {
                        if (l.zIndex == indexed[z]) {
                            out.push(l.apply(scope, args));
                            if (stop) {
                                break;
                            }
                            do {
                                z++;
                                l = queue[indexed[z]];
                                l && out.push(l.apply(scope, args));
                                if (stop) {
                                    break;
                                }
                            } while (l);
                        } else {
                            queue[l.zIndex] = l;
                        }
                    } else {
                        out.push(l.apply(scope, args));
                        if (stop) {
                            break;
                        }
                    }
                }
                stop = oldstop;
                current_event = ce;
                return out;
            };
            // Undocumented. Debug only.
            eve._events = events;
            /*\
             * eve.listeners
             [ method ]
              * Internal method which gives you array of all event handlers that will be triggered by the given `name`.
              > Arguments
              - name (string) name of the event, dot (`.`) or slash (`/`) separated
              = (array) array of event handlers
            \*/
            eve.listeners = function (name) {
                var names = name.split(separator),
                    e = events,
                    item,
                    items,
                    k,
                    i,
                    ii,
                    j,
                    jj,
                    nes,
                    es = [e],
                    out = [];
                for (i = 0, ii = names.length; i < ii; i++) {
                    nes = [];
                    for (j = 0, jj = es.length; j < jj; j++) {
                        e = es[j].n;
                        items = [e[names[i]], e[wildcard]];
                        k = 2;
                        while (k--) {
                            item = items[k];
                            if (item) {
                                nes.push(item);
                                out = out.concat(item.f || []);
                            }
                        }
                    }
                    es = nes;
                }
                return out;
            };

            /*\
             * eve.on
             [ method ]
             **
             * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
             | eve.on("*.under.*", f);
             | eve("mouse.under.floor"); // triggers f
             * Use @eve to trigger the listener.
             **
             > Arguments
             **
             - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
             - f (function) event handler function
             **
             = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment. 
             > Example:
             | eve.on("mouse", eatIt)(2);
             | eve.on("mouse", scream);
             | eve.on("mouse", catchIt)(1);
             * This will ensure that `catchIt` function will be called before `eatIt`.
             *
             * If you want to put your handler before non-indexed handlers, specify a negative value.
             * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
            \*/
            eve.on = function (name, f) {
                name = String(name);
                if (typeof f != "function") {
                    return function () {};
                }
                var names = name.split(comaseparator);
                for (var i = 0, ii = names.length; i < ii; i++) {
                    (function (name) {
                        var names = name.split(separator),
                            e = events,
                            exist;
                        for (var i = 0, ii = names.length; i < ii; i++) {
                            e = e.n;
                            e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = { n: {} });
                        }
                        e.f = e.f || [];
                        for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {
                            exist = true;
                            break;
                        }
                        !exist && e.f.push(f);
                    })(names[i]);
                }
                return function (zIndex) {
                    if (+zIndex == +zIndex) {
                        f.zIndex = +zIndex;
                    }
                };
            };
            /*\
             * eve.f
             [ method ]
             **
             * Returns function that will fire given event with optional arguments.
             * Arguments that will be passed to the result function will be also
             * concated to the list of final arguments.
             | el.onclick = eve.f("click", 1, 2);
             | eve.on("click", function (a, b, c) {
             |     console.log(a, b, c); // 1, 2, [event object]
             | });
             > Arguments
             - event (string) event name
             - varargs (…) and any other arguments
             = (function) possible event handler function
            \*/
            eve.f = function (event) {
                var attrs = [].slice.call(arguments, 1);
                return function () {
                    eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
                };
            };
            /*\
             * eve.stop
             [ method ]
             **
             * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
            \*/
            eve.stop = function () {
                stop = 1;
            };
            /*\
             * eve.nt
             [ method ]
             **
             * Could be used inside event handler to figure out actual name of the event.
             **
             > Arguments
             **
             - subname (string) #optional subname of the event
             **
             = (string) name of the event, if `subname` is not specified
             * or
             = (boolean) `true`, if current event’s name contains `subname`
            \*/
            eve.nt = function (subname) {
                if (subname) {
                    return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(current_event);
                }
                return current_event;
            };
            /*\
             * eve.nts
             [ method ]
             **
             * Could be used inside event handler to figure out actual name of the event.
             **
             **
             = (array) names of the event
            \*/
            eve.nts = function () {
                return current_event.split(separator);
            };
            /*\
             * eve.off
             [ method ]
             **
             * Removes given function from the list of event listeners assigned to given name.
             * If no arguments specified all the events will be cleared.
             **
             > Arguments
             **
             - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
             - f (function) event handler function
            \*/
            /*\
             * eve.unbind
             [ method ]
             **
             * See @eve.off
            \*/
            eve.off = eve.unbind = function (name, f) {
                if (!name) {
                    eve._events = events = { n: {} };
                    return;
                }
                var names = name.split(comaseparator);
                if (names.length > 1) {
                    for (var i = 0, ii = names.length; i < ii; i++) {
                        eve.off(names[i], f);
                    }
                    return;
                }
                names = name.split(separator);
                var e,
                    key,
                    splice,
                    i,
                    ii,
                    j,
                    jj,
                    cur = [events];
                for (i = 0, ii = names.length; i < ii; i++) {
                    for (j = 0; j < cur.length; j += splice.length - 2) {
                        splice = [j, 1];
                        e = cur[j].n;
                        if (names[i] != wildcard) {
                            if (e[names[i]]) {
                                splice.push(e[names[i]]);
                            }
                        } else {
                            for (key in e) if (e[has](key)) {
                                splice.push(e[key]);
                            }
                        }
                        cur.splice.apply(cur, splice);
                    }
                }
                for (i = 0, ii = cur.length; i < ii; i++) {
                    e = cur[i];
                    while (e.n) {
                        if (f) {
                            if (e.f) {
                                for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
                                    e.f.splice(j, 1);
                                    break;
                                }
                                !e.f.length && delete e.f;
                            }
                            for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                                var funcs = e.n[key].f;
                                for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
                                    funcs.splice(j, 1);
                                    break;
                                }
                                !funcs.length && delete e.n[key].f;
                            }
                        } else {
                            delete e.f;
                            for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                                delete e.n[key].f;
                            }
                        }
                        e = e.n;
                    }
                }
            };
            /*\
             * eve.once
             [ method ]
             **
             * Binds given event handler with a given name to only run once then unbind itself.
             | eve.once("login", f);
             | eve("login"); // triggers f
             | eve("login"); // no listeners
             * Use @eve to trigger the listener.
             **
             > Arguments
             **
             - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
             - f (function) event handler function
             **
             = (function) same return function as @eve.on
            \*/
            eve.once = function (name, f) {
                var f2 = function () {
                    eve.unbind(name, f2);
                    return f.apply(this, arguments);
                };
                return eve.on(name, f2);
            };
            /*\
             * eve.version
             [ property (string) ]
             **
             * Current version of the library.
            \*/
            eve.version = version;
            eve.toString = function () {
                return "You are running Eve " + version;
            };
            typeof module != "undefined" && module.exports ? module.exports = eve : typeof define === "function" && define.amd ? define("eve", [], function () {
                return eve;
            }) : glob.eve = eve;
        })(this);

        (function (glob, factory) {
            // AMD support
            if (typeof define == "function" && define.amd) {
                // Define as an anonymous module
                define(["eve"], function (eve) {
                    return factory(glob, eve);
                });
            } else if (typeof exports != 'undefined') {
                // Next for Node.js or CommonJS
                var eve = require('eve');
                module.exports = factory(glob, eve);
            } else {
                // Browser globals (glob is window)
                // Snap adds itself to window
                factory(glob, glob.eve);
            }
        })(window || this, function (window, eve) {

            // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            // http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            var mina = function (eve) {
                var animations = {},
                    requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                    setTimeout(callback, 16);
                },
                    isArray = Array.isArray || function (a) {
                    return a instanceof Array || Object.prototype.toString.call(a) == "[object Array]";
                },
                    idgen = 0,
                    idprefix = "M" + (+new Date()).toString(36),
                    ID = function () {
                    return idprefix + (idgen++).toString(36);
                },
                    diff = function (a, b, A, B) {
                    if (isArray(a)) {
                        res = [];
                        for (var i = 0, ii = a.length; i < ii; i++) {
                            res[i] = diff(a[i], b, A[i], B);
                        }
                        return res;
                    }
                    var dif = (A - a) / (B - b);
                    return function (bb) {
                        return a + dif * (bb - b);
                    };
                },
                    timer = Date.now || function () {
                    return +new Date();
                },
                    sta = function (val) {
                    var a = this;
                    if (val == null) {
                        return a.s;
                    }
                    var ds = a.s - val;
                    a.b += a.dur * ds;
                    a.B += a.dur * ds;
                    a.s = val;
                },
                    speed = function (val) {
                    var a = this;
                    if (val == null) {
                        return a.spd;
                    }
                    a.spd = val;
                },
                    duration = function (val) {
                    var a = this;
                    if (val == null) {
                        return a.dur;
                    }
                    a.s = a.s * val / a.dur;
                    a.dur = val;
                },
                    stopit = function () {
                    var a = this;
                    delete animations[a.id];
                    a.update();
                    eve("mina.stop." + a.id, a);
                },
                    pause = function () {
                    var a = this;
                    if (a.pdif) {
                        return;
                    }
                    delete animations[a.id];
                    a.update();
                    a.pdif = a.get() - a.b;
                },
                    resume = function () {
                    var a = this;
                    if (!a.pdif) {
                        return;
                    }
                    a.b = a.get() - a.pdif;
                    delete a.pdif;
                    animations[a.id] = a;
                },
                    update = function () {
                    var a = this,
                        res;
                    if (isArray(a.start)) {
                        res = [];
                        for (var j = 0, jj = a.start.length; j < jj; j++) {
                            res[j] = +a.start[j] + (a.end[j] - a.start[j]) * a.easing(a.s);
                        }
                    } else {
                        res = +a.start + (a.end - a.start) * a.easing(a.s);
                    }
                    a.set(res);
                },
                    frame = function () {
                    var len = 0;
                    for (var i in animations) if (animations.hasOwnProperty(i)) {
                        var a = animations[i],
                            b = a.get(),
                            res;
                        len++;
                        a.s = (b - a.b) / (a.dur / a.spd);
                        if (a.s >= 1) {
                            delete animations[i];
                            a.s = 1;
                            len--;
                            (function (a) {
                                setTimeout(function () {
                                    eve("mina.finish." + a.id, a);
                                });
                            })(a);
                        }
                        a.update();
                    }
                    len && requestAnimFrame(frame);
                },

                /*\
                 * mina
                 [ method ]
                 **
                 * Generic animation of numbers
                 **
                 - a (number) start _slave_ number
                 - A (number) end _slave_ number
                 - b (number) start _master_ number (start time in general case)
                 - B (number) end _master_ number (end time in gereal case)
                 - get (function) getter of _master_ number (see @mina.time)
                 - set (function) setter of _slave_ number
                 - easing (function) #optional easing function, default is @mina.linear
                 = (object) animation descriptor
                 o {
                 o         id (string) animation id,
                 o         start (number) start _slave_ number,
                 o         end (number) end _slave_ number,
                 o         b (number) start _master_ number,
                 o         s (number) animation status (0..1),
                 o         dur (number) animation duration,
                 o         spd (number) animation speed,
                 o         get (function) getter of _master_ number (see @mina.time),
                 o         set (function) setter of _slave_ number,
                 o         easing (function) easing function, default is @mina.linear,
                 o         status (function) status getter/setter,
                 o         speed (function) speed getter/setter,
                 o         duration (function) duration getter/setter,
                 o         stop (function) animation stopper
                 o         pause (function) pauses the animation
                 o         resume (function) resumes the animation
                 o         update (function) calles setter with the right value of the animation
                 o }
                \*/
                mina = function (a, A, b, B, get, set, easing) {
                    var anim = {
                        id: ID(),
                        start: a,
                        end: A,
                        b: b,
                        s: 0,
                        dur: B - b,
                        spd: 1,
                        get: get,
                        set: set,
                        easing: easing || mina.linear,
                        status: sta,
                        speed: speed,
                        duration: duration,
                        stop: stopit,
                        pause: pause,
                        resume: resume,
                        update: update
                    };
                    animations[anim.id] = anim;
                    var len = 0,
                        i;
                    for (i in animations) if (animations.hasOwnProperty(i)) {
                        len++;
                        if (len == 2) {
                            break;
                        }
                    }
                    len == 1 && requestAnimFrame(frame);
                    return anim;
                };
                /*\
                 * mina.time
                 [ method ]
                 **
                 * Returns the current time. Equivalent to:
                 | function () {
                 |     return (new Date).getTime();
                 | }
                \*/
                mina.time = timer;
                /*\
                 * mina.getById
                 [ method ]
                 **
                 * Returns an animation by its id
                 - id (string) animation's id
                 = (object) See @mina
                \*/
                mina.getById = function (id) {
                    return animations[id] || null;
                };

                /*\
                 * mina.linear
                 [ method ]
                 **
                 * Default linear easing
                 - n (number) input 0..1
                 = (number) output 0..1
                \*/
                mina.linear = function (n) {
                    return n;
                };
                /*\
                 * mina.easeout
                 [ method ]
                 **
                 * Easeout easing
                 - n (number) input 0..1
                 = (number) output 0..1
                \*/
                mina.easeout = function (n) {
                    return Math.pow(n, 1.7);
                };
                /*\
                 * mina.easein
                 [ method ]
                 **
                 * Easein easing
                 - n (number) input 0..1
                 = (number) output 0..1
                \*/
                mina.easein = function (n) {
                    return Math.pow(n, .48);
                };
                /*\
                 * mina.easeinout
                 [ method ]
                 **
                 * Easeinout easing
                 - n (number) input 0..1
                 = (number) output 0..1
                \*/
                mina.easeinout = function (n) {
                    if (n == 1) {
                        return 1;
                    }
                    if (n == 0) {
                        return 0;
                    }
                    var q = .48 - n / 1.04,
                        Q = Math.sqrt(.1734 + q * q),
                        x = Q - q,
                        X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1),
                        y = -Q - q,
                        Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1),
                        t = X + Y + .5;
                    return (1 - t) * 3 * t * t + t * t * t;
                };
                /*\
                 * mina.backin
                 [ method ]
                 **
                 * Backin easing
                 - n (number) input 0..1
                 = (number) output 0..1
                \*/
                mina.backin = function (n) {
                    if (n == 1) {
                        return 1;
                    }
                    var s = 1.70158;
                    return n * n * ((s + 1) * n - s);
                };
                /*\
                 * mina.backout
                 [ method ]
                 **
                 * Backout easing
                 - n (number) input 0..1
                 = (number) output 0..1
                \*/
                mina.backout = function (n) {
                    if (n == 0) {
                        return 0;
                    }
                    n = n - 1;
                    var s = 1.70158;
                    return n * n * ((s + 1) * n + s) + 1;
                };
                /*\
                 * mina.elastic
                 [ method ]
                 **
                 * Elastic easing
                 - n (number) input 0..1
                 = (number) output 0..1
                \*/
                mina.elastic = function (n) {
                    if (n == !!n) {
                        return n;
                    }
                    return Math.pow(2, -10 * n) * Math.sin((n - .075) * (2 * Math.PI) / .3) + 1;
                };
                /*\
                 * mina.bounce
                 [ method ]
                 **
                 * Bounce easing
                 - n (number) input 0..1
                 = (number) output 0..1
                \*/
                mina.bounce = function (n) {
                    var s = 7.5625,
                        p = 2.75,
                        l;
                    if (n < 1 / p) {
                        l = s * n * n;
                    } else {
                        if (n < 2 / p) {
                            n -= 1.5 / p;
                            l = s * n * n + .75;
                        } else {
                            if (n < 2.5 / p) {
                                n -= 2.25 / p;
                                l = s * n * n + .9375;
                            } else {
                                n -= 2.625 / p;
                                l = s * n * n + .984375;
                            }
                        }
                    }
                    return l;
                };
                window.mina = mina;
                return mina;
            }(typeof eve == "undefined" ? function () {} : eve);
            // Copyright (c) 2013 - 2015 Adobe Systems Incorporated. All rights reserved.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            // http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.

            var Snap = function (root) {
                Snap.version = "0.4.0";
                /*\
                 * Snap
                 [ method ]
                 **
                 * Creates a drawing surface or wraps existing SVG element.
                 **
                 - width (number|string) width of surface
                 - height (number|string) height of surface
                 * or
                 - DOM (SVGElement) element to be wrapped into Snap structure
                 * or
                 - array (array) array of elements (will return set of elements)
                 * or
                 - query (string) CSS query selector
                 = (object) @Element
                \*/
                function Snap(w, h) {
                    if (w) {
                        if (w.nodeType) {
                            return wrap(w);
                        }
                        if (is(w, "array") && Snap.set) {
                            return Snap.set.apply(Snap, w);
                        }
                        if (w instanceof Element) {
                            return w;
                        }
                        if (h == null) {
                            w = glob.doc.querySelector(String(w));
                            return wrap(w);
                        }
                    }
                    w = w == null ? "100%" : w;
                    h = h == null ? "100%" : h;
                    return new Paper(w, h);
                }
                Snap.toString = function () {
                    return "Snap v" + this.version;
                };
                Snap._ = {};
                var glob = {
                    win: root.window,
                    doc: root.window.document
                };
                Snap._.glob = glob;
                var has = "hasOwnProperty",
                    Str = String,
                    toFloat = parseFloat,
                    toInt = parseInt,
                    math = Math,
                    mmax = math.max,
                    mmin = math.min,
                    abs = math.abs,
                    pow = math.pow,
                    PI = math.PI,
                    round = math.round,
                    E = "",
                    S = " ",
                    objectToString = Object.prototype.toString,
                    ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
                    colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                    bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
                    reURLValue = /^url\(#?([^)]+)\)$/,
                    separator = Snap._.separator = /[,\s]+/,
                    whitespace = /[\s]/g,
                    commaSpaces = /[\s]*,[\s]*/,
                    hsrg = { hs: 1, rg: 1 },
                    pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
                    tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
                    pathValues = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/ig,
                    idgen = 0,
                    idprefix = "S" + (+new Date()).toString(36),
                    ID = function (el) {
                    return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
                },
                    xlink = "http://www.w3.org/1999/xlink",
                    xmlns = "http://www.w3.org/2000/svg",
                    hub = {},
                    URL = Snap.url = function (url) {
                    return "url('#" + url + "')";
                };

                function $(el, attr) {
                    if (attr) {
                        if (el == "#text") {
                            el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
                        }
                        if (el == "#comment") {
                            el = glob.doc.createComment(attr.text || attr["#text"] || "");
                        }
                        if (typeof el == "string") {
                            el = $(el);
                        }
                        if (typeof attr == "string") {
                            if (el.nodeType == 1) {
                                if (attr.substring(0, 6) == "xlink:") {
                                    return el.getAttributeNS(xlink, attr.substring(6));
                                }
                                if (attr.substring(0, 4) == "xml:") {
                                    return el.getAttributeNS(xmlns, attr.substring(4));
                                }
                                return el.getAttribute(attr);
                            } else if (attr == "text") {
                                return el.nodeValue;
                            } else {
                                return null;
                            }
                        }
                        if (el.nodeType == 1) {
                            for (var key in attr) if (attr[has](key)) {
                                var val = Str(attr[key]);
                                if (val) {
                                    if (key.substring(0, 6) == "xlink:") {
                                        el.setAttributeNS(xlink, key.substring(6), val);
                                    } else if (key.substring(0, 4) == "xml:") {
                                        el.setAttributeNS(xmlns, key.substring(4), val);
                                    } else {
                                        el.setAttribute(key, val);
                                    }
                                } else {
                                    el.removeAttribute(key);
                                }
                            }
                        } else if ("text" in attr) {
                            el.nodeValue = attr.text;
                        }
                    } else {
                        el = glob.doc.createElementNS(xmlns, el);
                    }
                    return el;
                }
                Snap._.$ = $;
                Snap._.id = ID;
                function getAttrs(el) {
                    var attrs = el.attributes,
                        name,
                        out = {};
                    for (var i = 0; i < attrs.length; i++) {
                        if (attrs[i].namespaceURI == xlink) {
                            name = "xlink:";
                        } else {
                            name = "";
                        }
                        name += attrs[i].name;
                        out[name] = attrs[i].textContent;
                    }
                    return out;
                }
                function is(o, type) {
                    type = Str.prototype.toLowerCase.call(type);
                    if (type == "finite") {
                        return isFinite(o);
                    }
                    if (type == "array" && (o instanceof Array || Array.isArray && Array.isArray(o))) {
                        return true;
                    }
                    return type == "null" && o === null || type == typeof o && o !== null || type == "object" && o === Object(o) || objectToString.call(o).slice(8, -1).toLowerCase() == type;
                }
                /*\
                 * Snap.format
                 [ method ]
                 **
                 * Replaces construction of type `{<name>}` to the corresponding argument
                 **
                 - token (string) string to format
                 - json (object) object which properties are used as a replacement
                 = (string) formatted string
                 > Usage
                 | // this draws a rectangular shape equivalent to "M10,20h40v50h-40z"
                 | paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
                 |     x: 10,
                 |     y: 20,
                 |     dim: {
                 |         width: 40,
                 |         height: 50,
                 |         "negative width": -40
                 |     }
                 | }));
                \*/
                Snap.format = function () {
                    var tokenRegex = /\{([^\}]+)\}/g,
                        objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                        // matches .xxxxx or ["xxxxx"] to run over object properties
                    replacer = function (all, key, obj) {
                        var res = obj;
                        key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
                            name = name || quotedName;
                            if (res) {
                                if (name in res) {
                                    res = res[name];
                                }
                                typeof res == "function" && isFunc && (res = res());
                            }
                        });
                        res = (res == null || res == obj ? all : res) + "";
                        return res;
                    };
                    return function (str, obj) {
                        return Str(str).replace(tokenRegex, function (all, key) {
                            return replacer(all, key, obj);
                        });
                    };
                }();
                function clone(obj) {
                    if (typeof obj == "function" || Object(obj) !== obj) {
                        return obj;
                    }
                    var res = new obj.constructor();
                    for (var key in obj) if (obj[has](key)) {
                        res[key] = clone(obj[key]);
                    }
                    return res;
                }
                Snap._.clone = clone;
                function repush(array, item) {
                    for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
                        return array.push(array.splice(i, 1)[0]);
                    }
                }
                function cacher(f, scope, postprocessor) {
                    function newf() {
                        var arg = Array.prototype.slice.call(arguments, 0),
                            args = arg.join("\u2400"),
                            cache = newf.cache = newf.cache || {},
                            count = newf.count = newf.count || [];
                        if (cache[has](args)) {
                            repush(count, args);
                            return postprocessor ? postprocessor(cache[args]) : cache[args];
                        }
                        count.length >= 1e3 && delete cache[count.shift()];
                        count.push(args);
                        cache[args] = f.apply(scope, arg);
                        return postprocessor ? postprocessor(cache[args]) : cache[args];
                    }
                    return newf;
                }
                Snap._.cacher = cacher;
                function angle(x1, y1, x2, y2, x3, y3) {
                    if (x3 == null) {
                        var x = x1 - x2,
                            y = y1 - y2;
                        if (!x && !y) {
                            return 0;
                        }
                        return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
                    } else {
                        return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
                    }
                }
                function rad(deg) {
                    return deg % 360 * PI / 180;
                }
                function deg(rad) {
                    return rad * 180 / PI % 360;
                }
                function x_y() {
                    return this.x + S + this.y;
                }
                function x_y_w_h() {
                    return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
                }

                /*\
                 * Snap.rad
                 [ method ]
                 **
                 * Transform angle to radians
                 - deg (number) angle in degrees
                 = (number) angle in radians
                \*/
                Snap.rad = rad;
                /*\
                 * Snap.deg
                 [ method ]
                 **
                 * Transform angle to degrees
                 - rad (number) angle in radians
                 = (number) angle in degrees
                \*/
                Snap.deg = deg;
                /*\
                 * Snap.sin
                 [ method ]
                 **
                 * Equivalent to `Math.sin()` only works with degrees, not radians.
                 - angle (number) angle in degrees
                 = (number) sin
                \*/
                Snap.sin = function (angle) {
                    return math.sin(Snap.rad(angle));
                };
                /*\
                 * Snap.tan
                 [ method ]
                 **
                 * Equivalent to `Math.tan()` only works with degrees, not radians.
                 - angle (number) angle in degrees
                 = (number) tan
                \*/
                Snap.tan = function (angle) {
                    return math.tan(Snap.rad(angle));
                };
                /*\
                 * Snap.cos
                 [ method ]
                 **
                 * Equivalent to `Math.cos()` only works with degrees, not radians.
                 - angle (number) angle in degrees
                 = (number) cos
                \*/
                Snap.cos = function (angle) {
                    return math.cos(Snap.rad(angle));
                };
                /*\
                 * Snap.asin
                 [ method ]
                 **
                 * Equivalent to `Math.asin()` only works with degrees, not radians.
                 - num (number) value
                 = (number) asin in degrees
                \*/
                Snap.asin = function (num) {
                    return Snap.deg(math.asin(num));
                };
                /*\
                 * Snap.acos
                 [ method ]
                 **
                 * Equivalent to `Math.acos()` only works with degrees, not radians.
                 - num (number) value
                 = (number) acos in degrees
                \*/
                Snap.acos = function (num) {
                    return Snap.deg(math.acos(num));
                };
                /*\
                 * Snap.atan
                 [ method ]
                 **
                 * Equivalent to `Math.atan()` only works with degrees, not radians.
                 - num (number) value
                 = (number) atan in degrees
                \*/
                Snap.atan = function (num) {
                    return Snap.deg(math.atan(num));
                };
                /*\
                 * Snap.atan2
                 [ method ]
                 **
                 * Equivalent to `Math.atan2()` only works with degrees, not radians.
                 - num (number) value
                 = (number) atan2 in degrees
                \*/
                Snap.atan2 = function (num) {
                    return Snap.deg(math.atan2(num));
                };
                /*\
                 * Snap.angle
                 [ method ]
                 **
                 * Returns an angle between two or three points
                 > Parameters
                 - x1 (number) x coord of first point
                 - y1 (number) y coord of first point
                 - x2 (number) x coord of second point
                 - y2 (number) y coord of second point
                 - x3 (number) #optional x coord of third point
                 - y3 (number) #optional y coord of third point
                 = (number) angle in degrees
                \*/
                Snap.angle = angle;
                /*\
                 * Snap.len
                 [ method ]
                 **
                 * Returns distance between two points
                 > Parameters
                 - x1 (number) x coord of first point
                 - y1 (number) y coord of first point
                 - x2 (number) x coord of second point
                 - y2 (number) y coord of second point
                 = (number) distance
                \*/
                Snap.len = function (x1, y1, x2, y2) {
                    return Math.sqrt(Snap.len2(x1, y1, x2, y2));
                };
                /*\
                 * Snap.len2
                 [ method ]
                 **
                 * Returns squared distance between two points
                 > Parameters
                 - x1 (number) x coord of first point
                 - y1 (number) y coord of first point
                 - x2 (number) x coord of second point
                 - y2 (number) y coord of second point
                 = (number) distance
                \*/
                Snap.len2 = function (x1, y1, x2, y2) {
                    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
                };
                /*\
                 * Snap.closestPoint
                 [ method ]
                 **
                 * Returns closest point to a given one on a given path.
                 > Parameters
                 - path (Element) path element
                 - x (number) x coord of a point
                 - y (number) y coord of a point
                 = (object) in format
                 {
                    x (number) x coord of the point on the path
                    y (number) y coord of the point on the path
                    length (number) length of the path to the point
                    distance (number) distance from the given point to the path
                 }
                \*/
                // Copied from http://bl.ocks.org/mbostock/8027637
                Snap.closestPoint = function (path, x, y) {
                    function distance2(p) {
                        var dx = p.x - x,
                            dy = p.y - y;
                        return dx * dx + dy * dy;
                    }
                    var pathNode = path.node,
                        pathLength = pathNode.getTotalLength(),
                        precision = pathLength / pathNode.pathSegList.numberOfItems * .125,
                        best,
                        bestLength,
                        bestDistance = Infinity;

                    // linear scan for coarse approximation
                    for (var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision) {
                        if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
                            best = scan, bestLength = scanLength, bestDistance = scanDistance;
                        }
                    }

                    // binary search for precise estimate
                    precision *= .5;
                    while (precision > .5) {
                        var before, after, beforeLength, afterLength, beforeDistance, afterDistance;
                        if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
                            best = before, bestLength = beforeLength, bestDistance = beforeDistance;
                        } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
                            best = after, bestLength = afterLength, bestDistance = afterDistance;
                        } else {
                            precision *= .5;
                        }
                    }

                    best = {
                        x: best.x,
                        y: best.y,
                        length: bestLength,
                        distance: Math.sqrt(bestDistance)
                    };
                    return best;
                };
                /*\
                 * Snap.is
                 [ method ]
                 **
                 * Handy replacement for the `typeof` operator
                 - o (…) any object or primitive
                 - type (string) name of the type, e.g., `string`, `function`, `number`, etc.
                 = (boolean) `true` if given value is of given type
                \*/
                Snap.is = is;
                /*\
                 * Snap.snapTo
                 [ method ]
                 **
                 * Snaps given value to given grid
                 - values (array|number) given array of values or step of the grid
                 - value (number) value to adjust
                 - tolerance (number) #optional maximum distance to the target value that would trigger the snap. Default is `10`.
                 = (number) adjusted value
                \*/
                Snap.snapTo = function (values, value, tolerance) {
                    tolerance = is(tolerance, "finite") ? tolerance : 10;
                    if (is(values, "array")) {
                        var i = values.length;
                        while (i--) if (abs(values[i] - value) <= tolerance) {
                            return values[i];
                        }
                    } else {
                        values = +values;
                        var rem = value % values;
                        if (rem < tolerance) {
                            return value - rem;
                        }
                        if (rem > values - tolerance) {
                            return value - rem + values;
                        }
                    }
                    return value;
                };
                // Colour
                /*\
                 * Snap.getRGB
                 [ method ]
                 **
                 * Parses color string as RGB object
                 - color (string) color string in one of the following formats:
                 # <ul>
                 #     <li>Color name (<code>red</code>, <code>green</code>, <code>cornflowerblue</code>, etc)</li>
                 #     <li>#••• — shortened HTML color: (<code>#000</code>, <code>#fc0</code>, etc.)</li>
                 #     <li>#•••••• — full length HTML color: (<code>#000000</code>, <code>#bd2300</code>)</li>
                 #     <li>rgb(•••, •••, •••) — red, green and blue channels values: (<code>rgb(200,&nbsp;100,&nbsp;0)</code>)</li>
                 #     <li>rgba(•••, •••, •••, •••) — also with opacity</li>
                 #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>)</li>
                 #     <li>rgba(•••%, •••%, •••%, •••%) — also with opacity</li>
                 #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>)</li>
                 #     <li>hsba(•••, •••, •••, •••) — also with opacity</li>
                 #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
                 #     <li>hsba(•••%, •••%, •••%, •••%) — also with opacity</li>
                 #     <li>hsl(•••, •••, •••) — hue, saturation and luminosity values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;0.5)</code>)</li>
                 #     <li>hsla(•••, •••, •••, •••) — also with opacity</li>
                 #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
                 #     <li>hsla(•••%, •••%, •••%, •••%) — also with opacity</li>
                 # </ul>
                 * Note that `%` can be used any time: `rgb(20%, 255, 50%)`.
                 = (object) RGB object in the following format:
                 o {
                 o     r (number) red,
                 o     g (number) green,
                 o     b (number) blue,
                 o     hex (string) color in HTML/CSS format: #••••••,
                 o     error (boolean) true if string can't be parsed
                 o }
                \*/
                Snap.getRGB = cacher(function (colour) {
                    if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
                        return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString };
                    }
                    if (colour == "none") {
                        return { r: -1, g: -1, b: -1, hex: "none", toString: rgbtoString };
                    }
                    !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
                    if (!colour) {
                        return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString };
                    }
                    var res,
                        red,
                        green,
                        blue,
                        opacity,
                        t,
                        values,
                        rgb = colour.match(colourRegExp);
                    if (rgb) {
                        if (rgb[2]) {
                            blue = toInt(rgb[2].substring(5), 16);
                            green = toInt(rgb[2].substring(3, 5), 16);
                            red = toInt(rgb[2].substring(1, 3), 16);
                        }
                        if (rgb[3]) {
                            blue = toInt((t = rgb[3].charAt(3)) + t, 16);
                            green = toInt((t = rgb[3].charAt(2)) + t, 16);
                            red = toInt((t = rgb[3].charAt(1)) + t, 16);
                        }
                        if (rgb[4]) {
                            values = rgb[4].split(commaSpaces);
                            red = toFloat(values[0]);
                            values[0].slice(-1) == "%" && (red *= 2.55);
                            green = toFloat(values[1]);
                            values[1].slice(-1) == "%" && (green *= 2.55);
                            blue = toFloat(values[2]);
                            values[2].slice(-1) == "%" && (blue *= 2.55);
                            rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
                            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                        }
                        if (rgb[5]) {
                            values = rgb[5].split(commaSpaces);
                            red = toFloat(values[0]);
                            values[0].slice(-1) == "%" && (red /= 100);
                            green = toFloat(values[1]);
                            values[1].slice(-1) == "%" && (green /= 100);
                            blue = toFloat(values[2]);
                            values[2].slice(-1) == "%" && (blue /= 100);
                            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
                            rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
                            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                            return Snap.hsb2rgb(red, green, blue, opacity);
                        }
                        if (rgb[6]) {
                            values = rgb[6].split(commaSpaces);
                            red = toFloat(values[0]);
                            values[0].slice(-1) == "%" && (red /= 100);
                            green = toFloat(values[1]);
                            values[1].slice(-1) == "%" && (green /= 100);
                            blue = toFloat(values[2]);
                            values[2].slice(-1) == "%" && (blue /= 100);
                            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
                            rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
                            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                            return Snap.hsl2rgb(red, green, blue, opacity);
                        }
                        red = mmin(math.round(red), 255);
                        green = mmin(math.round(green), 255);
                        blue = mmin(math.round(blue), 255);
                        opacity = mmin(mmax(opacity, 0), 1);
                        rgb = { r: red, g: green, b: blue, toString: rgbtoString };
                        rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
                        rgb.opacity = is(opacity, "finite") ? opacity : 1;
                        return rgb;
                    }
                    return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString };
                }, Snap);
                /*\
                 * Snap.hsb
                 [ method ]
                 **
                 * Converts HSB values to a hex representation of the color
                 - h (number) hue
                 - s (number) saturation
                 - b (number) value or brightness
                 = (string) hex representation of the color
                \*/
                Snap.hsb = cacher(function (h, s, b) {
                    return Snap.hsb2rgb(h, s, b).hex;
                });
                /*\
                 * Snap.hsl
                 [ method ]
                 **
                 * Converts HSL values to a hex representation of the color
                 - h (number) hue
                 - s (number) saturation
                 - l (number) luminosity
                 = (string) hex representation of the color
                \*/
                Snap.hsl = cacher(function (h, s, l) {
                    return Snap.hsl2rgb(h, s, l).hex;
                });
                /*\
                 * Snap.rgb
                 [ method ]
                 **
                 * Converts RGB values to a hex representation of the color
                 - r (number) red
                 - g (number) green
                 - b (number) blue
                 = (string) hex representation of the color
                \*/
                Snap.rgb = cacher(function (r, g, b, o) {
                    if (is(o, "finite")) {
                        var round = math.round;
                        return "rgba(" + [round(r), round(g), round(b), +o.toFixed(2)] + ")";
                    }
                    return "#" + (16777216 | b | g << 8 | r << 16).toString(16).slice(1);
                });
                var toHex = function (color) {
                    var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0],
                        red = "rgb(255, 0, 0)";
                    toHex = cacher(function (color) {
                        if (color.toLowerCase() == "red") {
                            return red;
                        }
                        i.style.color = red;
                        i.style.color = color;
                        var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
                        return out == red ? null : out;
                    });
                    return toHex(color);
                },
                    hsbtoString = function () {
                    return "hsb(" + [this.h, this.s, this.b] + ")";
                },
                    hsltoString = function () {
                    return "hsl(" + [this.h, this.s, this.l] + ")";
                },
                    rgbtoString = function () {
                    return this.opacity == 1 || this.opacity == null ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
                },
                    prepareRGB = function (r, g, b) {
                    if (g == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
                        b = r.b;
                        g = r.g;
                        r = r.r;
                    }
                    if (g == null && is(r, string)) {
                        var clr = Snap.getRGB(r);
                        r = clr.r;
                        g = clr.g;
                        b = clr.b;
                    }
                    if (r > 1 || g > 1 || b > 1) {
                        r /= 255;
                        g /= 255;
                        b /= 255;
                    }

                    return [r, g, b];
                },
                    packageRGB = function (r, g, b, o) {
                    r = math.round(r * 255);
                    g = math.round(g * 255);
                    b = math.round(b * 255);
                    var rgb = {
                        r: r,
                        g: g,
                        b: b,
                        opacity: is(o, "finite") ? o : 1,
                        hex: Snap.rgb(r, g, b),
                        toString: rgbtoString
                    };
                    is(o, "finite") && (rgb.opacity = o);
                    return rgb;
                };
                /*\
                 * Snap.color
                 [ method ]
                 **
                 * Parses the color string and returns an object featuring the color's component values
                 - clr (string) color string in one of the supported formats (see @Snap.getRGB)
                 = (object) Combined RGB/HSB object in the following format:
                 o {
                 o     r (number) red,
                 o     g (number) green,
                 o     b (number) blue,
                 o     hex (string) color in HTML/CSS format: #••••••,
                 o     error (boolean) `true` if string can't be parsed,
                 o     h (number) hue,
                 o     s (number) saturation,
                 o     v (number) value (brightness),
                 o     l (number) lightness
                 o }
                \*/
                Snap.color = function (clr) {
                    var rgb;
                    if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
                        rgb = Snap.hsb2rgb(clr);
                        clr.r = rgb.r;
                        clr.g = rgb.g;
                        clr.b = rgb.b;
                        clr.opacity = 1;
                        clr.hex = rgb.hex;
                    } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
                        rgb = Snap.hsl2rgb(clr);
                        clr.r = rgb.r;
                        clr.g = rgb.g;
                        clr.b = rgb.b;
                        clr.opacity = 1;
                        clr.hex = rgb.hex;
                    } else {
                        if (is(clr, "string")) {
                            clr = Snap.getRGB(clr);
                        }
                        if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
                            rgb = Snap.rgb2hsl(clr);
                            clr.h = rgb.h;
                            clr.s = rgb.s;
                            clr.l = rgb.l;
                            rgb = Snap.rgb2hsb(clr);
                            clr.v = rgb.b;
                        } else {
                            clr = { hex: "none" };
                            clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
                            clr.error = 1;
                        }
                    }
                    clr.toString = rgbtoString;
                    return clr;
                };
                /*\
                 * Snap.hsb2rgb
                 [ method ]
                 **
                 * Converts HSB values to an RGB object
                 - h (number) hue
                 - s (number) saturation
                 - v (number) value or brightness
                 = (object) RGB object in the following format:
                 o {
                 o     r (number) red,
                 o     g (number) green,
                 o     b (number) blue,
                 o     hex (string) color in HTML/CSS format: #••••••
                 o }
                \*/
                Snap.hsb2rgb = function (h, s, v, o) {
                    if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
                        v = h.b;
                        s = h.s;
                        o = h.o;
                        h = h.h;
                    }
                    h *= 360;
                    var R, G, B, X, C;
                    h = h % 360 / 60;
                    C = v * s;
                    X = C * (1 - abs(h % 2 - 1));
                    R = G = B = v - C;

                    h = ~ ~h;
                    R += [C, X, 0, 0, X, C][h];
                    G += [X, C, C, X, 0, 0][h];
                    B += [0, 0, X, C, C, X][h];
                    return packageRGB(R, G, B, o);
                };
                /*\
                 * Snap.hsl2rgb
                 [ method ]
                 **
                 * Converts HSL values to an RGB object
                 - h (number) hue
                 - s (number) saturation
                 - l (number) luminosity
                 = (object) RGB object in the following format:
                 o {
                 o     r (number) red,
                 o     g (number) green,
                 o     b (number) blue,
                 o     hex (string) color in HTML/CSS format: #••••••
                 o }
                \*/
                Snap.hsl2rgb = function (h, s, l, o) {
                    if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
                        l = h.l;
                        s = h.s;
                        h = h.h;
                    }
                    if (h > 1 || s > 1 || l > 1) {
                        h /= 360;
                        s /= 100;
                        l /= 100;
                    }
                    h *= 360;
                    var R, G, B, X, C;
                    h = h % 360 / 60;
                    C = 2 * s * (l < .5 ? l : 1 - l);
                    X = C * (1 - abs(h % 2 - 1));
                    R = G = B = l - C / 2;

                    h = ~ ~h;
                    R += [C, X, 0, 0, X, C][h];
                    G += [X, C, C, X, 0, 0][h];
                    B += [0, 0, X, C, C, X][h];
                    return packageRGB(R, G, B, o);
                };
                /*\
                 * Snap.rgb2hsb
                 [ method ]
                 **
                 * Converts RGB values to an HSB object
                 - r (number) red
                 - g (number) green
                 - b (number) blue
                 = (object) HSB object in the following format:
                 o {
                 o     h (number) hue,
                 o     s (number) saturation,
                 o     b (number) brightness
                 o }
                \*/
                Snap.rgb2hsb = function (r, g, b) {
                    b = prepareRGB(r, g, b);
                    r = b[0];
                    g = b[1];
                    b = b[2];

                    var H, S, V, C;
                    V = mmax(r, g, b);
                    C = V - mmin(r, g, b);
                    H = C == 0 ? null : V == r ? (g - b) / C : V == g ? (b - r) / C + 2 : (r - g) / C + 4;
                    H = (H + 360) % 6 * 60 / 360;
                    S = C == 0 ? 0 : C / V;
                    return { h: H, s: S, b: V, toString: hsbtoString };
                };
                /*\
                 * Snap.rgb2hsl
                 [ method ]
                 **
                 * Converts RGB values to an HSL object
                 - r (number) red
                 - g (number) green
                 - b (number) blue
                 = (object) HSL object in the following format:
                 o {
                 o     h (number) hue,
                 o     s (number) saturation,
                 o     l (number) luminosity
                 o }
                \*/
                Snap.rgb2hsl = function (r, g, b) {
                    b = prepareRGB(r, g, b);
                    r = b[0];
                    g = b[1];
                    b = b[2];

                    var H, S, L, M, m, C;
                    M = mmax(r, g, b);
                    m = mmin(r, g, b);
                    C = M - m;
                    H = C == 0 ? null : M == r ? (g - b) / C : M == g ? (b - r) / C + 2 : (r - g) / C + 4;
                    H = (H + 360) % 6 * 60 / 360;
                    L = (M + m) / 2;
                    S = C == 0 ? 0 : L < .5 ? C / (2 * L) : C / (2 - 2 * L);
                    return { h: H, s: S, l: L, toString: hsltoString };
                };

                // Transformations
                /*\
                 * Snap.parsePathString
                 [ method ]
                 **
                 * Utility method
                 **
                 * Parses given path string into an array of arrays of path segments
                 - pathString (string|array) path string or array of segments (in the last case it is returned straight away)
                 = (array) array of segments
                \*/
                Snap.parsePathString = function (pathString) {
                    if (!pathString) {
                        return null;
                    }
                    var pth = Snap.path(pathString);
                    if (pth.arr) {
                        return Snap.path.clone(pth.arr);
                    }

                    var paramCounts = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 },
                        data = [];
                    if (is(pathString, "array") && is(pathString[0], "array")) {
                        // rough assumption
                        data = Snap.path.clone(pathString);
                    }
                    if (!data.length) {
                        Str(pathString).replace(pathCommand, function (a, b, c) {
                            var params = [],
                                name = b.toLowerCase();
                            c.replace(pathValues, function (a, b) {
                                b && params.push(+b);
                            });
                            if (name == "m" && params.length > 2) {
                                data.push([b].concat(params.splice(0, 2)));
                                name = "l";
                                b = b == "m" ? "l" : "L";
                            }
                            if (name == "o" && params.length == 1) {
                                data.push([b, params[0]]);
                            }
                            if (name == "r") {
                                data.push([b].concat(params));
                            } else while (params.length >= paramCounts[name]) {
                                data.push([b].concat(params.splice(0, paramCounts[name])));
                                if (!paramCounts[name]) {
                                    break;
                                }
                            }
                        });
                    }
                    data.toString = Snap.path.toString;
                    pth.arr = Snap.path.clone(data);
                    return data;
                };
                /*\
                 * Snap.parseTransformString
                 [ method ]
                 **
                 * Utility method
                 **
                 * Parses given transform string into an array of transformations
                 - TString (string|array) transform string or array of transformations (in the last case it is returned straight away)
                 = (array) array of transformations
                \*/
                var parseTransformString = Snap.parseTransformString = function (TString) {
                    if (!TString) {
                        return null;
                    }
                    var paramCounts = { r: 3, s: 4, t: 2, m: 6 },
                        data = [];
                    if (is(TString, "array") && is(TString[0], "array")) {
                        // rough assumption
                        data = Snap.path.clone(TString);
                    }
                    if (!data.length) {
                        Str(TString).replace(tCommand, function (a, b, c) {
                            var params = [],
                                name = b.toLowerCase();
                            c.replace(pathValues, function (a, b) {
                                b && params.push(+b);
                            });
                            data.push([b].concat(params));
                        });
                    }
                    data.toString = Snap.path.toString;
                    return data;
                };
                function svgTransform2string(tstr) {
                    var res = [];
                    tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (all, name, params) {
                        params = params.split(/\s*,\s*|\s+/);
                        if (name == "rotate" && params.length == 1) {
                            params.push(0, 0);
                        }
                        if (name == "scale") {
                            if (params.length > 2) {
                                params = params.slice(0, 2);
                            } else if (params.length == 2) {
                                params.push(0, 0);
                            }
                            if (params.length == 1) {
                                params.push(params[0], 0, 0);
                            }
                        }
                        if (name == "skewX") {
                            res.push(["m", 1, 0, math.tan(rad(params[0])), 1, 0, 0]);
                        } else if (name == "skewY") {
                            res.push(["m", 1, math.tan(rad(params[0])), 0, 1, 0, 0]);
                        } else {
                            res.push([name.charAt(0)].concat(params));
                        }
                        return all;
                    });
                    return res;
                }
                Snap._.svgTransform2string = svgTransform2string;
                Snap._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
                function transform2matrix(tstr, bbox) {
                    var tdata = parseTransformString(tstr),
                        m = new Snap.Matrix();
                    if (tdata) {
                        for (var i = 0, ii = tdata.length; i < ii; i++) {
                            var t = tdata[i],
                                tlen = t.length,
                                command = Str(t[0]).toLowerCase(),
                                absolute = t[0] != command,
                                inver = absolute ? m.invert() : 0,
                                x1,
                                y1,
                                x2,
                                y2,
                                bb;
                            if (command == "t" && tlen == 2) {
                                m.translate(t[1], 0);
                            } else if (command == "t" && tlen == 3) {
                                if (absolute) {
                                    x1 = inver.x(0, 0);
                                    y1 = inver.y(0, 0);
                                    x2 = inver.x(t[1], t[2]);
                                    y2 = inver.y(t[1], t[2]);
                                    m.translate(x2 - x1, y2 - y1);
                                } else {
                                    m.translate(t[1], t[2]);
                                }
                            } else if (command == "r") {
                                if (tlen == 2) {
                                    bb = bb || bbox;
                                    m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                                } else if (tlen == 4) {
                                    if (absolute) {
                                        x2 = inver.x(t[2], t[3]);
                                        y2 = inver.y(t[2], t[3]);
                                        m.rotate(t[1], x2, y2);
                                    } else {
                                        m.rotate(t[1], t[2], t[3]);
                                    }
                                }
                            } else if (command == "s") {
                                if (tlen == 2 || tlen == 3) {
                                    bb = bb || bbox;
                                    m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                                } else if (tlen == 4) {
                                    if (absolute) {
                                        x2 = inver.x(t[2], t[3]);
                                        y2 = inver.y(t[2], t[3]);
                                        m.scale(t[1], t[1], x2, y2);
                                    } else {
                                        m.scale(t[1], t[1], t[2], t[3]);
                                    }
                                } else if (tlen == 5) {
                                    if (absolute) {
                                        x2 = inver.x(t[3], t[4]);
                                        y2 = inver.y(t[3], t[4]);
                                        m.scale(t[1], t[2], x2, y2);
                                    } else {
                                        m.scale(t[1], t[2], t[3], t[4]);
                                    }
                                }
                            } else if (command == "m" && tlen == 7) {
                                m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
                            }
                        }
                    }
                    return m;
                }
                Snap._.transform2matrix = transform2matrix;
                Snap._unit2px = unit2px;
                var contains = glob.doc.contains || glob.doc.compareDocumentPosition ? function (a, b) {
                    var adown = a.nodeType == 9 ? a.documentElement : a,
                        bup = b && b.parentNode;
                    return a == bup || !!(bup && bup.nodeType == 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                } : function (a, b) {
                    if (b) {
                        while (b) {
                            b = b.parentNode;
                            if (b == a) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                function getSomeDefs(el) {
                    var p = el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || el.node.parentNode && wrap(el.node.parentNode) || Snap.select("svg") || Snap(0, 0),
                        pdefs = p.select("defs"),
                        defs = pdefs == null ? false : pdefs.node;
                    if (!defs) {
                        defs = make("defs", p.node).node;
                    }
                    return defs;
                }
                function getSomeSVG(el) {
                    return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
                }
                Snap._.getSomeDefs = getSomeDefs;
                Snap._.getSomeSVG = getSomeSVG;
                function unit2px(el, name, value) {
                    var svg = getSomeSVG(el).node,
                        out = {},
                        mgr = svg.querySelector(".svg---mgr");
                    if (!mgr) {
                        mgr = $("rect");
                        $(mgr, { x: -9e9, y: -9e9, width: 10, height: 10, "class": "svg---mgr", fill: "none" });
                        svg.appendChild(mgr);
                    }
                    function getW(val) {
                        if (val == null) {
                            return E;
                        }
                        if (val == +val) {
                            return val;
                        }
                        $(mgr, { width: val });
                        try {
                            return mgr.getBBox().width;
                        } catch (e) {
                            return 0;
                        }
                    }
                    function getH(val) {
                        if (val == null) {
                            return E;
                        }
                        if (val == +val) {
                            return val;
                        }
                        $(mgr, { height: val });
                        try {
                            return mgr.getBBox().height;
                        } catch (e) {
                            return 0;
                        }
                    }
                    function set(nam, f) {
                        if (name == null) {
                            out[nam] = f(el.attr(nam) || 0);
                        } else if (nam == name) {
                            out = f(value == null ? el.attr(nam) || 0 : value);
                        }
                    }
                    switch (el.type) {
                        case "rect":
                            set("rx", getW);
                            set("ry", getH);
                        case "image":
                            set("width", getW);
                            set("height", getH);
                        case "text":
                            set("x", getW);
                            set("y", getH);
                            break;
                        case "circle":
                            set("cx", getW);
                            set("cy", getH);
                            set("r", getW);
                            break;
                        case "ellipse":
                            set("cx", getW);
                            set("cy", getH);
                            set("rx", getW);
                            set("ry", getH);
                            break;
                        case "line":
                            set("x1", getW);
                            set("x2", getW);
                            set("y1", getH);
                            set("y2", getH);
                            break;
                        case "marker":
                            set("refX", getW);
                            set("markerWidth", getW);
                            set("refY", getH);
                            set("markerHeight", getH);
                            break;
                        case "radialGradient":
                            set("fx", getW);
                            set("fy", getH);
                            break;
                        case "tspan":
                            set("dx", getW);
                            set("dy", getH);
                            break;
                        default:
                            set(name, getW);
                    }
                    svg.removeChild(mgr);
                    return out;
                }
                /*\
                 * Snap.select
                 [ method ]
                 **
                 * Wraps a DOM element specified by CSS selector as @Element
                 - query (string) CSS selector of the element
                 = (Element) the current element
                \*/
                Snap.select = function (query) {
                    query = Str(query).replace(/([^\\]):/g, "$1\\:");
                    return wrap(glob.doc.querySelector(query));
                };
                /*\
                 * Snap.selectAll
                 [ method ]
                 **
                 * Wraps DOM elements specified by CSS selector as set or array of @Element
                 - query (string) CSS selector of the element
                 = (Element) the current element
                \*/
                Snap.selectAll = function (query) {
                    var nodelist = glob.doc.querySelectorAll(query),
                        set = (Snap.set || Array)();
                    for (var i = 0; i < nodelist.length; i++) {
                        set.push(wrap(nodelist[i]));
                    }
                    return set;
                };

                function add2group(list) {
                    if (!is(list, "array")) {
                        list = Array.prototype.slice.call(arguments, 0);
                    }
                    var i = 0,
                        j = 0,
                        node = this.node;
                    while (this[i]) delete this[i++];
                    for (i = 0; i < list.length; i++) {
                        if (list[i].type == "set") {
                            list[i].forEach(function (el) {
                                node.appendChild(el.node);
                            });
                        } else {
                            node.appendChild(list[i].node);
                        }
                    }
                    var children = node.childNodes;
                    for (i = 0; i < children.length; i++) {
                        this[j++] = wrap(children[i]);
                    }
                    return this;
                }
                // Hub garbage collector every 10s
                setInterval(function () {
                    for (var key in hub) if (hub[has](key)) {
                        var el = hub[key],
                            node = el.node;
                        if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
                            delete hub[key];
                        }
                    }
                }, 1e4);
                function Element(el) {
                    if (el.snap in hub) {
                        return hub[el.snap];
                    }
                    var svg;
                    try {
                        svg = el.ownerSVGElement;
                    } catch (e) {}
                    /*\
                     * Element.node
                     [ property (object) ]
                     **
                     * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
                     > Usage
                     | // go a circle at coordinate 10,10 with radius of 10
                     | var c = paper.circle(10, 10, 10);
                     | c.node.onclick = function () {
                     |     c.attr("fill", "red");
                     | };
                    \*/
                    this.node = el;
                    if (svg) {
                        this.paper = new Paper(svg);
                    }
                    /*\
                     * Element.type
                     [ property (string) ]
                     **
                     * SVG tag name of the given element.
                    \*/
                    this.type = el.tagName || el.nodeName;
                    var id = this.id = ID(this);
                    this.anims = {};
                    this._ = {
                        transform: []
                    };
                    el.snap = id;
                    hub[id] = this;
                    if (this.type == "g") {
                        this.add = add2group;
                    }
                    if (this.type in { g: 1, mask: 1, pattern: 1, symbol: 1 }) {
                        for (var method in Paper.prototype) if (Paper.prototype[has](method)) {
                            this[method] = Paper.prototype[method];
                        }
                    }
                }
                /*\
                  * Element.attr
                  [ method ]
                  **
                  * Gets or sets given attributes of the element.
                  **
                  - params (object) contains key-value pairs of attributes you want to set
                  * or
                  - param (string) name of the attribute
                  = (Element) the current element
                  * or
                  = (string) value of attribute
                  > Usage
                  | el.attr({
                  |     fill: "#fc0",
                  |     stroke: "#000",
                  |     strokeWidth: 2, // CamelCase...
                  |     "fill-opacity": 0.5, // or dash-separated names
                  |     width: "*=2" // prefixed values
                  | });
                  | console.log(el.attr("fill")); // #fc0
                  * Prefixed values in format `"+=10"` supported. All four operations
                  * (`+`, `-`, `*` and `/`) could be used. Optionally you can use units for `+`
                  * and `-`: `"+=2em"`.
                 \*/
                Element.prototype.attr = function (params, value) {
                    var el = this,
                        node = el.node;
                    if (!params) {
                        if (node.nodeType != 1) {
                            return {
                                text: node.nodeValue
                            };
                        }
                        var attr = node.attributes,
                            out = {};
                        for (var i = 0, ii = attr.length; i < ii; i++) {
                            out[attr[i].nodeName] = attr[i].nodeValue;
                        }
                        return out;
                    }
                    if (is(params, "string")) {
                        if (arguments.length > 1) {
                            var json = {};
                            json[params] = value;
                            params = json;
                        } else {
                            return eve("snap.util.getattr." + params, el).firstDefined();
                        }
                    }
                    for (var att in params) {
                        if (params[has](att)) {
                            eve("snap.util.attr." + att, el, params[att]);
                        }
                    }
                    return el;
                };
                /*\
                 * Snap.parse
                 [ method ]
                 **
                 * Parses SVG fragment and converts it into a @Fragment
                 **
                 - svg (string) SVG string
                 = (Fragment) the @Fragment
                \*/
                Snap.parse = function (svg) {
                    var f = glob.doc.createDocumentFragment(),
                        full = true,
                        div = glob.doc.createElement("div");
                    svg = Str(svg);
                    if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
                        svg = "<svg>" + svg + "</svg>";
                        full = false;
                    }
                    div.innerHTML = svg;
                    svg = div.getElementsByTagName("svg")[0];
                    if (svg) {
                        if (full) {
                            f = svg;
                        } else {
                            while (svg.firstChild) {
                                f.appendChild(svg.firstChild);
                            }
                        }
                    }
                    return new Fragment(f);
                };
                function Fragment(frag) {
                    this.node = frag;
                }
                /*\
                 * Snap.fragment
                 [ method ]
                 **
                 * Creates a DOM fragment from a given list of elements or strings
                 **
                 - varargs (…) SVG string
                 = (Fragment) the @Fragment
                \*/
                Snap.fragment = function () {
                    var args = Array.prototype.slice.call(arguments, 0),
                        f = glob.doc.createDocumentFragment();
                    for (var i = 0, ii = args.length; i < ii; i++) {
                        var item = args[i];
                        if (item.node && item.node.nodeType) {
                            f.appendChild(item.node);
                        }
                        if (item.nodeType) {
                            f.appendChild(item);
                        }
                        if (typeof item == "string") {
                            f.appendChild(Snap.parse(item).node);
                        }
                    }
                    return new Fragment(f);
                };

                function make(name, parent) {
                    var res = $(name);
                    parent.appendChild(res);
                    var el = wrap(res);
                    return el;
                }
                function Paper(w, h) {
                    var res,
                        desc,
                        defs,
                        proto = Paper.prototype;
                    if (w && w.tagName == "svg") {
                        if (w.snap in hub) {
                            return hub[w.snap];
                        }
                        var doc = w.ownerDocument;
                        res = new Element(w);
                        desc = w.getElementsByTagName("desc")[0];
                        defs = w.getElementsByTagName("defs")[0];
                        if (!desc) {
                            desc = $("desc");
                            desc.appendChild(doc.createTextNode("Created with Snap"));
                            res.node.appendChild(desc);
                        }
                        if (!defs) {
                            defs = $("defs");
                            res.node.appendChild(defs);
                        }
                        res.defs = defs;
                        for (var key in proto) if (proto[has](key)) {
                            res[key] = proto[key];
                        }
                        res.paper = res.root = res;
                    } else {
                        res = make("svg", glob.doc.body);
                        $(res.node, {
                            height: h,
                            version: 1.1,
                            width: w,
                            xmlns: xmlns
                        });
                    }
                    return res;
                }
                function wrap(dom) {
                    if (!dom) {
                        return dom;
                    }
                    if (dom instanceof Element || dom instanceof Fragment) {
                        return dom;
                    }
                    if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
                        return new Paper(dom);
                    }
                    if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
                        return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
                    }
                    return new Element(dom);
                }

                Snap._.make = make;
                Snap._.wrap = wrap;
                /*\
                 * Paper.el
                 [ method ]
                 **
                 * Creates an element on paper with a given name and no attributes
                 **
                 - name (string) tag name
                 - attr (object) attributes
                 = (Element) the current element
                 > Usage
                 | var c = paper.circle(10, 10, 10); // is the same as...
                 | var c = paper.el("circle").attr({
                 |     cx: 10,
                 |     cy: 10,
                 |     r: 10
                 | });
                 | // and the same as
                 | var c = paper.el("circle", {
                 |     cx: 10,
                 |     cy: 10,
                 |     r: 10
                 | });
                \*/
                Paper.prototype.el = function (name, attr) {
                    var el = make(name, this.node);
                    attr && el.attr(attr);
                    return el;
                };
                /*\
                 * Element.children
                 [ method ]
                 **
                 * Returns array of all the children of the element.
                 = (array) array of Elements
                \*/
                Element.prototype.children = function () {
                    var out = [],
                        ch = this.node.childNodes;
                    for (var i = 0, ii = ch.length; i < ii; i++) {
                        out[i] = Snap(ch[i]);
                    }
                    return out;
                };
                function jsonFiller(root, o) {
                    for (var i = 0, ii = root.length; i < ii; i++) {
                        var item = {
                            type: root[i].type,
                            attr: root[i].attr()
                        },
                            children = root[i].children();
                        o.push(item);
                        if (children.length) {
                            jsonFiller(children, item.childNodes = []);
                        }
                    }
                }
                /*\
                 * Element.toJSON
                 [ method ]
                 **
                 * Returns object representation of the given element and all its children.
                 = (object) in format
                 o {
                 o     type (string) this.type,
                 o     attr (object) attributes map,
                 o     childNodes (array) optional array of children in the same format
                 o }
                \*/
                Element.prototype.toJSON = function () {
                    var out = [];
                    jsonFiller([this], out);
                    return out[0];
                };
                // default
                eve.on("snap.util.getattr", function () {
                    var att = eve.nt();
                    att = att.substring(att.lastIndexOf(".") + 1);
                    var css = att.replace(/[A-Z]/g, function (letter) {
                        return "-" + letter.toLowerCase();
                    });
                    if (cssAttr[has](css)) {
                        return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
                    } else {
                        return $(this.node, att);
                    }
                });
                var cssAttr = {
                    "alignment-baseline": 0,
                    "baseline-shift": 0,
                    "clip": 0,
                    "clip-path": 0,
                    "clip-rule": 0,
                    "color": 0,
                    "color-interpolation": 0,
                    "color-interpolation-filters": 0,
                    "color-profile": 0,
                    "color-rendering": 0,
                    "cursor": 0,
                    "direction": 0,
                    "display": 0,
                    "dominant-baseline": 0,
                    "enable-background": 0,
                    "fill": 0,
                    "fill-opacity": 0,
                    "fill-rule": 0,
                    "filter": 0,
                    "flood-color": 0,
                    "flood-opacity": 0,
                    "font": 0,
                    "font-family": 0,
                    "font-size": 0,
                    "font-size-adjust": 0,
                    "font-stretch": 0,
                    "font-style": 0,
                    "font-variant": 0,
                    "font-weight": 0,
                    "glyph-orientation-horizontal": 0,
                    "glyph-orientation-vertical": 0,
                    "image-rendering": 0,
                    "kerning": 0,
                    "letter-spacing": 0,
                    "lighting-color": 0,
                    "marker": 0,
                    "marker-end": 0,
                    "marker-mid": 0,
                    "marker-start": 0,
                    "mask": 0,
                    "opacity": 0,
                    "overflow": 0,
                    "pointer-events": 0,
                    "shape-rendering": 0,
                    "stop-color": 0,
                    "stop-opacity": 0,
                    "stroke": 0,
                    "stroke-dasharray": 0,
                    "stroke-dashoffset": 0,
                    "stroke-linecap": 0,
                    "stroke-linejoin": 0,
                    "stroke-miterlimit": 0,
                    "stroke-opacity": 0,
                    "stroke-width": 0,
                    "text-anchor": 0,
                    "text-decoration": 0,
                    "text-rendering": 0,
                    "unicode-bidi": 0,
                    "visibility": 0,
                    "word-spacing": 0,
                    "writing-mode": 0
                };

                eve.on("snap.util.attr", function (value) {
                    var att = eve.nt(),
                        attr = {};
                    att = att.substring(att.lastIndexOf(".") + 1);
                    attr[att] = value;
                    var style = att.replace(/-(\w)/gi, function (all, letter) {
                        return letter.toUpperCase();
                    }),
                        css = att.replace(/[A-Z]/g, function (letter) {
                        return "-" + letter.toLowerCase();
                    });
                    if (cssAttr[has](css)) {
                        this.node.style[style] = value == null ? E : value;
                    } else {
                        $(this.node, attr);
                    }
                });
                (function (proto) {})(Paper.prototype);

                // simple ajax
                /*\
                 * Snap.ajax
                 [ method ]
                 **
                 * Simple implementation of Ajax
                 **
                 - url (string) URL
                 - postData (object|string) data for post request
                 - callback (function) callback
                 - scope (object) #optional scope of callback
                 * or
                 - url (string) URL
                 - callback (function) callback
                 - scope (object) #optional scope of callback
                 = (XMLHttpRequest) the XMLHttpRequest object, just in case
                \*/
                Snap.ajax = function (url, postData, callback, scope) {
                    var req = new XMLHttpRequest(),
                        id = ID();
                    if (req) {
                        if (is(postData, "function")) {
                            scope = callback;
                            callback = postData;
                            postData = null;
                        } else if (is(postData, "object")) {
                            var pd = [];
                            for (var key in postData) if (postData.hasOwnProperty(key)) {
                                pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
                            }
                            postData = pd.join("&");
                        }
                        req.open(postData ? "POST" : "GET", url, true);
                        if (postData) {
                            req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        }
                        if (callback) {
                            eve.once("snap.ajax." + id + ".0", callback);
                            eve.once("snap.ajax." + id + ".200", callback);
                            eve.once("snap.ajax." + id + ".304", callback);
                        }
                        req.onreadystatechange = function () {
                            if (req.readyState != 4) return;
                            eve("snap.ajax." + id + "." + req.status, scope, req);
                        };
                        if (req.readyState == 4) {
                            return req;
                        }
                        req.send(postData);
                        return req;
                    }
                };
                /*\
                 * Snap.load
                 [ method ]
                 **
                 * Loads external SVG file as a @Fragment (see @Snap.ajax for more advanced AJAX)
                 **
                 - url (string) URL
                 - callback (function) callback
                 - scope (object) #optional scope of callback
                \*/
                Snap.load = function (url, callback, scope) {
                    Snap.ajax(url, function (req) {
                        var f = Snap.parse(req.responseText);
                        scope ? callback.call(scope, f) : callback(f);
                    });
                };
                var getOffset = function (elem) {
                    var box = elem.getBoundingClientRect(),
                        doc = elem.ownerDocument,
                        body = doc.body,
                        docElem = doc.documentElement,
                        clientTop = docElem.clientTop || body.clientTop || 0,
                        clientLeft = docElem.clientLeft || body.clientLeft || 0,
                        top = box.top + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop) - clientTop,
                        left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
                    return {
                        y: top,
                        x: left
                    };
                };
                /*\
                 * Snap.getElementByPoint
                 [ method ]
                 **
                 * Returns you topmost element under given point.
                 **
                 = (object) Snap element object
                 - x (number) x coordinate from the top left corner of the window
                 - y (number) y coordinate from the top left corner of the window
                 > Usage
                 | Snap.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
                \*/
                Snap.getElementByPoint = function (x, y) {
                    var paper = this,
                        svg = paper.canvas,
                        target = glob.doc.elementFromPoint(x, y);
                    if (glob.win.opera && target.tagName == "svg") {
                        var so = getOffset(target),
                            sr = target.createSVGRect();
                        sr.x = x - so.x;
                        sr.y = y - so.y;
                        sr.width = sr.height = 1;
                        var hits = target.getIntersectionList(sr, null);
                        if (hits.length) {
                            target = hits[hits.length - 1];
                        }
                    }
                    if (!target) {
                        return null;
                    }
                    return wrap(target);
                };
                /*\
                 * Snap.plugin
                 [ method ]
                 **
                 * Let you write plugins. You pass in a function with five arguments, like this:
                 | Snap.plugin(function (Snap, Element, Paper, global, Fragment) {
                 |     Snap.newmethod = function () {};
                 |     Element.prototype.newmethod = function () {};
                 |     Paper.prototype.newmethod = function () {};
                 | });
                 * Inside the function you have access to all main objects (and their
                 * prototypes). This allow you to extend anything you want.
                 **
                 - f (function) your plugin body
                \*/
                Snap.plugin = function (f) {
                    f(Snap, Element, Paper, glob, Fragment);
                };
                glob.win.Snap = Snap;
                return Snap;
            }(window || this);

            // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            // http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
                var elproto = Element.prototype,
                    is = Snap.is,
                    Str = String,
                    unit2px = Snap._unit2px,
                    $ = Snap._.$,
                    make = Snap._.make,
                    getSomeDefs = Snap._.getSomeDefs,
                    has = "hasOwnProperty",
                    wrap = Snap._.wrap;
                /*\
                 * Element.getBBox
                 [ method ]
                 **
                 * Returns the bounding box descriptor for the given element
                 **
                 = (object) bounding box descriptor:
                 o {
                 o     cx: (number) x of the center,
                 o     cy: (number) x of the center,
                 o     h: (number) height,
                 o     height: (number) height,
                 o     path: (string) path command for the box,
                 o     r0: (number) radius of a circle that fully encloses the box,
                 o     r1: (number) radius of the smallest circle that can be enclosed,
                 o     r2: (number) radius of the largest circle that can be enclosed,
                 o     vb: (string) box as a viewbox command,
                 o     w: (number) width,
                 o     width: (number) width,
                 o     x2: (number) x of the right side,
                 o     x: (number) x of the left side,
                 o     y2: (number) y of the bottom edge,
                 o     y: (number) y of the top edge
                 o }
                \*/
                elproto.getBBox = function (isWithoutTransform) {
                    if (!Snap.Matrix || !Snap.path) {
                        return this.node.getBBox();
                    }
                    var el = this,
                        m = new Snap.Matrix();
                    if (el.removed) {
                        return Snap._.box();
                    }
                    while (el.type == "use") {
                        if (!isWithoutTransform) {
                            m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
                        }
                        if (el.original) {
                            el = el.original;
                        } else {
                            var href = el.attr("xlink:href");
                            el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
                        }
                    }
                    var _ = el._,
                        pathfinder = Snap.path.get[el.type] || Snap.path.get.deflt;
                    try {
                        if (isWithoutTransform) {
                            _.bboxwt = pathfinder ? Snap.path.getBBox(el.realPath = pathfinder(el)) : Snap._.box(el.node.getBBox());
                            return Snap._.box(_.bboxwt);
                        } else {
                            el.realPath = pathfinder(el);
                            el.matrix = el.transform().localMatrix;
                            _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, m.add(el.matrix)));
                            return Snap._.box(_.bbox);
                        }
                    } catch (e) {
                        // Firefox doesn’t give you bbox of hidden element
                        return Snap._.box();
                    }
                };
                var propString = function () {
                    return this.string;
                };
                function extractTransform(el, tstr) {
                    if (tstr == null) {
                        var doReturn = true;
                        if (el.type == "linearGradient" || el.type == "radialGradient") {
                            tstr = el.node.getAttribute("gradientTransform");
                        } else if (el.type == "pattern") {
                            tstr = el.node.getAttribute("patternTransform");
                        } else {
                            tstr = el.node.getAttribute("transform");
                        }
                        if (!tstr) {
                            return new Snap.Matrix();
                        }
                        tstr = Snap._.svgTransform2string(tstr);
                    } else {
                        if (!Snap._.rgTransform.test(tstr)) {
                            tstr = Snap._.svgTransform2string(tstr);
                        } else {
                            tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || "");
                        }
                        if (is(tstr, "array")) {
                            tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
                        }
                        el._.transform = tstr;
                    }
                    var m = Snap._.transform2matrix(tstr, el.getBBox(1));
                    if (doReturn) {
                        return m;
                    } else {
                        el.matrix = m;
                    }
                }
                /*\
                 * Element.transform
                 [ method ]
                 **
                 * Gets or sets transformation of the element
                 **
                 - tstr (string) transform string in Snap or SVG format
                 = (Element) the current element
                 * or
                 = (object) transformation descriptor:
                 o {
                 o     string (string) transform string,
                 o     globalMatrix (Matrix) matrix of all transformations applied to element or its parents,
                 o     localMatrix (Matrix) matrix of transformations applied only to the element,
                 o     diffMatrix (Matrix) matrix of difference between global and local transformations,
                 o     global (string) global transformation as string,
                 o     local (string) local transformation as string,
                 o     toString (function) returns `string` property
                 o }
                \*/
                elproto.transform = function (tstr) {
                    var _ = this._;
                    if (tstr == null) {
                        var papa = this,
                            global = new Snap.Matrix(this.node.getCTM()),
                            local = extractTransform(this),
                            ms = [local],
                            m = new Snap.Matrix(),
                            i,
                            localString = local.toTransformString(),
                            string = Str(local) == Str(this.matrix) ? Str(_.transform) : localString;
                        while (papa.type != "svg" && (papa = papa.parent())) {
                            ms.push(extractTransform(papa));
                        }
                        i = ms.length;
                        while (i--) {
                            m.add(ms[i]);
                        }
                        return {
                            string: string,
                            globalMatrix: global,
                            totalMatrix: m,
                            localMatrix: local,
                            diffMatrix: global.clone().add(local.invert()),
                            global: global.toTransformString(),
                            total: m.toTransformString(),
                            local: localString,
                            toString: propString
                        };
                    }
                    if (tstr instanceof Snap.Matrix) {
                        this.matrix = tstr;
                        this._.transform = tstr.toTransformString();
                    } else {
                        extractTransform(this, tstr);
                    }

                    if (this.node) {
                        if (this.type == "linearGradient" || this.type == "radialGradient") {
                            $(this.node, { gradientTransform: this.matrix });
                        } else if (this.type == "pattern") {
                            $(this.node, { patternTransform: this.matrix });
                        } else {
                            $(this.node, { transform: this.matrix });
                        }
                    }

                    return this;
                };
                /*\
                 * Element.parent
                 [ method ]
                 **
                 * Returns the element's parent
                 **
                 = (Element) the parent element
                \*/
                elproto.parent = function () {
                    return wrap(this.node.parentNode);
                };
                /*\
                 * Element.append
                 [ method ]
                 **
                 * Appends the given element to current one
                 **
                 - el (Element|Set) element to append
                 = (Element) the parent element
                \*/
                /*\
                 * Element.add
                 [ method ]
                 **
                 * See @Element.append
                \*/
                elproto.append = elproto.add = function (el) {
                    if (el) {
                        if (el.type == "set") {
                            var it = this;
                            el.forEach(function (el) {
                                it.add(el);
                            });
                            return this;
                        }
                        el = wrap(el);
                        this.node.appendChild(el.node);
                        el.paper = this.paper;
                    }
                    return this;
                };
                /*\
                 * Element.appendTo
                 [ method ]
                 **
                 * Appends the current element to the given one
                 **
                 - el (Element) parent element to append to
                 = (Element) the child element
                \*/
                elproto.appendTo = function (el) {
                    if (el) {
                        el = wrap(el);
                        el.append(this);
                    }
                    return this;
                };
                /*\
                 * Element.prepend
                 [ method ]
                 **
                 * Prepends the given element to the current one
                 **
                 - el (Element) element to prepend
                 = (Element) the parent element
                \*/
                elproto.prepend = function (el) {
                    if (el) {
                        if (el.type == "set") {
                            var it = this,
                                first;
                            el.forEach(function (el) {
                                if (first) {
                                    first.after(el);
                                } else {
                                    it.prepend(el);
                                }
                                first = el;
                            });
                            return this;
                        }
                        el = wrap(el);
                        var parent = el.parent();
                        this.node.insertBefore(el.node, this.node.firstChild);
                        this.add && this.add();
                        el.paper = this.paper;
                        this.parent() && this.parent().add();
                        parent && parent.add();
                    }
                    return this;
                };
                /*\
                 * Element.prependTo
                 [ method ]
                 **
                 * Prepends the current element to the given one
                 **
                 - el (Element) parent element to prepend to
                 = (Element) the child element
                \*/
                elproto.prependTo = function (el) {
                    el = wrap(el);
                    el.prepend(this);
                    return this;
                };
                /*\
                 * Element.before
                 [ method ]
                 **
                 * Inserts given element before the current one
                 **
                 - el (Element) element to insert
                 = (Element) the parent element
                \*/
                elproto.before = function (el) {
                    if (el.type == "set") {
                        var it = this;
                        el.forEach(function (el) {
                            var parent = el.parent();
                            it.node.parentNode.insertBefore(el.node, it.node);
                            parent && parent.add();
                        });
                        this.parent().add();
                        return this;
                    }
                    el = wrap(el);
                    var parent = el.parent();
                    this.node.parentNode.insertBefore(el.node, this.node);
                    this.parent() && this.parent().add();
                    parent && parent.add();
                    el.paper = this.paper;
                    return this;
                };
                /*\
                 * Element.after
                 [ method ]
                 **
                 * Inserts given element after the current one
                 **
                 - el (Element) element to insert
                 = (Element) the parent element
                \*/
                elproto.after = function (el) {
                    el = wrap(el);
                    var parent = el.parent();
                    if (this.node.nextSibling) {
                        this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
                    } else {
                        this.node.parentNode.appendChild(el.node);
                    }
                    this.parent() && this.parent().add();
                    parent && parent.add();
                    el.paper = this.paper;
                    return this;
                };
                /*\
                 * Element.insertBefore
                 [ method ]
                 **
                 * Inserts the element after the given one
                 **
                 - el (Element) element next to whom insert to
                 = (Element) the parent element
                \*/
                elproto.insertBefore = function (el) {
                    el = wrap(el);
                    var parent = this.parent();
                    el.node.parentNode.insertBefore(this.node, el.node);
                    this.paper = el.paper;
                    parent && parent.add();
                    el.parent() && el.parent().add();
                    return this;
                };
                /*\
                 * Element.insertAfter
                 [ method ]
                 **
                 * Inserts the element after the given one
                 **
                 - el (Element) element next to whom insert to
                 = (Element) the parent element
                \*/
                elproto.insertAfter = function (el) {
                    el = wrap(el);
                    var parent = this.parent();
                    el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
                    this.paper = el.paper;
                    parent && parent.add();
                    el.parent() && el.parent().add();
                    return this;
                };
                /*\
                 * Element.remove
                 [ method ]
                 **
                 * Removes element from the DOM
                 = (Element) the detached element
                \*/
                elproto.remove = function () {
                    var parent = this.parent();
                    this.node.parentNode && this.node.parentNode.removeChild(this.node);
                    delete this.paper;
                    this.removed = true;
                    parent && parent.add();
                    return this;
                };
                /*\
                 * Element.select
                 [ method ]
                 **
                 * Gathers the nested @Element matching the given set of CSS selectors
                 **
                 - query (string) CSS selector
                 = (Element) result of query selection
                \*/
                elproto.select = function (query) {
                    return wrap(this.node.querySelector(query));
                };
                /*\
                 * Element.selectAll
                 [ method ]
                 **
                 * Gathers nested @Element objects matching the given set of CSS selectors
                 **
                 - query (string) CSS selector
                 = (Set|array) result of query selection
                \*/
                elproto.selectAll = function (query) {
                    var nodelist = this.node.querySelectorAll(query),
                        set = (Snap.set || Array)();
                    for (var i = 0; i < nodelist.length; i++) {
                        set.push(wrap(nodelist[i]));
                    }
                    return set;
                };
                /*\
                 * Element.asPX
                 [ method ]
                 **
                 * Returns given attribute of the element as a `px` value (not %, em, etc.)
                 **
                 - attr (string) attribute name
                 - value (string) #optional attribute value
                 = (Element) result of query selection
                \*/
                elproto.asPX = function (attr, value) {
                    if (value == null) {
                        value = this.attr(attr);
                    }
                    return +unit2px(this, attr, value);
                };
                // SIERRA Element.use(): I suggest adding a note about how to access the original element the returned <use> instantiates. It's a part of SVG with which ordinary web developers may be least familiar.
                /*\
                 * Element.use
                 [ method ]
                 **
                 * Creates a `<use>` element linked to the current element
                 **
                 = (Element) the `<use>` element
                \*/
                elproto.use = function () {
                    var use,
                        id = this.node.id;
                    if (!id) {
                        id = this.id;
                        $(this.node, {
                            id: id
                        });
                    }
                    if (this.type == "linearGradient" || this.type == "radialGradient" || this.type == "pattern") {
                        use = make(this.type, this.node.parentNode);
                    } else {
                        use = make("use", this.node.parentNode);
                    }
                    $(use.node, {
                        "xlink:href": "#" + id
                    });
                    use.original = this;
                    return use;
                };
                function fixids(el) {
                    var els = el.selectAll("*"),
                        it,
                        url = /^\s*url\(("|'|)(.*)\1\)\s*$/,
                        ids = [],
                        uses = {};
                    function urltest(it, name) {
                        var val = $(it.node, name);
                        val = val && val.match(url);
                        val = val && val[2];
                        if (val && val.charAt() == "#") {
                            val = val.substring(1);
                        } else {
                            return;
                        }
                        if (val) {
                            uses[val] = (uses[val] || []).concat(function (id) {
                                var attr = {};
                                attr[name] = URL(id);
                                $(it.node, attr);
                            });
                        }
                    }
                    function linktest(it) {
                        var val = $(it.node, "xlink:href");
                        if (val && val.charAt() == "#") {
                            val = val.substring(1);
                        } else {
                            return;
                        }
                        if (val) {
                            uses[val] = (uses[val] || []).concat(function (id) {
                                it.attr("xlink:href", "#" + id);
                            });
                        }
                    }
                    for (var i = 0, ii = els.length; i < ii; i++) {
                        it = els[i];
                        urltest(it, "fill");
                        urltest(it, "stroke");
                        urltest(it, "filter");
                        urltest(it, "mask");
                        urltest(it, "clip-path");
                        linktest(it);
                        var oldid = $(it.node, "id");
                        if (oldid) {
                            $(it.node, { id: it.id });
                            ids.push({
                                old: oldid,
                                id: it.id
                            });
                        }
                    }
                    for (i = 0, ii = ids.length; i < ii; i++) {
                        var fs = uses[ids[i].old];
                        if (fs) {
                            for (var j = 0, jj = fs.length; j < jj; j++) {
                                fs[j](ids[i].id);
                            }
                        }
                    }
                }
                /*\
                 * Element.clone
                 [ method ]
                 **
                 * Creates a clone of the element and inserts it after the element
                 **
                 = (Element) the clone
                \*/
                elproto.clone = function () {
                    var clone = wrap(this.node.cloneNode(true));
                    if ($(clone.node, "id")) {
                        $(clone.node, { id: clone.id });
                    }
                    fixids(clone);
                    clone.insertAfter(this);
                    return clone;
                };
                /*\
                 * Element.toDefs
                 [ method ]
                 **
                 * Moves element to the shared `<defs>` area
                 **
                 = (Element) the element
                \*/
                elproto.toDefs = function () {
                    var defs = getSomeDefs(this);
                    defs.appendChild(this.node);
                    return this;
                };
                /*\
                 * Element.toPattern
                 [ method ]
                 **
                 * Creates a `<pattern>` element from the current element
                 **
                 * To create a pattern you have to specify the pattern rect:
                 - x (string|number)
                 - y (string|number)
                 - width (string|number)
                 - height (string|number)
                 = (Element) the `<pattern>` element
                 * You can use pattern later on as an argument for `fill` attribute:
                 | var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
                 |         fill: "none",
                 |         stroke: "#bada55",
                 |         strokeWidth: 5
                 |     }).pattern(0, 0, 10, 10),
                 |     c = paper.circle(200, 200, 100);
                 | c.attr({
                 |     fill: p
                 | });
                \*/
                elproto.pattern = elproto.toPattern = function (x, y, width, height) {
                    var p = make("pattern", getSomeDefs(this));
                    if (x == null) {
                        x = this.getBBox();
                    }
                    if (is(x, "object") && "x" in x) {
                        y = x.y;
                        width = x.width;
                        height = x.height;
                        x = x.x;
                    }
                    $(p.node, {
                        x: x,
                        y: y,
                        width: width,
                        height: height,
                        patternUnits: "userSpaceOnUse",
                        id: p.id,
                        viewBox: [x, y, width, height].join(" ")
                    });
                    p.node.appendChild(this.node);
                    return p;
                };
                // SIERRA Element.marker(): clarify what a reference point is. E.g., helps you offset the object from its edge such as when centering it over a path.
                // SIERRA Element.marker(): I suggest the method should accept default reference point values.  Perhaps centered with (refX = width/2) and (refY = height/2)? Also, couldn't it assume the element's current _width_ and _height_? And please specify what _x_ and _y_ mean: offsets? If so, from where?  Couldn't they also be assigned default values?
                /*\
                 * Element.marker
                 [ method ]
                 **
                 * Creates a `<marker>` element from the current element
                 **
                 * To create a marker you have to specify the bounding rect and reference point:
                 - x (number)
                 - y (number)
                 - width (number)
                 - height (number)
                 - refX (number)
                 - refY (number)
                 = (Element) the `<marker>` element
                 * You can specify the marker later as an argument for `marker-start`, `marker-end`, `marker-mid`, and `marker` attributes. The `marker` attribute places the marker at every point along the path, and `marker-mid` places them at every point except the start and end.
                \*/
                // TODO add usage for markers
                elproto.marker = function (x, y, width, height, refX, refY) {
                    var p = make("marker", getSomeDefs(this));
                    if (x == null) {
                        x = this.getBBox();
                    }
                    if (is(x, "object") && "x" in x) {
                        y = x.y;
                        width = x.width;
                        height = x.height;
                        refX = x.refX || x.cx;
                        refY = x.refY || x.cy;
                        x = x.x;
                    }
                    $(p.node, {
                        viewBox: [x, y, width, height].join(" "),
                        markerWidth: width,
                        markerHeight: height,
                        orient: "auto",
                        refX: refX || 0,
                        refY: refY || 0,
                        id: p.id
                    });
                    p.node.appendChild(this.node);
                    return p;
                };
                // animation
                function slice(from, to, f) {
                    return function (arr) {
                        var res = arr.slice(from, to);
                        if (res.length == 1) {
                            res = res[0];
                        }
                        return f ? f(res) : res;
                    };
                }
                var Animation = function (attr, ms, easing, callback) {
                    if (typeof easing == "function" && !easing.length) {
                        callback = easing;
                        easing = mina.linear;
                    }
                    this.attr = attr;
                    this.dur = ms;
                    easing && (this.easing = easing);
                    callback && (this.callback = callback);
                };
                Snap._.Animation = Animation;
                /*\
                 * Snap.animation
                 [ method ]
                 **
                 * Creates an animation object
                 **
                 - attr (object) attributes of final destination
                 - duration (number) duration of the animation, in milliseconds
                 - easing (function) #optional one of easing functions of @mina or custom one
                 - callback (function) #optional callback function that fires when animation ends
                 = (object) animation object
                \*/
                Snap.animation = function (attr, ms, easing, callback) {
                    return new Animation(attr, ms, easing, callback);
                };
                /*\
                 * Element.inAnim
                 [ method ]
                 **
                 * Returns a set of animations that may be able to manipulate the current element
                 **
                 = (object) in format:
                 o {
                 o     anim (object) animation object,
                 o     mina (object) @mina object,
                 o     curStatus (number) 0..1 — status of the animation: 0 — just started, 1 — just finished,
                 o     status (function) gets or sets the status of the animation,
                 o     stop (function) stops the animation
                 o }
                \*/
                elproto.inAnim = function () {
                    var el = this,
                        res = [];
                    for (var id in el.anims) if (el.anims[has](id)) {
                        (function (a) {
                            res.push({
                                anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
                                mina: a,
                                curStatus: a.status(),
                                status: function (val) {
                                    return a.status(val);
                                },
                                stop: function () {
                                    a.stop();
                                }
                            });
                        })(el.anims[id]);
                    }
                    return res;
                };
                /*\
                 * Snap.animate
                 [ method ]
                 **
                 * Runs generic animation of one number into another with a caring function
                 **
                 - from (number|array) number or array of numbers
                 - to (number|array) number or array of numbers
                 - setter (function) caring function that accepts one number argument
                 - duration (number) duration, in milliseconds
                 - easing (function) #optional easing function from @mina or custom
                 - callback (function) #optional callback function to execute when animation ends
                 = (object) animation object in @mina format
                 o {
                 o     id (string) animation id, consider it read-only,
                 o     duration (function) gets or sets the duration of the animation,
                 o     easing (function) easing,
                 o     speed (function) gets or sets the speed of the animation,
                 o     status (function) gets or sets the status of the animation,
                 o     stop (function) stops the animation
                 o }
                 | var rect = Snap().rect(0, 0, 10, 10);
                 | Snap.animate(0, 10, function (val) {
                 |     rect.attr({
                 |         x: val
                 |     });
                 | }, 1000);
                 | // in given context is equivalent to
                 | rect.animate({x: 10}, 1000);
                \*/
                Snap.animate = function (from, to, setter, ms, easing, callback) {
                    if (typeof easing == "function" && !easing.length) {
                        callback = easing;
                        easing = mina.linear;
                    }
                    var now = mina.time(),
                        anim = mina(from, to, now, now + ms, mina.time, setter, easing);
                    callback && eve.once("mina.finish." + anim.id, callback);
                    return anim;
                };
                /*\
                 * Element.stop
                 [ method ]
                 **
                 * Stops all the animations for the current element
                 **
                 = (Element) the current element
                \*/
                elproto.stop = function () {
                    var anims = this.inAnim();
                    for (var i = 0, ii = anims.length; i < ii; i++) {
                        anims[i].stop();
                    }
                    return this;
                };
                /*\
                 * Element.animate
                 [ method ]
                 **
                 * Animates the given attributes of the element
                 **
                 - attrs (object) key-value pairs of destination attributes
                 - duration (number) duration of the animation in milliseconds
                 - easing (function) #optional easing function from @mina or custom
                 - callback (function) #optional callback function that executes when the animation ends
                 = (Element) the current element
                \*/
                elproto.animate = function (attrs, ms, easing, callback) {
                    if (typeof easing == "function" && !easing.length) {
                        callback = easing;
                        easing = mina.linear;
                    }
                    if (attrs instanceof Animation) {
                        callback = attrs.callback;
                        easing = attrs.easing;
                        ms = attrs.dur;
                        attrs = attrs.attr;
                    }
                    var fkeys = [],
                        tkeys = [],
                        keys = {},
                        from,
                        to,
                        f,
                        eq,
                        el = this;
                    for (var key in attrs) if (attrs[has](key)) {
                        if (el.equal) {
                            eq = el.equal(key, Str(attrs[key]));
                            from = eq.from;
                            to = eq.to;
                            f = eq.f;
                        } else {
                            from = +el.attr(key);
                            to = +attrs[key];
                        }
                        var len = is(from, "array") ? from.length : 1;
                        keys[key] = slice(fkeys.length, fkeys.length + len, f);
                        fkeys = fkeys.concat(from);
                        tkeys = tkeys.concat(to);
                    }
                    var now = mina.time(),
                        anim = mina(fkeys, tkeys, now, now + ms, mina.time, function (val) {
                        var attr = {};
                        for (var key in keys) if (keys[has](key)) {
                            attr[key] = keys[key](val);
                        }
                        el.attr(attr);
                    }, easing);
                    el.anims[anim.id] = anim;
                    anim._attrs = attrs;
                    anim._callback = callback;
                    eve("snap.animcreated." + el.id, anim);
                    eve.once("mina.finish." + anim.id, function () {
                        delete el.anims[anim.id];
                        callback && callback.call(el);
                    });
                    eve.once("mina.stop." + anim.id, function () {
                        delete el.anims[anim.id];
                    });
                    return el;
                };
                var eldata = {};
                /*\
                 * Element.data
                 [ method ]
                 **
                 * Adds or retrieves given value associated with given key. (Don’t confuse
                 * with `data-` attributes)
                 *
                 * See also @Element.removeData
                 - key (string) key to store data
                 - value (any) #optional value to store
                 = (object) @Element
                 * or, if value is not specified:
                 = (any) value
                 > Usage
                 | for (var i = 0, i < 5, i++) {
                 |     paper.circle(10 + 15 * i, 10, 10)
                 |          .attr({fill: "#000"})
                 |          .data("i", i)
                 |          .click(function () {
                 |             alert(this.data("i"));
                 |          });
                 | }
                \*/
                elproto.data = function (key, value) {
                    var data = eldata[this.id] = eldata[this.id] || {};
                    if (arguments.length == 0) {
                        eve("snap.data.get." + this.id, this, data, null);
                        return data;
                    }
                    if (arguments.length == 1) {
                        if (Snap.is(key, "object")) {
                            for (var i in key) if (key[has](i)) {
                                this.data(i, key[i]);
                            }
                            return this;
                        }
                        eve("snap.data.get." + this.id, this, data[key], key);
                        return data[key];
                    }
                    data[key] = value;
                    eve("snap.data.set." + this.id, this, value, key);
                    return this;
                };
                /*\
                 * Element.removeData
                 [ method ]
                 **
                 * Removes value associated with an element by given key.
                 * If key is not provided, removes all the data of the element.
                 - key (string) #optional key
                 = (object) @Element
                \*/
                elproto.removeData = function (key) {
                    if (key == null) {
                        eldata[this.id] = {};
                    } else {
                        eldata[this.id] && delete eldata[this.id][key];
                    }
                    return this;
                };
                /*\
                 * Element.outerSVG
                 [ method ]
                 **
                 * Returns SVG code for the element, equivalent to HTML's `outerHTML`.
                 *
                 * See also @Element.innerSVG
                 = (string) SVG code for the element
                \*/
                /*\
                 * Element.toString
                 [ method ]
                 **
                 * See @Element.outerSVG
                \*/
                elproto.outerSVG = elproto.toString = toString(1);
                /*\
                 * Element.innerSVG
                 [ method ]
                 **
                 * Returns SVG code for the element's contents, equivalent to HTML's `innerHTML`
                 = (string) SVG code for the element
                \*/
                elproto.innerSVG = toString();
                function toString(type) {
                    return function () {
                        var res = type ? "<" + this.type : "",
                            attr = this.node.attributes,
                            chld = this.node.childNodes;
                        if (type) {
                            for (var i = 0, ii = attr.length; i < ii; i++) {
                                res += " " + attr[i].name + '="' + attr[i].value.replace(/"/g, '\\"') + '"';
                            }
                        }
                        if (chld.length) {
                            type && (res += ">");
                            for (i = 0, ii = chld.length; i < ii; i++) {
                                if (chld[i].nodeType == 3) {
                                    res += chld[i].nodeValue;
                                } else if (chld[i].nodeType == 1) {
                                    res += wrap(chld[i]).toString();
                                }
                            }
                            type && (res += "</" + this.type + ">");
                        } else {
                            type && (res += "/>");
                        }
                        return res;
                    };
                }
                elproto.toDataURL = function () {
                    if (window && window.btoa) {
                        var bb = this.getBBox(),
                            svg = Snap.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                            x: +bb.x.toFixed(3),
                            y: +bb.y.toFixed(3),
                            width: +bb.width.toFixed(3),
                            height: +bb.height.toFixed(3),
                            contents: this.outerSVG()
                        });
                        return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
                    }
                };
                /*\
                 * Fragment.select
                 [ method ]
                 **
                 * See @Element.select
                \*/
                Fragment.prototype.select = elproto.select;
                /*\
                 * Fragment.selectAll
                 [ method ]
                 **
                 * See @Element.selectAll
                \*/
                Fragment.prototype.selectAll = elproto.selectAll;
            });

            // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            // http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
                var objectToString = Object.prototype.toString,
                    Str = String,
                    math = Math,
                    E = "";
                function Matrix(a, b, c, d, e, f) {
                    if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
                        this.a = a.a;
                        this.b = a.b;
                        this.c = a.c;
                        this.d = a.d;
                        this.e = a.e;
                        this.f = a.f;
                        return;
                    }
                    if (a != null) {
                        this.a = +a;
                        this.b = +b;
                        this.c = +c;
                        this.d = +d;
                        this.e = +e;
                        this.f = +f;
                    } else {
                        this.a = 1;
                        this.b = 0;
                        this.c = 0;
                        this.d = 1;
                        this.e = 0;
                        this.f = 0;
                    }
                }
                (function (matrixproto) {
                    /*\
                     * Matrix.add
                     [ method ]
                     **
                     * Adds the given matrix to existing one
                     - a (number)
                     - b (number)
                     - c (number)
                     - d (number)
                     - e (number)
                     - f (number)
                     * or
                     - matrix (object) @Matrix
                    \*/
                    matrixproto.add = function (a, b, c, d, e, f) {
                        var out = [[], [], []],
                            m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                            matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
                            x,
                            y,
                            z,
                            res;

                        if (a && a instanceof Matrix) {
                            matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
                        }

                        for (x = 0; x < 3; x++) {
                            for (y = 0; y < 3; y++) {
                                res = 0;
                                for (z = 0; z < 3; z++) {
                                    res += m[x][z] * matrix[z][y];
                                }
                                out[x][y] = res;
                            }
                        }
                        this.a = out[0][0];
                        this.b = out[1][0];
                        this.c = out[0][1];
                        this.d = out[1][1];
                        this.e = out[0][2];
                        this.f = out[1][2];
                        return this;
                    };
                    /*\
                     * Matrix.invert
                     [ method ]
                     **
                     * Returns an inverted version of the matrix
                     = (object) @Matrix
                    \*/
                    matrixproto.invert = function () {
                        var me = this,
                            x = me.a * me.d - me.b * me.c;
                        return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
                    };
                    /*\
                     * Matrix.clone
                     [ method ]
                     **
                     * Returns a copy of the matrix
                     = (object) @Matrix
                    \*/
                    matrixproto.clone = function () {
                        return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
                    };
                    /*\
                     * Matrix.translate
                     [ method ]
                     **
                     * Translate the matrix
                     - x (number) horizontal offset distance
                     - y (number) vertical offset distance
                    \*/
                    matrixproto.translate = function (x, y) {
                        return this.add(1, 0, 0, 1, x, y);
                    };
                    /*\
                     * Matrix.scale
                     [ method ]
                     **
                     * Scales the matrix
                     - x (number) amount to be scaled, with `1` resulting in no change
                     - y (number) #optional amount to scale along the vertical axis. (Otherwise `x` applies to both axes.)
                     - cx (number) #optional horizontal origin point from which to scale
                     - cy (number) #optional vertical origin point from which to scale
                     * Default cx, cy is the middle point of the element.
                    \*/
                    matrixproto.scale = function (x, y, cx, cy) {
                        y == null && (y = x);
                        (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
                        this.add(x, 0, 0, y, 0, 0);
                        (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
                        return this;
                    };
                    /*\
                     * Matrix.rotate
                     [ method ]
                     **
                     * Rotates the matrix
                     - a (number) angle of rotation, in degrees
                     - x (number) horizontal origin point from which to rotate
                     - y (number) vertical origin point from which to rotate
                    \*/
                    matrixproto.rotate = function (a, x, y) {
                        a = Snap.rad(a);
                        x = x || 0;
                        y = y || 0;
                        var cos = +math.cos(a).toFixed(9),
                            sin = +math.sin(a).toFixed(9);
                        this.add(cos, sin, -sin, cos, x, y);
                        return this.add(1, 0, 0, 1, -x, -y);
                    };
                    /*\
                     * Matrix.x
                     [ method ]
                     **
                     * Returns x coordinate for given point after transformation described by the matrix. See also @Matrix.y
                     - x (number)
                     - y (number)
                     = (number) x
                    \*/
                    matrixproto.x = function (x, y) {
                        return x * this.a + y * this.c + this.e;
                    };
                    /*\
                     * Matrix.y
                     [ method ]
                     **
                     * Returns y coordinate for given point after transformation described by the matrix. See also @Matrix.x
                     - x (number)
                     - y (number)
                     = (number) y
                    \*/
                    matrixproto.y = function (x, y) {
                        return x * this.b + y * this.d + this.f;
                    };
                    matrixproto.get = function (i) {
                        return +this[Str.fromCharCode(97 + i)].toFixed(4);
                    };
                    matrixproto.toString = function () {
                        return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
                    };
                    matrixproto.offset = function () {
                        return [this.e.toFixed(4), this.f.toFixed(4)];
                    };
                    function norm(a) {
                        return a[0] * a[0] + a[1] * a[1];
                    }
                    function normalize(a) {
                        var mag = math.sqrt(norm(a));
                        a[0] && (a[0] /= mag);
                        a[1] && (a[1] /= mag);
                    }
                    /*\
                     * Matrix.determinant
                     [ method ]
                     **
                     * Finds determinant of the given matrix.
                     = (number) determinant
                    \*/
                    matrixproto.determinant = function () {
                        return this.a * this.d - this.b * this.c;
                    };
                    /*\
                     * Matrix.split
                     [ method ]
                     **
                     * Splits matrix into primitive transformations
                     = (object) in format:
                     o dx (number) translation by x
                     o dy (number) translation by y
                     o scalex (number) scale by x
                     o scaley (number) scale by y
                     o shear (number) shear
                     o rotate (number) rotation in deg
                     o isSimple (boolean) could it be represented via simple transformations
                    \*/
                    matrixproto.split = function () {
                        var out = {};
                        // translation
                        out.dx = this.e;
                        out.dy = this.f;

                        // scale and shear
                        var row = [[this.a, this.c], [this.b, this.d]];
                        out.scalex = math.sqrt(norm(row[0]));
                        normalize(row[0]);

                        out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
                        row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

                        out.scaley = math.sqrt(norm(row[1]));
                        normalize(row[1]);
                        out.shear /= out.scaley;

                        if (this.determinant() < 0) {
                            out.scalex = -out.scalex;
                        }

                        // rotation
                        var sin = -row[0][1],
                            cos = row[1][1];
                        if (cos < 0) {
                            out.rotate = Snap.deg(math.acos(cos));
                            if (sin < 0) {
                                out.rotate = 360 - out.rotate;
                            }
                        } else {
                            out.rotate = Snap.deg(math.asin(sin));
                        }

                        out.isSimple = ! +out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
                        out.isSuperSimple = ! +out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
                        out.noRotation = ! +out.shear.toFixed(9) && !out.rotate;
                        return out;
                    };
                    /*\
                     * Matrix.toTransformString
                     [ method ]
                     **
                     * Returns transform string that represents given matrix
                     = (string) transform string
                    \*/
                    matrixproto.toTransformString = function (shorter) {
                        var s = shorter || this.split();
                        if (! +s.shear.toFixed(9)) {
                            s.scalex = +s.scalex.toFixed(4);
                            s.scaley = +s.scaley.toFixed(4);
                            s.rotate = +s.rotate.toFixed(4);
                            return (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) + (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) + (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E);
                        } else {
                            return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
                        }
                    };
                })(Matrix.prototype);
                /*\
                 * Snap.Matrix
                 [ method ]
                 **
                 * Matrix constructor, extend on your own risk.
                 * To create matrices use @Snap.matrix.
                \*/
                Snap.Matrix = Matrix;
                /*\
                 * Snap.matrix
                 [ method ]
                 **
                 * Utility method
                 **
                 * Returns a matrix based on the given parameters
                 - a (number)
                 - b (number)
                 - c (number)
                 - d (number)
                 - e (number)
                 - f (number)
                 * or
                 - svgMatrix (SVGMatrix)
                 = (object) @Matrix
                \*/
                Snap.matrix = function (a, b, c, d, e, f) {
                    return new Matrix(a, b, c, d, e, f);
                };
            });
            // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            // http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
                var has = "hasOwnProperty",
                    make = Snap._.make,
                    wrap = Snap._.wrap,
                    is = Snap.is,
                    getSomeDefs = Snap._.getSomeDefs,
                    reURLValue = /^url\(#?([^)]+)\)$/,
                    $ = Snap._.$,
                    URL = Snap.url,
                    Str = String,
                    separator = Snap._.separator,
                    E = "";
                // Attributes event handlers
                eve.on("snap.util.attr.mask", function (value) {
                    if (value instanceof Element || value instanceof Fragment) {
                        eve.stop();
                        if (value instanceof Fragment && value.node.childNodes.length == 1) {
                            value = value.node.firstChild;
                            getSomeDefs(this).appendChild(value);
                            value = wrap(value);
                        }
                        if (value.type == "mask") {
                            var mask = value;
                        } else {
                            mask = make("mask", getSomeDefs(this));
                            mask.node.appendChild(value.node);
                        }
                        !mask.node.id && $(mask.node, {
                            id: mask.id
                        });
                        $(this.node, {
                            mask: URL(mask.id)
                        });
                    }
                });
                (function (clipIt) {
                    eve.on("snap.util.attr.clip", clipIt);
                    eve.on("snap.util.attr.clip-path", clipIt);
                    eve.on("snap.util.attr.clipPath", clipIt);
                })(function (value) {
                    if (value instanceof Element || value instanceof Fragment) {
                        eve.stop();
                        if (value.type == "clipPath") {
                            var clip = value;
                        } else {
                            clip = make("clipPath", getSomeDefs(this));
                            clip.node.appendChild(value.node);
                            !clip.node.id && $(clip.node, {
                                id: clip.id
                            });
                        }
                        $(this.node, {
                            "clip-path": URL(clip.node.id || clip.id)
                        });
                    }
                });
                function fillStroke(name) {
                    return function (value) {
                        eve.stop();
                        if (value instanceof Fragment && value.node.childNodes.length == 1 && (value.node.firstChild.tagName == "radialGradient" || value.node.firstChild.tagName == "linearGradient" || value.node.firstChild.tagName == "pattern")) {
                            value = value.node.firstChild;
                            getSomeDefs(this).appendChild(value);
                            value = wrap(value);
                        }
                        if (value instanceof Element) {
                            if (value.type == "radialGradient" || value.type == "linearGradient" || value.type == "pattern") {
                                if (!value.node.id) {
                                    $(value.node, {
                                        id: value.id
                                    });
                                }
                                var fill = URL(value.node.id);
                            } else {
                                fill = value.attr(name);
                            }
                        } else {
                            fill = Snap.color(value);
                            if (fill.error) {
                                var grad = Snap(getSomeDefs(this).ownerSVGElement).gradient(value);
                                if (grad) {
                                    if (!grad.node.id) {
                                        $(grad.node, {
                                            id: grad.id
                                        });
                                    }
                                    fill = URL(grad.node.id);
                                } else {
                                    fill = value;
                                }
                            } else {
                                fill = Str(fill);
                            }
                        }
                        var attrs = {};
                        attrs[name] = fill;
                        $(this.node, attrs);
                        this.node.style[name] = E;
                    };
                }
                eve.on("snap.util.attr.fill", fillStroke("fill"));
                eve.on("snap.util.attr.stroke", fillStroke("stroke"));
                var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
                eve.on("snap.util.grad.parse", function parseGrad(string) {
                    string = Str(string);
                    var tokens = string.match(gradrg);
                    if (!tokens) {
                        return null;
                    }
                    var type = tokens[1],
                        params = tokens[2],
                        stops = tokens[3];
                    params = params.split(/\s*,\s*/).map(function (el) {
                        return +el == el ? +el : el;
                    });
                    if (params.length == 1 && params[0] == 0) {
                        params = [];
                    }
                    stops = stops.split("-");
                    stops = stops.map(function (el) {
                        el = el.split(":");
                        var out = {
                            color: el[0]
                        };
                        if (el[1]) {
                            out.offset = parseFloat(el[1]);
                        }
                        return out;
                    });
                    return {
                        type: type,
                        params: params,
                        stops: stops
                    };
                });

                eve.on("snap.util.attr.d", function (value) {
                    eve.stop();
                    if (is(value, "array") && is(value[0], "array")) {
                        value = Snap.path.toString.call(value);
                    }
                    value = Str(value);
                    if (value.match(/[ruo]/i)) {
                        value = Snap.path.toAbsolute(value);
                    }
                    $(this.node, { d: value });
                })(-1);
                eve.on("snap.util.attr.#text", function (value) {
                    eve.stop();
                    value = Str(value);
                    var txt = glob.doc.createTextNode(value);
                    while (this.node.firstChild) {
                        this.node.removeChild(this.node.firstChild);
                    }
                    this.node.appendChild(txt);
                })(-1);
                eve.on("snap.util.attr.path", function (value) {
                    eve.stop();
                    this.attr({ d: value });
                })(-1);
                eve.on("snap.util.attr.class", function (value) {
                    eve.stop();
                    this.node.className.baseVal = value;
                })(-1);
                eve.on("snap.util.attr.viewBox", function (value) {
                    var vb;
                    if (is(value, "object") && "x" in value) {
                        vb = [value.x, value.y, value.width, value.height].join(" ");
                    } else if (is(value, "array")) {
                        vb = value.join(" ");
                    } else {
                        vb = value;
                    }
                    $(this.node, {
                        viewBox: vb
                    });
                    eve.stop();
                })(-1);
                eve.on("snap.util.attr.transform", function (value) {
                    this.transform(value);
                    eve.stop();
                })(-1);
                eve.on("snap.util.attr.r", function (value) {
                    if (this.type == "rect") {
                        eve.stop();
                        $(this.node, {
                            rx: value,
                            ry: value
                        });
                    }
                })(-1);
                eve.on("snap.util.attr.textpath", function (value) {
                    eve.stop();
                    if (this.type == "text") {
                        var id, tp, node;
                        if (!value && this.textPath) {
                            tp = this.textPath;
                            while (tp.node.firstChild) {
                                this.node.appendChild(tp.node.firstChild);
                            }
                            tp.remove();
                            delete this.textPath;
                            return;
                        }
                        if (is(value, "string")) {
                            var defs = getSomeDefs(this),
                                path = wrap(defs.parentNode).path(value);
                            defs.appendChild(path.node);
                            id = path.id;
                            path.attr({ id: id });
                        } else {
                            value = wrap(value);
                            if (value instanceof Element) {
                                id = value.attr("id");
                                if (!id) {
                                    id = value.id;
                                    value.attr({ id: id });
                                }
                            }
                        }
                        if (id) {
                            tp = this.textPath;
                            node = this.node;
                            if (tp) {
                                tp.attr({ "xlink:href": "#" + id });
                            } else {
                                tp = $("textPath", {
                                    "xlink:href": "#" + id
                                });
                                while (node.firstChild) {
                                    tp.appendChild(node.firstChild);
                                }
                                node.appendChild(tp);
                                this.textPath = wrap(tp);
                            }
                        }
                    }
                })(-1);
                eve.on("snap.util.attr.text", function (value) {
                    if (this.type == "text") {
                        var i = 0,
                            node = this.node,
                            tuner = function (chunk) {
                            var out = $("tspan");
                            if (is(chunk, "array")) {
                                for (var i = 0; i < chunk.length; i++) {
                                    out.appendChild(tuner(chunk[i]));
                                }
                            } else {
                                out.appendChild(glob.doc.createTextNode(chunk));
                            }
                            out.normalize && out.normalize();
                            return out;
                        };
                        while (node.firstChild) {
                            node.removeChild(node.firstChild);
                        }
                        var tuned = tuner(value);
                        while (tuned.firstChild) {
                            node.appendChild(tuned.firstChild);
                        }
                    }
                    eve.stop();
                })(-1);
                function setFontSize(value) {
                    eve.stop();
                    if (value == +value) {
                        value += "px";
                    }
                    this.node.style.fontSize = value;
                }
                eve.on("snap.util.attr.fontSize", setFontSize)(-1);
                eve.on("snap.util.attr.font-size", setFontSize)(-1);

                eve.on("snap.util.getattr.transform", function () {
                    eve.stop();
                    return this.transform();
                })(-1);
                eve.on("snap.util.getattr.textpath", function () {
                    eve.stop();
                    return this.textPath;
                })(-1);
                // Markers
                (function () {
                    function getter(end) {
                        return function () {
                            eve.stop();
                            var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
                            if (style == "none") {
                                return style;
                            } else {
                                return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
                            }
                        };
                    }
                    function setter(end) {
                        return function (value) {
                            eve.stop();
                            var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
                            if (value == "" || !value) {
                                this.node.style[name] = "none";
                                return;
                            }
                            if (value.type == "marker") {
                                var id = value.node.id;
                                if (!id) {
                                    $(value.node, { id: value.id });
                                }
                                this.node.style[name] = URL(id);
                                return;
                            }
                        };
                    }
                    eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
                    eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
                    eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
                    eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
                    eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
                    eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
                    eve.on("snap.util.attr.marker-end", setter("end"))(-1);
                    eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
                    eve.on("snap.util.attr.marker-start", setter("start"))(-1);
                    eve.on("snap.util.attr.markerStart", setter("start"))(-1);
                    eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
                    eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
                })();
                eve.on("snap.util.getattr.r", function () {
                    if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
                        eve.stop();
                        return $(this.node, "rx");
                    }
                })(-1);
                function textExtract(node) {
                    var out = [];
                    var children = node.childNodes;
                    for (var i = 0, ii = children.length; i < ii; i++) {
                        var chi = children[i];
                        if (chi.nodeType == 3) {
                            out.push(chi.nodeValue);
                        }
                        if (chi.tagName == "tspan") {
                            if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
                                out.push(chi.firstChild.nodeValue);
                            } else {
                                out.push(textExtract(chi));
                            }
                        }
                    }
                    return out;
                }
                eve.on("snap.util.getattr.text", function () {
                    if (this.type == "text" || this.type == "tspan") {
                        eve.stop();
                        var out = textExtract(this.node);
                        return out.length == 1 ? out[0] : out;
                    }
                })(-1);
                eve.on("snap.util.getattr.#text", function () {
                    return this.node.textContent;
                })(-1);
                eve.on("snap.util.getattr.viewBox", function () {
                    eve.stop();
                    var vb = $(this.node, "viewBox");
                    if (vb) {
                        vb = vb.split(separator);
                        return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
                    } else {
                        return;
                    }
                })(-1);
                eve.on("snap.util.getattr.points", function () {
                    var p = $(this.node, "points");
                    eve.stop();
                    if (p) {
                        return p.split(separator);
                    } else {
                        return;
                    }
                })(-1);
                eve.on("snap.util.getattr.path", function () {
                    var p = $(this.node, "d");
                    eve.stop();
                    return p;
                })(-1);
                eve.on("snap.util.getattr.class", function () {
                    return this.node.className.baseVal;
                })(-1);
                function getFontSize() {
                    eve.stop();
                    return this.node.style.fontSize;
                }
                eve.on("snap.util.getattr.fontSize", getFontSize)(-1);
                eve.on("snap.util.getattr.font-size", getFontSize)(-1);
            });

            // Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            // http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
                var rgNotSpace = /\S+/g,
                    rgBadSpace = /[\t\r\n\f]/g,
                    rgTrim = /(^\s+|\s+$)/g,
                    Str = String,
                    elproto = Element.prototype;
                /*\
                 * Element.addClass
                 [ method ]
                 **
                 * Adds given class name or list of class names to the element.
                 - value (string) class name or space separated list of class names
                 **
                 = (Element) original element.
                \*/
                elproto.addClass = function (value) {
                    var classes = Str(value || "").match(rgNotSpace) || [],
                        elem = this.node,
                        className = elem.className.baseVal,
                        curClasses = className.match(rgNotSpace) || [],
                        j,
                        pos,
                        clazz,
                        finalValue;

                    if (classes.length) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            pos = curClasses.indexOf(clazz);
                            if (! ~pos) {
                                curClasses.push(clazz);
                            }
                        }

                        finalValue = curClasses.join(" ");
                        if (className != finalValue) {
                            elem.className.baseVal = finalValue;
                        }
                    }
                    return this;
                };
                /*\
                 * Element.removeClass
                 [ method ]
                 **
                 * Removes given class name or list of class names from the element.
                 - value (string) class name or space separated list of class names
                 **
                 = (Element) original element.
                \*/
                elproto.removeClass = function (value) {
                    var classes = Str(value || "").match(rgNotSpace) || [],
                        elem = this.node,
                        className = elem.className.baseVal,
                        curClasses = className.match(rgNotSpace) || [],
                        j,
                        pos,
                        clazz,
                        finalValue;
                    if (curClasses.length) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            pos = curClasses.indexOf(clazz);
                            if (~pos) {
                                curClasses.splice(pos, 1);
                            }
                        }

                        finalValue = curClasses.join(" ");
                        if (className != finalValue) {
                            elem.className.baseVal = finalValue;
                        }
                    }
                    return this;
                };
                /*\
                 * Element.hasClass
                 [ method ]
                 **
                 * Checks if the element has a given class name in the list of class names applied to it.
                 - value (string) class name
                 **
                 = (boolean) `true` if the element has given class
                \*/
                elproto.hasClass = function (value) {
                    var elem = this.node,
                        className = elem.className.baseVal,
                        curClasses = className.match(rgNotSpace) || [];
                    return !! ~curClasses.indexOf(value);
                };
                /*\
                 * Element.toggleClass
                 [ method ]
                 **
                 * Add or remove one or more classes from the element, depending on either
                 * the class’s presence or the value of the `flag` argument.
                 - value (string) class name or space separated list of class names
                 - flag (boolean) value to determine whether the class should be added or removed
                 **
                 = (Element) original element.
                \*/
                elproto.toggleClass = function (value, flag) {
                    if (flag != null) {
                        if (flag) {
                            return this.addClass(value);
                        } else {
                            return this.removeClass(value);
                        }
                    }
                    var classes = (value || "").match(rgNotSpace) || [],
                        elem = this.node,
                        className = elem.className.baseVal,
                        curClasses = className.match(rgNotSpace) || [],
                        j,
                        pos,
                        clazz,
                        finalValue;
                    j = 0;
                    while (clazz = classes[j++]) {
                        pos = curClasses.indexOf(clazz);
                        if (~pos) {
                            curClasses.splice(pos, 1);
                        } else {
                            curClasses.push(clazz);
                        }
                    }

                    finalValue = curClasses.join(" ");
                    if (className != finalValue) {
                        elem.className.baseVal = finalValue;
                    }
                    return this;
                };
            });

            // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            // http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
                var operators = {
                    "+": function (x, y) {
                        return x + y;
                    },
                    "-": function (x, y) {
                        return x - y;
                    },
                    "/": function (x, y) {
                        return x / y;
                    },
                    "*": function (x, y) {
                        return x * y;
                    }
                },
                    Str = String,
                    reUnit = /[a-z]+$/i,
                    reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
                function getNumber(val) {
                    return val;
                }
                function getUnit(unit) {
                    return function (val) {
                        return +val.toFixed(3) + unit;
                    };
                }
                eve.on("snap.util.attr", function (val) {
                    var plus = Str(val).match(reAddon);
                    if (plus) {
                        var evnt = eve.nt(),
                            name = evnt.substring(evnt.lastIndexOf(".") + 1),
                            a = this.attr(name),
                            atr = {};
                        eve.stop();
                        var unit = plus[3] || "",
                            aUnit = a.match(reUnit),
                            op = operators[plus[1]];
                        if (aUnit && aUnit == unit) {
                            val = op(parseFloat(a), +plus[2]);
                        } else {
                            a = this.asPX(name);
                            val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
                        }
                        if (isNaN(a) || isNaN(val)) {
                            return;
                        }
                        atr[name] = val;
                        this.attr(atr);
                    }
                })(-10);
                eve.on("snap.util.equal", function (name, b) {
                    var A,
                        B,
                        a = Str(this.attr(name) || ""),
                        el = this,
                        bplus = Str(b).match(reAddon);
                    if (bplus) {
                        eve.stop();
                        var unit = bplus[3] || "",
                            aUnit = a.match(reUnit),
                            op = operators[bplus[1]];
                        if (aUnit && aUnit == unit) {
                            return {
                                from: parseFloat(a),
                                to: op(parseFloat(a), +bplus[2]),
                                f: getUnit(aUnit)
                            };
                        } else {
                            a = this.asPX(name);
                            return {
                                from: a,
                                to: op(a, this.asPX(name, bplus[2] + unit)),
                                f: getNumber
                            };
                        }
                    }
                })(-10);
            });
            // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            // http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
                var proto = Paper.prototype,
                    is = Snap.is;
                /*\
                 * Paper.rect
                 [ method ]
                 *
                 * Draws a rectangle
                 **
                 - x (number) x coordinate of the top left corner
                 - y (number) y coordinate of the top left corner
                 - width (number) width
                 - height (number) height
                 - rx (number) #optional horizontal radius for rounded corners, default is 0
                 - ry (number) #optional vertical radius for rounded corners, default is rx or 0
                 = (object) the `rect` element
                 **
                 > Usage
                 | // regular rectangle
                 | var c = paper.rect(10, 10, 50, 50);
                 | // rectangle with rounded corners
                 | var c = paper.rect(40, 40, 50, 50, 10);
                \*/
                proto.rect = function (x, y, w, h, rx, ry) {
                    var attr;
                    if (ry == null) {
                        ry = rx;
                    }
                    if (is(x, "object") && x == "[object Object]") {
                        attr = x;
                    } else if (x != null) {
                        attr = {
                            x: x,
                            y: y,
                            width: w,
                            height: h
                        };
                        if (rx != null) {
                            attr.rx = rx;
                            attr.ry = ry;
                        }
                    }
                    return this.el("rect", attr);
                };
                /*\
                 * Paper.circle
                 [ method ]
                 **
                 * Draws a circle
                 **
                 - x (number) x coordinate of the centre
                 - y (number) y coordinate of the centre
                 - r (number) radius
                 = (object) the `circle` element
                 **
                 > Usage
                 | var c = paper.circle(50, 50, 40);
                \*/
                proto.circle = function (cx, cy, r) {
                    var attr;
                    if (is(cx, "object") && cx == "[object Object]") {
                        attr = cx;
                    } else if (cx != null) {
                        attr = {
                            cx: cx,
                            cy: cy,
                            r: r
                        };
                    }
                    return this.el("circle", attr);
                };

                var preload = function () {
                    function onerror() {
                        this.parentNode.removeChild(this);
                    }
                    return function (src, f) {
                        var img = glob.doc.createElement("img"),
                            body = glob.doc.body;
                        img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
                        img.onload = function () {
                            f.call(img);
                            img.onload = img.onerror = null;
                            body.removeChild(img);
                        };
                        img.onerror = onerror;
                        body.appendChild(img);
                        img.src = src;
                    };
                }();

                /*\
                 * Paper.image
                 [ method ]
                 **
                 * Places an image on the surface
                 **
                 - src (string) URI of the source image
                 - x (number) x offset position
                 - y (number) y offset position
                 - width (number) width of the image
                 - height (number) height of the image
                 = (object) the `image` element
                 * or
                 = (object) Snap element object with type `image`
                 **
                 > Usage
                 | var c = paper.image("apple.png", 10, 10, 80, 80);
                \*/
                proto.image = function (src, x, y, width, height) {
                    var el = this.el("image");
                    if (is(src, "object") && "src" in src) {
                        el.attr(src);
                    } else if (src != null) {
                        var set = {
                            "xlink:href": src,
                            preserveAspectRatio: "none"
                        };
                        if (x != null && y != null) {
                            set.x = x;
                            set.y = y;
                        }
                        if (width != null && height != null) {
                            set.width = width;
                            set.height = height;
                        } else {
                            preload(src, function () {
                                Snap._.$(el.node, {
                                    width: this.offsetWidth,
                                    height: this.offsetHeight
                                });
                            });
                        }
                        Snap._.$(el.node, set);
                    }
                    return el;
                };
                /*\
                 * Paper.ellipse
                 [ method ]
                 **
                 * Draws an ellipse
                 **
                 - x (number) x coordinate of the centre
                 - y (number) y coordinate of the centre
                 - rx (number) horizontal radius
                 - ry (number) vertical radius
                 = (object) the `ellipse` element
                 **
                 > Usage
                 | var c = paper.ellipse(50, 50, 40, 20);
                \*/
                proto.ellipse = function (cx, cy, rx, ry) {
                    var attr;
                    if (is(cx, "object") && cx == "[object Object]") {
                        attr = cx;
                    } else if (cx != null) {
                        attr = {
                            cx: cx,
                            cy: cy,
                            rx: rx,
                            ry: ry
                        };
                    }
                    return this.el("ellipse", attr);
                };
                // SIERRA Paper.path(): Unclear from the link what a Catmull-Rom curveto is, and why it would make life any easier.
                /*\
                 * Paper.path
                 [ method ]
                 **
                 * Creates a `<path>` element using the given string as the path's definition
                 - pathString (string) #optional path string in SVG format
                 * Path string consists of one-letter commands, followed by comma seprarated arguments in numerical form. Example:
                 | "M10,20L30,40"
                 * This example features two commands: `M`, with arguments `(10, 20)` and `L` with arguments `(30, 40)`. Uppercase letter commands express coordinates in absolute terms, while lowercase commands express them in relative terms from the most recently declared coordinates.
                 *
                 # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a> or <a href="https://developer.mozilla.org/en/SVG/Tutorial/Paths">article about path strings at MDN</a>.</p>
                 # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
                 # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
                 # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
                 # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
                 # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
                 # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
                 # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
                 # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
                 # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
                 # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
                 # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
                 # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
                 * * _Catmull-Rom curveto_ is a not standard SVG command and added to make life easier.
                 * Note: there is a special case when a path consists of only three commands: `M10,10R…z`. In this case the path connects back to its starting point.
                 > Usage
                 | var c = paper.path("M10 10L90 90");
                 | // go a diagonal line:
                 | // move to 10,10, line to 90,90
                \*/
                proto.path = function (d) {
                    var attr;
                    if (is(d, "object") && !is(d, "array")) {
                        attr = d;
                    } else if (d) {
                        attr = { d: d };
                    }
                    return this.el("path", attr);
                };
                /*\
                 * Paper.g
                 [ method ]
                 **
                 * Creates a group element
                 **
                 - varargs (…) #optional elements to nest within the group
                 = (object) the `g` element
                 **
                 > Usage
                 | var c1 = paper.circle(),
                 |     c2 = paper.rect(),
                 |     g = paper.g(c2, c1); // note that the order of elements is different
                 * or
                 | var c1 = paper.circle(),
                 |     c2 = paper.rect(),
                 |     g = paper.g();
                 | g.add(c2, c1);
                \*/
                /*\
                 * Paper.group
                 [ method ]
                 **
                 * See @Paper.g
                \*/
                proto.group = proto.g = function (first) {
                    var attr,
                        el = this.el("g");
                    if (arguments.length == 1 && first && !first.type) {
                        el.attr(first);
                    } else if (arguments.length) {
                        el.add(Array.prototype.slice.call(arguments, 0));
                    }
                    return el;
                };
                /*\
                 * Paper.svg
                 [ method ]
                 **
                 * Creates a nested SVG element.
                 - x (number) @optional X of the element
                 - y (number) @optional Y of the element
                 - width (number) @optional width of the element
                 - height (number) @optional height of the element
                 - vbx (number) @optional viewbox X
                 - vby (number) @optional viewbox Y
                 - vbw (number) @optional viewbox width
                 - vbh (number) @optional viewbox height
                 **
                 = (object) the `svg` element
                 **
                \*/
                proto.svg = function (x, y, width, height, vbx, vby, vbw, vbh) {
                    var attrs = {};
                    if (is(x, "object") && y == null) {
                        attrs = x;
                    } else {
                        if (x != null) {
                            attrs.x = x;
                        }
                        if (y != null) {
                            attrs.y = y;
                        }
                        if (width != null) {
                            attrs.width = width;
                        }
                        if (height != null) {
                            attrs.height = height;
                        }
                        if (vbx != null && vby != null && vbw != null && vbh != null) {
                            attrs.viewBox = [vbx, vby, vbw, vbh];
                        }
                    }
                    return this.el("svg", attrs);
                };
                /*\
                 * Paper.mask
                 [ method ]
                 **
                 * Equivalent in behaviour to @Paper.g, except it’s a mask.
                 **
                 = (object) the `mask` element
                 **
                \*/
                proto.mask = function (first) {
                    var attr,
                        el = this.el("mask");
                    if (arguments.length == 1 && first && !first.type) {
                        el.attr(first);
                    } else if (arguments.length) {
                        el.add(Array.prototype.slice.call(arguments, 0));
                    }
                    return el;
                };
                /*\
                 * Paper.ptrn
                 [ method ]
                 **
                 * Equivalent in behaviour to @Paper.g, except it’s a pattern.
                 - x (number) @optional X of the element
                 - y (number) @optional Y of the element
                 - width (number) @optional width of the element
                 - height (number) @optional height of the element
                 - vbx (number) @optional viewbox X
                 - vby (number) @optional viewbox Y
                 - vbw (number) @optional viewbox width
                 - vbh (number) @optional viewbox height
                 **
                 = (object) the `pattern` element
                 **
                \*/
                proto.ptrn = function (x, y, width, height, vx, vy, vw, vh) {
                    if (is(x, "object")) {
                        var attr = x;
                    } else {
                        attr = { patternUnits: "userSpaceOnUse" };
                        if (x) {
                            attr.x = x;
                        }
                        if (y) {
                            attr.y = y;
                        }
                        if (width != null) {
                            attr.width = width;
                        }
                        if (height != null) {
                            attr.height = height;
                        }
                        if (vx != null && vy != null && vw != null && vh != null) {
                            attr.viewBox = [vx, vy, vw, vh];
                        } else {
                            attr.viewBox = [x || 0, y || 0, width || 0, height || 0];
                        }
                    }
                    return this.el("pattern", attr);
                };
                /*\
                 * Paper.use
                 [ method ]
                 **
                 * Creates a <use> element.
                 - id (string) @optional id of element to link
                 * or
                 - id (Element) @optional element to link
                 **
                 = (object) the `use` element
                 **
                \*/
                proto.use = function (id) {
                    if (id != null) {
                        if (id instanceof Element) {
                            if (!id.attr("id")) {
                                id.attr({ id: Snap._.id(id) });
                            }
                            id = id.attr("id");
                        }
                        if (String(id).charAt() == "#") {
                            id = id.substring(1);
                        }
                        return this.el("use", { "xlink:href": "#" + id });
                    } else {
                        return Element.prototype.use.call(this);
                    }
                };
                /*\
                 * Paper.symbol
                 [ method ]
                 **
                 * Creates a <symbol> element.
                 - vbx (number) @optional viewbox X
                 - vby (number) @optional viewbox Y
                 - vbw (number) @optional viewbox width
                 - vbh (number) @optional viewbox height
                 = (object) the `symbol` element
                 **
                \*/
                proto.symbol = function (vx, vy, vw, vh) {
                    var attr = {};
                    if (vx != null && vy != null && vw != null && vh != null) {
                        attr.viewBox = [vx, vy, vw, vh];
                    }

                    return this.el("symbol", attr);
                };
                /*\
                 * Paper.text
                 [ method ]
                 **
                 * Draws a text string
                 **
                 - x (number) x coordinate position
                 - y (number) y coordinate position
                 - text (string|array) The text string to go or array of strings to nest within separate `<tspan>` elements
                 = (object) the `text` element
                 **
                 > Usage
                 | var t1 = paper.text(50, 50, "Snap");
                 | var t2 = paper.text(50, 50, ["S","n","a","p"]);
                 | // Text path usage
                 | t1.attr({textpath: "M10,10L100,100"});
                 | // or
                 | var pth = paper.path("M10,10L100,100");
                 | t1.attr({textpath: pth});
                \*/
                proto.text = function (x, y, text) {
                    var attr = {};
                    if (is(x, "object")) {
                        attr = x;
                    } else if (x != null) {
                        attr = {
                            x: x,
                            y: y,
                            text: text || ""
                        };
                    }
                    return this.el("text", attr);
                };
                /*\
                 * Paper.line
                 [ method ]
                 **
                 * Draws a line
                 **
                 - x1 (number) x coordinate position of the start
                 - y1 (number) y coordinate position of the start
                 - x2 (number) x coordinate position of the end
                 - y2 (number) y coordinate position of the end
                 = (object) the `line` element
                 **
                 > Usage
                 | var t1 = paper.line(50, 50, 100, 100);
                \*/
                proto.line = function (x1, y1, x2, y2) {
                    var attr = {};
                    if (is(x1, "object")) {
                        attr = x1;
                    } else if (x1 != null) {
                        attr = {
                            x1: x1,
                            x2: x2,
                            y1: y1,
                            y2: y2
                        };
                    }
                    return this.el("line", attr);
                };
                /*\
                 * Paper.polyline
                 [ method ]
                 **
                 * Draws a polyline
                 **
                 - points (array) array of points
                 * or
                 - varargs (…) points
                 = (object) the `polyline` element
                 **
                 > Usage
                 | var p1 = paper.polyline([10, 10, 100, 100]);
                 | var p2 = paper.polyline(10, 10, 100, 100);
                \*/
                proto.polyline = function (points) {
                    if (arguments.length > 1) {
                        points = Array.prototype.slice.call(arguments, 0);
                    }
                    var attr = {};
                    if (is(points, "object") && !is(points, "array")) {
                        attr = points;
                    } else if (points != null) {
                        attr = { points: points };
                    }
                    return this.el("polyline", attr);
                };
                /*\
                 * Paper.polygon
                 [ method ]
                 **
                 * Draws a polygon. See @Paper.polyline
                \*/
                proto.polygon = function (points) {
                    if (arguments.length > 1) {
                        points = Array.prototype.slice.call(arguments, 0);
                    }
                    var attr = {};
                    if (is(points, "object") && !is(points, "array")) {
                        attr = points;
                    } else if (points != null) {
                        attr = { points: points };
                    }
                    return this.el("polygon", attr);
                };
                // gradients
                (function () {
                    var $ = Snap._.$;
                    // gradients' helpers
                    function Gstops() {
                        return this.selectAll("stop");
                    }
                    function GaddStop(color, offset) {
                        var stop = $("stop"),
                            attr = {
                            offset: +offset + "%"
                        };
                        color = Snap.color(color);
                        attr["stop-color"] = color.hex;
                        if (color.opacity < 1) {
                            attr["stop-opacity"] = color.opacity;
                        }
                        $(stop, attr);
                        this.node.appendChild(stop);
                        return this;
                    }
                    function GgetBBox() {
                        if (this.type == "linearGradient") {
                            var x1 = $(this.node, "x1") || 0,
                                x2 = $(this.node, "x2") || 1,
                                y1 = $(this.node, "y1") || 0,
                                y2 = $(this.node, "y2") || 0;
                            return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
                        } else {
                            var cx = this.node.cx || .5,
                                cy = this.node.cy || .5,
                                r = this.node.r || 0;
                            return Snap._.box(cx - r, cy - r, r * 2, r * 2);
                        }
                    }
                    function gradient(defs, str) {
                        var grad = eve("snap.util.grad.parse", null, str).firstDefined(),
                            el;
                        if (!grad) {
                            return null;
                        }
                        grad.params.unshift(defs);
                        if (grad.type.toLowerCase() == "l") {
                            el = gradientLinear.apply(0, grad.params);
                        } else {
                            el = gradientRadial.apply(0, grad.params);
                        }
                        if (grad.type != grad.type.toLowerCase()) {
                            $(el.node, {
                                gradientUnits: "userSpaceOnUse"
                            });
                        }
                        var stops = grad.stops,
                            len = stops.length,
                            start = 0,
                            j = 0;
                        function seed(i, end) {
                            var step = (end - start) / (i - j);
                            for (var k = j; k < i; k++) {
                                stops[k].offset = +(+start + step * (k - j)).toFixed(2);
                            }
                            j = i;
                            start = end;
                        }
                        len--;
                        for (var i = 0; i < len; i++) if ("offset" in stops[i]) {
                            seed(i, stops[i].offset);
                        }
                        stops[len].offset = stops[len].offset || 100;
                        seed(len, stops[len].offset);
                        for (i = 0; i <= len; i++) {
                            var stop = stops[i];
                            el.addStop(stop.color, stop.offset);
                        }
                        return el;
                    }
                    function gradientLinear(defs, x1, y1, x2, y2) {
                        var el = Snap._.make("linearGradient", defs);
                        el.stops = Gstops;
                        el.addStop = GaddStop;
                        el.getBBox = GgetBBox;
                        if (x1 != null) {
                            $(el.node, {
                                x1: x1,
                                y1: y1,
                                x2: x2,
                                y2: y2
                            });
                        }
                        return el;
                    }
                    function gradientRadial(defs, cx, cy, r, fx, fy) {
                        var el = Snap._.make("radialGradient", defs);
                        el.stops = Gstops;
                        el.addStop = GaddStop;
                        el.getBBox = GgetBBox;
                        if (cx != null) {
                            $(el.node, {
                                cx: cx,
                                cy: cy,
                                r: r
                            });
                        }
                        if (fx != null && fy != null) {
                            $(el.node, {
                                fx: fx,
                                fy: fy
                            });
                        }
                        return el;
                    }
                    /*\
                     * Paper.gradient
                     [ method ]
                     **
                     * Creates a gradient element
                     **
                     - gradient (string) gradient descriptor
                     > Gradient Descriptor
                     * The gradient descriptor is an expression formatted as
                     * follows: `<type>(<coords>)<colors>`.  The `<type>` can be
                     * either linear or radial.  The uppercase `L` or `R` letters
                     * indicate absolute coordinates offset from the SVG surface.
                     * Lowercase `l` or `r` letters indicate coordinates
                     * calculated relative to the element to which the gradient is
                     * applied.  Coordinates specify a linear gradient vector as
                     * `x1`, `y1`, `x2`, `y2`, or a radial gradient as `cx`, `cy`,
                     * `r` and optional `fx`, `fy` specifying a focal point away
                     * from the center of the circle. Specify `<colors>` as a list
                     * of dash-separated CSS color values.  Each color may be
                     * followed by a custom offset value, separated with a colon
                     * character.
                     > Examples
                     * Linear gradient, relative from top-left corner to bottom-right
                     * corner, from black through red to white:
                     | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
                     * Linear gradient, absolute from (0, 0) to (100, 100), from black
                     * through red at 25% to white:
                     | var g = paper.gradient("L(0, 0, 100, 100)#000-#f00:25-#fff");
                     * Radial gradient, relative from the center of the element with radius
                     * half the width, from black to white:
                     | var g = paper.gradient("r(0.5, 0.5, 0.5)#000-#fff");
                     * To apply the gradient:
                     | paper.circle(50, 50, 40).attr({
                     |     fill: g
                     | });
                     = (object) the `gradient` element
                    \*/
                    proto.gradient = function (str) {
                        return gradient(this.defs, str);
                    };
                    proto.gradientLinear = function (x1, y1, x2, y2) {
                        return gradientLinear(this.defs, x1, y1, x2, y2);
                    };
                    proto.gradientRadial = function (cx, cy, r, fx, fy) {
                        return gradientRadial(this.defs, cx, cy, r, fx, fy);
                    };
                    /*\
                     * Paper.toString
                     [ method ]
                     **
                     * Returns SVG code for the @Paper
                     = (string) SVG code for the @Paper
                    \*/
                    proto.toString = function () {
                        var doc = this.node.ownerDocument,
                            f = doc.createDocumentFragment(),
                            d = doc.createElement("div"),
                            svg = this.node.cloneNode(true),
                            res;
                        f.appendChild(d);
                        d.appendChild(svg);
                        Snap._.$(svg, { xmlns: "http://www.w3.org/2000/svg" });
                        res = d.innerHTML;
                        f.removeChild(f.firstChild);
                        return res;
                    };
                    /*\
                     * Paper.toDataURL
                     [ method ]
                     **
                     * Returns SVG code for the @Paper as Data URI string.
                     = (string) Data URI string
                    \*/
                    proto.toDataURL = function () {
                        if (window && window.btoa) {
                            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
                        }
                    };
                    /*\
                     * Paper.clear
                     [ method ]
                     **
                     * Removes all child nodes of the paper, except <defs>.
                    \*/
                    proto.clear = function () {
                        var node = this.node.firstChild,
                            next;
                        while (node) {
                            next = node.nextSibling;
                            if (node.tagName != "defs") {
                                node.parentNode.removeChild(node);
                            } else {
                                proto.clear.call({ node: node });
                            }
                            node = next;
                        }
                    };
                })();
            });

            // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            // http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            Snap.plugin(function (Snap, Element, Paper, glob) {
                var elproto = Element.prototype,
                    is = Snap.is,
                    clone = Snap._.clone,
                    has = "hasOwnProperty",
                    p2s = /,?([a-z]),?/gi,
                    toFloat = parseFloat,
                    math = Math,
                    PI = math.PI,
                    mmin = math.min,
                    mmax = math.max,
                    pow = math.pow,
                    abs = math.abs;
                function paths(ps) {
                    var p = paths.ps = paths.ps || {};
                    if (p[ps]) {
                        p[ps].sleep = 100;
                    } else {
                        p[ps] = {
                            sleep: 100
                        };
                    }
                    setTimeout(function () {
                        for (var key in p) if (p[has](key) && key != ps) {
                            p[key].sleep--;
                            !p[key].sleep && delete p[key];
                        }
                    });
                    return p[ps];
                }
                function box(x, y, width, height) {
                    if (x == null) {
                        x = y = width = height = 0;
                    }
                    if (y == null) {
                        y = x.y;
                        width = x.width;
                        height = x.height;
                        x = x.x;
                    }
                    return {
                        x: x,
                        y: y,
                        width: width,
                        w: width,
                        height: height,
                        h: height,
                        x2: x + width,
                        y2: y + height,
                        cx: x + width / 2,
                        cy: y + height / 2,
                        r1: math.min(width, height) / 2,
                        r2: math.max(width, height) / 2,
                        r0: math.sqrt(width * width + height * height) / 2,
                        path: rectPath(x, y, width, height),
                        vb: [x, y, width, height].join(" ")
                    };
                }
                function toString() {
                    return this.join(",").replace(p2s, "$1");
                }
                function pathClone(pathArray) {
                    var res = clone(pathArray);
                    res.toString = toString;
                    return res;
                }
                function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
                    if (length == null) {
                        return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
                    } else {
                        return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
                    }
                }
                function getLengthFactory(istotal, subpath) {
                    function O(val) {
                        return +(+val).toFixed(3);
                    }
                    return Snap._.cacher(function (path, length, onlystart) {
                        if (path instanceof Element) {
                            path = path.attr("d");
                        }
                        path = path2curve(path);
                        var x,
                            y,
                            p,
                            l,
                            sp = "",
                            subpaths = {},
                            point,
                            len = 0;
                        for (var i = 0, ii = path.length; i < ii; i++) {
                            p = path[i];
                            if (p[0] == "M") {
                                x = +p[1];
                                y = +p[2];
                            } else {
                                l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                                if (len + l > length) {
                                    if (subpath && !subpaths.start) {
                                        point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                                        sp += ["C" + O(point.start.x), O(point.start.y), O(point.m.x), O(point.m.y), O(point.x), O(point.y)];
                                        if (onlystart) {
                                            return sp;
                                        }
                                        subpaths.start = sp;
                                        sp = ["M" + O(point.x), O(point.y) + "C" + O(point.n.x), O(point.n.y), O(point.end.x), O(point.end.y), O(p[5]), O(p[6])].join();
                                        len += l;
                                        x = +p[5];
                                        y = +p[6];
                                        continue;
                                    }
                                    if (!istotal && !subpath) {
                                        point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                                        return point;
                                    }
                                }
                                len += l;
                                x = +p[5];
                                y = +p[6];
                            }
                            sp += p.shift() + p;
                        }
                        subpaths.end = sp;
                        point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
                        return point;
                    }, null, Snap._.clone);
                }
                var getTotalLength = getLengthFactory(1),
                    getPointAtLength = getLengthFactory(),
                    getSubpathsAtLength = getLengthFactory(0, 1);
                function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
                    var t1 = 1 - t,
                        t13 = pow(t1, 3),
                        t12 = pow(t1, 2),
                        t2 = t * t,
                        t3 = t2 * t,
                        x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
                        y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
                        mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
                        my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
                        nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
                        ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
                        ax = t1 * p1x + t * c1x,
                        ay = t1 * p1y + t * c1y,
                        cx = t1 * c2x + t * p2x,
                        cy = t1 * c2y + t * p2y,
                        alpha = 90 - math.atan2(mx - nx, my - ny) * 180 / PI;
                    // (mx > nx || my < ny) && (alpha += 180);
                    return {
                        x: x,
                        y: y,
                        m: { x: mx, y: my },
                        n: { x: nx, y: ny },
                        start: { x: ax, y: ay },
                        end: { x: cx, y: cy },
                        alpha: alpha
                    };
                }
                function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
                    if (!Snap.is(p1x, "array")) {
                        p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
                    }
                    var bbox = curveDim.apply(null, p1x);
                    return box(bbox.min.x, bbox.min.y, bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y);
                }
                function isPointInsideBBox(bbox, x, y) {
                    return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
                }
                function isBBoxIntersect(bbox1, bbox2) {
                    bbox1 = box(bbox1);
                    bbox2 = box(bbox2);
                    return isPointInsideBBox(bbox2, bbox1.x, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2) || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x) && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
                }
                function base3(t, p1, p2, p3, p4) {
                    var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
                        t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
                    return t * t2 - 3 * p1 + 3 * p2;
                }
                function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
                    if (z == null) {
                        z = 1;
                    }
                    z = z > 1 ? 1 : z < 0 ? 0 : z;
                    var z2 = z / 2,
                        n = 12,
                        Tvalues = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816],
                        Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472],
                        sum = 0;
                    for (var i = 0; i < n; i++) {
                        var ct = z2 * Tvalues[i] + z2,
                            xbase = base3(ct, x1, x2, x3, x4),
                            ybase = base3(ct, y1, y2, y3, y4),
                            comb = xbase * xbase + ybase * ybase;
                        sum += Cvalues[i] * math.sqrt(comb);
                    }
                    return z2 * sum;
                }
                function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
                    if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
                        return;
                    }
                    var t = 1,
                        step = t / 2,
                        t2 = t - step,
                        l,
                        e = .01;
                    l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
                    while (abs(l - ll) > e) {
                        step /= 2;
                        t2 += (l < ll ? 1 : -1) * step;
                        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
                    }
                    return t2;
                }
                function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
                    if (mmax(x1, x2) < mmin(x3, x4) || mmin(x1, x2) > mmax(x3, x4) || mmax(y1, y2) < mmin(y3, y4) || mmin(y1, y2) > mmax(y3, y4)) {
                        return;
                    }
                    var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
                        ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
                        denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

                    if (!denominator) {
                        return;
                    }
                    var px = nx / denominator,
                        py = ny / denominator,
                        px2 = +px.toFixed(2),
                        py2 = +py.toFixed(2);
                    if (px2 < +mmin(x1, x2).toFixed(2) || px2 > +mmax(x1, x2).toFixed(2) || px2 < +mmin(x3, x4).toFixed(2) || px2 > +mmax(x3, x4).toFixed(2) || py2 < +mmin(y1, y2).toFixed(2) || py2 > +mmax(y1, y2).toFixed(2) || py2 < +mmin(y3, y4).toFixed(2) || py2 > +mmax(y3, y4).toFixed(2)) {
                        return;
                    }
                    return { x: px, y: py };
                }
                function inter(bez1, bez2) {
                    return interHelper(bez1, bez2);
                }
                function interCount(bez1, bez2) {
                    return interHelper(bez1, bez2, 1);
                }
                function interHelper(bez1, bez2, justCount) {
                    var bbox1 = bezierBBox(bez1),
                        bbox2 = bezierBBox(bez2);
                    if (!isBBoxIntersect(bbox1, bbox2)) {
                        return justCount ? 0 : [];
                    }
                    var l1 = bezlen.apply(0, bez1),
                        l2 = bezlen.apply(0, bez2),
                        n1 = ~ ~(l1 / 8),
                        n2 = ~ ~(l2 / 8),
                        dots1 = [],
                        dots2 = [],
                        xy = {},
                        res = justCount ? 0 : [];
                    for (var i = 0; i < n1 + 1; i++) {
                        var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
                        dots1.push({ x: p.x, y: p.y, t: i / n1 });
                    }
                    for (i = 0; i < n2 + 1; i++) {
                        p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
                        dots2.push({ x: p.x, y: p.y, t: i / n2 });
                    }
                    for (i = 0; i < n1; i++) {
                        for (var j = 0; j < n2; j++) {
                            var di = dots1[i],
                                di1 = dots1[i + 1],
                                dj = dots2[j],
                                dj1 = dots2[j + 1],
                                ci = abs(di1.x - di.x) < .001 ? "y" : "x",
                                cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
                                is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
                            if (is) {
                                if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                                    continue;
                                }
                                xy[is.x.toFixed(4)] = is.y.toFixed(4);
                                var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                                    t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                                if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                                    if (justCount) {
                                        res++;
                                    } else {
                                        res.push({
                                            x: is.x,
                                            y: is.y,
                                            t1: t1,
                                            t2: t2
                                        });
                                    }
                                }
                            }
                        }
                    }
                    return res;
                }
                function pathIntersection(path1, path2) {
                    return interPathHelper(path1, path2);
                }
                function pathIntersectionNumber(path1, path2) {
                    return interPathHelper(path1, path2, 1);
                }
                function interPathHelper(path1, path2, justCount) {
                    path1 = path2curve(path1);
                    path2 = path2curve(path2);
                    var x1,
                        y1,
                        x2,
                        y2,
                        x1m,
                        y1m,
                        x2m,
                        y2m,
                        bez1,
                        bez2,
                        res = justCount ? 0 : [];
                    for (var i = 0, ii = path1.length; i < ii; i++) {
                        var pi = path1[i];
                        if (pi[0] == "M") {
                            x1 = x1m = pi[1];
                            y1 = y1m = pi[2];
                        } else {
                            if (pi[0] == "C") {
                                bez1 = [x1, y1].concat(pi.slice(1));
                                x1 = bez1[6];
                                y1 = bez1[7];
                            } else {
                                bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                                x1 = x1m;
                                y1 = y1m;
                            }
                            for (var j = 0, jj = path2.length; j < jj; j++) {
                                var pj = path2[j];
                                if (pj[0] == "M") {
                                    x2 = x2m = pj[1];
                                    y2 = y2m = pj[2];
                                } else {
                                    if (pj[0] == "C") {
                                        bez2 = [x2, y2].concat(pj.slice(1));
                                        x2 = bez2[6];
                                        y2 = bez2[7];
                                    } else {
                                        bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                                        x2 = x2m;
                                        y2 = y2m;
                                    }
                                    var intr = interHelper(bez1, bez2, justCount);
                                    if (justCount) {
                                        res += intr;
                                    } else {
                                        for (var k = 0, kk = intr.length; k < kk; k++) {
                                            intr[k].segment1 = i;
                                            intr[k].segment2 = j;
                                            intr[k].bez1 = bez1;
                                            intr[k].bez2 = bez2;
                                        }
                                        res = res.concat(intr);
                                    }
                                }
                            }
                        }
                    }
                    return res;
                }
                function isPointInsidePath(path, x, y) {
                    var bbox = pathBBox(path);
                    return isPointInsideBBox(bbox, x, y) && interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
                }
                function pathBBox(path) {
                    var pth = paths(path);
                    if (pth.bbox) {
                        return clone(pth.bbox);
                    }
                    if (!path) {
                        return box();
                    }
                    path = path2curve(path);
                    var x = 0,
                        y = 0,
                        X = [],
                        Y = [],
                        p;
                    for (var i = 0, ii = path.length; i < ii; i++) {
                        p = path[i];
                        if (p[0] == "M") {
                            x = p[1];
                            y = p[2];
                            X.push(x);
                            Y.push(y);
                        } else {
                            var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                            X = X.concat(dim.min.x, dim.max.x);
                            Y = Y.concat(dim.min.y, dim.max.y);
                            x = p[5];
                            y = p[6];
                        }
                    }
                    var xmin = mmin.apply(0, X),
                        ymin = mmin.apply(0, Y),
                        xmax = mmax.apply(0, X),
                        ymax = mmax.apply(0, Y),
                        bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
                    pth.bbox = clone(bb);
                    return bb;
                }
                function rectPath(x, y, w, h, r) {
                    if (r) {
                        return [["M", +x + +r, y], ["l", w - r * 2, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, h - r * 2], ["a", r, r, 0, 0, 1, -r, r], ["l", r * 2 - w, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, r * 2 - h], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
                    }
                    var res = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
                    res.toString = toString;
                    return res;
                }
                function ellipsePath(x, y, rx, ry, a) {
                    if (a == null && ry == null) {
                        ry = rx;
                    }
                    x = +x;
                    y = +y;
                    rx = +rx;
                    ry = +ry;
                    if (a != null) {
                        var rad = Math.PI / 180,
                            x1 = x + rx * Math.cos(-ry * rad),
                            x2 = x + rx * Math.cos(-a * rad),
                            y1 = y + rx * Math.sin(-ry * rad),
                            y2 = y + rx * Math.sin(-a * rad),
                            res = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
                    } else {
                        res = [["M", x, y], ["m", 0, -ry], ["a", rx, ry, 0, 1, 1, 0, 2 * ry], ["a", rx, ry, 0, 1, 1, 0, -2 * ry], ["z"]];
                    }
                    res.toString = toString;
                    return res;
                }
                var unit2px = Snap._unit2px,
                    getPath = {
                    path: function (el) {
                        return el.attr("path");
                    },
                    circle: function (el) {
                        var attr = unit2px(el);
                        return ellipsePath(attr.cx, attr.cy, attr.r);
                    },
                    ellipse: function (el) {
                        var attr = unit2px(el);
                        return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
                    },
                    rect: function (el) {
                        var attr = unit2px(el);
                        return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
                    },
                    image: function (el) {
                        var attr = unit2px(el);
                        return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
                    },
                    line: function (el) {
                        return "M" + [el.attr("x1") || 0, el.attr("y1") || 0, el.attr("x2"), el.attr("y2")];
                    },
                    polyline: function (el) {
                        return "M" + el.attr("points");
                    },
                    polygon: function (el) {
                        return "M" + el.attr("points") + "z";
                    },
                    deflt: function (el) {
                        var bbox = el.node.getBBox();
                        return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
                    }
                };
                function pathToRelative(pathArray) {
                    var pth = paths(pathArray),
                        lowerCase = String.prototype.toLowerCase;
                    if (pth.rel) {
                        return pathClone(pth.rel);
                    }
                    if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) {
                        pathArray = Snap.parsePathString(pathArray);
                    }
                    var res = [],
                        x = 0,
                        y = 0,
                        mx = 0,
                        my = 0,
                        start = 0;
                    if (pathArray[0][0] == "M") {
                        x = pathArray[0][1];
                        y = pathArray[0][2];
                        mx = x;
                        my = y;
                        start++;
                        res.push(["M", x, y]);
                    }
                    for (var i = start, ii = pathArray.length; i < ii; i++) {
                        var r = res[i] = [],
                            pa = pathArray[i];
                        if (pa[0] != lowerCase.call(pa[0])) {
                            r[0] = lowerCase.call(pa[0]);
                            switch (r[0]) {
                                case "a":
                                    r[1] = pa[1];
                                    r[2] = pa[2];
                                    r[3] = pa[3];
                                    r[4] = pa[4];
                                    r[5] = pa[5];
                                    r[6] = +(pa[6] - x).toFixed(3);
                                    r[7] = +(pa[7] - y).toFixed(3);
                                    break;
                                case "v":
                                    r[1] = +(pa[1] - y).toFixed(3);
                                    break;
                                case "m":
                                    mx = pa[1];
                                    my = pa[2];
                                default:
                                    for (var j = 1, jj = pa.length; j < jj; j++) {
                                        r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
                                    }
                            }
                        } else {
                            r = res[i] = [];
                            if (pa[0] == "m") {
                                mx = pa[1] + x;
                                my = pa[2] + y;
                            }
                            for (var k = 0, kk = pa.length; k < kk; k++) {
                                res[i][k] = pa[k];
                            }
                        }
                        var len = res[i].length;
                        switch (res[i][0]) {
                            case "z":
                                x = mx;
                                y = my;
                                break;
                            case "h":
                                x += +res[i][len - 1];
                                break;
                            case "v":
                                y += +res[i][len - 1];
                                break;
                            default:
                                x += +res[i][len - 2];
                                y += +res[i][len - 1];
                        }
                    }
                    res.toString = toString;
                    pth.rel = pathClone(res);
                    return res;
                }
                function pathToAbsolute(pathArray) {
                    var pth = paths(pathArray);
                    if (pth.abs) {
                        return pathClone(pth.abs);
                    }
                    if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) {
                        // rough assumption
                        pathArray = Snap.parsePathString(pathArray);
                    }
                    if (!pathArray || !pathArray.length) {
                        return [["M", 0, 0]];
                    }
                    var res = [],
                        x = 0,
                        y = 0,
                        mx = 0,
                        my = 0,
                        start = 0,
                        pa0;
                    if (pathArray[0][0] == "M") {
                        x = +pathArray[0][1];
                        y = +pathArray[0][2];
                        mx = x;
                        my = y;
                        start++;
                        res[0] = ["M", x, y];
                    }
                    var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";
                    for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
                        res.push(r = []);
                        pa = pathArray[i];
                        pa0 = pa[0];
                        if (pa0 != pa0.toUpperCase()) {
                            r[0] = pa0.toUpperCase();
                            switch (r[0]) {
                                case "A":
                                    r[1] = pa[1];
                                    r[2] = pa[2];
                                    r[3] = pa[3];
                                    r[4] = pa[4];
                                    r[5] = pa[5];
                                    r[6] = +pa[6] + x;
                                    r[7] = +pa[7] + y;
                                    break;
                                case "V":
                                    r[1] = +pa[1] + y;
                                    break;
                                case "H":
                                    r[1] = +pa[1] + x;
                                    break;
                                case "R":
                                    var dots = [x, y].concat(pa.slice(1));
                                    for (var j = 2, jj = dots.length; j < jj; j++) {
                                        dots[j] = +dots[j] + x;
                                        dots[++j] = +dots[j] + y;
                                    }
                                    res.pop();
                                    res = res.concat(catmullRom2bezier(dots, crz));
                                    break;
                                case "O":
                                    res.pop();
                                    dots = ellipsePath(x, y, pa[1], pa[2]);
                                    dots.push(dots[0]);
                                    res = res.concat(dots);
                                    break;
                                case "U":
                                    res.pop();
                                    res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                                    r = ["U"].concat(res[res.length - 1].slice(-2));
                                    break;
                                case "M":
                                    mx = +pa[1] + x;
                                    my = +pa[2] + y;
                                default:
                                    for (j = 1, jj = pa.length; j < jj; j++) {
                                        r[j] = +pa[j] + (j % 2 ? x : y);
                                    }
                            }
                        } else if (pa0 == "R") {
                            dots = [x, y].concat(pa.slice(1));
                            res.pop();
                            res = res.concat(catmullRom2bezier(dots, crz));
                            r = ["R"].concat(pa.slice(-2));
                        } else if (pa0 == "O") {
                            res.pop();
                            dots = ellipsePath(x, y, pa[1], pa[2]);
                            dots.push(dots[0]);
                            res = res.concat(dots);
                        } else if (pa0 == "U") {
                            res.pop();
                            res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                            r = ["U"].concat(res[res.length - 1].slice(-2));
                        } else {
                            for (var k = 0, kk = pa.length; k < kk; k++) {
                                r[k] = pa[k];
                            }
                        }
                        pa0 = pa0.toUpperCase();
                        if (pa0 != "O") {
                            switch (r[0]) {
                                case "Z":
                                    x = +mx;
                                    y = +my;
                                    break;
                                case "H":
                                    x = r[1];
                                    break;
                                case "V":
                                    y = r[1];
                                    break;
                                case "M":
                                    mx = r[r.length - 2];
                                    my = r[r.length - 1];
                                default:
                                    x = r[r.length - 2];
                                    y = r[r.length - 1];
                            }
                        }
                    }
                    res.toString = toString;
                    pth.abs = pathClone(res);
                    return res;
                }
                function l2c(x1, y1, x2, y2) {
                    return [x1, y1, x2, y2, x2, y2];
                }
                function q2c(x1, y1, ax, ay, x2, y2) {
                    var _13 = 1 / 3,
                        _23 = 2 / 3;
                    return [_13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2];
                }
                function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
                    // for more information of where this math came from visit:
                    // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
                    var _120 = PI * 120 / 180,
                        rad = PI / 180 * (+angle || 0),
                        res = [],
                        xy,
                        rotate = Snap._.cacher(function (x, y, rad) {
                        var X = x * math.cos(rad) - y * math.sin(rad),
                            Y = x * math.sin(rad) + y * math.cos(rad);
                        return { x: X, y: Y };
                    });
                    if (!recursive) {
                        xy = rotate(x1, y1, -rad);
                        x1 = xy.x;
                        y1 = xy.y;
                        xy = rotate(x2, y2, -rad);
                        x2 = xy.x;
                        y2 = xy.y;
                        var cos = math.cos(PI / 180 * angle),
                            sin = math.sin(PI / 180 * angle),
                            x = (x1 - x2) / 2,
                            y = (y1 - y2) / 2;
                        var h = x * x / (rx * rx) + y * y / (ry * ry);
                        if (h > 1) {
                            h = math.sqrt(h);
                            rx = h * rx;
                            ry = h * ry;
                        }
                        var rx2 = rx * rx,
                            ry2 = ry * ry,
                            k = (large_arc_flag == sweep_flag ? -1 : 1) * math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                            cx = k * rx * y / ry + (x1 + x2) / 2,
                            cy = k * -ry * x / rx + (y1 + y2) / 2,
                            f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                            f2 = math.asin(((y2 - cy) / ry).toFixed(9));

                        f1 = x1 < cx ? PI - f1 : f1;
                        f2 = x2 < cx ? PI - f2 : f2;
                        f1 < 0 && (f1 = PI * 2 + f1);
                        f2 < 0 && (f2 = PI * 2 + f2);
                        if (sweep_flag && f1 > f2) {
                            f1 = f1 - PI * 2;
                        }
                        if (!sweep_flag && f2 > f1) {
                            f2 = f2 - PI * 2;
                        }
                    } else {
                        f1 = recursive[0];
                        f2 = recursive[1];
                        cx = recursive[2];
                        cy = recursive[3];
                    }
                    var df = f2 - f1;
                    if (abs(df) > _120) {
                        var f2old = f2,
                            x2old = x2,
                            y2old = y2;
                        f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
                        x2 = cx + rx * math.cos(f2);
                        y2 = cy + ry * math.sin(f2);
                        res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
                    }
                    df = f2 - f1;
                    var c1 = math.cos(f1),
                        s1 = math.sin(f1),
                        c2 = math.cos(f2),
                        s2 = math.sin(f2),
                        t = math.tan(df / 4),
                        hx = 4 / 3 * rx * t,
                        hy = 4 / 3 * ry * t,
                        m1 = [x1, y1],
                        m2 = [x1 + hx * s1, y1 - hy * c1],
                        m3 = [x2 + hx * s2, y2 - hy * c2],
                        m4 = [x2, y2];
                    m2[0] = 2 * m1[0] - m2[0];
                    m2[1] = 2 * m1[1] - m2[1];
                    if (recursive) {
                        return [m2, m3, m4].concat(res);
                    } else {
                        res = [m2, m3, m4].concat(res).join().split(",");
                        var newres = [];
                        for (var i = 0, ii = res.length; i < ii; i++) {
                            newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
                        }
                        return newres;
                    }
                }
                function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
                    var t1 = 1 - t;
                    return {
                        x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
                        y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
                    };
                }

                // Returns bounding box of cubic bezier curve.
                // Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
                // Original version: NISHIO Hirokazu
                // Modifications: https://github.com/timo22345
                function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
                    var tvalues = [],
                        bounds = [[], []],
                        a,
                        b,
                        c,
                        t,
                        t1,
                        t2,
                        b2ac,
                        sqrtb2ac;
                    for (var i = 0; i < 2; ++i) {
                        if (i == 0) {
                            b = 6 * x0 - 12 * x1 + 6 * x2;
                            a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
                            c = 3 * x1 - 3 * x0;
                        } else {
                            b = 6 * y0 - 12 * y1 + 6 * y2;
                            a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
                            c = 3 * y1 - 3 * y0;
                        }
                        if (abs(a) < 1e-12) {
                            if (abs(b) < 1e-12) {
                                continue;
                            }
                            t = -c / b;
                            if (0 < t && t < 1) {
                                tvalues.push(t);
                            }
                            continue;
                        }
                        b2ac = b * b - 4 * c * a;
                        sqrtb2ac = math.sqrt(b2ac);
                        if (b2ac < 0) {
                            continue;
                        }
                        t1 = (-b + sqrtb2ac) / (2 * a);
                        if (0 < t1 && t1 < 1) {
                            tvalues.push(t1);
                        }
                        t2 = (-b - sqrtb2ac) / (2 * a);
                        if (0 < t2 && t2 < 1) {
                            tvalues.push(t2);
                        }
                    }

                    var x,
                        y,
                        j = tvalues.length,
                        jlen = j,
                        mt;
                    while (j--) {
                        t = tvalues[j];
                        mt = 1 - t;
                        bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
                        bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
                    }

                    bounds[0][jlen] = x0;
                    bounds[1][jlen] = y0;
                    bounds[0][jlen + 1] = x3;
                    bounds[1][jlen + 1] = y3;
                    bounds[0].length = bounds[1].length = jlen + 2;

                    return {
                        min: { x: mmin.apply(0, bounds[0]), y: mmin.apply(0, bounds[1]) },
                        max: { x: mmax.apply(0, bounds[0]), y: mmax.apply(0, bounds[1]) }
                    };
                }

                function path2curve(path, path2) {
                    var pth = !path2 && paths(path);
                    if (!path2 && pth.curve) {
                        return pathClone(pth.curve);
                    }
                    var p = pathToAbsolute(path),
                        p2 = path2 && pathToAbsolute(path2),
                        attrs = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                        attrs2 = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                        processPath = function (path, d, pcom) {
                        var nx, ny;
                        if (!path) {
                            return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
                        }
                        !(path[0] in { T: 1, Q: 1 }) && (d.qx = d.qy = null);
                        switch (path[0]) {
                            case "M":
                                d.X = path[1];
                                d.Y = path[2];
                                break;
                            case "A":
                                path = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
                                break;
                            case "S":
                                if (pcom == "C" || pcom == "S") {
                                    // In "S" case we have to take into account, if the previous command is C/S.
                                    nx = d.x * 2 - d.bx; // And reflect the previous
                                    ny = d.y * 2 - d.by; // command's control point relative to the current point.
                                } else {
                                        // or some else or nothing
                                        nx = d.x;
                                        ny = d.y;
                                    }
                                path = ["C", nx, ny].concat(path.slice(1));
                                break;
                            case "T":
                                if (pcom == "Q" || pcom == "T") {
                                    // In "T" case we have to take into account, if the previous command is Q/T.
                                    d.qx = d.x * 2 - d.qx; // And make a reflection similar
                                    d.qy = d.y * 2 - d.qy; // to case "S".
                                } else {
                                        // or something else or nothing
                                        d.qx = d.x;
                                        d.qy = d.y;
                                    }
                                path = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                                break;
                            case "Q":
                                d.qx = path[1];
                                d.qy = path[2];
                                path = ["C"].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                                break;
                            case "L":
                                path = ["C"].concat(l2c(d.x, d.y, path[1], path[2]));
                                break;
                            case "H":
                                path = ["C"].concat(l2c(d.x, d.y, path[1], d.y));
                                break;
                            case "V":
                                path = ["C"].concat(l2c(d.x, d.y, d.x, path[1]));
                                break;
                            case "Z":
                                path = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
                                break;
                        }
                        return path;
                    },
                        fixArc = function (pp, i) {
                        if (pp[i].length > 7) {
                            pp[i].shift();
                            var pi = pp[i];
                            while (pi.length) {
                                pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
                                p2 && (pcoms2[i] = "A"); // the same as above
                                pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
                            }
                            pp.splice(i, 1);
                            ii = mmax(p.length, p2 && p2.length || 0);
                        }
                    },
                        fixM = function (path1, path2, a1, a2, i) {
                        if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                            path2.splice(i, 0, ["M", a2.x, a2.y]);
                            a1.bx = 0;
                            a1.by = 0;
                            a1.x = path1[i][1];
                            a1.y = path1[i][2];
                            ii = mmax(p.length, p2 && p2.length || 0);
                        }
                    },
                        pcoms1 = [],
                        // path commands of original path p
                    pcoms2 = [],
                        // path commands of original path p2
                    pfirst = "",
                        // temporary holder for original path command
                    pcom = ""; // holder for previous path command of original path
                    for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
                        p[i] && (pfirst = p[i][0]); // save current path command

                        if (pfirst != "C") // C is not saved yet, because it may be result of conversion
                            {
                                pcoms1[i] = pfirst; // Save current path command
                                i && (pcom = pcoms1[i - 1]); // Get previous path command pcom
                            }
                        p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

                        if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
                        // which may produce multiple C:s
                        // so we have to make sure that C is also C in original path

                        fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

                        if (p2) {
                            // the same procedures is done to p2
                            p2[i] && (pfirst = p2[i][0]);
                            if (pfirst != "C") {
                                pcoms2[i] = pfirst;
                                i && (pcom = pcoms2[i - 1]);
                            }
                            p2[i] = processPath(p2[i], attrs2, pcom);

                            if (pcoms2[i] != "A" && pfirst == "C") {
                                pcoms2[i] = "C";
                            }

                            fixArc(p2, i);
                        }
                        fixM(p, p2, attrs, attrs2, i);
                        fixM(p2, p, attrs2, attrs, i);
                        var seg = p[i],
                            seg2 = p2 && p2[i],
                            seglen = seg.length,
                            seg2len = p2 && seg2.length;
                        attrs.x = seg[seglen - 2];
                        attrs.y = seg[seglen - 1];
                        attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
                        attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
                        attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
                        attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
                        attrs2.x = p2 && seg2[seg2len - 2];
                        attrs2.y = p2 && seg2[seg2len - 1];
                    }
                    if (!p2) {
                        pth.curve = pathClone(p);
                    }
                    return p2 ? [p, p2] : p;
                }
                function mapPath(path, matrix) {
                    if (!matrix) {
                        return path;
                    }
                    var x, y, i, j, ii, jj, pathi;
                    path = path2curve(path);
                    for (i = 0, ii = path.length; i < ii; i++) {
                        pathi = path[i];
                        for (j = 1, jj = pathi.length; j < jj; j += 2) {
                            x = matrix.x(pathi[j], pathi[j + 1]);
                            y = matrix.y(pathi[j], pathi[j + 1]);
                            pathi[j] = x;
                            pathi[j + 1] = y;
                        }
                    }
                    return path;
                }

                // http://schepers.cc/getting-to-the-point
                function catmullRom2bezier(crp, z) {
                    var d = [];
                    for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
                        var p = [{ x: +crp[i - 2], y: +crp[i - 1] }, { x: +crp[i], y: +crp[i + 1] }, { x: +crp[i + 2], y: +crp[i + 3] }, { x: +crp[i + 4], y: +crp[i + 5] }];
                        if (z) {
                            if (!i) {
                                p[0] = { x: +crp[iLen - 2], y: +crp[iLen - 1] };
                            } else if (iLen - 4 == i) {
                                p[3] = { x: +crp[0], y: +crp[1] };
                            } else if (iLen - 2 == i) {
                                p[2] = { x: +crp[0], y: +crp[1] };
                                p[3] = { x: +crp[2], y: +crp[3] };
                            }
                        } else {
                            if (iLen - 4 == i) {
                                p[3] = p[2];
                            } else if (!i) {
                                p[0] = { x: +crp[i], y: +crp[i + 1] };
                            }
                        }
                        d.push(["C", (-p[0].x + 6 * p[1].x + p[2].x) / 6, (-p[0].y + 6 * p[1].y + p[2].y) / 6, (p[1].x + 6 * p[2].x - p[3].x) / 6, (p[1].y + 6 * p[2].y - p[3].y) / 6, p[2].x, p[2].y]);
                    }

                    return d;
                }

                // export
                Snap.path = paths;

                /*\
                 * Snap.path.getTotalLength
                 [ method ]
                 **
                 * Returns the length of the given path in pixels
                 **
                 - path (string) SVG path string
                 **
                 = (number) length
                \*/
                Snap.path.getTotalLength = getTotalLength;
                /*\
                 * Snap.path.getPointAtLength
                 [ method ]
                 **
                 * Returns the coordinates of the point located at the given length along the given path
                 **
                 - path (string) SVG path string
                 - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
                 **
                 = (object) representation of the point:
                 o {
                 o     x: (number) x coordinate,
                 o     y: (number) y coordinate,
                 o     alpha: (number) angle of derivative
                 o }
                \*/
                Snap.path.getPointAtLength = getPointAtLength;
                /*\
                 * Snap.path.getSubpath
                 [ method ]
                 **
                 * Returns the subpath of a given path between given start and end lengths
                 **
                 - path (string) SVG path string
                 - from (number) length, in pixels, from the start of the path to the start of the segment
                 - to (number) length, in pixels, from the start of the path to the end of the segment
                 **
                 = (string) path string definition for the segment
                \*/
                Snap.path.getSubpath = function (path, from, to) {
                    if (this.getTotalLength(path) - to < 1e-6) {
                        return getSubpathsAtLength(path, from).end;
                    }
                    var a = getSubpathsAtLength(path, to, 1);
                    return from ? getSubpathsAtLength(a, from).end : a;
                };
                /*\
                 * Element.getTotalLength
                 [ method ]
                 **
                 * Returns the length of the path in pixels (only works for `path` elements)
                 = (number) length
                \*/
                elproto.getTotalLength = function () {
                    if (this.node.getTotalLength) {
                        return this.node.getTotalLength();
                    }
                };
                // SIERRA Element.getPointAtLength()/Element.getTotalLength(): If a <path> is broken into different segments, is the jump distance to the new coordinates set by the _M_ or _m_ commands calculated as part of the path's total length?
                /*\
                 * Element.getPointAtLength
                 [ method ]
                 **
                 * Returns coordinates of the point located at the given length on the given path (only works for `path` elements)
                 **
                 - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
                 **
                 = (object) representation of the point:
                 o {
                 o     x: (number) x coordinate,
                 o     y: (number) y coordinate,
                 o     alpha: (number) angle of derivative
                 o }
                \*/
                elproto.getPointAtLength = function (length) {
                    return getPointAtLength(this.attr("d"), length);
                };
                // SIERRA Element.getSubpath(): Similar to the problem for Element.getPointAtLength(). Unclear how this would work for a segmented path. Overall, the concept of _subpath_ and what I'm calling a _segment_ (series of non-_M_ or _Z_ commands) is unclear.
                /*\
                 * Element.getSubpath
                 [ method ]
                 **
                 * Returns subpath of a given element from given start and end lengths (only works for `path` elements)
                 **
                 - from (number) length, in pixels, from the start of the path to the start of the segment
                 - to (number) length, in pixels, from the start of the path to the end of the segment
                 **
                 = (string) path string definition for the segment
                \*/
                elproto.getSubpath = function (from, to) {
                    return Snap.path.getSubpath(this.attr("d"), from, to);
                };
                Snap._.box = box;
                /*\
                 * Snap.path.findDotsAtSegment
                 [ method ]
                 **
                 * Utility method
                 **
                 * Finds dot coordinates on the given cubic beziér curve at the given t
                 - p1x (number) x of the first point of the curve
                 - p1y (number) y of the first point of the curve
                 - c1x (number) x of the first anchor of the curve
                 - c1y (number) y of the first anchor of the curve
                 - c2x (number) x of the second anchor of the curve
                 - c2y (number) y of the second anchor of the curve
                 - p2x (number) x of the second point of the curve
                 - p2y (number) y of the second point of the curve
                 - t (number) position on the curve (0..1)
                 = (object) point information in format:
                 o {
                 o     x: (number) x coordinate of the point,
                 o     y: (number) y coordinate of the point,
                 o     m: {
                 o         x: (number) x coordinate of the left anchor,
                 o         y: (number) y coordinate of the left anchor
                 o     },
                 o     n: {
                 o         x: (number) x coordinate of the right anchor,
                 o         y: (number) y coordinate of the right anchor
                 o     },
                 o     start: {
                 o         x: (number) x coordinate of the start of the curve,
                 o         y: (number) y coordinate of the start of the curve
                 o     },
                 o     end: {
                 o         x: (number) x coordinate of the end of the curve,
                 o         y: (number) y coordinate of the end of the curve
                 o     },
                 o     alpha: (number) angle of the curve derivative at the point
                 o }
                \*/
                Snap.path.findDotsAtSegment = findDotsAtSegment;
                /*\
                 * Snap.path.bezierBBox
                 [ method ]
                 **
                 * Utility method
                 **
                 * Returns the bounding box of a given cubic beziér curve
                 - p1x (number) x of the first point of the curve
                 - p1y (number) y of the first point of the curve
                 - c1x (number) x of the first anchor of the curve
                 - c1y (number) y of the first anchor of the curve
                 - c2x (number) x of the second anchor of the curve
                 - c2y (number) y of the second anchor of the curve
                 - p2x (number) x of the second point of the curve
                 - p2y (number) y of the second point of the curve
                 * or
                 - bez (array) array of six points for beziér curve
                 = (object) bounding box
                 o {
                 o     x: (number) x coordinate of the left top point of the box,
                 o     y: (number) y coordinate of the left top point of the box,
                 o     x2: (number) x coordinate of the right bottom point of the box,
                 o     y2: (number) y coordinate of the right bottom point of the box,
                 o     width: (number) width of the box,
                 o     height: (number) height of the box
                 o }
                \*/
                Snap.path.bezierBBox = bezierBBox;
                /*\
                 * Snap.path.isPointInsideBBox
                 [ method ]
                 **
                 * Utility method
                 **
                 * Returns `true` if given point is inside bounding box
                 - bbox (string) bounding box
                 - x (string) x coordinate of the point
                 - y (string) y coordinate of the point
                 = (boolean) `true` if point is inside
                \*/
                Snap.path.isPointInsideBBox = isPointInsideBBox;
                Snap.closest = function (x, y, X, Y) {
                    var r = 100,
                        b = box(x - r / 2, y - r / 2, r, r),
                        inside = [],
                        getter = X[0].hasOwnProperty("x") ? function (i) {
                        return {
                            x: X[i].x,
                            y: X[i].y
                        };
                    } : function (i) {
                        return {
                            x: X[i],
                            y: Y[i]
                        };
                    },
                        found = 0;
                    while (r <= 1e6 && !found) {
                        for (var i = 0, ii = X.length; i < ii; i++) {
                            var xy = getter(i);
                            if (isPointInsideBBox(b, xy.x, xy.y)) {
                                found++;
                                inside.push(xy);
                                break;
                            }
                        }
                        if (!found) {
                            r *= 2;
                            b = box(x - r / 2, y - r / 2, r, r);
                        }
                    }
                    if (r == 1e6) {
                        return;
                    }
                    var len = Infinity,
                        res;
                    for (i = 0, ii = inside.length; i < ii; i++) {
                        var l = Snap.len(x, y, inside[i].x, inside[i].y);
                        if (len > l) {
                            len = l;
                            inside[i].len = l;
                            res = inside[i];
                        }
                    }
                    return res;
                };
                /*\
                 * Snap.path.isBBoxIntersect
                 [ method ]
                 **
                 * Utility method
                 **
                 * Returns `true` if two bounding boxes intersect
                 - bbox1 (string) first bounding box
                 - bbox2 (string) second bounding box
                 = (boolean) `true` if bounding boxes intersect
                \*/
                Snap.path.isBBoxIntersect = isBBoxIntersect;
                /*\
                 * Snap.path.intersection
                 [ method ]
                 **
                 * Utility method
                 **
                 * Finds intersections of two paths
                 - path1 (string) path string
                 - path2 (string) path string
                 = (array) dots of intersection
                 o [
                 o     {
                 o         x: (number) x coordinate of the point,
                 o         y: (number) y coordinate of the point,
                 o         t1: (number) t value for segment of path1,
                 o         t2: (number) t value for segment of path2,
                 o         segment1: (number) order number for segment of path1,
                 o         segment2: (number) order number for segment of path2,
                 o         bez1: (array) eight coordinates representing beziér curve for the segment of path1,
                 o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
                 o     }
                 o ]
                \*/
                Snap.path.intersection = pathIntersection;
                Snap.path.intersectionNumber = pathIntersectionNumber;
                /*\
                 * Snap.path.isPointInside
                 [ method ]
                 **
                 * Utility method
                 **
                 * Returns `true` if given point is inside a given closed path.
                 *
                 * Note: fill mode doesn’t affect the result of this method.
                 - path (string) path string
                 - x (number) x of the point
                 - y (number) y of the point
                 = (boolean) `true` if point is inside the path
                \*/
                Snap.path.isPointInside = isPointInsidePath;
                /*\
                 * Snap.path.getBBox
                 [ method ]
                 **
                 * Utility method
                 **
                 * Returns the bounding box of a given path
                 - path (string) path string
                 = (object) bounding box
                 o {
                 o     x: (number) x coordinate of the left top point of the box,
                 o     y: (number) y coordinate of the left top point of the box,
                 o     x2: (number) x coordinate of the right bottom point of the box,
                 o     y2: (number) y coordinate of the right bottom point of the box,
                 o     width: (number) width of the box,
                 o     height: (number) height of the box
                 o }
                \*/
                Snap.path.getBBox = pathBBox;
                Snap.path.get = getPath;
                /*\
                 * Snap.path.toRelative
                 [ method ]
                 **
                 * Utility method
                 **
                 * Converts path coordinates into relative values
                 - path (string) path string
                 = (array) path string
                \*/
                Snap.path.toRelative = pathToRelative;
                /*\
                 * Snap.path.toAbsolute
                 [ method ]
                 **
                 * Utility method
                 **
                 * Converts path coordinates into absolute values
                 - path (string) path string
                 = (array) path string
                \*/
                Snap.path.toAbsolute = pathToAbsolute;
                /*\
                 * Snap.path.toCubic
                 [ method ]
                 **
                 * Utility method
                 **
                 * Converts path to a new path where all segments are cubic beziér curves
                 - pathString (string|array) path string or array of segments
                 = (array) array of segments
                \*/
                Snap.path.toCubic = path2curve;
                /*\
                 * Snap.path.map
                 [ method ]
                 **
                 * Transform the path string with the given matrix
                 - path (string) path string
                 - matrix (object) see @Matrix
                 = (string) transformed path string
                \*/
                Snap.path.map = mapPath;
                Snap.path.toString = toString;
                Snap.path.clone = pathClone;
            });

            // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            // http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            Snap.plugin(function (Snap, Element, Paper, glob) {
                var mmax = Math.max,
                    mmin = Math.min;

                // Set
                var Set = function (items) {
                    this.items = [];
                    this.bindings = {};
                    this.length = 0;
                    this.type = "set";
                    if (items) {
                        for (var i = 0, ii = items.length; i < ii; i++) {
                            if (items[i]) {
                                this[this.items.length] = this.items[this.items.length] = items[i];
                                this.length++;
                            }
                        }
                    }
                },
                    setproto = Set.prototype;
                /*\
                 * Set.push
                 [ method ]
                 **
                 * Adds each argument to the current set
                 = (object) original element
                \*/
                setproto.push = function () {
                    var item, len;
                    for (var i = 0, ii = arguments.length; i < ii; i++) {
                        item = arguments[i];
                        if (item) {
                            len = this.items.length;
                            this[len] = this.items[len] = item;
                            this.length++;
                        }
                    }
                    return this;
                };
                /*\
                 * Set.pop
                 [ method ]
                 **
                 * Removes last element and returns it
                 = (object) element
                \*/
                setproto.pop = function () {
                    this.length && delete this[this.length--];
                    return this.items.pop();
                };
                /*\
                 * Set.forEach
                 [ method ]
                 **
                 * Executes given function for each element in the set
                 *
                 * If the function returns `false`, the loop stops running.
                 **
                 - callback (function) function to run
                 - thisArg (object) context object for the callback
                 = (object) Set object
                \*/
                setproto.forEach = function (callback, thisArg) {
                    for (var i = 0, ii = this.items.length; i < ii; i++) {
                        if (callback.call(thisArg, this.items[i], i) === false) {
                            return this;
                        }
                    }
                    return this;
                };
                /*\
                 * Set.animate
                 [ method ]
                 **
                 * Animates each element in set in sync.
                 *
                 **
                 - attrs (object) key-value pairs of destination attributes
                 - duration (number) duration of the animation in milliseconds
                 - easing (function) #optional easing function from @mina or custom
                 - callback (function) #optional callback function that executes when the animation ends
                 * or
                 - animation (array) array of animation parameter for each element in set in format `[attrs, duration, easing, callback]`
                 > Usage
                 | // animate all elements in set to radius 10
                 | set.animate({r: 10}, 500, mina.easein);
                 | // or
                 | // animate first element to radius 10, but second to radius 20 and in different time
                 | set.animate([{r: 10}, 500, mina.easein], [{r: 20}, 1500, mina.easein]);
                 = (Element) the current element
                \*/
                setproto.animate = function (attrs, ms, easing, callback) {
                    if (typeof easing == "function" && !easing.length) {
                        callback = easing;
                        easing = mina.linear;
                    }
                    if (attrs instanceof Snap._.Animation) {
                        callback = attrs.callback;
                        easing = attrs.easing;
                        ms = easing.dur;
                        attrs = attrs.attr;
                    }
                    var args = arguments;
                    if (Snap.is(attrs, "array") && Snap.is(args[args.length - 1], "array")) {
                        var each = true;
                    }
                    var begin,
                        handler = function () {
                        if (begin) {
                            this.b = begin;
                        } else {
                            begin = this.b;
                        }
                    },
                        cb = 0,
                        set = this,
                        callbacker = callback && function () {
                        if (++cb == set.length) {
                            callback.call(this);
                        }
                    };
                    return this.forEach(function (el, i) {
                        eve.once("snap.animcreated." + el.id, handler);
                        if (each) {
                            args[i] && el.animate.apply(el, args[i]);
                        } else {
                            el.animate(attrs, ms, easing, callbacker);
                        }
                    });
                };
                setproto.remove = function () {
                    while (this.length) {
                        this.pop().remove();
                    }
                    return this;
                };
                /*\
                 * Set.bind
                 [ method ]
                 **
                 * Specifies how to handle a specific attribute when applied
                 * to a set.
                 *
                 **
                 - attr (string) attribute name
                 - callback (function) function to run
                 * or
                 - attr (string) attribute name
                 - element (Element) specific element in the set to apply the attribute to
                 * or
                 - attr (string) attribute name
                 - element (Element) specific element in the set to apply the attribute to
                 - eattr (string) attribute on the element to bind the attribute to
                 = (object) Set object
                \*/
                setproto.bind = function (attr, a, b) {
                    var data = {};
                    if (typeof a == "function") {
                        this.bindings[attr] = a;
                    } else {
                        var aname = b || attr;
                        this.bindings[attr] = function (v) {
                            data[aname] = v;
                            a.attr(data);
                        };
                    }
                    return this;
                };
                setproto.attr = function (value) {
                    var unbound = {};
                    for (var k in value) {
                        if (this.bindings[k]) {
                            this.bindings[k](value[k]);
                        } else {
                            unbound[k] = value[k];
                        }
                    }
                    for (var i = 0, ii = this.items.length; i < ii; i++) {
                        this.items[i].attr(unbound);
                    }
                    return this;
                };
                /*\
                 * Set.clear
                 [ method ]
                 **
                 * Removes all elements from the set
                \*/
                setproto.clear = function () {
                    while (this.length) {
                        this.pop();
                    }
                };
                /*\
                 * Set.splice
                 [ method ]
                 **
                 * Removes range of elements from the set
                 **
                 - index (number) position of the deletion
                 - count (number) number of element to remove
                 - insertion… (object) #optional elements to insert
                 = (object) set elements that were deleted
                \*/
                setproto.splice = function (index, count, insertion) {
                    index = index < 0 ? mmax(this.length + index, 0) : index;
                    count = mmax(0, mmin(this.length - index, count));
                    var tail = [],
                        todel = [],
                        args = [],
                        i;
                    for (i = 2; i < arguments.length; i++) {
                        args.push(arguments[i]);
                    }
                    for (i = 0; i < count; i++) {
                        todel.push(this[index + i]);
                    }
                    for (; i < this.length - index; i++) {
                        tail.push(this[index + i]);
                    }
                    var arglen = args.length;
                    for (i = 0; i < arglen + tail.length; i++) {
                        this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
                    }
                    i = this.items.length = this.length -= count - arglen;
                    while (this[i]) {
                        delete this[i++];
                    }
                    return new Set(todel);
                };
                /*\
                 * Set.exclude
                 [ method ]
                 **
                 * Removes given element from the set
                 **
                 - element (object) element to remove
                 = (boolean) `true` if object was found and removed from the set
                \*/
                setproto.exclude = function (el) {
                    for (var i = 0, ii = this.length; i < ii; i++) if (this[i] == el) {
                        this.splice(i, 1);
                        return true;
                    }
                    return false;
                };
                setproto.insertAfter = function (el) {
                    var i = this.items.length;
                    while (i--) {
                        this.items[i].insertAfter(el);
                    }
                    return this;
                };
                setproto.getBBox = function () {
                    var x = [],
                        y = [],
                        x2 = [],
                        y2 = [];
                    for (var i = this.items.length; i--;) if (!this.items[i].removed) {
                        var box = this.items[i].getBBox();
                        x.push(box.x);
                        y.push(box.y);
                        x2.push(box.x + box.width);
                        y2.push(box.y + box.height);
                    }
                    x = mmin.apply(0, x);
                    y = mmin.apply(0, y);
                    x2 = mmax.apply(0, x2);
                    y2 = mmax.apply(0, y2);
                    return {
                        x: x,
                        y: y,
                        x2: x2,
                        y2: y2,
                        width: x2 - x,
                        height: y2 - y,
                        cx: x + (x2 - x) / 2,
                        cy: y + (y2 - y) / 2
                    };
                };
                setproto.clone = function (s) {
                    s = new Set();
                    for (var i = 0, ii = this.items.length; i < ii; i++) {
                        s.push(this.items[i].clone());
                    }
                    return s;
                };
                setproto.toString = function () {
                    return "Snap\u2018s set";
                };
                setproto.type = "set";
                // export
                Snap.Set = Set;
                Snap.set = function () {
                    var set = new Set();
                    if (arguments.length) {
                        set.push.apply(set, Array.prototype.slice.call(arguments, 0));
                    }
                    return set;
                };
            });

            // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            // http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            Snap.plugin(function (Snap, Element, Paper, glob) {
                var names = {},
                    reUnit = /[a-z]+$/i,
                    Str = String;
                names.stroke = names.fill = "colour";
                function getEmpty(item) {
                    var l = item[0];
                    switch (l.toLowerCase()) {
                        case "t":
                            return [l, 0, 0];
                        case "m":
                            return [l, 1, 0, 0, 1, 0, 0];
                        case "r":
                            if (item.length == 4) {
                                return [l, 0, item[2], item[3]];
                            } else {
                                return [l, 0];
                            }
                        case "s":
                            if (item.length == 5) {
                                return [l, 1, 1, item[3], item[4]];
                            } else if (item.length == 3) {
                                return [l, 1, 1];
                            } else {
                                return [l, 1];
                            }
                    }
                }
                function equaliseTransform(t1, t2, getBBox) {
                    t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
                    t1 = Snap.parseTransformString(t1) || [];
                    t2 = Snap.parseTransformString(t2) || [];
                    var maxlength = Math.max(t1.length, t2.length),
                        from = [],
                        to = [],
                        i = 0,
                        j,
                        jj,
                        tt1,
                        tt2;
                    for (; i < maxlength; i++) {
                        tt1 = t1[i] || getEmpty(t2[i]);
                        tt2 = t2[i] || getEmpty(tt1);
                        if (tt1[0] != tt2[0] || tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) || tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])) {
                            t1 = Snap._.transform2matrix(t1, getBBox());
                            t2 = Snap._.transform2matrix(t2, getBBox());
                            from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
                            to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
                            break;
                        }
                        from[i] = [];
                        to[i] = [];
                        for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
                            j in tt1 && (from[i][j] = tt1[j]);
                            j in tt2 && (to[i][j] = tt2[j]);
                        }
                    }
                    return {
                        from: path2array(from),
                        to: path2array(to),
                        f: getPath(from)
                    };
                }
                function getNumber(val) {
                    return val;
                }
                function getUnit(unit) {
                    return function (val) {
                        return +val.toFixed(3) + unit;
                    };
                }
                function getViewBox(val) {
                    return val.join(" ");
                }
                function getColour(clr) {
                    return Snap.rgb(clr[0], clr[1], clr[2]);
                }
                function getPath(path) {
                    var k = 0,
                        i,
                        ii,
                        j,
                        jj,
                        out,
                        a,
                        b = [];
                    for (i = 0, ii = path.length; i < ii; i++) {
                        out = "[";
                        a = ['"' + path[i][0] + '"'];
                        for (j = 1, jj = path[i].length; j < jj; j++) {
                            a[j] = "val[" + k++ + "]";
                        }
                        out += a + "]";
                        b[i] = out;
                    }
                    return Function("val", "return Snap.path.toString.call([" + b + "])");
                }
                function path2array(path) {
                    var out = [];
                    for (var i = 0, ii = path.length; i < ii; i++) {
                        for (var j = 1, jj = path[i].length; j < jj; j++) {
                            out.push(path[i][j]);
                        }
                    }
                    return out;
                }
                function isNumeric(obj) {
                    return isFinite(parseFloat(obj));
                }
                function arrayEqual(arr1, arr2) {
                    if (!Snap.is(arr1, "array") || !Snap.is(arr2, "array")) {
                        return false;
                    }
                    return arr1.toString() == arr2.toString();
                }
                Element.prototype.equal = function (name, b) {
                    return eve("snap.util.equal", this, name, b).firstDefined();
                };
                eve.on("snap.util.equal", function (name, b) {
                    var A,
                        B,
                        a = Str(this.attr(name) || ""),
                        el = this;
                    if (isNumeric(a) && isNumeric(b)) {
                        return {
                            from: parseFloat(a),
                            to: parseFloat(b),
                            f: getNumber
                        };
                    }
                    if (names[name] == "colour") {
                        A = Snap.color(a);
                        B = Snap.color(b);
                        return {
                            from: [A.r, A.g, A.b, A.opacity],
                            to: [B.r, B.g, B.b, B.opacity],
                            f: getColour
                        };
                    }
                    if (name == "viewBox") {
                        A = this.attr(name).vb.split(" ").map(Number);
                        B = b.split(" ").map(Number);
                        return {
                            from: A,
                            to: B,
                            f: getViewBox
                        };
                    }
                    if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
                        if (b instanceof Snap.Matrix) {
                            b = b.toTransformString();
                        }
                        if (!Snap._.rgTransform.test(b)) {
                            b = Snap._.svgTransform2string(b);
                        }
                        return equaliseTransform(a, b, function () {
                            return el.getBBox(1);
                        });
                    }
                    if (name == "d" || name == "path") {
                        A = Snap.path.toCubic(a, b);
                        return {
                            from: path2array(A[0]),
                            to: path2array(A[1]),
                            f: getPath(A[0])
                        };
                    }
                    if (name == "points") {
                        A = Str(a).split(Snap._.separator);
                        B = Str(b).split(Snap._.separator);
                        return {
                            from: A,
                            to: B,
                            f: function (val) {
                                return val;
                            }
                        };
                    }
                    var aUnit = a.match(reUnit),
                        bUnit = Str(b).match(reUnit);
                    if (aUnit && arrayEqual(aUnit, bUnit)) {
                        return {
                            from: parseFloat(a),
                            to: parseFloat(b),
                            f: getUnit(aUnit)
                        };
                    } else {
                        return {
                            from: this.asPX(name),
                            to: this.asPX(name, b),
                            f: getNumber
                        };
                    }
                });
            });

            // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            // http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            Snap.plugin(function (Snap, Element, Paper, glob) {
                var elproto = Element.prototype,
                    has = "hasOwnProperty",
                    supportsTouch = "createTouch" in glob.doc,
                    events = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"],
                    touchMap = {
                    mousedown: "touchstart",
                    mousemove: "touchmove",
                    mouseup: "touchend"
                },
                    getScroll = function (xy, el) {
                    var name = xy == "y" ? "scrollTop" : "scrollLeft",
                        doc = el && el.node ? el.node.ownerDocument : glob.doc;
                    return doc[name in doc.documentElement ? "documentElement" : "body"][name];
                },
                    preventDefault = function () {
                    this.returnValue = false;
                },
                    preventTouch = function () {
                    return this.originalEvent.preventDefault();
                },
                    stopPropagation = function () {
                    this.cancelBubble = true;
                },
                    stopTouch = function () {
                    return this.originalEvent.stopPropagation();
                },
                    addEvent = function (obj, type, fn, element) {
                    var realName = supportsTouch && touchMap[type] ? touchMap[type] : type,
                        f = function (e) {
                        var scrollY = getScroll("y", element),
                            scrollX = getScroll("x", element);
                        if (supportsTouch && touchMap[has](type)) {
                            for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                                if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
                                    var olde = e;
                                    e = e.targetTouches[i];
                                    e.originalEvent = olde;
                                    e.preventDefault = preventTouch;
                                    e.stopPropagation = stopTouch;
                                    break;
                                }
                            }
                        }
                        var x = e.clientX + scrollX,
                            y = e.clientY + scrollY;
                        return fn.call(element, e, x, y);
                    };

                    if (type !== realName) {
                        obj.addEventListener(type, f, false);
                    }

                    obj.addEventListener(realName, f, false);

                    return function () {
                        if (type !== realName) {
                            obj.removeEventListener(type, f, false);
                        }

                        obj.removeEventListener(realName, f, false);
                        return true;
                    };
                },
                    drag = [],
                    dragMove = function (e) {
                    var x = e.clientX,
                        y = e.clientY,
                        scrollY = getScroll("y"),
                        scrollX = getScroll("x"),
                        dragi,
                        j = drag.length;
                    while (j--) {
                        dragi = drag[j];
                        if (supportsTouch) {
                            var i = e.touches && e.touches.length,
                                touch;
                            while (i--) {
                                touch = e.touches[i];
                                if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
                                    x = touch.clientX;
                                    y = touch.clientY;
                                    (e.originalEvent ? e.originalEvent : e).preventDefault();
                                    break;
                                }
                            }
                        } else {
                            e.preventDefault();
                        }
                        var node = dragi.el.node,
                            o,
                            next = node.nextSibling,
                            parent = node.parentNode,
                            display = node.style.display;
                        // glob.win.opera && parent.removeChild(node);
                        // node.style.display = "none";
                        // o = dragi.el.paper.getElementByPoint(x, y);
                        // node.style.display = display;
                        // glob.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
                        // o && eve("snap.drag.over." + dragi.el.id, dragi.el, o);
                        x += scrollX;
                        y += scrollY;
                        eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
                    }
                },
                    dragUp = function (e) {
                    Snap.unmousemove(dragMove).unmouseup(dragUp);
                    var i = drag.length,
                        dragi;
                    while (i--) {
                        dragi = drag[i];
                        dragi.el._drag = {};
                        eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
                        eve.off("snap.drag.*." + dragi.el.id);
                    }
                    drag = [];
                };
                /*\
                 * Element.click
                 [ method ]
                 **
                 * Adds a click event handler to the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/
                /*\
                 * Element.unclick
                 [ method ]
                 **
                 * Removes a click event handler from the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/

                /*\
                 * Element.dblclick
                 [ method ]
                 **
                 * Adds a double click event handler to the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/
                /*\
                 * Element.undblclick
                 [ method ]
                 **
                 * Removes a double click event handler from the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/

                /*\
                 * Element.mousedown
                 [ method ]
                 **
                 * Adds a mousedown event handler to the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/
                /*\
                 * Element.unmousedown
                 [ method ]
                 **
                 * Removes a mousedown event handler from the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/

                /*\
                 * Element.mousemove
                 [ method ]
                 **
                 * Adds a mousemove event handler to the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/
                /*\
                 * Element.unmousemove
                 [ method ]
                 **
                 * Removes a mousemove event handler from the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/

                /*\
                 * Element.mouseout
                 [ method ]
                 **
                 * Adds a mouseout event handler to the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/
                /*\
                 * Element.unmouseout
                 [ method ]
                 **
                 * Removes a mouseout event handler from the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/

                /*\
                 * Element.mouseover
                 [ method ]
                 **
                 * Adds a mouseover event handler to the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/
                /*\
                 * Element.unmouseover
                 [ method ]
                 **
                 * Removes a mouseover event handler from the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/

                /*\
                 * Element.mouseup
                 [ method ]
                 **
                 * Adds a mouseup event handler to the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/
                /*\
                 * Element.unmouseup
                 [ method ]
                 **
                 * Removes a mouseup event handler from the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/

                /*\
                 * Element.touchstart
                 [ method ]
                 **
                 * Adds a touchstart event handler to the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/
                /*\
                 * Element.untouchstart
                 [ method ]
                 **
                 * Removes a touchstart event handler from the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/

                /*\
                 * Element.touchmove
                 [ method ]
                 **
                 * Adds a touchmove event handler to the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/
                /*\
                 * Element.untouchmove
                 [ method ]
                 **
                 * Removes a touchmove event handler from the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/

                /*\
                 * Element.touchend
                 [ method ]
                 **
                 * Adds a touchend event handler to the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/
                /*\
                 * Element.untouchend
                 [ method ]
                 **
                 * Removes a touchend event handler from the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/

                /*\
                 * Element.touchcancel
                 [ method ]
                 **
                 * Adds a touchcancel event handler to the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/
                /*\
                 * Element.untouchcancel
                 [ method ]
                 **
                 * Removes a touchcancel event handler from the element
                 - handler (function) handler for the event
                 = (object) @Element
                \*/
                for (var i = events.length; i--;) {
                    (function (eventName) {
                        Snap[eventName] = elproto[eventName] = function (fn, scope) {
                            if (Snap.is(fn, "function")) {
                                this.events = this.events || [];
                                this.events.push({
                                    name: eventName,
                                    f: fn,
                                    unbind: addEvent(this.node || document, eventName, fn, scope || this)
                                });
                            } else {
                                for (var i = 0, ii = this.events.length; i < ii; i++) if (this.events[i].name == eventName) {
                                    try {
                                        this.events[i].f.call(this);
                                    } catch (e) {}
                                }
                            }
                            return this;
                        };
                        Snap["un" + eventName] = elproto["un" + eventName] = function (fn) {
                            var events = this.events || [],
                                l = events.length;
                            while (l--) if (events[l].name == eventName && (events[l].f == fn || !fn)) {
                                events[l].unbind();
                                events.splice(l, 1);
                                !events.length && delete this.events;
                                return this;
                            }
                            return this;
                        };
                    })(events[i]);
                }
                /*\
                 * Element.hover
                 [ method ]
                 **
                 * Adds hover event handlers to the element
                 - f_in (function) handler for hover in
                 - f_out (function) handler for hover out
                 - icontext (object) #optional context for hover in handler
                 - ocontext (object) #optional context for hover out handler
                 = (object) @Element
                \*/
                elproto.hover = function (f_in, f_out, scope_in, scope_out) {
                    return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
                };
                /*\
                 * Element.unhover
                 [ method ]
                 **
                 * Removes hover event handlers from the element
                 - f_in (function) handler for hover in
                 - f_out (function) handler for hover out
                 = (object) @Element
                \*/
                elproto.unhover = function (f_in, f_out) {
                    return this.unmouseover(f_in).unmouseout(f_out);
                };
                var draggable = [];
                // SIERRA unclear what _context_ refers to for starting, ending, moving the drag gesture.
                // SIERRA Element.drag(): _x position of the mouse_: Where are the x/y values offset from?
                // SIERRA Element.drag(): much of this member's doc appears to be duplicated for some reason.
                // SIERRA Unclear about this sentence: _Additionally following drag events will be triggered: drag.start.<id> on start, drag.end.<id> on end and drag.move.<id> on every move._ Is there a global _drag_ object to which you can assign handlers keyed by an element's ID?
                /*\
                 * Element.drag
                 [ method ]
                 **
                 * Adds event handlers for an element's drag gesture
                 **
                 - onmove (function) handler for moving
                 - onstart (function) handler for drag start
                 - onend (function) handler for drag end
                 - mcontext (object) #optional context for moving handler
                 - scontext (object) #optional context for drag start handler
                 - econtext (object) #optional context for drag end handler
                 * Additionaly following `drag` events are triggered: `drag.start.<id>` on start, 
                 * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element is dragged over another element 
                 * `drag.over.<id>` fires as well.
                 *
                 * Start event and start handler are called in specified context or in context of the element with following parameters:
                 o x (number) x position of the mouse
                 o y (number) y position of the mouse
                 o event (object) DOM event object
                 * Move event and move handler are called in specified context or in context of the element with following parameters:
                 o dx (number) shift by x from the start point
                 o dy (number) shift by y from the start point
                 o x (number) x position of the mouse
                 o y (number) y position of the mouse
                 o event (object) DOM event object
                 * End event and end handler are called in specified context or in context of the element with following parameters:
                 o event (object) DOM event object
                 = (object) @Element
                \*/
                elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
                    var el = this;
                    if (!arguments.length) {
                        var origTransform;
                        return el.drag(function (dx, dy) {
                            this.attr({
                                transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]
                            });
                        }, function () {
                            origTransform = this.transform().local;
                        });
                    }
                    function start(e, x, y) {
                        (e.originalEvent || e).preventDefault();
                        el._drag.x = x;
                        el._drag.y = y;
                        el._drag.id = e.identifier;
                        !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
                        drag.push({ el: el, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope });
                        onstart && eve.on("snap.drag.start." + el.id, onstart);
                        onmove && eve.on("snap.drag.move." + el.id, onmove);
                        onend && eve.on("snap.drag.end." + el.id, onend);
                        eve("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
                    }
                    function init(e, x, y) {
                        eve("snap.draginit." + el.id, el, e, x, y);
                    }
                    eve.on("snap.draginit." + el.id, start);
                    el._drag = {};
                    draggable.push({ el: el, start: start, init: init });
                    el.mousedown(init);
                    return el;
                };
                /*
                 * Element.onDragOver
                 [ method ]
                 **
                 * Shortcut to assign event handler for `drag.over.<id>` event, where `id` is the element's `id` (see @Element.id)
                 - f (function) handler for event, first argument would be the element you are dragging over
                \*/
                // elproto.onDragOver = function (f) {
                //     f ? eve.on("snap.drag.over." + this.id, f) : eve.unbind("snap.drag.over." + this.id);
                // };
                /*\
                 * Element.undrag
                 [ method ]
                 **
                 * Removes all drag event handlers from the given element
                \*/
                elproto.undrag = function () {
                    var i = draggable.length;
                    while (i--) if (draggable[i].el == this) {
                        this.unmousedown(draggable[i].init);
                        draggable.splice(i, 1);
                        eve.unbind("snap.drag.*." + this.id);
                        eve.unbind("snap.draginit." + this.id);
                    }
                    !draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
                    return this;
                };
            });

            // Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            // http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            Snap.plugin(function (Snap, Element, Paper, glob) {
                var elproto = Element.prototype,
                    pproto = Paper.prototype,
                    rgurl = /^\s*url\((.+)\)/,
                    Str = String,
                    $ = Snap._.$;
                Snap.filter = {};
                /*\
                 * Paper.filter
                 [ method ]
                 **
                 * Creates a `<filter>` element
                 **
                 - filstr (string) SVG fragment of filter provided as a string
                 = (object) @Element
                 * Note: It is recommended to use filters embedded into the page inside an empty SVG element.
                 > Usage
                 | var f = paper.filter('<feGaussianBlur stdDeviation="2"/>'),
                 |     c = paper.circle(10, 10, 10).attr({
                 |         filter: f
                 |     });
                \*/
                pproto.filter = function (filstr) {
                    var paper = this;
                    if (paper.type != "svg") {
                        paper = paper.paper;
                    }
                    var f = Snap.parse(Str(filstr)),
                        id = Snap._.id(),
                        width = paper.node.offsetWidth,
                        height = paper.node.offsetHeight,
                        filter = $("filter");
                    $(filter, {
                        id: id,
                        filterUnits: "userSpaceOnUse"
                    });
                    filter.appendChild(f.node);
                    paper.defs.appendChild(filter);
                    return new Element(filter);
                };

                eve.on("snap.util.getattr.filter", function () {
                    eve.stop();
                    var p = $(this.node, "filter");
                    if (p) {
                        var match = Str(p).match(rgurl);
                        return match && Snap.select(match[1]);
                    }
                });
                eve.on("snap.util.attr.filter", function (value) {
                    if (value instanceof Element && value.type == "filter") {
                        eve.stop();
                        var id = value.node.id;
                        if (!id) {
                            $(value.node, { id: value.id });
                            id = value.id;
                        }
                        $(this.node, {
                            filter: Snap.url(id)
                        });
                    }
                    if (!value || value == "none") {
                        eve.stop();
                        this.node.removeAttribute("filter");
                    }
                });
                /*\
                 * Snap.filter.blur
                 [ method ]
                 **
                 * Returns an SVG markup string for the blur filter
                 **
                 - x (number) amount of horizontal blur, in pixels
                 - y (number) #optional amount of vertical blur, in pixels
                 = (string) filter representation
                 > Usage
                 | var f = paper.filter(Snap.filter.blur(5, 10)),
                 |     c = paper.circle(10, 10, 10).attr({
                 |         filter: f
                 |     });
                \*/
                Snap.filter.blur = function (x, y) {
                    if (x == null) {
                        x = 2;
                    }
                    var def = y == null ? x : [x, y];
                    return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {
                        def: def
                    });
                };
                Snap.filter.blur.toString = function () {
                    return this();
                };
                /*\
                 * Snap.filter.shadow
                 [ method ]
                 **
                 * Returns an SVG markup string for the shadow filter
                 **
                 - dx (number) #optional horizontal shift of the shadow, in pixels
                 - dy (number) #optional vertical shift of the shadow, in pixels
                 - blur (number) #optional amount of blur
                 - color (string) #optional color of the shadow
                 - opacity (number) #optional `0..1` opacity of the shadow
                 * or
                 - dx (number) #optional horizontal shift of the shadow, in pixels
                 - dy (number) #optional vertical shift of the shadow, in pixels
                 - color (string) #optional color of the shadow
                 - opacity (number) #optional `0..1` opacity of the shadow
                 * which makes blur default to `4`. Or
                 - dx (number) #optional horizontal shift of the shadow, in pixels
                 - dy (number) #optional vertical shift of the shadow, in pixels
                 - opacity (number) #optional `0..1` opacity of the shadow
                 = (string) filter representation
                 > Usage
                 | var f = paper.filter(Snap.filter.shadow(0, 2, 3)),
                 |     c = paper.circle(10, 10, 10).attr({
                 |         filter: f
                 |     });
                \*/
                Snap.filter.shadow = function (dx, dy, blur, color, opacity) {
                    if (typeof blur == "string") {
                        color = blur;
                        opacity = color;
                        blur = 4;
                    }
                    if (typeof color != "string") {
                        opacity = color;
                        color = "#000";
                    }
                    color = color || "#000";
                    if (blur == null) {
                        blur = 4;
                    }
                    if (opacity == null) {
                        opacity = 1;
                    }
                    if (dx == null) {
                        dx = 0;
                        dy = 2;
                    }
                    if (dy == null) {
                        dy = dx;
                    }
                    color = Snap.color(color);
                    return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                        color: color,
                        dx: dx,
                        dy: dy,
                        blur: blur,
                        opacity: opacity
                    });
                };
                Snap.filter.shadow.toString = function () {
                    return this();
                };
                /*\
                 * Snap.filter.grayscale
                 [ method ]
                 **
                 * Returns an SVG markup string for the grayscale filter
                 **
                 - amount (number) amount of filter (`0..1`)
                 = (string) filter representation
                \*/
                Snap.filter.grayscale = function (amount) {
                    if (amount == null) {
                        amount = 1;
                    }
                    return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                        a: 0.2126 + 0.7874 * (1 - amount),
                        b: 0.7152 - 0.7152 * (1 - amount),
                        c: 0.0722 - 0.0722 * (1 - amount),
                        d: 0.2126 - 0.2126 * (1 - amount),
                        e: 0.7152 + 0.2848 * (1 - amount),
                        f: 0.0722 - 0.0722 * (1 - amount),
                        g: 0.2126 - 0.2126 * (1 - amount),
                        h: 0.0722 + 0.9278 * (1 - amount)
                    });
                };
                Snap.filter.grayscale.toString = function () {
                    return this();
                };
                /*\
                 * Snap.filter.sepia
                 [ method ]
                 **
                 * Returns an SVG markup string for the sepia filter
                 **
                 - amount (number) amount of filter (`0..1`)
                 = (string) filter representation
                \*/
                Snap.filter.sepia = function (amount) {
                    if (amount == null) {
                        amount = 1;
                    }
                    return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                        a: 0.393 + 0.607 * (1 - amount),
                        b: 0.769 - 0.769 * (1 - amount),
                        c: 0.189 - 0.189 * (1 - amount),
                        d: 0.349 - 0.349 * (1 - amount),
                        e: 0.686 + 0.314 * (1 - amount),
                        f: 0.168 - 0.168 * (1 - amount),
                        g: 0.272 - 0.272 * (1 - amount),
                        h: 0.534 - 0.534 * (1 - amount),
                        i: 0.131 + 0.869 * (1 - amount)
                    });
                };
                Snap.filter.sepia.toString = function () {
                    return this();
                };
                /*\
                 * Snap.filter.saturate
                 [ method ]
                 **
                 * Returns an SVG markup string for the saturate filter
                 **
                 - amount (number) amount of filter (`0..1`)
                 = (string) filter representation
                \*/
                Snap.filter.saturate = function (amount) {
                    if (amount == null) {
                        amount = 1;
                    }
                    return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                        amount: 1 - amount
                    });
                };
                Snap.filter.saturate.toString = function () {
                    return this();
                };
                /*\
                 * Snap.filter.hueRotate
                 [ method ]
                 **
                 * Returns an SVG markup string for the hue-rotate filter
                 **
                 - angle (number) angle of rotation
                 = (string) filter representation
                \*/
                Snap.filter.hueRotate = function (angle) {
                    angle = angle || 0;
                    return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                        angle: angle
                    });
                };
                Snap.filter.hueRotate.toString = function () {
                    return this();
                };
                /*\
                 * Snap.filter.invert
                 [ method ]
                 **
                 * Returns an SVG markup string for the invert filter
                 **
                 - amount (number) amount of filter (`0..1`)
                 = (string) filter representation
                \*/
                Snap.filter.invert = function (amount) {
                    if (amount == null) {
                        amount = 1;
                    }
                    //        <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB"/>
                    return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                        amount: amount,
                        amount2: 1 - amount
                    });
                };
                Snap.filter.invert.toString = function () {
                    return this();
                };
                /*\
                 * Snap.filter.brightness
                 [ method ]
                 **
                 * Returns an SVG markup string for the brightness filter
                 **
                 - amount (number) amount of filter (`0..1`)
                 = (string) filter representation
                \*/
                Snap.filter.brightness = function (amount) {
                    if (amount == null) {
                        amount = 1;
                    }
                    return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                        amount: amount
                    });
                };
                Snap.filter.brightness.toString = function () {
                    return this();
                };
                /*\
                 * Snap.filter.contrast
                 [ method ]
                 **
                 * Returns an SVG markup string for the contrast filter
                 **
                 - amount (number) amount of filter (`0..1`)
                 = (string) filter representation
                \*/
                Snap.filter.contrast = function (amount) {
                    if (amount == null) {
                        amount = 1;
                    }
                    return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                        amount: amount,
                        amount2: .5 - amount / 2
                    });
                };
                Snap.filter.contrast.toString = function () {
                    return this();
                };
            });

            // Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            // http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
                var box = Snap._.box,
                    is = Snap.is,
                    firstLetter = /^[^a-z]*([tbmlrc])/i,
                    toString = function () {
                    return "T" + this.dx + "," + this.dy;
                };
                /*\
                 * Element.getAlign
                 [ method ]
                 **
                 * Returns shift needed to align the element relatively to given element.
                 * If no elements specified, parent `<svg>` container will be used.
                 - el (object) @optional alignment element
                 - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
                 = (object|string) Object in format `{dx: , dy: }` also has a string representation as a transformation string
                 > Usage
                 | el.transform(el.getAlign(el2, "top"));
                 * or
                 | var dy = el.getAlign(el2, "top").dy;
                \*/
                Element.prototype.getAlign = function (el, way) {
                    if (way == null && is(el, "string")) {
                        way = el;
                        el = null;
                    }
                    el = el || this.paper;
                    var bx = el.getBBox ? el.getBBox() : box(el),
                        bb = this.getBBox(),
                        out = {};
                    way = way && way.match(firstLetter);
                    way = way ? way[1].toLowerCase() : "c";
                    switch (way) {
                        case "t":
                            out.dx = 0;
                            out.dy = bx.y - bb.y;
                            break;
                        case "b":
                            out.dx = 0;
                            out.dy = bx.y2 - bb.y2;
                            break;
                        case "m":
                            out.dx = 0;
                            out.dy = bx.cy - bb.cy;
                            break;
                        case "l":
                            out.dx = bx.x - bb.x;
                            out.dy = 0;
                            break;
                        case "r":
                            out.dx = bx.x2 - bb.x2;
                            out.dy = 0;
                            break;
                        default:
                            out.dx = bx.cx - bb.cx;
                            out.dy = 0;
                            break;
                    }
                    out.toString = toString;
                    return out;
                };
                /*\
                 * Element.align
                 [ method ]
                 **
                 * Aligns the element relatively to given one via transformation.
                 * If no elements specified, parent `<svg>` container will be used.
                 - el (object) @optional alignment element
                 - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
                 = (object) this element
                 > Usage
                 | el.align(el2, "top");
                 * or
                 | el.align("middle");
                \*/
                Element.prototype.align = function (el, way) {
                    return this.transform("..." + this.getAlign(el, way));
                };
            });

            return Snap;
        });
    })(this);

    return _retrieveGlobal();
});
$__System.registerDynamic("49", ["53"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('53');
  return module.exports;
});

$__System.registerDynamic("9", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

$__System.registerDynamic("54", ["9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('9');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

$__System.registerDynamic("55", ["54"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = {
    "default": $__require('54'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("4", ["55"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var _Object$defineProperty = $__require('55')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("5", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("56", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  var process = module.exports = {};
  var cachedSetTimeout;
  var cachedClearTimeout;
  function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
  }
  (function() {
    try {
      if (typeof setTimeout === 'function') {
        cachedSetTimeout = setTimeout;
      } else {
        cachedSetTimeout = defaultSetTimout;
      }
    } catch (e) {
      cachedSetTimeout = defaultSetTimout;
    }
    try {
      if (typeof clearTimeout === 'function') {
        cachedClearTimeout = clearTimeout;
      } else {
        cachedClearTimeout = defaultClearTimeout;
      }
    } catch (e) {
      cachedClearTimeout = defaultClearTimeout;
    }
  }());
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }
    try {
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      return clearTimeout(marker);
    }
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }
    try {
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        return cachedClearTimeout.call(null, marker);
      } catch (e) {
        return cachedClearTimeout.call(this, marker);
      }
    }
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("57", ["56"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('56');
  return module.exports;
});

$__System.registerDynamic("58", ["57"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__System._nodeRequire ? process : $__require('57');
  return module.exports;
});

$__System.registerDynamic("59", ["58"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('58');
  return module.exports;
});

$__System.registerDynamic("5a", ["59"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(process) {
    var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window;
    (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
      "use strict";
      _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(Animation, SimpleTimeline, TweenLite) {
        var _slice = function(a) {
          var b = [],
              l = a.length,
              i;
          for (i = 0; i !== l; b.push(a[i++]))
            ;
          return b;
        },
            _applyCycle = function(vars, targets, i) {
              var alt = vars.cycle,
                  p,
                  val;
              for (p in alt) {
                val = alt[p];
                vars[p] = (typeof(val) === "function") ? val(i, targets[i]) : val[i % val.length];
              }
              delete vars.cycle;
            },
            TweenMax = function(target, duration, vars) {
              TweenLite.call(this, target, duration, vars);
              this._cycle = 0;
              this._yoyo = (this.vars.yoyo === true);
              this._repeat = this.vars.repeat || 0;
              this._repeatDelay = this.vars.repeatDelay || 0;
              this._dirty = true;
              this.render = TweenMax.prototype.render;
            },
            _tinyNum = 0.0000000001,
            TweenLiteInternals = TweenLite._internals,
            _isSelector = TweenLiteInternals.isSelector,
            _isArray = TweenLiteInternals.isArray,
            p = TweenMax.prototype = TweenLite.to({}, 0.1, {}),
            _blankArray = [];
        TweenMax.version = "1.19.0";
        p.constructor = TweenMax;
        p.kill()._gc = false;
        TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = TweenLite.killTweensOf;
        TweenMax.getTweensOf = TweenLite.getTweensOf;
        TweenMax.lagSmoothing = TweenLite.lagSmoothing;
        TweenMax.ticker = TweenLite.ticker;
        TweenMax.render = TweenLite.render;
        p.invalidate = function() {
          this._yoyo = (this.vars.yoyo === true);
          this._repeat = this.vars.repeat || 0;
          this._repeatDelay = this.vars.repeatDelay || 0;
          this._uncache(true);
          return TweenLite.prototype.invalidate.call(this);
        };
        p.updateTo = function(vars, resetDuration) {
          var curRatio = this.ratio,
              immediate = this.vars.immediateRender || vars.immediateRender,
              p;
          if (resetDuration && this._startTime < this._timeline._time) {
            this._startTime = this._timeline._time;
            this._uncache(false);
            if (this._gc) {
              this._enabled(true, false);
            } else {
              this._timeline.insert(this, this._startTime - this._delay);
            }
          }
          for (p in vars) {
            this.vars[p] = vars[p];
          }
          if (this._initted || immediate) {
            if (resetDuration) {
              this._initted = false;
              if (immediate) {
                this.render(0, true, true);
              }
            } else {
              if (this._gc) {
                this._enabled(true, false);
              }
              if (this._notifyPluginsOfEnabled && this._firstPT) {
                TweenLite._onPluginEvent("_onDisable", this);
              }
              if (this._time / this._duration > 0.998) {
                var prevTime = this._totalTime;
                this.render(0, true, false);
                this._initted = false;
                this.render(prevTime, true, false);
              } else {
                this._initted = false;
                this._init();
                if (this._time > 0 || immediate) {
                  var inv = 1 / (1 - curRatio),
                      pt = this._firstPT,
                      endValue;
                  while (pt) {
                    endValue = pt.s + pt.c;
                    pt.c *= inv;
                    pt.s = endValue - pt.c;
                    pt = pt._next;
                  }
                }
              }
            }
          }
          return this;
        };
        p.render = function(time, suppressEvents, force) {
          if (!this._initted)
            if (this._duration === 0 && this.vars.repeat) {
              this.invalidate();
            }
          var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
              prevTime = this._time,
              prevTotalTime = this._totalTime,
              prevCycle = this._cycle,
              duration = this._duration,
              prevRawPrevTime = this._rawPrevTime,
              isComplete,
              callback,
              pt,
              cycleDuration,
              r,
              type,
              pow,
              rawPrevTime;
          if (time >= totalDur - 0.0000001) {
            this._totalTime = totalDur;
            this._cycle = this._repeat;
            if (this._yoyo && (this._cycle & 1) !== 0) {
              this._time = 0;
              this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
            } else {
              this._time = duration;
              this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
            }
            if (!this._reversed) {
              isComplete = true;
              callback = "onComplete";
              force = (force || this._timeline.autoRemoveChildren);
            }
            if (duration === 0)
              if (this._initted || !this.vars.lazy || force) {
                if (this._startTime === this._timeline._duration) {
                  time = 0;
                }
                if (prevRawPrevTime < 0 || (time <= 0 && time >= -0.0000001) || (prevRawPrevTime === _tinyNum && this.data !== "isPause"))
                  if (prevRawPrevTime !== time) {
                    force = true;
                    if (prevRawPrevTime > _tinyNum) {
                      callback = "onReverseComplete";
                    }
                  }
                this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum;
              }
          } else if (time < 0.0000001) {
            this._totalTime = this._time = this._cycle = 0;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
            if (prevTotalTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
              callback = "onReverseComplete";
              isComplete = this._reversed;
            }
            if (time < 0) {
              this._active = false;
              if (duration === 0)
                if (this._initted || !this.vars.lazy || force) {
                  if (prevRawPrevTime >= 0) {
                    force = true;
                  }
                  this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum;
                }
            }
            if (!this._initted) {
              force = true;
            }
          } else {
            this._totalTime = this._time = time;
            if (this._repeat !== 0) {
              cycleDuration = duration + this._repeatDelay;
              this._cycle = (this._totalTime / cycleDuration) >> 0;
              if (this._cycle !== 0)
                if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
                  this._cycle--;
                }
              this._time = this._totalTime - (this._cycle * cycleDuration);
              if (this._yoyo)
                if ((this._cycle & 1) !== 0) {
                  this._time = duration - this._time;
                }
              if (this._time > duration) {
                this._time = duration;
              } else if (this._time < 0) {
                this._time = 0;
              }
            }
            if (this._easeType) {
              r = this._time / duration;
              type = this._easeType;
              pow = this._easePower;
              if (type === 1 || (type === 3 && r >= 0.5)) {
                r = 1 - r;
              }
              if (type === 3) {
                r *= 2;
              }
              if (pow === 1) {
                r *= r;
              } else if (pow === 2) {
                r *= r * r;
              } else if (pow === 3) {
                r *= r * r * r;
              } else if (pow === 4) {
                r *= r * r * r * r;
              }
              if (type === 1) {
                this.ratio = 1 - r;
              } else if (type === 2) {
                this.ratio = r;
              } else if (this._time / duration < 0.5) {
                this.ratio = r / 2;
              } else {
                this.ratio = 1 - (r / 2);
              }
            } else {
              this.ratio = this._ease.getRatio(this._time / duration);
            }
          }
          if (prevTime === this._time && !force && prevCycle === this._cycle) {
            if (prevTotalTime !== this._totalTime)
              if (this._onUpdate)
                if (!suppressEvents) {
                  this._callback("onUpdate");
                }
            return;
          } else if (!this._initted) {
            this._init();
            if (!this._initted || this._gc) {
              return;
            } else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
              this._time = prevTime;
              this._totalTime = prevTotalTime;
              this._rawPrevTime = prevRawPrevTime;
              this._cycle = prevCycle;
              TweenLiteInternals.lazyTweens.push(this);
              this._lazy = [time, suppressEvents];
              return;
            }
            if (this._time && !isComplete) {
              this.ratio = this._ease.getRatio(this._time / duration);
            } else if (isComplete && this._ease._calcEnd) {
              this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
            }
          }
          if (this._lazy !== false) {
            this._lazy = false;
          }
          if (!this._active)
            if (!this._paused && this._time !== prevTime && time >= 0) {
              this._active = true;
            }
          if (prevTotalTime === 0) {
            if (this._initted === 2 && time > 0) {
              this._init();
            }
            if (this._startAt) {
              if (time >= 0) {
                this._startAt.render(time, suppressEvents, force);
              } else if (!callback) {
                callback = "_dummyGS";
              }
            }
            if (this.vars.onStart)
              if (this._totalTime !== 0 || duration === 0)
                if (!suppressEvents) {
                  this._callback("onStart");
                }
          }
          pt = this._firstPT;
          while (pt) {
            if (pt.f) {
              pt.t[pt.p](pt.c * this.ratio + pt.s);
            } else {
              pt.t[pt.p] = pt.c * this.ratio + pt.s;
            }
            pt = pt._next;
          }
          if (this._onUpdate) {
            if (time < 0)
              if (this._startAt && this._startTime) {
                this._startAt.render(time, suppressEvents, force);
              }
            if (!suppressEvents)
              if (this._totalTime !== prevTotalTime || callback) {
                this._callback("onUpdate");
              }
          }
          if (this._cycle !== prevCycle)
            if (!suppressEvents)
              if (!this._gc)
                if (this.vars.onRepeat) {
                  this._callback("onRepeat");
                }
          if (callback)
            if (!this._gc || force) {
              if (time < 0 && this._startAt && !this._onUpdate && this._startTime) {
                this._startAt.render(time, suppressEvents, force);
              }
              if (isComplete) {
                if (this._timeline.autoRemoveChildren) {
                  this._enabled(false, false);
                }
                this._active = false;
              }
              if (!suppressEvents && this.vars[callback]) {
                this._callback(callback);
              }
              if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
                this._rawPrevTime = 0;
              }
            }
        };
        TweenMax.to = function(target, duration, vars) {
          return new TweenMax(target, duration, vars);
        };
        TweenMax.from = function(target, duration, vars) {
          vars.runBackwards = true;
          vars.immediateRender = (vars.immediateRender != false);
          return new TweenMax(target, duration, vars);
        };
        TweenMax.fromTo = function(target, duration, fromVars, toVars) {
          toVars.startAt = fromVars;
          toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
          return new TweenMax(target, duration, toVars);
        };
        TweenMax.staggerTo = TweenMax.allTo = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
          stagger = stagger || 0;
          var delay = 0,
              a = [],
              finalComplete = function() {
                if (vars.onComplete) {
                  vars.onComplete.apply(vars.onCompleteScope || this, arguments);
                }
                onCompleteAll.apply(onCompleteAllScope || vars.callbackScope || this, onCompleteAllParams || _blankArray);
              },
              cycle = vars.cycle,
              fromCycle = (vars.startAt && vars.startAt.cycle),
              l,
              copy,
              i,
              p;
          if (!_isArray(targets)) {
            if (typeof(targets) === "string") {
              targets = TweenLite.selector(targets) || targets;
            }
            if (_isSelector(targets)) {
              targets = _slice(targets);
            }
          }
          targets = targets || [];
          if (stagger < 0) {
            targets = _slice(targets);
            targets.reverse();
            stagger *= -1;
          }
          l = targets.length - 1;
          for (i = 0; i <= l; i++) {
            copy = {};
            for (p in vars) {
              copy[p] = vars[p];
            }
            if (cycle) {
              _applyCycle(copy, targets, i);
              if (copy.duration != null) {
                duration = copy.duration;
                delete copy.duration;
              }
            }
            if (fromCycle) {
              fromCycle = copy.startAt = {};
              for (p in vars.startAt) {
                fromCycle[p] = vars.startAt[p];
              }
              _applyCycle(copy.startAt, targets, i);
            }
            copy.delay = delay + (copy.delay || 0);
            if (i === l && onCompleteAll) {
              copy.onComplete = finalComplete;
            }
            a[i] = new TweenMax(targets[i], duration, copy);
            delay += stagger;
          }
          return a;
        };
        TweenMax.staggerFrom = TweenMax.allFrom = function(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
          vars.runBackwards = true;
          vars.immediateRender = (vars.immediateRender != false);
          return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
        };
        TweenMax.staggerFromTo = TweenMax.allFromTo = function(targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
          toVars.startAt = fromVars;
          toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
          return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
        };
        TweenMax.delayedCall = function(delay, callback, params, scope, useFrames) {
          return new TweenMax(callback, 0, {
            delay: delay,
            onComplete: callback,
            onCompleteParams: params,
            callbackScope: scope,
            onReverseComplete: callback,
            onReverseCompleteParams: params,
            immediateRender: false,
            useFrames: useFrames,
            overwrite: 0
          });
        };
        TweenMax.set = function(target, vars) {
          return new TweenMax(target, 0, vars);
        };
        TweenMax.isTweening = function(target) {
          return (TweenLite.getTweensOf(target, true).length > 0);
        };
        var _getChildrenOf = function(timeline, includeTimelines) {
          var a = [],
              cnt = 0,
              tween = timeline._first;
          while (tween) {
            if (tween instanceof TweenLite) {
              a[cnt++] = tween;
            } else {
              if (includeTimelines) {
                a[cnt++] = tween;
              }
              a = a.concat(_getChildrenOf(tween, includeTimelines));
              cnt = a.length;
            }
            tween = tween._next;
          }
          return a;
        },
            getAllTweens = TweenMax.getAllTweens = function(includeTimelines) {
              return _getChildrenOf(Animation._rootTimeline, includeTimelines).concat(_getChildrenOf(Animation._rootFramesTimeline, includeTimelines));
            };
        TweenMax.killAll = function(complete, tweens, delayedCalls, timelines) {
          if (tweens == null) {
            tweens = true;
          }
          if (delayedCalls == null) {
            delayedCalls = true;
          }
          var a = getAllTweens((timelines != false)),
              l = a.length,
              allTrue = (tweens && delayedCalls && timelines),
              isDC,
              tween,
              i;
          for (i = 0; i < l; i++) {
            tween = a[i];
            if (allTrue || (tween instanceof SimpleTimeline) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
              if (complete) {
                tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
              } else {
                tween._enabled(false, false);
              }
            }
          }
        };
        TweenMax.killChildTweensOf = function(parent, complete) {
          if (parent == null) {
            return;
          }
          var tl = TweenLiteInternals.tweenLookup,
              a,
              curParent,
              p,
              i,
              l;
          if (typeof(parent) === "string") {
            parent = TweenLite.selector(parent) || parent;
          }
          if (_isSelector(parent)) {
            parent = _slice(parent);
          }
          if (_isArray(parent)) {
            i = parent.length;
            while (--i > -1) {
              TweenMax.killChildTweensOf(parent[i], complete);
            }
            return;
          }
          a = [];
          for (p in tl) {
            curParent = tl[p].target.parentNode;
            while (curParent) {
              if (curParent === parent) {
                a = a.concat(tl[p].tweens);
              }
              curParent = curParent.parentNode;
            }
          }
          l = a.length;
          for (i = 0; i < l; i++) {
            if (complete) {
              a[i].totalTime(a[i].totalDuration());
            }
            a[i]._enabled(false, false);
          }
        };
        var _changePause = function(pause, tweens, delayedCalls, timelines) {
          tweens = (tweens !== false);
          delayedCalls = (delayedCalls !== false);
          timelines = (timelines !== false);
          var a = getAllTweens(timelines),
              allTrue = (tweens && delayedCalls && timelines),
              i = a.length,
              isDC,
              tween;
          while (--i > -1) {
            tween = a[i];
            if (allTrue || (tween instanceof SimpleTimeline) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
              tween.paused(pause);
            }
          }
        };
        TweenMax.pauseAll = function(tweens, delayedCalls, timelines) {
          _changePause(true, tweens, delayedCalls, timelines);
        };
        TweenMax.resumeAll = function(tweens, delayedCalls, timelines) {
          _changePause(false, tweens, delayedCalls, timelines);
        };
        TweenMax.globalTimeScale = function(value) {
          var tl = Animation._rootTimeline,
              t = TweenLite.ticker.time;
          if (!arguments.length) {
            return tl._timeScale;
          }
          value = value || _tinyNum;
          tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
          tl = Animation._rootFramesTimeline;
          t = TweenLite.ticker.frame;
          tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
          tl._timeScale = Animation._rootTimeline._timeScale = value;
          return value;
        };
        p.progress = function(value, suppressEvents) {
          return (!arguments.length) ? this._time / this.duration() : this.totalTime(this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
        };
        p.totalProgress = function(value, suppressEvents) {
          return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * value, suppressEvents);
        };
        p.time = function(value, suppressEvents) {
          if (!arguments.length) {
            return this._time;
          }
          if (this._dirty) {
            this.totalDuration();
          }
          if (value > this._duration) {
            value = this._duration;
          }
          if (this._yoyo && (this._cycle & 1) !== 0) {
            value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
          } else if (this._repeat !== 0) {
            value += this._cycle * (this._duration + this._repeatDelay);
          }
          return this.totalTime(value, suppressEvents);
        };
        p.duration = function(value) {
          if (!arguments.length) {
            return this._duration;
          }
          return Animation.prototype.duration.call(this, value);
        };
        p.totalDuration = function(value) {
          if (!arguments.length) {
            if (this._dirty) {
              this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
              this._dirty = false;
            }
            return this._totalDuration;
          }
          return (this._repeat === -1) ? this : this.duration((value - (this._repeat * this._repeatDelay)) / (this._repeat + 1));
        };
        p.repeat = function(value) {
          if (!arguments.length) {
            return this._repeat;
          }
          this._repeat = value;
          return this._uncache(true);
        };
        p.repeatDelay = function(value) {
          if (!arguments.length) {
            return this._repeatDelay;
          }
          this._repeatDelay = value;
          return this._uncache(true);
        };
        p.yoyo = function(value) {
          if (!arguments.length) {
            return this._yoyo;
          }
          this._yoyo = value;
          return this;
        };
        return TweenMax;
      }, true);
      _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(Animation, SimpleTimeline, TweenLite) {
        var TimelineLite = function(vars) {
          SimpleTimeline.call(this, vars);
          this._labels = {};
          this.autoRemoveChildren = (this.vars.autoRemoveChildren === true);
          this.smoothChildTiming = (this.vars.smoothChildTiming === true);
          this._sortChildren = true;
          this._onUpdate = this.vars.onUpdate;
          var v = this.vars,
              val,
              p;
          for (p in v) {
            val = v[p];
            if (_isArray(val))
              if (val.join("").indexOf("{self}") !== -1) {
                v[p] = this._swapSelfInParams(val);
              }
          }
          if (_isArray(v.tweens)) {
            this.add(v.tweens, 0, v.align, v.stagger);
          }
        },
            _tinyNum = 0.0000000001,
            TweenLiteInternals = TweenLite._internals,
            _internals = TimelineLite._internals = {},
            _isSelector = TweenLiteInternals.isSelector,
            _isArray = TweenLiteInternals.isArray,
            _lazyTweens = TweenLiteInternals.lazyTweens,
            _lazyRender = TweenLiteInternals.lazyRender,
            _globals = _gsScope._gsDefine.globals,
            _copy = function(vars) {
              var copy = {},
                  p;
              for (p in vars) {
                copy[p] = vars[p];
              }
              return copy;
            },
            _applyCycle = function(vars, targets, i) {
              var alt = vars.cycle,
                  p,
                  val;
              for (p in alt) {
                val = alt[p];
                vars[p] = (typeof(val) === "function") ? val.call(targets[i], i) : val[i % val.length];
              }
              delete vars.cycle;
            },
            _pauseCallback = _internals.pauseCallback = function() {},
            _slice = function(a) {
              var b = [],
                  l = a.length,
                  i;
              for (i = 0; i !== l; b.push(a[i++]))
                ;
              return b;
            },
            p = TimelineLite.prototype = new SimpleTimeline();
        TimelineLite.version = "1.19.0";
        p.constructor = TimelineLite;
        p.kill()._gc = p._forcingPlayhead = p._hasPause = false;
        p.to = function(target, duration, vars, position) {
          var Engine = (vars.repeat && _globals.TweenMax) || TweenLite;
          return duration ? this.add(new Engine(target, duration, vars), position) : this.set(target, vars, position);
        };
        p.from = function(target, duration, vars, position) {
          return this.add(((vars.repeat && _globals.TweenMax) || TweenLite).from(target, duration, vars), position);
        };
        p.fromTo = function(target, duration, fromVars, toVars, position) {
          var Engine = (toVars.repeat && _globals.TweenMax) || TweenLite;
          return duration ? this.add(Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
        };
        p.staggerTo = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
          var tl = new TimelineLite({
            onComplete: onCompleteAll,
            onCompleteParams: onCompleteAllParams,
            callbackScope: onCompleteAllScope,
            smoothChildTiming: this.smoothChildTiming
          }),
              cycle = vars.cycle,
              copy,
              i;
          if (typeof(targets) === "string") {
            targets = TweenLite.selector(targets) || targets;
          }
          targets = targets || [];
          if (_isSelector(targets)) {
            targets = _slice(targets);
          }
          stagger = stagger || 0;
          if (stagger < 0) {
            targets = _slice(targets);
            targets.reverse();
            stagger *= -1;
          }
          for (i = 0; i < targets.length; i++) {
            copy = _copy(vars);
            if (copy.startAt) {
              copy.startAt = _copy(copy.startAt);
              if (copy.startAt.cycle) {
                _applyCycle(copy.startAt, targets, i);
              }
            }
            if (cycle) {
              _applyCycle(copy, targets, i);
              if (copy.duration != null) {
                duration = copy.duration;
                delete copy.duration;
              }
            }
            tl.to(targets[i], duration, copy, i * stagger);
          }
          return this.add(tl, position);
        };
        p.staggerFrom = function(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
          vars.immediateRender = (vars.immediateRender != false);
          vars.runBackwards = true;
          return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
        };
        p.staggerFromTo = function(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
          toVars.startAt = fromVars;
          toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
          return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
        };
        p.call = function(callback, params, scope, position) {
          return this.add(TweenLite.delayedCall(0, callback, params, scope), position);
        };
        p.set = function(target, vars, position) {
          position = this._parseTimeOrLabel(position, 0, true);
          if (vars.immediateRender == null) {
            vars.immediateRender = (position === this._time && !this._paused);
          }
          return this.add(new TweenLite(target, 0, vars), position);
        };
        TimelineLite.exportRoot = function(vars, ignoreDelayedCalls) {
          vars = vars || {};
          if (vars.smoothChildTiming == null) {
            vars.smoothChildTiming = true;
          }
          var tl = new TimelineLite(vars),
              root = tl._timeline,
              tween,
              next;
          if (ignoreDelayedCalls == null) {
            ignoreDelayedCalls = true;
          }
          root._remove(tl, true);
          tl._startTime = 0;
          tl._rawPrevTime = tl._time = tl._totalTime = root._time;
          tween = root._first;
          while (tween) {
            next = tween._next;
            if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
              tl.add(tween, tween._startTime - tween._delay);
            }
            tween = next;
          }
          root.add(tl, 0);
          return tl;
        };
        p.add = function(value, position, align, stagger) {
          var curTime,
              l,
              i,
              child,
              tl,
              beforeRawTime;
          if (typeof(position) !== "number") {
            position = this._parseTimeOrLabel(position, 0, true, value);
          }
          if (!(value instanceof Animation)) {
            if ((value instanceof Array) || (value && value.push && _isArray(value))) {
              align = align || "normal";
              stagger = stagger || 0;
              curTime = position;
              l = value.length;
              for (i = 0; i < l; i++) {
                if (_isArray(child = value[i])) {
                  child = new TimelineLite({tweens: child});
                }
                this.add(child, curTime);
                if (typeof(child) !== "string" && typeof(child) !== "function") {
                  if (align === "sequence") {
                    curTime = child._startTime + (child.totalDuration() / child._timeScale);
                  } else if (align === "start") {
                    child._startTime -= child.delay();
                  }
                }
                curTime += stagger;
              }
              return this._uncache(true);
            } else if (typeof(value) === "string") {
              return this.addLabel(value, position);
            } else if (typeof(value) === "function") {
              value = TweenLite.delayedCall(0, value);
            } else {
              throw ("Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.");
            }
          }
          SimpleTimeline.prototype.add.call(this, value, position);
          if (this._gc || this._time === this._duration)
            if (!this._paused)
              if (this._duration < this.duration()) {
                tl = this;
                beforeRawTime = (tl.rawTime() > value._startTime);
                while (tl._timeline) {
                  if (beforeRawTime && tl._timeline.smoothChildTiming) {
                    tl.totalTime(tl._totalTime, true);
                  } else if (tl._gc) {
                    tl._enabled(true, false);
                  }
                  tl = tl._timeline;
                }
              }
          return this;
        };
        p.remove = function(value) {
          if (value instanceof Animation) {
            this._remove(value, false);
            var tl = value._timeline = value.vars.useFrames ? Animation._rootFramesTimeline : Animation._rootTimeline;
            value._startTime = (value._paused ? value._pauseTime : tl._time) - ((!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale);
            return this;
          } else if (value instanceof Array || (value && value.push && _isArray(value))) {
            var i = value.length;
            while (--i > -1) {
              this.remove(value[i]);
            }
            return this;
          } else if (typeof(value) === "string") {
            return this.removeLabel(value);
          }
          return this.kill(null, value);
        };
        p._remove = function(tween, skipDisable) {
          SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
          var last = this._last;
          if (!last) {
            this._time = this._totalTime = this._duration = this._totalDuration = 0;
          } else if (this._time > last._startTime + last._totalDuration / last._timeScale) {
            this._time = this.duration();
            this._totalTime = this._totalDuration;
          }
          return this;
        };
        p.append = function(value, offsetOrLabel) {
          return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
        };
        p.insert = p.insertMultiple = function(value, position, align, stagger) {
          return this.add(value, position || 0, align, stagger);
        };
        p.appendMultiple = function(tweens, offsetOrLabel, align, stagger) {
          return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
        };
        p.addLabel = function(label, position) {
          this._labels[label] = this._parseTimeOrLabel(position);
          return this;
        };
        p.addPause = function(position, callback, params, scope) {
          var t = TweenLite.delayedCall(0, _pauseCallback, params, scope || this);
          t.vars.onComplete = t.vars.onReverseComplete = callback;
          t.data = "isPause";
          this._hasPause = true;
          return this.add(t, position);
        };
        p.removeLabel = function(label) {
          delete this._labels[label];
          return this;
        };
        p.getLabelTime = function(label) {
          return (this._labels[label] != null) ? this._labels[label] : -1;
        };
        p._parseTimeOrLabel = function(timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
          var i;
          if (ignore instanceof Animation && ignore.timeline === this) {
            this.remove(ignore);
          } else if (ignore && ((ignore instanceof Array) || (ignore.push && _isArray(ignore)))) {
            i = ignore.length;
            while (--i > -1) {
              if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
                this.remove(ignore[i]);
              }
            }
          }
          if (typeof(offsetOrLabel) === "string") {
            return this._parseTimeOrLabel(offsetOrLabel, (appendIfAbsent && typeof(timeOrLabel) === "number" && this._labels[offsetOrLabel] == null) ? timeOrLabel - this.duration() : 0, appendIfAbsent);
          }
          offsetOrLabel = offsetOrLabel || 0;
          if (typeof(timeOrLabel) === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) {
            i = timeOrLabel.indexOf("=");
            if (i === -1) {
              if (this._labels[timeOrLabel] == null) {
                return appendIfAbsent ? (this._labels[timeOrLabel] = this.duration() + offsetOrLabel) : offsetOrLabel;
              }
              return this._labels[timeOrLabel] + offsetOrLabel;
            }
            offsetOrLabel = parseInt(timeOrLabel.charAt(i - 1) + "1", 10) * Number(timeOrLabel.substr(i + 1));
            timeOrLabel = (i > 1) ? this._parseTimeOrLabel(timeOrLabel.substr(0, i - 1), 0, appendIfAbsent) : this.duration();
          } else if (timeOrLabel == null) {
            timeOrLabel = this.duration();
          }
          return Number(timeOrLabel) + offsetOrLabel;
        };
        p.seek = function(position, suppressEvents) {
          return this.totalTime((typeof(position) === "number") ? position : this._parseTimeOrLabel(position), (suppressEvents !== false));
        };
        p.stop = function() {
          return this.paused(true);
        };
        p.gotoAndPlay = function(position, suppressEvents) {
          return this.play(position, suppressEvents);
        };
        p.gotoAndStop = function(position, suppressEvents) {
          return this.pause(position, suppressEvents);
        };
        p.render = function(time, suppressEvents, force) {
          if (this._gc) {
            this._enabled(true, false);
          }
          var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
              prevTime = this._time,
              prevStart = this._startTime,
              prevTimeScale = this._timeScale,
              prevPaused = this._paused,
              tween,
              isComplete,
              next,
              callback,
              internalForce,
              pauseTween,
              curTime;
          if (time >= totalDur - 0.0000001) {
            this._totalTime = this._time = totalDur;
            if (!this._reversed)
              if (!this._hasPausedChild()) {
                isComplete = true;
                callback = "onComplete";
                internalForce = !!this._timeline.autoRemoveChildren;
                if (this._duration === 0)
                  if ((time <= 0 && time >= -0.0000001) || this._rawPrevTime < 0 || this._rawPrevTime === _tinyNum)
                    if (this._rawPrevTime !== time && this._first) {
                      internalForce = true;
                      if (this._rawPrevTime > _tinyNum) {
                        callback = "onReverseComplete";
                      }
                    }
              }
            this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum;
            time = totalDur + 0.0001;
          } else if (time < 0.0000001) {
            this._totalTime = this._time = 0;
            if (prevTime !== 0 || (this._duration === 0 && this._rawPrevTime !== _tinyNum && (this._rawPrevTime > 0 || (time < 0 && this._rawPrevTime >= 0)))) {
              callback = "onReverseComplete";
              isComplete = this._reversed;
            }
            if (time < 0) {
              this._active = false;
              if (this._timeline.autoRemoveChildren && this._reversed) {
                internalForce = isComplete = true;
                callback = "onReverseComplete";
              } else if (this._rawPrevTime >= 0 && this._first) {
                internalForce = true;
              }
              this._rawPrevTime = time;
            } else {
              this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum;
              if (time === 0 && isComplete) {
                tween = this._first;
                while (tween && tween._startTime === 0) {
                  if (!tween._duration) {
                    isComplete = false;
                  }
                  tween = tween._next;
                }
              }
              time = 0;
              if (!this._initted) {
                internalForce = true;
              }
            }
          } else {
            if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
              if (time >= prevTime) {
                tween = this._first;
                while (tween && tween._startTime <= time && !pauseTween) {
                  if (!tween._duration)
                    if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
                      pauseTween = tween;
                    }
                  tween = tween._next;
                }
              } else {
                tween = this._last;
                while (tween && tween._startTime >= time && !pauseTween) {
                  if (!tween._duration)
                    if (tween.data === "isPause" && tween._rawPrevTime > 0) {
                      pauseTween = tween;
                    }
                  tween = tween._prev;
                }
              }
              if (pauseTween) {
                this._time = time = pauseTween._startTime;
                this._totalTime = time + (this._cycle * (this._totalDuration + this._repeatDelay));
              }
            }
            this._totalTime = this._time = this._rawPrevTime = time;
          }
          if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
            return;
          } else if (!this._initted) {
            this._initted = true;
          }
          if (!this._active)
            if (!this._paused && this._time !== prevTime && time > 0) {
              this._active = true;
            }
          if (prevTime === 0)
            if (this.vars.onStart)
              if (this._time !== 0 || !this._duration)
                if (!suppressEvents) {
                  this._callback("onStart");
                }
          curTime = this._time;
          if (curTime >= prevTime) {
            tween = this._first;
            while (tween) {
              next = tween._next;
              if (curTime !== this._time || (this._paused && !prevPaused)) {
                break;
              } else if (tween._active || (tween._startTime <= curTime && !tween._paused && !tween._gc)) {
                if (pauseTween === tween) {
                  this.pause();
                }
                if (!tween._reversed) {
                  tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                } else {
                  tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                }
              }
              tween = next;
            }
          } else {
            tween = this._last;
            while (tween) {
              next = tween._prev;
              if (curTime !== this._time || (this._paused && !prevPaused)) {
                break;
              } else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
                if (pauseTween === tween) {
                  pauseTween = tween._prev;
                  while (pauseTween && pauseTween.endTime() > this._time) {
                    pauseTween.render((pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
                    pauseTween = pauseTween._prev;
                  }
                  pauseTween = null;
                  this.pause();
                }
                if (!tween._reversed) {
                  tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                } else {
                  tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                }
              }
              tween = next;
            }
          }
          if (this._onUpdate)
            if (!suppressEvents) {
              if (_lazyTweens.length) {
                _lazyRender();
              }
              this._callback("onUpdate");
            }
          if (callback)
            if (!this._gc)
              if (prevStart === this._startTime || prevTimeScale !== this._timeScale)
                if (this._time === 0 || totalDur >= this.totalDuration()) {
                  if (isComplete) {
                    if (_lazyTweens.length) {
                      _lazyRender();
                    }
                    if (this._timeline.autoRemoveChildren) {
                      this._enabled(false, false);
                    }
                    this._active = false;
                  }
                  if (!suppressEvents && this.vars[callback]) {
                    this._callback(callback);
                  }
                }
        };
        p._hasPausedChild = function() {
          var tween = this._first;
          while (tween) {
            if (tween._paused || ((tween instanceof TimelineLite) && tween._hasPausedChild())) {
              return true;
            }
            tween = tween._next;
          }
          return false;
        };
        p.getChildren = function(nested, tweens, timelines, ignoreBeforeTime) {
          ignoreBeforeTime = ignoreBeforeTime || -9999999999;
          var a = [],
              tween = this._first,
              cnt = 0;
          while (tween) {
            if (tween._startTime < ignoreBeforeTime) {} else if (tween instanceof TweenLite) {
              if (tweens !== false) {
                a[cnt++] = tween;
              }
            } else {
              if (timelines !== false) {
                a[cnt++] = tween;
              }
              if (nested !== false) {
                a = a.concat(tween.getChildren(true, tweens, timelines));
                cnt = a.length;
              }
            }
            tween = tween._next;
          }
          return a;
        };
        p.getTweensOf = function(target, nested) {
          var disabled = this._gc,
              a = [],
              cnt = 0,
              tweens,
              i;
          if (disabled) {
            this._enabled(true, true);
          }
          tweens = TweenLite.getTweensOf(target);
          i = tweens.length;
          while (--i > -1) {
            if (tweens[i].timeline === this || (nested && this._contains(tweens[i]))) {
              a[cnt++] = tweens[i];
            }
          }
          if (disabled) {
            this._enabled(false, true);
          }
          return a;
        };
        p.recent = function() {
          return this._recent;
        };
        p._contains = function(tween) {
          var tl = tween.timeline;
          while (tl) {
            if (tl === this) {
              return true;
            }
            tl = tl.timeline;
          }
          return false;
        };
        p.shiftChildren = function(amount, adjustLabels, ignoreBeforeTime) {
          ignoreBeforeTime = ignoreBeforeTime || 0;
          var tween = this._first,
              labels = this._labels,
              p;
          while (tween) {
            if (tween._startTime >= ignoreBeforeTime) {
              tween._startTime += amount;
            }
            tween = tween._next;
          }
          if (adjustLabels) {
            for (p in labels) {
              if (labels[p] >= ignoreBeforeTime) {
                labels[p] += amount;
              }
            }
          }
          return this._uncache(true);
        };
        p._kill = function(vars, target) {
          if (!vars && !target) {
            return this._enabled(false, false);
          }
          var tweens = (!target) ? this.getChildren(true, true, false) : this.getTweensOf(target),
              i = tweens.length,
              changed = false;
          while (--i > -1) {
            if (tweens[i]._kill(vars, target)) {
              changed = true;
            }
          }
          return changed;
        };
        p.clear = function(labels) {
          var tweens = this.getChildren(false, true, true),
              i = tweens.length;
          this._time = this._totalTime = 0;
          while (--i > -1) {
            tweens[i]._enabled(false, false);
          }
          if (labels !== false) {
            this._labels = {};
          }
          return this._uncache(true);
        };
        p.invalidate = function() {
          var tween = this._first;
          while (tween) {
            tween.invalidate();
            tween = tween._next;
          }
          return Animation.prototype.invalidate.call(this);
          ;
        };
        p._enabled = function(enabled, ignoreTimeline) {
          if (enabled === this._gc) {
            var tween = this._first;
            while (tween) {
              tween._enabled(enabled, true);
              tween = tween._next;
            }
          }
          return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline);
        };
        p.totalTime = function(time, suppressEvents, uncapped) {
          this._forcingPlayhead = true;
          var val = Animation.prototype.totalTime.apply(this, arguments);
          this._forcingPlayhead = false;
          return val;
        };
        p.duration = function(value) {
          if (!arguments.length) {
            if (this._dirty) {
              this.totalDuration();
            }
            return this._duration;
          }
          if (this.duration() !== 0 && value !== 0) {
            this.timeScale(this._duration / value);
          }
          return this;
        };
        p.totalDuration = function(value) {
          if (!arguments.length) {
            if (this._dirty) {
              var max = 0,
                  tween = this._last,
                  prevStart = 999999999999,
                  prev,
                  end;
              while (tween) {
                prev = tween._prev;
                if (tween._dirty) {
                  tween.totalDuration();
                }
                if (tween._startTime > prevStart && this._sortChildren && !tween._paused) {
                  this.add(tween, tween._startTime - tween._delay);
                } else {
                  prevStart = tween._startTime;
                }
                if (tween._startTime < 0 && !tween._paused) {
                  max -= tween._startTime;
                  if (this._timeline.smoothChildTiming) {
                    this._startTime += tween._startTime / this._timeScale;
                  }
                  this.shiftChildren(-tween._startTime, false, -9999999999);
                  prevStart = 0;
                }
                end = tween._startTime + (tween._totalDuration / tween._timeScale);
                if (end > max) {
                  max = end;
                }
                tween = prev;
              }
              this._duration = this._totalDuration = max;
              this._dirty = false;
            }
            return this._totalDuration;
          }
          return (value && this.totalDuration()) ? this.timeScale(this._totalDuration / value) : this;
        };
        p.paused = function(value) {
          if (!value) {
            var tween = this._first,
                time = this._time;
            while (tween) {
              if (tween._startTime === time && tween.data === "isPause") {
                tween._rawPrevTime = 0;
              }
              tween = tween._next;
            }
          }
          return Animation.prototype.paused.apply(this, arguments);
        };
        p.usesFrames = function() {
          var tl = this._timeline;
          while (tl._timeline) {
            tl = tl._timeline;
          }
          return (tl === Animation._rootFramesTimeline);
        };
        p.rawTime = function() {
          return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
        };
        return TimelineLite;
      }, true);
      _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(TimelineLite, TweenLite, Ease) {
        var TimelineMax = function(vars) {
          TimelineLite.call(this, vars);
          this._repeat = this.vars.repeat || 0;
          this._repeatDelay = this.vars.repeatDelay || 0;
          this._cycle = 0;
          this._yoyo = (this.vars.yoyo === true);
          this._dirty = true;
        },
            _tinyNum = 0.0000000001,
            TweenLiteInternals = TweenLite._internals,
            _lazyTweens = TweenLiteInternals.lazyTweens,
            _lazyRender = TweenLiteInternals.lazyRender,
            _globals = _gsScope._gsDefine.globals,
            _easeNone = new Ease(null, null, 1, 0),
            p = TimelineMax.prototype = new TimelineLite();
        p.constructor = TimelineMax;
        p.kill()._gc = false;
        TimelineMax.version = "1.19.0";
        p.invalidate = function() {
          this._yoyo = (this.vars.yoyo === true);
          this._repeat = this.vars.repeat || 0;
          this._repeatDelay = this.vars.repeatDelay || 0;
          this._uncache(true);
          return TimelineLite.prototype.invalidate.call(this);
        };
        p.addCallback = function(callback, position, params, scope) {
          return this.add(TweenLite.delayedCall(0, callback, params, scope), position);
        };
        p.removeCallback = function(callback, position) {
          if (callback) {
            if (position == null) {
              this._kill(null, callback);
            } else {
              var a = this.getTweensOf(callback, false),
                  i = a.length,
                  time = this._parseTimeOrLabel(position);
              while (--i > -1) {
                if (a[i]._startTime === time) {
                  a[i]._enabled(false, false);
                }
              }
            }
          }
          return this;
        };
        p.removePause = function(position) {
          return this.removeCallback(TimelineLite._internals.pauseCallback, position);
        };
        p.tweenTo = function(position, vars) {
          vars = vars || {};
          var copy = {
            ease: _easeNone,
            useFrames: this.usesFrames(),
            immediateRender: false
          },
              Engine = (vars.repeat && _globals.TweenMax) || TweenLite,
              duration,
              p,
              t;
          for (p in vars) {
            copy[p] = vars[p];
          }
          copy.time = this._parseTimeOrLabel(position);
          duration = (Math.abs(Number(copy.time) - this._time) / this._timeScale) || 0.001;
          t = new Engine(this, duration, copy);
          copy.onStart = function() {
            t.target.paused(true);
            if (t.vars.time !== t.target.time() && duration === t.duration()) {
              t.duration(Math.abs(t.vars.time - t.target.time()) / t.target._timeScale);
            }
            if (vars.onStart) {
              t._callback("onStart");
            }
          };
          return t;
        };
        p.tweenFromTo = function(fromPosition, toPosition, vars) {
          vars = vars || {};
          fromPosition = this._parseTimeOrLabel(fromPosition);
          vars.startAt = {
            onComplete: this.seek,
            onCompleteParams: [fromPosition],
            callbackScope: this
          };
          vars.immediateRender = (vars.immediateRender !== false);
          var t = this.tweenTo(toPosition, vars);
          return t.duration((Math.abs(t.vars.time - fromPosition) / this._timeScale) || 0.001);
        };
        p.render = function(time, suppressEvents, force) {
          if (this._gc) {
            this._enabled(true, false);
          }
          var totalDur = (!this._dirty) ? this._totalDuration : this.totalDuration(),
              dur = this._duration,
              prevTime = this._time,
              prevTotalTime = this._totalTime,
              prevStart = this._startTime,
              prevTimeScale = this._timeScale,
              prevRawPrevTime = this._rawPrevTime,
              prevPaused = this._paused,
              prevCycle = this._cycle,
              tween,
              isComplete,
              next,
              callback,
              internalForce,
              cycleDuration,
              pauseTween,
              curTime;
          if (time >= totalDur - 0.0000001) {
            if (!this._locked) {
              this._totalTime = totalDur;
              this._cycle = this._repeat;
            }
            if (!this._reversed)
              if (!this._hasPausedChild()) {
                isComplete = true;
                callback = "onComplete";
                internalForce = !!this._timeline.autoRemoveChildren;
                if (this._duration === 0)
                  if ((time <= 0 && time >= -0.0000001) || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum)
                    if (prevRawPrevTime !== time && this._first) {
                      internalForce = true;
                      if (prevRawPrevTime > _tinyNum) {
                        callback = "onReverseComplete";
                      }
                    }
              }
            this._rawPrevTime = (this._duration || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum;
            if (this._yoyo && (this._cycle & 1) !== 0) {
              this._time = time = 0;
            } else {
              this._time = dur;
              time = dur + 0.0001;
            }
          } else if (time < 0.0000001) {
            if (!this._locked) {
              this._totalTime = this._cycle = 0;
            }
            this._time = 0;
            if (prevTime !== 0 || (dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || (time < 0 && prevRawPrevTime >= 0)) && !this._locked)) {
              callback = "onReverseComplete";
              isComplete = this._reversed;
            }
            if (time < 0) {
              this._active = false;
              if (this._timeline.autoRemoveChildren && this._reversed) {
                internalForce = isComplete = true;
                callback = "onReverseComplete";
              } else if (prevRawPrevTime >= 0 && this._first) {
                internalForce = true;
              }
              this._rawPrevTime = time;
            } else {
              this._rawPrevTime = (dur || !suppressEvents || time || this._rawPrevTime === time) ? time : _tinyNum;
              if (time === 0 && isComplete) {
                tween = this._first;
                while (tween && tween._startTime === 0) {
                  if (!tween._duration) {
                    isComplete = false;
                  }
                  tween = tween._next;
                }
              }
              time = 0;
              if (!this._initted) {
                internalForce = true;
              }
            }
          } else {
            if (dur === 0 && prevRawPrevTime < 0) {
              internalForce = true;
            }
            this._time = this._rawPrevTime = time;
            if (!this._locked) {
              this._totalTime = time;
              if (this._repeat !== 0) {
                cycleDuration = dur + this._repeatDelay;
                this._cycle = (this._totalTime / cycleDuration) >> 0;
                if (this._cycle !== 0)
                  if (this._cycle === this._totalTime / cycleDuration && prevTotalTime <= time) {
                    this._cycle--;
                  }
                this._time = this._totalTime - (this._cycle * cycleDuration);
                if (this._yoyo)
                  if ((this._cycle & 1) !== 0) {
                    this._time = dur - this._time;
                  }
                if (this._time > dur) {
                  this._time = dur;
                  time = dur + 0.0001;
                } else if (this._time < 0) {
                  this._time = time = 0;
                } else {
                  time = this._time;
                }
              }
            }
            if (this._hasPause && !this._forcingPlayhead && !suppressEvents) {
              time = this._time;
              if (time >= prevTime) {
                tween = this._first;
                while (tween && tween._startTime <= time && !pauseTween) {
                  if (!tween._duration)
                    if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && this._rawPrevTime === 0)) {
                      pauseTween = tween;
                    }
                  tween = tween._next;
                }
              } else {
                tween = this._last;
                while (tween && tween._startTime >= time && !pauseTween) {
                  if (!tween._duration)
                    if (tween.data === "isPause" && tween._rawPrevTime > 0) {
                      pauseTween = tween;
                    }
                  tween = tween._prev;
                }
              }
              if (pauseTween) {
                this._time = time = pauseTween._startTime;
                this._totalTime = time + (this._cycle * (this._totalDuration + this._repeatDelay));
              }
            }
          }
          if (this._cycle !== prevCycle)
            if (!this._locked) {
              var backwards = (this._yoyo && (prevCycle & 1) !== 0),
                  wrap = (backwards === (this._yoyo && (this._cycle & 1) !== 0)),
                  recTotalTime = this._totalTime,
                  recCycle = this._cycle,
                  recRawPrevTime = this._rawPrevTime,
                  recTime = this._time;
              this._totalTime = prevCycle * dur;
              if (this._cycle < prevCycle) {
                backwards = !backwards;
              } else {
                this._totalTime += dur;
              }
              this._time = prevTime;
              this._rawPrevTime = (dur === 0) ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
              this._cycle = prevCycle;
              this._locked = true;
              prevTime = (backwards) ? 0 : dur;
              this.render(prevTime, suppressEvents, (dur === 0));
              if (!suppressEvents)
                if (!this._gc) {
                  if (this.vars.onRepeat) {
                    this._callback("onRepeat");
                  }
                }
              if (prevTime !== this._time) {
                return;
              }
              if (wrap) {
                prevTime = (backwards) ? dur + 0.0001 : -0.0001;
                this.render(prevTime, true, false);
              }
              this._locked = false;
              if (this._paused && !prevPaused) {
                return;
              }
              this._time = recTime;
              this._totalTime = recTotalTime;
              this._cycle = recCycle;
              this._rawPrevTime = recRawPrevTime;
            }
          if ((this._time === prevTime || !this._first) && !force && !internalForce && !pauseTween) {
            if (prevTotalTime !== this._totalTime)
              if (this._onUpdate)
                if (!suppressEvents) {
                  this._callback("onUpdate");
                }
            return;
          } else if (!this._initted) {
            this._initted = true;
          }
          if (!this._active)
            if (!this._paused && this._totalTime !== prevTotalTime && time > 0) {
              this._active = true;
            }
          if (prevTotalTime === 0)
            if (this.vars.onStart)
              if (this._totalTime !== 0 || !this._totalDuration)
                if (!suppressEvents) {
                  this._callback("onStart");
                }
          curTime = this._time;
          if (curTime >= prevTime) {
            tween = this._first;
            while (tween) {
              next = tween._next;
              if (curTime !== this._time || (this._paused && !prevPaused)) {
                break;
              } else if (tween._active || (tween._startTime <= this._time && !tween._paused && !tween._gc)) {
                if (pauseTween === tween) {
                  this.pause();
                }
                if (!tween._reversed) {
                  tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                } else {
                  tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                }
              }
              tween = next;
            }
          } else {
            tween = this._last;
            while (tween) {
              next = tween._prev;
              if (curTime !== this._time || (this._paused && !prevPaused)) {
                break;
              } else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
                if (pauseTween === tween) {
                  pauseTween = tween._prev;
                  while (pauseTween && pauseTween.endTime() > this._time) {
                    pauseTween.render((pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
                    pauseTween = pauseTween._prev;
                  }
                  pauseTween = null;
                  this.pause();
                }
                if (!tween._reversed) {
                  tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                } else {
                  tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                }
              }
              tween = next;
            }
          }
          if (this._onUpdate)
            if (!suppressEvents) {
              if (_lazyTweens.length) {
                _lazyRender();
              }
              this._callback("onUpdate");
            }
          if (callback)
            if (!this._locked)
              if (!this._gc)
                if (prevStart === this._startTime || prevTimeScale !== this._timeScale)
                  if (this._time === 0 || totalDur >= this.totalDuration()) {
                    if (isComplete) {
                      if (_lazyTweens.length) {
                        _lazyRender();
                      }
                      if (this._timeline.autoRemoveChildren) {
                        this._enabled(false, false);
                      }
                      this._active = false;
                    }
                    if (!suppressEvents && this.vars[callback]) {
                      this._callback(callback);
                    }
                  }
        };
        p.getActive = function(nested, tweens, timelines) {
          if (nested == null) {
            nested = true;
          }
          if (tweens == null) {
            tweens = true;
          }
          if (timelines == null) {
            timelines = false;
          }
          var a = [],
              all = this.getChildren(nested, tweens, timelines),
              cnt = 0,
              l = all.length,
              i,
              tween;
          for (i = 0; i < l; i++) {
            tween = all[i];
            if (tween.isActive()) {
              a[cnt++] = tween;
            }
          }
          return a;
        };
        p.getLabelAfter = function(time) {
          if (!time)
            if (time !== 0) {
              time = this._time;
            }
          var labels = this.getLabelsArray(),
              l = labels.length,
              i;
          for (i = 0; i < l; i++) {
            if (labels[i].time > time) {
              return labels[i].name;
            }
          }
          return null;
        };
        p.getLabelBefore = function(time) {
          if (time == null) {
            time = this._time;
          }
          var labels = this.getLabelsArray(),
              i = labels.length;
          while (--i > -1) {
            if (labels[i].time < time) {
              return labels[i].name;
            }
          }
          return null;
        };
        p.getLabelsArray = function() {
          var a = [],
              cnt = 0,
              p;
          for (p in this._labels) {
            a[cnt++] = {
              time: this._labels[p],
              name: p
            };
          }
          a.sort(function(a, b) {
            return a.time - b.time;
          });
          return a;
        };
        p.progress = function(value, suppressEvents) {
          return (!arguments.length) ? this._time / this.duration() : this.totalTime(this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
        };
        p.totalProgress = function(value, suppressEvents) {
          return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * value, suppressEvents);
        };
        p.totalDuration = function(value) {
          if (!arguments.length) {
            if (this._dirty) {
              TimelineLite.prototype.totalDuration.call(this);
              this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
            }
            return this._totalDuration;
          }
          return (this._repeat === -1 || !value) ? this : this.timeScale(this.totalDuration() / value);
        };
        p.time = function(value, suppressEvents) {
          if (!arguments.length) {
            return this._time;
          }
          if (this._dirty) {
            this.totalDuration();
          }
          if (value > this._duration) {
            value = this._duration;
          }
          if (this._yoyo && (this._cycle & 1) !== 0) {
            value = (this._duration - value) + (this._cycle * (this._duration + this._repeatDelay));
          } else if (this._repeat !== 0) {
            value += this._cycle * (this._duration + this._repeatDelay);
          }
          return this.totalTime(value, suppressEvents);
        };
        p.repeat = function(value) {
          if (!arguments.length) {
            return this._repeat;
          }
          this._repeat = value;
          return this._uncache(true);
        };
        p.repeatDelay = function(value) {
          if (!arguments.length) {
            return this._repeatDelay;
          }
          this._repeatDelay = value;
          return this._uncache(true);
        };
        p.yoyo = function(value) {
          if (!arguments.length) {
            return this._yoyo;
          }
          this._yoyo = value;
          return this;
        };
        p.currentLabel = function(value) {
          if (!arguments.length) {
            return this.getLabelBefore(this._time + 0.00000001);
          }
          return this.seek(value, true);
        };
        return TimelineMax;
      }, true);
      (function() {
        var _RAD2DEG = 180 / Math.PI,
            _r1 = [],
            _r2 = [],
            _r3 = [],
            _corProps = {},
            _globals = _gsScope._gsDefine.globals,
            Segment = function(a, b, c, d) {
              if (c === d) {
                c = d - (d - b) / 1000000;
              }
              if (a === b) {
                b = a + (c - a) / 1000000;
              }
              this.a = a;
              this.b = b;
              this.c = c;
              this.d = d;
              this.da = d - a;
              this.ca = c - a;
              this.ba = b - a;
            },
            _correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            cubicToQuadratic = function(a, b, c, d) {
              var q1 = {a: a},
                  q2 = {},
                  q3 = {},
                  q4 = {c: d},
                  mab = (a + b) / 2,
                  mbc = (b + c) / 2,
                  mcd = (c + d) / 2,
                  mabc = (mab + mbc) / 2,
                  mbcd = (mbc + mcd) / 2,
                  m8 = (mbcd - mabc) / 8;
              q1.b = mab + (a - mab) / 4;
              q2.b = mabc + m8;
              q1.c = q2.a = (q1.b + q2.b) / 2;
              q2.c = q3.a = (mabc + mbcd) / 2;
              q3.b = mbcd - m8;
              q4.b = mcd + (d - mcd) / 4;
              q3.c = q4.a = (q3.b + q4.b) / 2;
              return [q1, q2, q3, q4];
            },
            _calculateControlPoints = function(a, curviness, quad, basic, correlate) {
              var l = a.length - 1,
                  ii = 0,
                  cp1 = a[0].a,
                  i,
                  p1,
                  p2,
                  p3,
                  seg,
                  m1,
                  m2,
                  mm,
                  cp2,
                  qb,
                  r1,
                  r2,
                  tl;
              for (i = 0; i < l; i++) {
                seg = a[ii];
                p1 = seg.a;
                p2 = seg.d;
                p3 = a[ii + 1].d;
                if (correlate) {
                  r1 = _r1[i];
                  r2 = _r2[i];
                  tl = ((r2 + r1) * curviness * 0.25) / (basic ? 0.5 : _r3[i] || 0.5);
                  m1 = p2 - (p2 - p1) * (basic ? curviness * 0.5 : (r1 !== 0 ? tl / r1 : 0));
                  m2 = p2 + (p3 - p2) * (basic ? curviness * 0.5 : (r2 !== 0 ? tl / r2 : 0));
                  mm = p2 - (m1 + (((m2 - m1) * ((r1 * 3 / (r1 + r2)) + 0.5) / 4) || 0));
                } else {
                  m1 = p2 - (p2 - p1) * curviness * 0.5;
                  m2 = p2 + (p3 - p2) * curviness * 0.5;
                  mm = p2 - (m1 + m2) / 2;
                }
                m1 += mm;
                m2 += mm;
                seg.c = cp2 = m1;
                if (i !== 0) {
                  seg.b = cp1;
                } else {
                  seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6;
                }
                seg.da = p2 - p1;
                seg.ca = cp2 - p1;
                seg.ba = cp1 - p1;
                if (quad) {
                  qb = cubicToQuadratic(p1, cp1, cp2, p2);
                  a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
                  ii += 4;
                } else {
                  ii++;
                }
                cp1 = m2;
              }
              seg = a[ii];
              seg.b = cp1;
              seg.c = cp1 + (seg.d - cp1) * 0.4;
              seg.da = seg.d - seg.a;
              seg.ca = seg.c - seg.a;
              seg.ba = cp1 - seg.a;
              if (quad) {
                qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
                a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
              }
            },
            _parseAnchors = function(values, p, correlate, prepend) {
              var a = [],
                  l,
                  i,
                  p1,
                  p2,
                  p3,
                  tmp;
              if (prepend) {
                values = [prepend].concat(values);
                i = values.length;
                while (--i > -1) {
                  if (typeof((tmp = values[i][p])) === "string")
                    if (tmp.charAt(1) === "=") {
                      values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2));
                    }
                }
              }
              l = values.length - 2;
              if (l < 0) {
                a[0] = new Segment(values[0][p], 0, 0, values[(l < -1) ? 0 : 1][p]);
                return a;
              }
              for (i = 0; i < l; i++) {
                p1 = values[i][p];
                p2 = values[i + 1][p];
                a[i] = new Segment(p1, 0, 0, p2);
                if (correlate) {
                  p3 = values[i + 2][p];
                  _r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
                  _r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2);
                }
              }
              a[i] = new Segment(values[i][p], 0, 0, values[i + 1][p]);
              return a;
            },
            bezierThrough = function(values, curviness, quadratic, basic, correlate, prepend) {
              var obj = {},
                  props = [],
                  first = prepend || values[0],
                  i,
                  p,
                  a,
                  j,
                  r,
                  l,
                  seamless,
                  last;
              correlate = (typeof(correlate) === "string") ? "," + correlate + "," : _correlate;
              if (curviness == null) {
                curviness = 1;
              }
              for (p in values[0]) {
                props.push(p);
              }
              if (values.length > 1) {
                last = values[values.length - 1];
                seamless = true;
                i = props.length;
                while (--i > -1) {
                  p = props[i];
                  if (Math.abs(first[p] - last[p]) > 0.05) {
                    seamless = false;
                    break;
                  }
                }
                if (seamless) {
                  values = values.concat();
                  if (prepend) {
                    values.unshift(prepend);
                  }
                  values.push(values[1]);
                  prepend = values[values.length - 3];
                }
              }
              _r1.length = _r2.length = _r3.length = 0;
              i = props.length;
              while (--i > -1) {
                p = props[i];
                _corProps[p] = (correlate.indexOf("," + p + ",") !== -1);
                obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
              }
              i = _r1.length;
              while (--i > -1) {
                _r1[i] = Math.sqrt(_r1[i]);
                _r2[i] = Math.sqrt(_r2[i]);
              }
              if (!basic) {
                i = props.length;
                while (--i > -1) {
                  if (_corProps[p]) {
                    a = obj[props[i]];
                    l = a.length - 1;
                    for (j = 0; j < l; j++) {
                      r = (a[j + 1].da / _r2[j] + a[j].da / _r1[j]) || 0;
                      _r3[j] = (_r3[j] || 0) + r * r;
                    }
                  }
                }
                i = _r3.length;
                while (--i > -1) {
                  _r3[i] = Math.sqrt(_r3[i]);
                }
              }
              i = props.length;
              j = quadratic ? 4 : 1;
              while (--i > -1) {
                p = props[i];
                a = obj[p];
                _calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]);
                if (seamless) {
                  a.splice(0, j);
                  a.splice(a.length - j, j);
                }
              }
              return obj;
            },
            _parseBezierData = function(values, type, prepend) {
              type = type || "soft";
              var obj = {},
                  inc = (type === "cubic") ? 3 : 2,
                  soft = (type === "soft"),
                  props = [],
                  a,
                  b,
                  c,
                  d,
                  cur,
                  i,
                  j,
                  l,
                  p,
                  cnt,
                  tmp;
              if (soft && prepend) {
                values = [prepend].concat(values);
              }
              if (values == null || values.length < inc + 1) {
                throw "invalid Bezier data";
              }
              for (p in values[0]) {
                props.push(p);
              }
              i = props.length;
              while (--i > -1) {
                p = props[i];
                obj[p] = cur = [];
                cnt = 0;
                l = values.length;
                for (j = 0; j < l; j++) {
                  a = (prepend == null) ? values[j][p] : (typeof((tmp = values[j][p])) === "string" && tmp.charAt(1) === "=") ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
                  if (soft)
                    if (j > 1)
                      if (j < l - 1) {
                        cur[cnt++] = (a + cur[cnt - 2]) / 2;
                      }
                  cur[cnt++] = a;
                }
                l = cnt - inc + 1;
                cnt = 0;
                for (j = 0; j < l; j += inc) {
                  a = cur[j];
                  b = cur[j + 1];
                  c = cur[j + 2];
                  d = (inc === 2) ? 0 : cur[j + 3];
                  cur[cnt++] = tmp = (inc === 3) ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
                }
                cur.length = cnt;
              }
              return obj;
            },
            _addCubicLengths = function(a, steps, resolution) {
              var inc = 1 / resolution,
                  j = a.length,
                  d,
                  d1,
                  s,
                  da,
                  ca,
                  ba,
                  p,
                  i,
                  inv,
                  bez,
                  index;
              while (--j > -1) {
                bez = a[j];
                s = bez.a;
                da = bez.d - s;
                ca = bez.c - s;
                ba = bez.b - s;
                d = d1 = 0;
                for (i = 1; i <= resolution; i++) {
                  p = inc * i;
                  inv = 1 - p;
                  d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p);
                  index = j * resolution + i - 1;
                  steps[index] = (steps[index] || 0) + d * d;
                }
              }
            },
            _parseLengthData = function(obj, resolution) {
              resolution = resolution >> 0 || 6;
              var a = [],
                  lengths = [],
                  d = 0,
                  total = 0,
                  threshold = resolution - 1,
                  segments = [],
                  curLS = [],
                  p,
                  i,
                  l,
                  index;
              for (p in obj) {
                _addCubicLengths(obj[p], a, resolution);
              }
              l = a.length;
              for (i = 0; i < l; i++) {
                d += Math.sqrt(a[i]);
                index = i % resolution;
                curLS[index] = d;
                if (index === threshold) {
                  total += d;
                  index = (i / resolution) >> 0;
                  segments[index] = curLS;
                  lengths[index] = total;
                  d = 0;
                  curLS = [];
                }
              }
              return {
                length: total,
                lengths: lengths,
                segments: segments
              };
            },
            BezierPlugin = _gsScope._gsDefine.plugin({
              propName: "bezier",
              priority: -1,
              version: "1.3.7",
              API: 2,
              global: true,
              init: function(target, vars, tween) {
                this._target = target;
                if (vars instanceof Array) {
                  vars = {values: vars};
                }
                this._func = {};
                this._mod = {};
                this._props = [];
                this._timeRes = (vars.timeResolution == null) ? 6 : parseInt(vars.timeResolution, 10);
                var values = vars.values || [],
                    first = {},
                    second = values[0],
                    autoRotate = vars.autoRotate || tween.vars.orientToBezier,
                    p,
                    isFunc,
                    i,
                    j,
                    prepend;
                this._autoRotate = autoRotate ? (autoRotate instanceof Array) ? autoRotate : [["x", "y", "rotation", ((autoRotate === true) ? 0 : Number(autoRotate) || 0)]] : null;
                for (p in second) {
                  this._props.push(p);
                }
                i = this._props.length;
                while (--i > -1) {
                  p = this._props[i];
                  this._overwriteProps.push(p);
                  isFunc = this._func[p] = (typeof(target[p]) === "function");
                  first[p] = (!isFunc) ? parseFloat(target[p]) : target[((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3))]();
                  if (!prepend)
                    if (first[p] !== values[0][p]) {
                      prepend = first;
                    }
                }
                this._beziers = (vars.type !== "cubic" && vars.type !== "quadratic" && vars.type !== "soft") ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, false, (vars.type === "thruBasic"), vars.correlate, prepend) : _parseBezierData(values, vars.type, first);
                this._segCount = this._beziers[p].length;
                if (this._timeRes) {
                  var ld = _parseLengthData(this._beziers, this._timeRes);
                  this._length = ld.length;
                  this._lengths = ld.lengths;
                  this._segments = ld.segments;
                  this._l1 = this._li = this._s1 = this._si = 0;
                  this._l2 = this._lengths[0];
                  this._curSeg = this._segments[0];
                  this._s2 = this._curSeg[0];
                  this._prec = 1 / this._curSeg.length;
                }
                if ((autoRotate = this._autoRotate)) {
                  this._initialRotations = [];
                  if (!(autoRotate[0] instanceof Array)) {
                    this._autoRotate = autoRotate = [autoRotate];
                  }
                  i = autoRotate.length;
                  while (--i > -1) {
                    for (j = 0; j < 3; j++) {
                      p = autoRotate[i][j];
                      this._func[p] = (typeof(target[p]) === "function") ? target[((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3))] : false;
                    }
                    p = autoRotate[i][2];
                    this._initialRotations[i] = (this._func[p] ? this._func[p].call(this._target) : this._target[p]) || 0;
                    this._overwriteProps.push(p);
                  }
                }
                this._startRatio = tween.vars.runBackwards ? 1 : 0;
                return true;
              },
              set: function(v) {
                var segments = this._segCount,
                    func = this._func,
                    target = this._target,
                    notStart = (v !== this._startRatio),
                    curIndex,
                    inv,
                    i,
                    p,
                    b,
                    t,
                    val,
                    l,
                    lengths,
                    curSeg;
                if (!this._timeRes) {
                  curIndex = (v < 0) ? 0 : (v >= 1) ? segments - 1 : (segments * v) >> 0;
                  t = (v - (curIndex * (1 / segments))) * segments;
                } else {
                  lengths = this._lengths;
                  curSeg = this._curSeg;
                  v *= this._length;
                  i = this._li;
                  if (v > this._l2 && i < segments - 1) {
                    l = segments - 1;
                    while (i < l && (this._l2 = lengths[++i]) <= v) {}
                    this._l1 = lengths[i - 1];
                    this._li = i;
                    this._curSeg = curSeg = this._segments[i];
                    this._s2 = curSeg[(this._s1 = this._si = 0)];
                  } else if (v < this._l1 && i > 0) {
                    while (i > 0 && (this._l1 = lengths[--i]) >= v) {}
                    if (i === 0 && v < this._l1) {
                      this._l1 = 0;
                    } else {
                      i++;
                    }
                    this._l2 = lengths[i];
                    this._li = i;
                    this._curSeg = curSeg = this._segments[i];
                    this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
                    this._s2 = curSeg[this._si];
                  }
                  curIndex = i;
                  v -= this._l1;
                  i = this._si;
                  if (v > this._s2 && i < curSeg.length - 1) {
                    l = curSeg.length - 1;
                    while (i < l && (this._s2 = curSeg[++i]) <= v) {}
                    this._s1 = curSeg[i - 1];
                    this._si = i;
                  } else if (v < this._s1 && i > 0) {
                    while (i > 0 && (this._s1 = curSeg[--i]) >= v) {}
                    if (i === 0 && v < this._s1) {
                      this._s1 = 0;
                    } else {
                      i++;
                    }
                    this._s2 = curSeg[i];
                    this._si = i;
                  }
                  t = ((i + (v - this._s1) / (this._s2 - this._s1)) * this._prec) || 0;
                }
                inv = 1 - t;
                i = this._props.length;
                while (--i > -1) {
                  p = this._props[i];
                  b = this._beziers[p][curIndex];
                  val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;
                  if (this._mod[p]) {
                    val = this._mod[p](val, target);
                  }
                  if (func[p]) {
                    target[p](val);
                  } else {
                    target[p] = val;
                  }
                }
                if (this._autoRotate) {
                  var ar = this._autoRotate,
                      b2,
                      x1,
                      y1,
                      x2,
                      y2,
                      add,
                      conv;
                  i = ar.length;
                  while (--i > -1) {
                    p = ar[i][2];
                    add = ar[i][3] || 0;
                    conv = (ar[i][4] === true) ? 1 : _RAD2DEG;
                    b = this._beziers[ar[i][0]];
                    b2 = this._beziers[ar[i][1]];
                    if (b && b2) {
                      b = b[curIndex];
                      b2 = b2[curIndex];
                      x1 = b.a + (b.b - b.a) * t;
                      x2 = b.b + (b.c - b.b) * t;
                      x1 += (x2 - x1) * t;
                      x2 += ((b.c + (b.d - b.c) * t) - x2) * t;
                      y1 = b2.a + (b2.b - b2.a) * t;
                      y2 = b2.b + (b2.c - b2.b) * t;
                      y1 += (y2 - y1) * t;
                      y2 += ((b2.c + (b2.d - b2.c) * t) - y2) * t;
                      val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i];
                      if (this._mod[p]) {
                        val = this._mod[p](val, target);
                      }
                      if (func[p]) {
                        target[p](val);
                      } else {
                        target[p] = val;
                      }
                    }
                  }
                }
              }
            }),
            p = BezierPlugin.prototype;
        BezierPlugin.bezierThrough = bezierThrough;
        BezierPlugin.cubicToQuadratic = cubicToQuadratic;
        BezierPlugin._autoCSS = true;
        BezierPlugin.quadraticToCubic = function(a, b, c) {
          return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
        };
        BezierPlugin._cssRegister = function() {
          var CSSPlugin = _globals.CSSPlugin;
          if (!CSSPlugin) {
            return;
          }
          var _internals = CSSPlugin._internals,
              _parseToProxy = _internals._parseToProxy,
              _setPluginRatio = _internals._setPluginRatio,
              CSSPropTween = _internals.CSSPropTween;
          _internals._registerComplexSpecialProp("bezier", {parser: function(t, e, prop, cssp, pt, plugin) {
              if (e instanceof Array) {
                e = {values: e};
              }
              plugin = new BezierPlugin();
              var values = e.values,
                  l = values.length - 1,
                  pluginValues = [],
                  v = {},
                  i,
                  p,
                  data;
              if (l < 0) {
                return pt;
              }
              for (i = 0; i <= l; i++) {
                data = _parseToProxy(t, values[i], cssp, pt, plugin, (l !== i));
                pluginValues[i] = data.end;
              }
              for (p in e) {
                v[p] = e[p];
              }
              v.values = pluginValues;
              pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
              pt.data = data;
              pt.plugin = plugin;
              pt.setRatio = _setPluginRatio;
              if (v.autoRotate === 0) {
                v.autoRotate = true;
              }
              if (v.autoRotate && !(v.autoRotate instanceof Array)) {
                i = (v.autoRotate === true) ? 0 : Number(v.autoRotate);
                v.autoRotate = (data.end.left != null) ? [["left", "top", "rotation", i, false]] : (data.end.x != null) ? [["x", "y", "rotation", i, false]] : false;
              }
              if (v.autoRotate) {
                if (!cssp._transform) {
                  cssp._enableTransforms(false);
                }
                data.autoRotate = cssp._target._gsTransform;
                data.proxy.rotation = data.autoRotate.rotation || 0;
                cssp._overwriteProps.push("rotation");
              }
              plugin._onInitTween(data.proxy, v, cssp._tween);
              return pt;
            }});
        };
        p._mod = function(lookup) {
          var op = this._overwriteProps,
              i = op.length,
              val;
          while (--i > -1) {
            val = lookup[op[i]];
            if (val && typeof(val) === "function") {
              this._mod[op[i]] = val;
            }
          }
        };
        p._kill = function(lookup) {
          var a = this._props,
              p,
              i;
          for (p in this._beziers) {
            if (p in lookup) {
              delete this._beziers[p];
              delete this._func[p];
              i = a.length;
              while (--i > -1) {
                if (a[i] === p) {
                  a.splice(i, 1);
                }
              }
            }
          }
          a = this._autoRotate;
          if (a) {
            i = a.length;
            while (--i > -1) {
              if (lookup[a[i][2]]) {
                a.splice(i, 1);
              }
            }
          }
          return this._super._kill.call(this, lookup);
        };
      }());
      _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(TweenPlugin, TweenLite) {
        var CSSPlugin = function() {
          TweenPlugin.call(this, "css");
          this._overwriteProps.length = 0;
          this.setRatio = CSSPlugin.prototype.setRatio;
        },
            _globals = _gsScope._gsDefine.globals,
            _hasPriority,
            _suffixMap,
            _cs,
            _overwriteProps,
            _specialProps = {},
            p = CSSPlugin.prototype = new TweenPlugin("css");
        p.constructor = CSSPlugin;
        CSSPlugin.version = "1.19.0";
        CSSPlugin.API = 2;
        CSSPlugin.defaultTransformPerspective = 0;
        CSSPlugin.defaultSkewType = "compensated";
        CSSPlugin.defaultSmoothOrigin = true;
        p = "px";
        CSSPlugin.suffixMap = {
          top: p,
          right: p,
          bottom: p,
          left: p,
          width: p,
          height: p,
          fontSize: p,
          padding: p,
          margin: p,
          perspective: p,
          lineHeight: ""
        };
        var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            _relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            _valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            _NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            _suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
            _opacityExp = /opacity *= *([^)]*)/i,
            _opacityValExp = /opacity:([^;]*)/i,
            _alphaFilterExp = /alpha\(opacity *=.+?\)/i,
            _rgbhslExp = /^(rgb|hsl)/,
            _capsExp = /([A-Z])/g,
            _camelExp = /-([a-z])/gi,
            _urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            _camelFunc = function(s, g) {
              return g.toUpperCase();
            },
            _horizExp = /(?:Left|Right|Width)/i,
            _ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            _ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            _commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi,
            _complexExp = /[\s,\(]/i,
            _DEG2RAD = Math.PI / 180,
            _RAD2DEG = 180 / Math.PI,
            _forcePT = {},
            _doc = document,
            _createElement = function(type) {
              return _doc.createElementNS ? _doc.createElementNS("http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
            },
            _tempDiv = _createElement("div"),
            _tempImg = _createElement("img"),
            _internals = CSSPlugin._internals = {_specialProps: _specialProps},
            _agent = navigator.userAgent,
            _autoRound,
            _reqSafariFix,
            _isSafari,
            _isFirefox,
            _isSafariLT6,
            _ieVers,
            _supportsOpacity = (function() {
              var i = _agent.indexOf("Android"),
                  a = _createElement("a");
              _isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || Number(_agent.substr(i + 8, 1)) > 3));
              _isSafariLT6 = (_isSafari && (Number(_agent.substr(_agent.indexOf("Version/") + 8, 1)) < 6));
              _isFirefox = (_agent.indexOf("Firefox") !== -1);
              if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent) || (/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
                _ieVers = parseFloat(RegExp.$1);
              }
              if (!a) {
                return false;
              }
              a.style.cssText = "top:1px;opacity:.55;";
              return /^0.55/.test(a.style.opacity);
            }()),
            _getIEOpacity = function(v) {
              return (_opacityExp.test(((typeof(v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "")) ? (parseFloat(RegExp.$1) / 100) : 1);
            },
            _log = function(s) {
              if (window.console) {
                console.log(s);
              }
            },
            _target,
            _index,
            _prefixCSS = "",
            _prefix = "",
            _checkPropPrefix = function(p, e) {
              e = e || _tempDiv;
              var s = e.style,
                  a,
                  i;
              if (s[p] !== undefined) {
                return p;
              }
              p = p.charAt(0).toUpperCase() + p.substr(1);
              a = ["O", "Moz", "ms", "Ms", "Webkit"];
              i = 5;
              while (--i > -1 && s[a[i] + p] === undefined) {}
              if (i >= 0) {
                _prefix = (i === 3) ? "ms" : a[i];
                _prefixCSS = "-" + _prefix.toLowerCase() + "-";
                return _prefix + p;
              }
              return null;
            },
            _getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function() {},
            _getStyle = CSSPlugin.getStyle = function(t, p, cs, calc, dflt) {
              var rv;
              if (!_supportsOpacity)
                if (p === "opacity") {
                  return _getIEOpacity(t);
                }
              if (!calc && t.style[p]) {
                rv = t.style[p];
              } else if ((cs = cs || _getComputedStyle(t))) {
                rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
              } else if (t.currentStyle) {
                rv = t.currentStyle[p];
              }
              return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
            },
            _convertToPixels = _internals.convertToPixels = function(t, p, v, sfx, recurse) {
              if (sfx === "px" || !sfx) {
                return v;
              }
              if (sfx === "auto" || !v) {
                return 0;
              }
              var horiz = _horizExp.test(p),
                  node = t,
                  style = _tempDiv.style,
                  neg = (v < 0),
                  precise = (v === 1),
                  pix,
                  cache,
                  time;
              if (neg) {
                v = -v;
              }
              if (precise) {
                v *= 100;
              }
              if (sfx === "%" && p.indexOf("border") !== -1) {
                pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
              } else {
                style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
                if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
                  node = t.parentNode || _doc.body;
                  cache = node._gsCache;
                  time = TweenLite.ticker.frame;
                  if (cache && horiz && cache.time === time) {
                    return cache.width * v / 100;
                  }
                  style[(horiz ? "width" : "height")] = v + sfx;
                } else {
                  style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
                }
                node.appendChild(_tempDiv);
                pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
                node.removeChild(_tempDiv);
                if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
                  cache = node._gsCache = node._gsCache || {};
                  cache.time = time;
                  cache.width = pix / v * 100;
                }
                if (pix === 0 && !recurse) {
                  pix = _convertToPixels(t, p, v, sfx, true);
                }
              }
              if (precise) {
                pix /= 100;
              }
              return neg ? -pix : pix;
            },
            _calculateOffset = _internals.calculateOffset = function(t, p, cs) {
              if (_getStyle(t, "position", cs) !== "absolute") {
                return 0;
              }
              var dim = ((p === "left") ? "Left" : "Top"),
                  v = _getStyle(t, "margin" + dim, cs);
              return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
            },
            _getAllStyles = function(t, cs) {
              var s = {},
                  i,
                  tr,
                  p;
              if ((cs = cs || _getComputedStyle(t, null))) {
                if ((i = cs.length)) {
                  while (--i > -1) {
                    p = cs[i];
                    if (p.indexOf("-transform") === -1 || _transformPropCSS === p) {
                      s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
                    }
                  }
                } else {
                  for (i in cs) {
                    if (i.indexOf("Transform") === -1 || _transformProp === i) {
                      s[i] = cs[i];
                    }
                  }
                }
              } else if ((cs = t.currentStyle || t.style)) {
                for (i in cs) {
                  if (typeof(i) === "string" && s[i] === undefined) {
                    s[i.replace(_camelExp, _camelFunc)] = cs[i];
                  }
                }
              }
              if (!_supportsOpacity) {
                s.opacity = _getIEOpacity(t);
              }
              tr = _getTransform(t, cs, false);
              s.rotation = tr.rotation;
              s.skewX = tr.skewX;
              s.scaleX = tr.scaleX;
              s.scaleY = tr.scaleY;
              s.x = tr.x;
              s.y = tr.y;
              if (_supports3D) {
                s.z = tr.z;
                s.rotationX = tr.rotationX;
                s.rotationY = tr.rotationY;
                s.scaleZ = tr.scaleZ;
              }
              if (s.filters) {
                delete s.filters;
              }
              return s;
            },
            _cssDif = function(t, s1, s2, vars, forceLookup) {
              var difs = {},
                  style = t.style,
                  val,
                  p,
                  mpt;
              for (p in s2) {
                if (p !== "cssText")
                  if (p !== "length")
                    if (isNaN(p))
                      if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p]))
                        if (p.indexOf("Origin") === -1)
                          if (typeof(val) === "number" || typeof(val) === "string") {
                            difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof(s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val;
                            if (style[p] !== undefined) {
                              mpt = new MiniPropTween(style, p, style[p], mpt);
                            }
                          }
              }
              if (vars) {
                for (p in vars) {
                  if (p !== "className") {
                    difs[p] = vars[p];
                  }
                }
              }
              return {
                difs: difs,
                firstMPT: mpt
              };
            },
            _dimensions = {
              width: ["Left", "Right"],
              height: ["Top", "Bottom"]
            },
            _margins = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            _getDimension = function(t, p, cs) {
              if ((t.nodeName + "").toLowerCase() === "svg") {
                return (cs || _getComputedStyle(t))[p] || 0;
              } else if (t.getBBox && _isSVG(t)) {
                return t.getBBox()[p] || 0;
              }
              var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
                  a = _dimensions[p],
                  i = a.length;
              cs = cs || _getComputedStyle(t, null);
              while (--i > -1) {
                v -= parseFloat(_getStyle(t, "padding" + a[i], cs, true)) || 0;
                v -= parseFloat(_getStyle(t, "border" + a[i] + "Width", cs, true)) || 0;
              }
              return v;
            },
            _parsePosition = function(v, recObj) {
              if (v === "contain" || v === "auto" || v === "auto auto") {
                return v + " ";
              }
              if (v == null || v === "") {
                v = "0 0";
              }
              var a = v.split(" "),
                  x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
                  y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1],
                  i;
              if (a.length > 3 && !recObj) {
                a = v.split(", ").join(",").split(",");
                v = [];
                for (i = 0; i < a.length; i++) {
                  v.push(_parsePosition(a[i]));
                }
                return v.join(",");
              }
              if (y == null) {
                y = (x === "center") ? "50%" : "0";
              } else if (y === "center") {
                y = "50%";
              }
              if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) {
                x = "50%";
              }
              v = x + " " + y + ((a.length > 2) ? " " + a[2] : "");
              if (recObj) {
                recObj.oxp = (x.indexOf("%") !== -1);
                recObj.oyp = (y.indexOf("%") !== -1);
                recObj.oxr = (x.charAt(1) === "=");
                recObj.oyr = (y.charAt(1) === "=");
                recObj.ox = parseFloat(x.replace(_NaNExp, ""));
                recObj.oy = parseFloat(y.replace(_NaNExp, ""));
                recObj.v = v;
              }
              return recObj || v;
            },
            _parseChange = function(e, b) {
              if (typeof(e) === "function") {
                e = e(_index, _target);
              }
              return (typeof(e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : (parseFloat(e) - parseFloat(b)) || 0;
            },
            _parseVal = function(v, d) {
              if (typeof(v) === "function") {
                v = v(_index, _target);
              }
              return (v == null) ? d : (typeof(v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
            },
            _parseAngle = function(v, d, p, directionalEnd) {
              var min = 0.000001,
                  cap,
                  split,
                  dif,
                  result,
                  isRelative;
              if (typeof(v) === "function") {
                v = v(_index, _target);
              }
              if (v == null) {
                result = d;
              } else if (typeof(v) === "number") {
                result = v;
              } else {
                cap = 360;
                split = v.split("_");
                isRelative = (v.charAt(1) === "=");
                dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
                if (split.length) {
                  if (directionalEnd) {
                    directionalEnd[p] = d + dif;
                  }
                  if (v.indexOf("short") !== -1) {
                    dif = dif % cap;
                    if (dif !== dif % (cap / 2)) {
                      dif = (dif < 0) ? dif + cap : dif - cap;
                    }
                  }
                  if (v.indexOf("_cw") !== -1 && dif < 0) {
                    dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
                  } else if (v.indexOf("ccw") !== -1 && dif > 0) {
                    dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
                  }
                }
                result = d + dif;
              }
              if (result < min && result > -min) {
                result = 0;
              }
              return result;
            },
            _colorLookup = {
              aqua: [0, 255, 255],
              lime: [0, 255, 0],
              silver: [192, 192, 192],
              black: [0, 0, 0],
              maroon: [128, 0, 0],
              teal: [0, 128, 128],
              blue: [0, 0, 255],
              navy: [0, 0, 128],
              white: [255, 255, 255],
              fuchsia: [255, 0, 255],
              olive: [128, 128, 0],
              yellow: [255, 255, 0],
              orange: [255, 165, 0],
              gray: [128, 128, 128],
              purple: [128, 0, 128],
              green: [0, 128, 0],
              red: [255, 0, 0],
              pink: [255, 192, 203],
              cyan: [0, 255, 255],
              transparent: [255, 255, 255, 0]
            },
            _hue = function(h, m1, m2) {
              h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
              return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0;
            },
            _parseColor = CSSPlugin.parseColor = function(v, toHSL) {
              var a,
                  r,
                  g,
                  b,
                  h,
                  s,
                  l,
                  max,
                  min,
                  d,
                  wasHSL;
              if (!v) {
                a = _colorLookup.black;
              } else if (typeof(v) === "number") {
                a = [v >> 16, (v >> 8) & 255, v & 255];
              } else {
                if (v.charAt(v.length - 1) === ",") {
                  v = v.substr(0, v.length - 1);
                }
                if (_colorLookup[v]) {
                  a = _colorLookup[v];
                } else if (v.charAt(0) === "#") {
                  if (v.length === 4) {
                    r = v.charAt(1);
                    g = v.charAt(2);
                    b = v.charAt(3);
                    v = "#" + r + r + g + g + b + b;
                  }
                  v = parseInt(v.substr(1), 16);
                  a = [v >> 16, (v >> 8) & 255, v & 255];
                } else if (v.substr(0, 3) === "hsl") {
                  a = wasHSL = v.match(_numExp);
                  if (!toHSL) {
                    h = (Number(a[0]) % 360) / 360;
                    s = Number(a[1]) / 100;
                    l = Number(a[2]) / 100;
                    g = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
                    r = l * 2 - g;
                    if (a.length > 3) {
                      a[3] = Number(v[3]);
                    }
                    a[0] = _hue(h + 1 / 3, r, g);
                    a[1] = _hue(h, r, g);
                    a[2] = _hue(h - 1 / 3, r, g);
                  } else if (v.indexOf("=") !== -1) {
                    return v.match(_relNumExp);
                  }
                } else {
                  a = v.match(_numExp) || _colorLookup.transparent;
                }
                a[0] = Number(a[0]);
                a[1] = Number(a[1]);
                a[2] = Number(a[2]);
                if (a.length > 3) {
                  a[3] = Number(a[3]);
                }
              }
              if (toHSL && !wasHSL) {
                r = a[0] / 255;
                g = a[1] / 255;
                b = a[2] / 255;
                max = Math.max(r, g, b);
                min = Math.min(r, g, b);
                l = (max + min) / 2;
                if (max === min) {
                  h = s = 0;
                } else {
                  d = max - min;
                  s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                  h = (max === r) ? (g - b) / d + (g < b ? 6 : 0) : (max === g) ? (b - r) / d + 2 : (r - g) / d + 4;
                  h *= 60;
                }
                a[0] = (h + 0.5) | 0;
                a[1] = (s * 100 + 0.5) | 0;
                a[2] = (l * 100 + 0.5) | 0;
              }
              return a;
            },
            _formatColors = function(s, toHSL) {
              var colors = s.match(_colorExp) || [],
                  charIndex = 0,
                  parsed = colors.length ? "" : s,
                  i,
                  color,
                  temp;
              for (i = 0; i < colors.length; i++) {
                color = colors[i];
                temp = s.substr(charIndex, s.indexOf(color, charIndex) - charIndex);
                charIndex += temp.length + color.length;
                color = _parseColor(color, toHSL);
                if (color.length === 3) {
                  color.push(1);
                }
                parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
              }
              return parsed + s.substr(charIndex);
            },
            _colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (p in _colorLookup) {
          _colorExp += "|" + p + "\\b";
        }
        _colorExp = new RegExp(_colorExp + ")", "gi");
        CSSPlugin.colorStringFilter = function(a) {
          var combined = a[0] + a[1],
              toHSL;
          if (_colorExp.test(combined)) {
            toHSL = (combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1);
            a[0] = _formatColors(a[0], toHSL);
            a[1] = _formatColors(a[1], toHSL);
          }
          _colorExp.lastIndex = 0;
        };
        if (!TweenLite.defaultStringFilter) {
          TweenLite.defaultStringFilter = CSSPlugin.colorStringFilter;
        }
        var _getFormatter = function(dflt, clr, collapsible, multi) {
          if (dflt == null) {
            return function(v) {
              return v;
            };
          }
          var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
              dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
              pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
              sfx = (dflt.charAt(dflt.length - 1) === ")") ? ")" : "",
              delim = (dflt.indexOf(" ") !== -1) ? " " : ",",
              numVals = dVals.length,
              dSfx = (numVals > 0) ? dVals[0].replace(_numExp, "") : "",
              formatter;
          if (!numVals) {
            return function(v) {
              return v;
            };
          }
          if (clr) {
            formatter = function(v) {
              var color,
                  vals,
                  i,
                  a;
              if (typeof(v) === "number") {
                v += dSfx;
              } else if (multi && _commasOutsideParenExp.test(v)) {
                a = v.replace(_commasOutsideParenExp, "|").split("|");
                for (i = 0; i < a.length; i++) {
                  a[i] = formatter(a[i]);
                }
                return a.join(",");
              }
              color = (v.match(_colorExp) || [dColor])[0];
              vals = v.split(color).join("").match(_valuesExp) || [];
              i = vals.length;
              if (numVals > i--) {
                while (++i < numVals) {
                  vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
                }
              }
              return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
            };
            return formatter;
          }
          formatter = function(v) {
            var vals,
                a,
                i;
            if (typeof(v) === "number") {
              v += dSfx;
            } else if (multi && _commasOutsideParenExp.test(v)) {
              a = v.replace(_commasOutsideParenExp, "|").split("|");
              for (i = 0; i < a.length; i++) {
                a[i] = formatter(a[i]);
              }
              return a.join(",");
            }
            vals = v.match(_valuesExp) || [];
            i = vals.length;
            if (numVals > i--) {
              while (++i < numVals) {
                vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
              }
            }
            return pfx + vals.join(delim) + sfx;
          };
          return formatter;
        },
            _getEdgeParser = function(props) {
              props = props.split(",");
              return function(t, e, p, cssp, pt, plugin, vars) {
                var a = (e + "").split(" "),
                    i;
                vars = {};
                for (i = 0; i < 4; i++) {
                  vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)];
                }
                return cssp.parse(t, vars, pt, plugin);
              };
            },
            _setPluginRatio = _internals._setPluginRatio = function(v) {
              this.plugin.setRatio(v);
              var d = this.data,
                  proxy = d.proxy,
                  mpt = d.firstMPT,
                  min = 0.000001,
                  val,
                  pt,
                  i,
                  str,
                  p;
              while (mpt) {
                val = proxy[mpt.v];
                if (mpt.r) {
                  val = Math.round(val);
                } else if (val < min && val > -min) {
                  val = 0;
                }
                mpt.t[mpt.p] = val;
                mpt = mpt._next;
              }
              if (d.autoRotate) {
                d.autoRotate.rotation = d.mod ? d.mod(proxy.rotation, this.t) : proxy.rotation;
              }
              if (v === 1 || v === 0) {
                mpt = d.firstMPT;
                p = (v === 1) ? "e" : "b";
                while (mpt) {
                  pt = mpt.t;
                  if (!pt.type) {
                    pt[p] = pt.s + pt.xs0;
                  } else if (pt.type === 1) {
                    str = pt.xs0 + pt.s + pt.xs1;
                    for (i = 1; i < pt.l; i++) {
                      str += pt["xn" + i] + pt["xs" + (i + 1)];
                    }
                    pt[p] = str;
                  }
                  mpt = mpt._next;
                }
              }
            },
            MiniPropTween = function(t, p, v, next, r) {
              this.t = t;
              this.p = p;
              this.v = v;
              this.r = r;
              if (next) {
                next._prev = this;
                this._next = next;
              }
            },
            _parseToProxy = _internals._parseToProxy = function(t, vars, cssp, pt, plugin, shallow) {
              var bpt = pt,
                  start = {},
                  end = {},
                  transform = cssp._transform,
                  oldForce = _forcePT,
                  i,
                  p,
                  xp,
                  mpt,
                  firstPT;
              cssp._transform = null;
              _forcePT = vars;
              pt = firstPT = cssp.parse(t, vars, pt, plugin);
              _forcePT = oldForce;
              if (shallow) {
                cssp._transform = transform;
                if (bpt) {
                  bpt._prev = null;
                  if (bpt._prev) {
                    bpt._prev._next = null;
                  }
                }
              }
              while (pt && pt !== bpt) {
                if (pt.type <= 1) {
                  p = pt.p;
                  end[p] = pt.s + pt.c;
                  start[p] = pt.s;
                  if (!shallow) {
                    mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
                    pt.c = 0;
                  }
                  if (pt.type === 1) {
                    i = pt.l;
                    while (--i > 0) {
                      xp = "xn" + i;
                      p = pt.p + "_" + xp;
                      end[p] = pt.data[xp];
                      start[p] = pt[xp];
                      if (!shallow) {
                        mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
                      }
                    }
                  }
                }
                pt = pt._next;
              }
              return {
                proxy: start,
                end: end,
                firstMPT: mpt,
                pt: firstPT
              };
            },
            CSSPropTween = _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, e) {
              this.t = t;
              this.p = p;
              this.s = s;
              this.c = c;
              this.n = n || p;
              if (!(t instanceof CSSPropTween)) {
                _overwriteProps.push(this.n);
              }
              this.r = r;
              this.type = type || 0;
              if (pr) {
                this.pr = pr;
                _hasPriority = true;
              }
              this.b = (b === undefined) ? s : b;
              this.e = (e === undefined) ? s + c : e;
              if (next) {
                this._next = next;
                next._prev = this;
              }
            },
            _addNonTweeningNumericPT = function(target, prop, start, end, next, overwriteProp) {
              var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
              pt.b = start;
              pt.e = pt.xs0 = end;
              return pt;
            },
            _parseComplex = CSSPlugin.parseComplex = function(t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
              b = b || dflt || "";
              if (typeof(e) === "function") {
                e = e(_index, _target);
              }
              pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
              e += "";
              if (clrs && _colorExp.test(e + b)) {
                e = [b, e];
                CSSPlugin.colorStringFilter(e);
                b = e[0];
                e = e[1];
              }
              var ba = b.split(", ").join(",").split(" "),
                  ea = e.split(", ").join(",").split(" "),
                  l = ba.length,
                  autoRound = (_autoRound !== false),
                  i,
                  xi,
                  ni,
                  bv,
                  ev,
                  bnums,
                  enums,
                  bn,
                  hasAlpha,
                  temp,
                  cv,
                  str,
                  useHSL;
              if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
                ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
                ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
                l = ba.length;
              }
              if (l !== ea.length) {
                ba = (dflt || "").split(" ");
                l = ba.length;
              }
              pt.plugin = plugin;
              pt.setRatio = setRatio;
              _colorExp.lastIndex = 0;
              for (i = 0; i < l; i++) {
                bv = ba[i];
                ev = ea[i];
                bn = parseFloat(bv);
                if (bn || bn === 0) {
                  pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1), true);
                } else if (clrs && _colorExp.test(bv)) {
                  str = ev.indexOf(")") + 1;
                  str = ")" + (str ? ev.substr(str) : "");
                  useHSL = (ev.indexOf("hsl") !== -1 && _supportsOpacity);
                  bv = _parseColor(bv, useHSL);
                  ev = _parseColor(ev, useHSL);
                  hasAlpha = (bv.length + ev.length > 6);
                  if (hasAlpha && !_supportsOpacity && ev[3] === 0) {
                    pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
                    pt.e = pt.e.split(ea[i]).join("transparent");
                  } else {
                    if (!_supportsOpacity) {
                      hasAlpha = false;
                    }
                    if (useHSL) {
                      pt.appendXtra((hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true).appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false).appendXtra("", bv[2], _parseChange(ev[2], bv[2]), (hasAlpha ? "%," : "%" + str), false);
                    } else {
                      pt.appendXtra((hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", true, true).appendXtra("", bv[1], ev[1] - bv[1], ",", true).appendXtra("", bv[2], ev[2] - bv[2], (hasAlpha ? "," : str), true);
                    }
                    if (hasAlpha) {
                      bv = (bv.length < 4) ? 1 : bv[3];
                      pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false);
                    }
                  }
                  _colorExp.lastIndex = 0;
                } else {
                  bnums = bv.match(_numExp);
                  if (!bnums) {
                    pt["xs" + pt.l] += (pt.l || pt["xs" + pt.l]) ? " " + ev : ev;
                  } else {
                    enums = ev.match(_relNumExp);
                    if (!enums || enums.length !== bnums.length) {
                      return pt;
                    }
                    ni = 0;
                    for (xi = 0; xi < bnums.length; xi++) {
                      cv = bnums[xi];
                      temp = bv.indexOf(cv, ni);
                      pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px"), (xi === 0));
                      ni = temp + cv.length;
                    }
                    pt["xs" + pt.l] += bv.substr(ni);
                  }
                }
              }
              if (e.indexOf("=") !== -1)
                if (pt.data) {
                  str = pt.xs0 + pt.data.s;
                  for (i = 1; i < pt.l; i++) {
                    str += pt["xs" + i] + pt.data["xn" + i];
                  }
                  pt.e = str + pt["xs" + i];
                }
              if (!pt.l) {
                pt.type = -1;
                pt.xs0 = pt.e;
              }
              return pt.xfirst || pt;
            },
            i = 9;
        p = CSSPropTween.prototype;
        p.l = p.pr = 0;
        while (--i > 0) {
          p["xn" + i] = 0;
          p["xs" + i] = "";
        }
        p.xs0 = "";
        p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;
        p.appendXtra = function(pfx, s, c, sfx, r, pad) {
          var pt = this,
              l = pt.l;
          pt["xs" + l] += (pad && (l || pt["xs" + l])) ? " " + pfx : pfx || "";
          if (!c)
            if (l !== 0 && !pt.plugin) {
              pt["xs" + l] += s + (sfx || "");
              return pt;
            }
          pt.l++;
          pt.type = pt.setRatio ? 2 : 1;
          pt["xs" + pt.l] = sfx || "";
          if (l > 0) {
            pt.data["xn" + l] = s + c;
            pt.rxp["xn" + l] = r;
            pt["xn" + l] = s;
            if (!pt.plugin) {
              pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
              pt.xfirst.xs0 = 0;
            }
            return pt;
          }
          pt.data = {s: s + c};
          pt.rxp = {};
          pt.s = s;
          pt.c = c;
          pt.r = r;
          return pt;
        };
        var SpecialProp = function(p, options) {
          options = options || {};
          this.p = options.prefix ? _checkPropPrefix(p) || p : p;
          _specialProps[p] = _specialProps[this.p] = this;
          this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
          if (options.parser) {
            this.parse = options.parser;
          }
          this.clrs = options.color;
          this.multi = options.multi;
          this.keyword = options.keyword;
          this.dflt = options.defaultValue;
          this.pr = options.priority || 0;
        },
            _registerComplexSpecialProp = _internals._registerComplexSpecialProp = function(p, options, defaults) {
              if (typeof(options) !== "object") {
                options = {parser: defaults};
              }
              var a = p.split(","),
                  d = options.defaultValue,
                  i,
                  temp;
              defaults = defaults || [d];
              for (i = 0; i < a.length; i++) {
                options.prefix = (i === 0 && options.prefix);
                options.defaultValue = defaults[i] || d;
                temp = new SpecialProp(a[i], options);
              }
            },
            _registerPluginProp = _internals._registerPluginProp = function(p) {
              if (!_specialProps[p]) {
                var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
                _registerComplexSpecialProp(p, {parser: function(t, e, p, cssp, pt, plugin, vars) {
                    var pluginClass = _globals.com.greensock.plugins[pluginName];
                    if (!pluginClass) {
                      _log("Error: " + pluginName + " js file not loaded.");
                      return pt;
                    }
                    pluginClass._cssRegister();
                    return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
                  }});
              }
            };
        p = SpecialProp.prototype;
        p.parseComplex = function(t, b, e, pt, plugin, setRatio) {
          var kwd = this.keyword,
              i,
              ba,
              ea,
              l,
              bi,
              ei;
          if (this.multi)
            if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
              ba = b.replace(_commasOutsideParenExp, "|").split("|");
              ea = e.replace(_commasOutsideParenExp, "|").split("|");
            } else if (kwd) {
              ba = [b];
              ea = [e];
            }
          if (ea) {
            l = (ea.length > ba.length) ? ea.length : ba.length;
            for (i = 0; i < l; i++) {
              b = ba[i] = ba[i] || this.dflt;
              e = ea[i] = ea[i] || this.dflt;
              if (kwd) {
                bi = b.indexOf(kwd);
                ei = e.indexOf(kwd);
                if (bi !== ei) {
                  if (ei === -1) {
                    ba[i] = ba[i].split(kwd).join("");
                  } else if (bi === -1) {
                    ba[i] += " " + kwd;
                  }
                }
              }
            }
            b = ba.join(", ");
            e = ea.join(", ");
          }
          return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
        };
        p.parse = function(t, e, p, cssp, pt, plugin, vars) {
          return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
        };
        CSSPlugin.registerSpecialProp = function(name, onInitTween, priority) {
          _registerComplexSpecialProp(name, {
            parser: function(t, e, p, cssp, pt, plugin, vars) {
              var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
              rv.plugin = plugin;
              rv.setRatio = onInitTween(t, e, cssp._tween, p);
              return rv;
            },
            priority: priority
          });
        };
        CSSPlugin.useSVGTransformAttr = _isSafari || _isFirefox;
        var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),
            _transformProp = _checkPropPrefix("transform"),
            _transformPropCSS = _prefixCSS + "transform",
            _transformOriginProp = _checkPropPrefix("transformOrigin"),
            _supports3D = (_checkPropPrefix("perspective") !== null),
            Transform = _internals.Transform = function() {
              this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
              this.force3D = (CSSPlugin.defaultForce3D === false || !_supports3D) ? false : CSSPlugin.defaultForce3D || "auto";
            },
            _SVGElement = window.SVGElement,
            _useSVGTransformAttr,
            _createSVG = function(type, container, attributes) {
              var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
                  reg = /([a-z])([A-Z])/g,
                  p;
              for (p in attributes) {
                element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
              }
              container.appendChild(element);
              return element;
            },
            _docElement = _doc.documentElement,
            _forceSVGTransformAttr = (function() {
              var force = _ieVers || (/Android/i.test(_agent) && !window.chrome),
                  svg,
                  rect,
                  width;
              if (_doc.createElementNS && !force) {
                svg = _createSVG("svg", _docElement);
                rect = _createSVG("rect", svg, {
                  width: 100,
                  height: 50,
                  x: 100
                });
                width = rect.getBoundingClientRect().width;
                rect.style[_transformOriginProp] = "50% 50%";
                rect.style[_transformProp] = "scaleX(0.5)";
                force = (width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D));
                _docElement.removeChild(svg);
              }
              return force;
            })(),
            _parseSVGOrigin = function(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
              var tm = e._gsTransform,
                  m = _getMatrix(e, true),
                  v,
                  x,
                  y,
                  xOrigin,
                  yOrigin,
                  a,
                  b,
                  c,
                  d,
                  tx,
                  ty,
                  determinant,
                  xOriginOld,
                  yOriginOld;
              if (tm) {
                xOriginOld = tm.xOrigin;
                yOriginOld = tm.yOrigin;
              }
              if (!absolute || (v = absolute.split(" ")).length < 2) {
                b = e.getBBox();
                local = _parsePosition(local).split(" ");
                v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x, (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
              }
              decoratee.xOrigin = xOrigin = parseFloat(v[0]);
              decoratee.yOrigin = yOrigin = parseFloat(v[1]);
              if (absolute && m !== _identity2DMatrix) {
                a = m[0];
                b = m[1];
                c = m[2];
                d = m[3];
                tx = m[4];
                ty = m[5];
                determinant = (a * d - b * c);
                x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + ((c * ty - d * tx) / determinant);
                y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - ((a * ty - b * tx) / determinant);
                xOrigin = decoratee.xOrigin = v[0] = x;
                yOrigin = decoratee.yOrigin = v[1] = y;
              }
              if (tm) {
                if (skipRecord) {
                  decoratee.xOffset = tm.xOffset;
                  decoratee.yOffset = tm.yOffset;
                  tm = decoratee;
                }
                if (smoothOrigin || (smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false)) {
                  x = xOrigin - xOriginOld;
                  y = yOrigin - yOriginOld;
                  tm.xOffset += (x * m[0] + y * m[2]) - x;
                  tm.yOffset += (x * m[1] + y * m[3]) - y;
                } else {
                  tm.xOffset = tm.yOffset = 0;
                }
              }
              if (!skipRecord) {
                e.setAttribute("data-svg-origin", v.join(" "));
              }
            },
            _canGetBBox = function(e) {
              try {
                return e.getBBox();
              } catch (e) {}
            },
            _isSVG = function(e) {
              return !!(_SVGElement && e.getBBox && e.getCTM && _canGetBBox(e) && (!e.parentNode || (e.parentNode.getBBox && e.parentNode.getCTM)));
            },
            _identity2DMatrix = [1, 0, 0, 1, 0, 0],
            _getMatrix = function(e, force2D) {
              var tm = e._gsTransform || new Transform(),
                  rnd = 100000,
                  style = e.style,
                  isDefault,
                  s,
                  m,
                  n,
                  dec,
                  none;
              if (_transformProp) {
                s = _getStyle(e, _transformPropCSS, null, true);
              } else if (e.currentStyle) {
                s = e.currentStyle.filter.match(_ieGetMatrixExp);
                s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : "";
              }
              isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
              if (isDefault && _transformProp && ((none = (_getComputedStyle(e).display === "none")) || !e.parentNode)) {
                if (none) {
                  n = style.display;
                  style.display = "block";
                }
                if (!e.parentNode) {
                  dec = 1;
                  _docElement.appendChild(e);
                }
                s = _getStyle(e, _transformPropCSS, null, true);
                isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
                if (n) {
                  style.display = n;
                } else if (none) {
                  _removeProp(style, "display");
                }
                if (dec) {
                  _docElement.removeChild(e);
                }
              }
              if (tm.svg || (e.getBBox && _isSVG(e))) {
                if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) {
                  s = style[_transformProp];
                  isDefault = 0;
                }
                m = e.getAttribute("transform");
                if (isDefault && m) {
                  if (m.indexOf("matrix") !== -1) {
                    s = m;
                    isDefault = 0;
                  } else if (m.indexOf("translate") !== -1) {
                    s = "matrix(1,0,0,1," + m.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")";
                    isDefault = 0;
                  }
                }
              }
              if (isDefault) {
                return _identity2DMatrix;
              }
              m = (s || "").match(_numExp) || [];
              i = m.length;
              while (--i > -1) {
                n = Number(m[i]);
                m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n;
              }
              return (force2D && m.length > 6) ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
            },
            _getTransform = _internals.getTransform = function(t, cs, rec, parse) {
              if (t._gsTransform && rec && !parse) {
                return t._gsTransform;
              }
              var tm = rec ? t._gsTransform || new Transform() : new Transform(),
                  invX = (tm.scaleX < 0),
                  min = 0.00002,
                  rnd = 100000,
                  zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin || 0 : 0,
                  defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
                  m,
                  i,
                  scaleX,
                  scaleY,
                  rotation,
                  skewX;
              tm.svg = !!(t.getBBox && _isSVG(t));
              if (tm.svg) {
                _parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
                _useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
              }
              m = _getMatrix(t);
              if (m !== _identity2DMatrix) {
                if (m.length === 16) {
                  var a11 = m[0],
                      a21 = m[1],
                      a31 = m[2],
                      a41 = m[3],
                      a12 = m[4],
                      a22 = m[5],
                      a32 = m[6],
                      a42 = m[7],
                      a13 = m[8],
                      a23 = m[9],
                      a33 = m[10],
                      a14 = m[12],
                      a24 = m[13],
                      a34 = m[14],
                      a43 = m[11],
                      angle = Math.atan2(a32, a33),
                      t1,
                      t2,
                      t3,
                      t4,
                      cos,
                      sin;
                  if (tm.zOrigin) {
                    a34 = -tm.zOrigin;
                    a14 = a13 * a34 - m[12];
                    a24 = a23 * a34 - m[13];
                    a34 = a33 * a34 + tm.zOrigin - m[14];
                  }
                  tm.rotationX = angle * _RAD2DEG;
                  if (angle) {
                    cos = Math.cos(-angle);
                    sin = Math.sin(-angle);
                    t1 = a12 * cos + a13 * sin;
                    t2 = a22 * cos + a23 * sin;
                    t3 = a32 * cos + a33 * sin;
                    a13 = a12 * -sin + a13 * cos;
                    a23 = a22 * -sin + a23 * cos;
                    a33 = a32 * -sin + a33 * cos;
                    a43 = a42 * -sin + a43 * cos;
                    a12 = t1;
                    a22 = t2;
                    a32 = t3;
                  }
                  angle = Math.atan2(-a31, a33);
                  tm.rotationY = angle * _RAD2DEG;
                  if (angle) {
                    cos = Math.cos(-angle);
                    sin = Math.sin(-angle);
                    t1 = a11 * cos - a13 * sin;
                    t2 = a21 * cos - a23 * sin;
                    t3 = a31 * cos - a33 * sin;
                    a23 = a21 * sin + a23 * cos;
                    a33 = a31 * sin + a33 * cos;
                    a43 = a41 * sin + a43 * cos;
                    a11 = t1;
                    a21 = t2;
                    a31 = t3;
                  }
                  angle = Math.atan2(a21, a11);
                  tm.rotation = angle * _RAD2DEG;
                  if (angle) {
                    cos = Math.cos(-angle);
                    sin = Math.sin(-angle);
                    a11 = a11 * cos + a12 * sin;
                    t2 = a21 * cos + a22 * sin;
                    a22 = a21 * -sin + a22 * cos;
                    a32 = a31 * -sin + a32 * cos;
                    a21 = t2;
                  }
                  if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) {
                    tm.rotationX = tm.rotation = 0;
                    tm.rotationY = 180 - tm.rotationY;
                  }
                  tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21) * rnd + 0.5) | 0) / rnd;
                  tm.scaleY = ((Math.sqrt(a22 * a22 + a23 * a23) * rnd + 0.5) | 0) / rnd;
                  tm.scaleZ = ((Math.sqrt(a32 * a32 + a33 * a33) * rnd + 0.5) | 0) / rnd;
                  if (tm.rotationX || tm.rotationY) {
                    tm.skewX = 0;
                  } else {
                    tm.skewX = (a12 || a22) ? Math.atan2(a12, a22) * _RAD2DEG + tm.rotation : tm.skewX || 0;
                    if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
                      if (invX) {
                        tm.scaleX *= -1;
                        tm.skewX += (tm.rotation <= 0) ? 180 : -180;
                        tm.rotation += (tm.rotation <= 0) ? 180 : -180;
                      } else {
                        tm.scaleY *= -1;
                        tm.skewX += (tm.skewX <= 0) ? 180 : -180;
                      }
                    }
                  }
                  tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
                  tm.x = a14;
                  tm.y = a24;
                  tm.z = a34;
                  if (tm.svg) {
                    tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
                    tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
                  }
                } else if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY))) {
                  var k = (m.length >= 6),
                      a = k ? m[0] : 1,
                      b = m[1] || 0,
                      c = m[2] || 0,
                      d = k ? m[3] : 1;
                  tm.x = m[4] || 0;
                  tm.y = m[5] || 0;
                  scaleX = Math.sqrt(a * a + b * b);
                  scaleY = Math.sqrt(d * d + c * c);
                  rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0;
                  skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
                  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
                    if (invX) {
                      scaleX *= -1;
                      skewX += (rotation <= 0) ? 180 : -180;
                      rotation += (rotation <= 0) ? 180 : -180;
                    } else {
                      scaleY *= -1;
                      skewX += (skewX <= 0) ? 180 : -180;
                    }
                  }
                  tm.scaleX = scaleX;
                  tm.scaleY = scaleY;
                  tm.rotation = rotation;
                  tm.skewX = skewX;
                  if (_supports3D) {
                    tm.rotationX = tm.rotationY = tm.z = 0;
                    tm.perspective = defaultTransformPerspective;
                    tm.scaleZ = 1;
                  }
                  if (tm.svg) {
                    tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
                    tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
                  }
                }
                tm.zOrigin = zOrigin;
                for (i in tm) {
                  if (tm[i] < min)
                    if (tm[i] > -min) {
                      tm[i] = 0;
                    }
                }
              }
              if (rec) {
                t._gsTransform = tm;
                if (tm.svg) {
                  if (_useSVGTransformAttr && t.style[_transformProp]) {
                    TweenLite.delayedCall(0.001, function() {
                      _removeProp(t.style, _transformProp);
                    });
                  } else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
                    TweenLite.delayedCall(0.001, function() {
                      t.removeAttribute("transform");
                    });
                  }
                }
              }
              return tm;
            },
            _setIETransformRatio = function(v) {
              var t = this.data,
                  ang = -t.rotation * _DEG2RAD,
                  skew = ang + t.skewX * _DEG2RAD,
                  rnd = 100000,
                  a = ((Math.cos(ang) * t.scaleX * rnd) | 0) / rnd,
                  b = ((Math.sin(ang) * t.scaleX * rnd) | 0) / rnd,
                  c = ((Math.sin(skew) * -t.scaleY * rnd) | 0) / rnd,
                  d = ((Math.cos(skew) * t.scaleY * rnd) | 0) / rnd,
                  style = this.t.style,
                  cs = this.t.currentStyle,
                  filters,
                  val;
              if (!cs) {
                return;
              }
              val = b;
              b = -c;
              c = -val;
              filters = cs.filter;
              style.filter = "";
              var w = this.t.offsetWidth,
                  h = this.t.offsetHeight,
                  clip = (cs.position !== "absolute"),
                  m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
                  ox = t.x + (w * t.xPercent / 100),
                  oy = t.y + (h * t.yPercent / 100),
                  dx,
                  dy;
              if (t.ox != null) {
                dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
                dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
                ox += dx - (dx * a + dy * b);
                oy += dy - (dx * c + dy * d);
              }
              if (!clip) {
                m += ", sizingMethod='auto expand')";
              } else {
                dx = (w / 2);
                dy = (h / 2);
                m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
              }
              if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
                style.filter = filters.replace(_ieSetMatrixExp, m);
              } else {
                style.filter = m + " " + filters;
              }
              if (v === 0 || v === 1)
                if (a === 1)
                  if (b === 0)
                    if (c === 0)
                      if (d === 1)
                        if (!clip || m.indexOf("Dx=0, Dy=0") !== -1)
                          if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100)
                            if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
                              style.removeAttribute("filter");
                            }
              if (!clip) {
                var mult = (_ieVers < 8) ? 1 : -1,
                    marg,
                    prop,
                    dif;
                dx = t.ieOffsetX || 0;
                dy = t.ieOffsetY || 0;
                t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
                t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
                for (i = 0; i < 4; i++) {
                  prop = _margins[i];
                  marg = cs[prop];
                  val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
                  if (val !== t[prop]) {
                    dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY;
                  } else {
                    dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY;
                  }
                  style[prop] = (t[prop] = Math.round(val - dif * ((i === 0 || i === 2) ? 1 : mult))) + "px";
                }
              }
            },
            _setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function(v) {
              var t = this.data,
                  style = this.t.style,
                  angle = t.rotation,
                  rotationX = t.rotationX,
                  rotationY = t.rotationY,
                  sx = t.scaleX,
                  sy = t.scaleY,
                  sz = t.scaleZ,
                  x = t.x,
                  y = t.y,
                  z = t.z,
                  isSVG = t.svg,
                  perspective = t.perspective,
                  force3D = t.force3D,
                  a11,
                  a12,
                  a13,
                  a21,
                  a22,
                  a23,
                  a31,
                  a32,
                  a33,
                  a41,
                  a42,
                  a43,
                  zOrigin,
                  min,
                  cos,
                  sin,
                  t1,
                  t2,
                  transform,
                  comma,
                  zero,
                  skew,
                  rnd;
              if (((((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1) || (_useSVGTransformAttr && isSVG) || !_supports3D) {
                if (angle || t.skewX || isSVG) {
                  angle *= _DEG2RAD;
                  skew = t.skewX * _DEG2RAD;
                  rnd = 100000;
                  a11 = Math.cos(angle) * sx;
                  a21 = Math.sin(angle) * sx;
                  a12 = Math.sin(angle - skew) * -sy;
                  a22 = Math.cos(angle - skew) * sy;
                  if (skew && t.skewType === "simple") {
                    t1 = Math.tan(skew - t.skewY * _DEG2RAD);
                    t1 = Math.sqrt(1 + t1 * t1);
                    a12 *= t1;
                    a22 *= t1;
                    if (t.skewY) {
                      t1 = Math.tan(t.skewY * _DEG2RAD);
                      t1 = Math.sqrt(1 + t1 * t1);
                      a11 *= t1;
                      a21 *= t1;
                    }
                  }
                  if (isSVG) {
                    x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
                    y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
                    if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) {
                      min = this.t.getBBox();
                      x += t.xPercent * 0.01 * min.width;
                      y += t.yPercent * 0.01 * min.height;
                    }
                    min = 0.000001;
                    if (x < min)
                      if (x > -min) {
                        x = 0;
                      }
                    if (y < min)
                      if (y > -min) {
                        y = 0;
                      }
                  }
                  transform = (((a11 * rnd) | 0) / rnd) + "," + (((a21 * rnd) | 0) / rnd) + "," + (((a12 * rnd) | 0) / rnd) + "," + (((a22 * rnd) | 0) / rnd) + "," + x + "," + y + ")";
                  if (isSVG && _useSVGTransformAttr) {
                    this.t.setAttribute("transform", "matrix(" + transform);
                  } else {
                    style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
                  }
                } else {
                  style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
                }
                return;
              }
              if (_isFirefox) {
                min = 0.0001;
                if (sx < min && sx > -min) {
                  sx = sz = 0.00002;
                }
                if (sy < min && sy > -min) {
                  sy = sz = 0.00002;
                }
                if (perspective && !t.z && !t.rotationX && !t.rotationY) {
                  perspective = 0;
                }
              }
              if (angle || t.skewX) {
                angle *= _DEG2RAD;
                cos = a11 = Math.cos(angle);
                sin = a21 = Math.sin(angle);
                if (t.skewX) {
                  angle -= t.skewX * _DEG2RAD;
                  cos = Math.cos(angle);
                  sin = Math.sin(angle);
                  if (t.skewType === "simple") {
                    t1 = Math.tan((t.skewX - t.skewY) * _DEG2RAD);
                    t1 = Math.sqrt(1 + t1 * t1);
                    cos *= t1;
                    sin *= t1;
                    if (t.skewY) {
                      t1 = Math.tan(t.skewY * _DEG2RAD);
                      t1 = Math.sqrt(1 + t1 * t1);
                      a11 *= t1;
                      a21 *= t1;
                    }
                  }
                }
                a12 = -sin;
                a22 = cos;
              } else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) {
                style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z + "px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
                return;
              } else {
                a11 = a22 = 1;
                a12 = a21 = 0;
              }
              a33 = 1;
              a13 = a23 = a31 = a32 = a41 = a42 = 0;
              a43 = (perspective) ? -1 / perspective : 0;
              zOrigin = t.zOrigin;
              min = 0.000001;
              comma = ",";
              zero = "0";
              angle = rotationY * _DEG2RAD;
              if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                a31 = -sin;
                a41 = a43 * -sin;
                a13 = a11 * sin;
                a23 = a21 * sin;
                a33 = cos;
                a43 *= cos;
                a11 *= cos;
                a21 *= cos;
              }
              angle = rotationX * _DEG2RAD;
              if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                a32 = a33 * sin;
                a42 = a43 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a33 * cos;
                a43 = a43 * cos;
                a12 = t1;
                a22 = t2;
              }
              if (sz !== 1) {
                a13 *= sz;
                a23 *= sz;
                a33 *= sz;
                a43 *= sz;
              }
              if (sy !== 1) {
                a12 *= sy;
                a22 *= sy;
                a32 *= sy;
                a42 *= sy;
              }
              if (sx !== 1) {
                a11 *= sx;
                a21 *= sx;
                a31 *= sx;
                a41 *= sx;
              }
              if (zOrigin || isSVG) {
                if (zOrigin) {
                  x += a13 * -zOrigin;
                  y += a23 * -zOrigin;
                  z += a33 * -zOrigin + zOrigin;
                }
                if (isSVG) {
                  x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
                  y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
                }
                if (x < min && x > -min) {
                  x = zero;
                }
                if (y < min && y > -min) {
                  y = zero;
                }
                if (z < min && z > -min) {
                  z = 0;
                }
              }
              transform = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(");
              transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
              transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
              if (rotationX || rotationY || sz !== 1) {
                transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
                transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
              } else {
                transform += ",0,0,0,0,1,0,";
              }
              transform += x + comma + y + comma + z + comma + (perspective ? (1 + (-z / perspective)) : 1) + ")";
              style[_transformProp] = transform;
            };
        p = Transform.prototype;
        p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
        p.scaleX = p.scaleY = p.scaleZ = 1;
        _registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
          parser: function(t, e, parsingProp, cssp, pt, plugin, vars) {
            if (cssp._lastParsedTransform === vars) {
              return pt;
            }
            cssp._lastParsedTransform = vars;
            var swapFunc;
            if (typeof(vars[parsingProp]) === "function") {
              swapFunc = vars[parsingProp];
              vars[parsingProp] = e;
            }
            var originalGSTransform = t._gsTransform,
                style = t.style,
                min = 0.000001,
                i = _transformProps.length,
                v = vars,
                endRotations = {},
                transformOriginString = "transformOrigin",
                m1 = _getTransform(t, _cs, true, v.parseTransform),
                orig = v.transform && ((typeof(v.transform) === "function") ? v.transform(_index, _target) : v.transform),
                m2,
                copy,
                has3D,
                hasChange,
                dr,
                x,
                y,
                matrix,
                p;
            cssp._transform = m1;
            if (orig && typeof(orig) === "string" && _transformProp) {
              copy = _tempDiv.style;
              copy[_transformProp] = orig;
              copy.display = "block";
              copy.position = "absolute";
              _doc.body.appendChild(_tempDiv);
              m2 = _getTransform(_tempDiv, null, false);
              if (m1.svg) {
                x = m1.xOrigin;
                y = m1.yOrigin;
                m2.x -= m1.xOffset;
                m2.y -= m1.yOffset;
                if (v.transformOrigin || v.svgOrigin) {
                  orig = {};
                  _parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);
                  x = orig.xOrigin;
                  y = orig.yOrigin;
                  m2.x -= orig.xOffset - m1.xOffset;
                  m2.y -= orig.yOffset - m1.yOffset;
                }
                if (x || y) {
                  matrix = _getMatrix(_tempDiv, true);
                  m2.x -= x - (x * matrix[0] + y * matrix[2]);
                  m2.y -= y - (x * matrix[1] + y * matrix[3]);
                }
              }
              _doc.body.removeChild(_tempDiv);
              if (!m2.perspective) {
                m2.perspective = m1.perspective;
              }
              if (v.xPercent != null) {
                m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
              }
              if (v.yPercent != null) {
                m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
              }
            } else if (typeof(v) === "object") {
              m2 = {
                scaleX: _parseVal((v.scaleX != null) ? v.scaleX : v.scale, m1.scaleX),
                scaleY: _parseVal((v.scaleY != null) ? v.scaleY : v.scale, m1.scaleY),
                scaleZ: _parseVal(v.scaleZ, m1.scaleZ),
                x: _parseVal(v.x, m1.x),
                y: _parseVal(v.y, m1.y),
                z: _parseVal(v.z, m1.z),
                xPercent: _parseVal(v.xPercent, m1.xPercent),
                yPercent: _parseVal(v.yPercent, m1.yPercent),
                perspective: _parseVal(v.transformPerspective, m1.perspective)
              };
              dr = v.directionalRotation;
              if (dr != null) {
                if (typeof(dr) === "object") {
                  for (copy in dr) {
                    v[copy] = dr[copy];
                  }
                } else {
                  v.rotation = dr;
                }
              }
              if (typeof(v.x) === "string" && v.x.indexOf("%") !== -1) {
                m2.x = 0;
                m2.xPercent = _parseVal(v.x, m1.xPercent);
              }
              if (typeof(v.y) === "string" && v.y.indexOf("%") !== -1) {
                m2.y = 0;
                m2.yPercent = _parseVal(v.y, m1.yPercent);
              }
              m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : ("rotationZ" in v) ? v.rotationZ : m1.rotation - m1.skewY, m1.rotation - m1.skewY, "rotation", endRotations);
              if (_supports3D) {
                m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
                m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
              }
              m2.skewX = _parseAngle(v.skewX, m1.skewX - m1.skewY);
              if ((m2.skewY = _parseAngle(v.skewY, m1.skewY))) {
                m2.skewX += m2.skewY;
                m2.rotation += m2.skewY;
              }
            }
            if (_supports3D && v.force3D != null) {
              m1.force3D = v.force3D;
              hasChange = true;
            }
            m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;
            has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
            if (!has3D && v.scale != null) {
              m2.scaleZ = 1;
            }
            while (--i > -1) {
              p = _transformProps[i];
              orig = m2[p] - m1[p];
              if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
                hasChange = true;
                pt = new CSSPropTween(m1, p, m1[p], orig, pt);
                if (p in endRotations) {
                  pt.e = endRotations[p];
                }
                pt.xs0 = 0;
                pt.plugin = plugin;
                cssp._overwriteProps.push(pt.n);
              }
            }
            orig = v.transformOrigin;
            if (m1.svg && (orig || v.svgOrigin)) {
              x = m1.xOffset;
              y = m1.yOffset;
              _parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);
              pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString);
              pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);
              if (x !== m1.xOffset || y !== m1.yOffset) {
                pt = _addNonTweeningNumericPT(m1, "xOffset", (originalGSTransform ? x : m1.xOffset), m1.xOffset, pt, transformOriginString);
                pt = _addNonTweeningNumericPT(m1, "yOffset", (originalGSTransform ? y : m1.yOffset), m1.yOffset, pt, transformOriginString);
              }
              orig = _useSVGTransformAttr ? null : "0px 0px";
            }
            if (orig || (_supports3D && has3D && m1.zOrigin)) {
              if (_transformProp) {
                hasChange = true;
                p = _transformOriginProp;
                orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + "";
                pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
                pt.b = style[p];
                pt.plugin = plugin;
                if (_supports3D) {
                  copy = m1.zOrigin;
                  orig = orig.split(" ");
                  m1.zOrigin = ((orig.length > 2 && !(copy !== 0 && orig[2] === "0px")) ? parseFloat(orig[2]) : copy) || 0;
                  pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px";
                  pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n);
                  pt.b = copy;
                  pt.xs0 = pt.e = m1.zOrigin;
                } else {
                  pt.xs0 = pt.e = orig;
                }
              } else {
                _parsePosition(orig + "", m1);
              }
            }
            if (hasChange) {
              cssp._transformType = (!(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3)) ? 3 : 2;
            }
            if (swapFunc) {
              vars[parsingProp] = swapFunc;
            }
            return pt;
          },
          prefix: true
        });
        _registerComplexSpecialProp("boxShadow", {
          defaultValue: "0px 0px 0px 0px #999",
          prefix: true,
          color: true,
          multi: true,
          keyword: "inset"
        });
        _registerComplexSpecialProp("borderRadius", {
          defaultValue: "0px",
          parser: function(t, e, p, cssp, pt, plugin) {
            e = this.format(e);
            var props = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                style = t.style,
                ea1,
                i,
                es2,
                bs2,
                bs,
                es,
                bn,
                en,
                w,
                h,
                esfx,
                bsfx,
                rel,
                hn,
                vn,
                em;
            w = parseFloat(t.offsetWidth);
            h = parseFloat(t.offsetHeight);
            ea1 = e.split(" ");
            for (i = 0; i < props.length; i++) {
              if (this.p.indexOf("border")) {
                props[i] = _checkPropPrefix(props[i]);
              }
              bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
              if (bs.indexOf(" ") !== -1) {
                bs2 = bs.split(" ");
                bs = bs2[0];
                bs2 = bs2[1];
              }
              es = es2 = ea1[i];
              bn = parseFloat(bs);
              bsfx = bs.substr((bn + "").length);
              rel = (es.charAt(1) === "=");
              if (rel) {
                en = parseInt(es.charAt(0) + "1", 10);
                es = es.substr(2);
                en *= parseFloat(es);
                esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
              } else {
                en = parseFloat(es);
                esfx = es.substr((en + "").length);
              }
              if (esfx === "") {
                esfx = _suffixMap[p] || bsfx;
              }
              if (esfx !== bsfx) {
                hn = _convertToPixels(t, "borderLeft", bn, bsfx);
                vn = _convertToPixels(t, "borderTop", bn, bsfx);
                if (esfx === "%") {
                  bs = (hn / w * 100) + "%";
                  bs2 = (vn / h * 100) + "%";
                } else if (esfx === "em") {
                  em = _convertToPixels(t, "borderLeft", 1, "em");
                  bs = (hn / em) + "em";
                  bs2 = (vn / em) + "em";
                } else {
                  bs = hn + "px";
                  bs2 = vn + "px";
                }
                if (rel) {
                  es = (parseFloat(bs) + en) + esfx;
                  es2 = (parseFloat(bs2) + en) + esfx;
                }
              }
              pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
            }
            return pt;
          },
          prefix: true,
          formatter: _getFormatter("0px 0px 0px 0px", false, true)
        });
        _registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
          defaultValue: "0px",
          parser: function(t, e, p, cssp, pt, plugin) {
            return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
          },
          prefix: true,
          formatter: _getFormatter("0px 0px", false, true)
        });
        _registerComplexSpecialProp("backgroundPosition", {
          defaultValue: "0 0",
          parser: function(t, e, p, cssp, pt, plugin) {
            var bp = "background-position",
                cs = (_cs || _getComputedStyle(t, null)),
                bs = this.format(((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                es = this.format(e),
                ba,
                ea,
                i,
                pct,
                overlap,
                src;
            if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
              src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
              if (src && src !== "none") {
                ba = bs.split(" ");
                ea = es.split(" ");
                _tempImg.setAttribute("src", src);
                i = 2;
                while (--i > -1) {
                  bs = ba[i];
                  pct = (bs.indexOf("%") !== -1);
                  if (pct !== (ea[i].indexOf("%") !== -1)) {
                    overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
                    ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%";
                  }
                }
                bs = ba.join(" ");
              }
            }
            return this.parseComplex(t.style, bs, es, pt, plugin);
          },
          formatter: _parsePosition
        });
        _registerComplexSpecialProp("backgroundSize", {
          defaultValue: "0 0",
          formatter: function(v) {
            v += "";
            return _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v);
          }
        });
        _registerComplexSpecialProp("perspective", {
          defaultValue: "0px",
          prefix: true
        });
        _registerComplexSpecialProp("perspectiveOrigin", {
          defaultValue: "50% 50%",
          prefix: true
        });
        _registerComplexSpecialProp("transformStyle", {prefix: true});
        _registerComplexSpecialProp("backfaceVisibility", {prefix: true});
        _registerComplexSpecialProp("userSelect", {prefix: true});
        _registerComplexSpecialProp("margin", {parser: _getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});
        _registerComplexSpecialProp("padding", {parser: _getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});
        _registerComplexSpecialProp("clip", {
          defaultValue: "rect(0px,0px,0px,0px)",
          parser: function(t, e, p, cssp, pt, plugin) {
            var b,
                cs,
                delim;
            if (_ieVers < 9) {
              cs = t.currentStyle;
              delim = _ieVers < 8 ? " " : ",";
              b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
              e = this.format(e).split(",").join(delim);
            } else {
              b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
              e = this.format(e);
            }
            return this.parseComplex(t.style, b, e, pt, plugin);
          }
        });
        _registerComplexSpecialProp("textShadow", {
          defaultValue: "0px 0px 0px #999",
          color: true,
          multi: true
        });
        _registerComplexSpecialProp("autoRound,strictUnits", {parser: function(t, e, p, cssp, pt) {
            return pt;
          }});
        _registerComplexSpecialProp("border", {
          defaultValue: "0px solid #000",
          parser: function(t, e, p, cssp, pt, plugin) {
            var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
                end = this.format(e).split(" "),
                esfx = end[0].replace(_suffixExp, "");
            if (esfx !== "px") {
              bw = (parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx)) + esfx;
            }
            return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
          },
          color: true,
          formatter: function(v) {
            var a = v.split(" ");
            return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
          }
        });
        _registerComplexSpecialProp("borderWidth", {parser: _getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")});
        _registerComplexSpecialProp("float,cssFloat,styleFloat", {parser: function(t, e, p, cssp, pt, plugin) {
            var s = t.style,
                prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
            return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
          }});
        var _setIEOpacityRatio = function(v) {
          var t = this.t,
              filters = t.filter || _getStyle(this.data, "filter") || "",
              val = (this.s + this.c * v) | 0,
              skip;
          if (val === 100) {
            if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
              t.removeAttribute("filter");
              skip = (!_getStyle(this.data, "filter"));
            } else {
              t.filter = filters.replace(_alphaFilterExp, "");
              skip = true;
            }
          }
          if (!skip) {
            if (this.xn1) {
              t.filter = filters = filters || ("alpha(opacity=" + val + ")");
            }
            if (filters.indexOf("pacity") === -1) {
              if (val !== 0 || !this.xn1) {
                t.filter = filters + " alpha(opacity=" + val + ")";
              }
            } else {
              t.filter = filters.replace(_opacityExp, "opacity=" + val);
            }
          }
        };
        _registerComplexSpecialProp("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function(t, e, p, cssp, pt, plugin) {
            var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
                style = t.style,
                isAutoAlpha = (p === "autoAlpha");
            if (typeof(e) === "string" && e.charAt(1) === "=") {
              e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b;
            }
            if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) {
              b = 0;
            }
            if (_supportsOpacity) {
              pt = new CSSPropTween(style, "opacity", b, e - b, pt);
            } else {
              pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
              pt.xn1 = isAutoAlpha ? 1 : 0;
              style.zoom = 1;
              pt.type = 2;
              pt.b = "alpha(opacity=" + pt.s + ")";
              pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
              pt.data = t;
              pt.plugin = plugin;
              pt.setRatio = _setIEOpacityRatio;
            }
            if (isAutoAlpha) {
              pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
              pt.xs0 = "inherit";
              cssp._overwriteProps.push(pt.n);
              cssp._overwriteProps.push(p);
            }
            return pt;
          }
        });
        var _removeProp = function(s, p) {
          if (p) {
            if (s.removeProperty) {
              if (p.substr(0, 2) === "ms" || p.substr(0, 6) === "webkit") {
                p = "-" + p;
              }
              s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
            } else {
              s.removeAttribute(p);
            }
          }
        },
            _setClassNameRatio = function(v) {
              this.t._gsClassPT = this;
              if (v === 1 || v === 0) {
                this.t.setAttribute("class", (v === 0) ? this.b : this.e);
                var mpt = this.data,
                    s = this.t.style;
                while (mpt) {
                  if (!mpt.v) {
                    _removeProp(s, mpt.p);
                  } else {
                    s[mpt.p] = mpt.v;
                  }
                  mpt = mpt._next;
                }
                if (v === 1 && this.t._gsClassPT === this) {
                  this.t._gsClassPT = null;
                }
              } else if (this.t.getAttribute("class") !== this.e) {
                this.t.setAttribute("class", this.e);
              }
            };
        _registerComplexSpecialProp("className", {parser: function(t, e, p, cssp, pt, plugin, vars) {
            var b = t.getAttribute("class") || "",
                cssText = t.style.cssText,
                difData,
                bs,
                cnpt,
                cnptLookup,
                mpt;
            pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
            pt.setRatio = _setClassNameRatio;
            pt.pr = -11;
            _hasPriority = true;
            pt.b = b;
            bs = _getAllStyles(t, _cs);
            cnpt = t._gsClassPT;
            if (cnpt) {
              cnptLookup = {};
              mpt = cnpt.data;
              while (mpt) {
                cnptLookup[mpt.p] = 1;
                mpt = mpt._next;
              }
              cnpt.setRatio(1);
            }
            t._gsClassPT = pt;
            pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
            t.setAttribute("class", pt.e);
            difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
            t.setAttribute("class", b);
            pt.data = difData.firstMPT;
            t.style.cssText = cssText;
            pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin);
            return pt;
          }});
        var _setClearPropsRatio = function(v) {
          if (v === 1 || v === 0)
            if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") {
              var s = this.t.style,
                  transformParse = _specialProps.transform.parse,
                  a,
                  p,
                  i,
                  clearTransform,
                  transform;
              if (this.e === "all") {
                s.cssText = "";
                clearTransform = true;
              } else {
                a = this.e.split(" ").join("").split(",");
                i = a.length;
                while (--i > -1) {
                  p = a[i];
                  if (_specialProps[p]) {
                    if (_specialProps[p].parse === transformParse) {
                      clearTransform = true;
                    } else {
                      p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p;
                    }
                  }
                  _removeProp(s, p);
                }
              }
              if (clearTransform) {
                _removeProp(s, _transformProp);
                transform = this.t._gsTransform;
                if (transform) {
                  if (transform.svg) {
                    this.t.removeAttribute("data-svg-origin");
                    this.t.removeAttribute("transform");
                  }
                  delete this.t._gsTransform;
                }
              }
            }
        };
        _registerComplexSpecialProp("clearProps", {parser: function(t, e, p, cssp, pt) {
            pt = new CSSPropTween(t, p, 0, 0, pt, 2);
            pt.setRatio = _setClearPropsRatio;
            pt.e = e;
            pt.pr = -10;
            pt.data = cssp._tween;
            _hasPriority = true;
            return pt;
          }});
        p = "bezier,throwProps,physicsProps,physics2D".split(",");
        i = p.length;
        while (i--) {
          _registerPluginProp(p[i]);
        }
        p = CSSPlugin.prototype;
        p._firstPT = p._lastParsedTransform = p._transform = null;
        p._onInitTween = function(target, vars, tween, index) {
          if (!target.nodeType) {
            return false;
          }
          this._target = _target = target;
          this._tween = tween;
          this._vars = vars;
          _index = index;
          _autoRound = vars.autoRound;
          _hasPriority = false;
          _suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
          _cs = _getComputedStyle(target, "");
          _overwriteProps = this._overwriteProps;
          var style = target.style,
              v,
              pt,
              pt2,
              first,
              last,
              next,
              zIndex,
              tpt,
              threeD;
          if (_reqSafariFix)
            if (style.zIndex === "") {
              v = _getStyle(target, "zIndex", _cs);
              if (v === "auto" || v === "") {
                this._addLazySet(style, "zIndex", 0);
              }
            }
          if (typeof(vars) === "string") {
            first = style.cssText;
            v = _getAllStyles(target, _cs);
            style.cssText = first + ";" + vars;
            v = _cssDif(target, v, _getAllStyles(target)).difs;
            if (!_supportsOpacity && _opacityValExp.test(vars)) {
              v.opacity = parseFloat(RegExp.$1);
            }
            vars = v;
            style.cssText = first;
          }
          if (vars.className) {
            this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
          } else {
            this._firstPT = pt = this.parse(target, vars, null);
          }
          if (this._transformType) {
            threeD = (this._transformType === 3);
            if (!_transformProp) {
              style.zoom = 1;
            } else if (_isSafari) {
              _reqSafariFix = true;
              if (style.zIndex === "") {
                zIndex = _getStyle(target, "zIndex", _cs);
                if (zIndex === "auto" || zIndex === "") {
                  this._addLazySet(style, "zIndex", 0);
                }
              }
              if (_isSafariLT6) {
                this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
              }
            }
            pt2 = pt;
            while (pt2 && pt2._next) {
              pt2 = pt2._next;
            }
            tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
            this._linkCSSP(tpt, null, pt2);
            tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
            tpt.data = this._transform || _getTransform(target, _cs, true);
            tpt.tween = tween;
            tpt.pr = -1;
            _overwriteProps.pop();
          }
          if (_hasPriority) {
            while (pt) {
              next = pt._next;
              pt2 = first;
              while (pt2 && pt2.pr > pt.pr) {
                pt2 = pt2._next;
              }
              if ((pt._prev = pt2 ? pt2._prev : last)) {
                pt._prev._next = pt;
              } else {
                first = pt;
              }
              if ((pt._next = pt2)) {
                pt2._prev = pt;
              } else {
                last = pt;
              }
              pt = next;
            }
            this._firstPT = first;
          }
          return true;
        };
        p.parse = function(target, vars, pt, plugin) {
          var style = target.style,
              p,
              sp,
              bn,
              en,
              bs,
              es,
              bsfx,
              esfx,
              isStr,
              rel;
          for (p in vars) {
            es = vars[p];
            if (typeof(es) === "function") {
              es = es(_index, _target);
            }
            sp = _specialProps[p];
            if (sp) {
              pt = sp.parse(target, es, p, this, pt, plugin, vars);
            } else {
              bs = _getStyle(target, p, _cs) + "";
              isStr = (typeof(es) === "string");
              if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) {
                if (!isStr) {
                  es = _parseColor(es);
                  es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
                }
                pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);
              } else if (isStr && _complexExp.test(es)) {
                pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);
              } else {
                bn = parseFloat(bs);
                bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : "";
                if (bs === "" || bs === "auto") {
                  if (p === "width" || p === "height") {
                    bn = _getDimension(target, p, _cs);
                    bsfx = "px";
                  } else if (p === "left" || p === "top") {
                    bn = _calculateOffset(target, p, _cs);
                    bsfx = "px";
                  } else {
                    bn = (p !== "opacity") ? 0 : 1;
                    bsfx = "";
                  }
                }
                rel = (isStr && es.charAt(1) === "=");
                if (rel) {
                  en = parseInt(es.charAt(0) + "1", 10);
                  es = es.substr(2);
                  en *= parseFloat(es);
                  esfx = es.replace(_suffixExp, "");
                } else {
                  en = parseFloat(es);
                  esfx = isStr ? es.replace(_suffixExp, "") : "";
                }
                if (esfx === "") {
                  esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx;
                }
                es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p];
                if (bsfx !== esfx)
                  if (esfx !== "")
                    if (en || en === 0)
                      if (bn) {
                        bn = _convertToPixels(target, p, bn, bsfx);
                        if (esfx === "%") {
                          bn /= _convertToPixels(target, p, 100, "%") / 100;
                          if (vars.strictUnits !== true) {
                            bs = bn + "%";
                          }
                        } else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
                          bn /= _convertToPixels(target, p, 1, esfx);
                        } else if (esfx !== "px") {
                          en = _convertToPixels(target, p, en, esfx);
                          esfx = "px";
                        }
                        if (rel)
                          if (en || en === 0) {
                            es = (en + bn) + esfx;
                          }
                      }
                if (rel) {
                  en += bn;
                }
                if ((bn || bn === 0) && (en || en === 0)) {
                  pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
                  pt.xs0 = esfx;
                } else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
                  _log("invalid " + p + " tween value: " + vars[p]);
                } else {
                  pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
                  pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es;
                }
              }
            }
            if (plugin)
              if (pt && !pt.plugin) {
                pt.plugin = plugin;
              }
          }
          return pt;
        };
        p.setRatio = function(v) {
          var pt = this._firstPT,
              min = 0.000001,
              val,
              str,
              i;
          if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
            while (pt) {
              if (pt.type !== 2) {
                if (pt.r && pt.type !== -1) {
                  val = Math.round(pt.s + pt.c);
                  if (!pt.type) {
                    pt.t[pt.p] = val + pt.xs0;
                  } else if (pt.type === 1) {
                    i = pt.l;
                    str = pt.xs0 + val + pt.xs1;
                    for (i = 1; i < pt.l; i++) {
                      str += pt["xn" + i] + pt["xs" + (i + 1)];
                    }
                    pt.t[pt.p] = str;
                  }
                } else {
                  pt.t[pt.p] = pt.e;
                }
              } else {
                pt.setRatio(v);
              }
              pt = pt._next;
            }
          } else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
            while (pt) {
              val = pt.c * v + pt.s;
              if (pt.r) {
                val = Math.round(val);
              } else if (val < min)
                if (val > -min) {
                  val = 0;
                }
              if (!pt.type) {
                pt.t[pt.p] = val + pt.xs0;
              } else if (pt.type === 1) {
                i = pt.l;
                if (i === 2) {
                  pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
                } else if (i === 3) {
                  pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
                } else if (i === 4) {
                  pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
                } else if (i === 5) {
                  pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
                } else {
                  str = pt.xs0 + val + pt.xs1;
                  for (i = 1; i < pt.l; i++) {
                    str += pt["xn" + i] + pt["xs" + (i + 1)];
                  }
                  pt.t[pt.p] = str;
                }
              } else if (pt.type === -1) {
                pt.t[pt.p] = pt.xs0;
              } else if (pt.setRatio) {
                pt.setRatio(v);
              }
              pt = pt._next;
            }
          } else {
            while (pt) {
              if (pt.type !== 2) {
                pt.t[pt.p] = pt.b;
              } else {
                pt.setRatio(v);
              }
              pt = pt._next;
            }
          }
        };
        p._enableTransforms = function(threeD) {
          this._transform = this._transform || _getTransform(this._target, _cs, true);
          this._transformType = (!(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3)) ? 3 : 2;
        };
        var lazySet = function(v) {
          this.t[this.p] = this.e;
          this.data._linkCSSP(this, this._next, null, true);
        };
        p._addLazySet = function(t, p, v) {
          var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
          pt.e = v;
          pt.setRatio = lazySet;
          pt.data = this;
        };
        p._linkCSSP = function(pt, next, prev, remove) {
          if (pt) {
            if (next) {
              next._prev = pt;
            }
            if (pt._next) {
              pt._next._prev = pt._prev;
            }
            if (pt._prev) {
              pt._prev._next = pt._next;
            } else if (this._firstPT === pt) {
              this._firstPT = pt._next;
              remove = true;
            }
            if (prev) {
              prev._next = pt;
            } else if (!remove && this._firstPT === null) {
              this._firstPT = pt;
            }
            pt._next = next;
            pt._prev = prev;
          }
          return pt;
        };
        p._mod = function(lookup) {
          var pt = this._firstPT;
          while (pt) {
            if (typeof(lookup[pt.p]) === "function" && lookup[pt.p] === Math.round) {
              pt.r = 1;
            }
            pt = pt._next;
          }
        };
        p._kill = function(lookup) {
          var copy = lookup,
              pt,
              p,
              xfirst;
          if (lookup.autoAlpha || lookup.alpha) {
            copy = {};
            for (p in lookup) {
              copy[p] = lookup[p];
            }
            copy.opacity = 1;
            if (copy.autoAlpha) {
              copy.visibility = 1;
            }
          }
          if (lookup.className && (pt = this._classNamePT)) {
            xfirst = pt.xfirst;
            if (xfirst && xfirst._prev) {
              this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev);
            } else if (xfirst === this._firstPT) {
              this._firstPT = pt._next;
            }
            if (pt._next) {
              this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
            }
            this._classNamePT = null;
          }
          pt = this._firstPT;
          while (pt) {
            if (pt.plugin && pt.plugin !== p && pt.plugin._kill) {
              pt.plugin._kill(lookup);
              p = pt.plugin;
            }
            pt = pt._next;
          }
          return TweenPlugin.prototype._kill.call(this, copy);
        };
        var _getChildStyles = function(e, props, targets) {
          var children,
              i,
              child,
              type;
          if (e.slice) {
            i = e.length;
            while (--i > -1) {
              _getChildStyles(e[i], props, targets);
            }
            return;
          }
          children = e.childNodes;
          i = children.length;
          while (--i > -1) {
            child = children[i];
            type = child.type;
            if (child.style) {
              props.push(_getAllStyles(child));
              if (targets) {
                targets.push(child);
              }
            }
            if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
              _getChildStyles(child, props, targets);
            }
          }
        };
        CSSPlugin.cascadeTo = function(target, duration, vars) {
          var tween = TweenLite.to(target, duration, vars),
              results = [tween],
              b = [],
              e = [],
              targets = [],
              _reservedProps = TweenLite._internals.reservedProps,
              i,
              difs,
              p,
              from;
          target = tween._targets || tween.target;
          _getChildStyles(target, b, targets);
          tween.render(duration, true, true);
          _getChildStyles(target, e);
          tween.render(0, true, true);
          tween._enabled(true);
          i = targets.length;
          while (--i > -1) {
            difs = _cssDif(targets[i], b[i], e[i]);
            if (difs.firstMPT) {
              difs = difs.difs;
              for (p in vars) {
                if (_reservedProps[p]) {
                  difs[p] = vars[p];
                }
              }
              from = {};
              for (p in difs) {
                from[p] = b[i][p];
              }
              results.push(TweenLite.fromTo(targets[i], duration, from, difs));
            }
          }
          return results;
        };
        TweenPlugin.activate([CSSPlugin]);
        return CSSPlugin;
      }, true);
      (function() {
        var RoundPropsPlugin = _gsScope._gsDefine.plugin({
          propName: "roundProps",
          version: "1.6.0",
          priority: -1,
          API: 2,
          init: function(target, value, tween) {
            this._tween = tween;
            return true;
          }
        }),
            _roundLinkedList = function(node) {
              while (node) {
                if (!node.f && !node.blob) {
                  node.m = Math.round;
                }
                node = node._next;
              }
            },
            p = RoundPropsPlugin.prototype;
        p._onInitAllProps = function() {
          var tween = this._tween,
              rp = (tween.vars.roundProps.join) ? tween.vars.roundProps : tween.vars.roundProps.split(","),
              i = rp.length,
              lookup = {},
              rpt = tween._propLookup.roundProps,
              prop,
              pt,
              next;
          while (--i > -1) {
            lookup[rp[i]] = Math.round;
          }
          i = rp.length;
          while (--i > -1) {
            prop = rp[i];
            pt = tween._firstPT;
            while (pt) {
              next = pt._next;
              if (pt.pg) {
                pt.t._mod(lookup);
              } else if (pt.n === prop) {
                if (pt.f === 2 && pt.t) {
                  _roundLinkedList(pt.t._firstPT);
                } else {
                  this._add(pt.t, prop, pt.s, pt.c);
                  if (next) {
                    next._prev = pt._prev;
                  }
                  if (pt._prev) {
                    pt._prev._next = next;
                  } else if (tween._firstPT === pt) {
                    tween._firstPT = next;
                  }
                  pt._next = pt._prev = null;
                  tween._propLookup[prop] = rpt;
                }
              }
              pt = next;
            }
          }
          return false;
        };
        p._add = function(target, p, s, c) {
          this._addTween(target, p, s, s + c, p, Math.round);
          this._overwriteProps.push(p);
        };
      }());
      (function() {
        _gsScope._gsDefine.plugin({
          propName: "attr",
          API: 2,
          version: "0.6.0",
          init: function(target, value, tween, index) {
            var p,
                end;
            if (typeof(target.setAttribute) !== "function") {
              return false;
            }
            for (p in value) {
              end = value[p];
              if (typeof(end) === "function") {
                end = end(index, target);
              }
              this._addTween(target, "setAttribute", target.getAttribute(p) + "", end + "", p, false, p);
              this._overwriteProps.push(p);
            }
            return true;
          }
        });
      }());
      _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.0",
        API: 2,
        init: function(target, value, tween, index) {
          if (typeof(value) !== "object") {
            value = {rotation: value};
          }
          this.finals = {};
          var cap = (value.useRadians === true) ? Math.PI * 2 : 360,
              min = 0.000001,
              p,
              v,
              start,
              end,
              dif,
              split;
          for (p in value) {
            if (p !== "useRadians") {
              end = value[p];
              if (typeof(end) === "function") {
                end = end(index, target);
              }
              split = (end + "").split("_");
              v = split[0];
              start = parseFloat((typeof(target[p]) !== "function") ? target[p] : target[((p.indexOf("set") || typeof(target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3))]());
              end = this.finals[p] = (typeof(v) === "string" && v.charAt(1) === "=") ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
              dif = end - start;
              if (split.length) {
                v = split.join("_");
                if (v.indexOf("short") !== -1) {
                  dif = dif % cap;
                  if (dif !== dif % (cap / 2)) {
                    dif = (dif < 0) ? dif + cap : dif - cap;
                  }
                }
                if (v.indexOf("_cw") !== -1 && dif < 0) {
                  dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
                } else if (v.indexOf("ccw") !== -1 && dif > 0) {
                  dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
                }
              }
              if (dif > min || dif < -min) {
                this._addTween(target, p, start, start + dif, p);
                this._overwriteProps.push(p);
              }
            }
          }
          return true;
        },
        set: function(ratio) {
          var pt;
          if (ratio !== 1) {
            this._super.setRatio.call(this, ratio);
          } else {
            pt = this._firstPT;
            while (pt) {
              if (pt.f) {
                pt.t[pt.p](this.finals[pt.p]);
              } else {
                pt.t[pt.p] = this.finals[pt.p];
              }
              pt = pt._next;
            }
          }
        }
      })._autoCSS = true;
      _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(Ease) {
        var w = (_gsScope.GreenSockGlobals || _gsScope),
            gs = w.com.greensock,
            _2PI = Math.PI * 2,
            _HALF_PI = Math.PI / 2,
            _class = gs._class,
            _create = function(n, f) {
              var C = _class("easing." + n, function() {}, true),
                  p = C.prototype = new Ease();
              p.constructor = C;
              p.getRatio = f;
              return C;
            },
            _easeReg = Ease.register || function() {},
            _wrap = function(name, EaseOut, EaseIn, EaseInOut, aliases) {
              var C = _class("easing." + name, {
                easeOut: new EaseOut(),
                easeIn: new EaseIn(),
                easeInOut: new EaseInOut()
              }, true);
              _easeReg(C, name);
              return C;
            },
            EasePoint = function(time, value, next) {
              this.t = time;
              this.v = value;
              if (next) {
                this.next = next;
                next.prev = this;
                this.c = next.v - value;
                this.gap = next.t - time;
              }
            },
            _createBack = function(n, f) {
              var C = _class("easing." + n, function(overshoot) {
                this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
                this._p2 = this._p1 * 1.525;
              }, true),
                  p = C.prototype = new Ease();
              p.constructor = C;
              p.getRatio = f;
              p.config = function(overshoot) {
                return new C(overshoot);
              };
              return C;
            },
            Back = _wrap("Back", _createBack("BackOut", function(p) {
              return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1);
            }), _createBack("BackIn", function(p) {
              return p * p * ((this._p1 + 1) * p - this._p1);
            }), _createBack("BackInOut", function(p) {
              return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
            })),
            SlowMo = _class("easing.SlowMo", function(linearRatio, power, yoyoMode) {
              power = (power || power === 0) ? power : 0.7;
              if (linearRatio == null) {
                linearRatio = 0.7;
              } else if (linearRatio > 1) {
                linearRatio = 1;
              }
              this._p = (linearRatio !== 1) ? power : 0;
              this._p1 = (1 - linearRatio) / 2;
              this._p2 = linearRatio;
              this._p3 = this._p1 + this._p2;
              this._calcEnd = (yoyoMode === true);
            }, true),
            p = SlowMo.prototype = new Ease(),
            SteppedEase,
            RoughEase,
            _createElastic;
        p.constructor = SlowMo;
        p.getRatio = function(p) {
          var r = p + (0.5 - p) * this._p;
          if (p < this._p1) {
            return this._calcEnd ? 1 - ((p = 1 - (p / this._p1)) * p) : r - ((p = 1 - (p / this._p1)) * p * p * p * r);
          } else if (p > this._p3) {
            return this._calcEnd ? 1 - (p = (p - this._p3) / this._p1) * p : r + ((p - r) * (p = (p - this._p3) / this._p1) * p * p * p);
          }
          return this._calcEnd ? 1 : r;
        };
        SlowMo.ease = new SlowMo(0.7, 0.7);
        p.config = SlowMo.config = function(linearRatio, power, yoyoMode) {
          return new SlowMo(linearRatio, power, yoyoMode);
        };
        SteppedEase = _class("easing.SteppedEase", function(steps) {
          steps = steps || 1;
          this._p1 = 1 / steps;
          this._p2 = steps + 1;
        }, true);
        p = SteppedEase.prototype = new Ease();
        p.constructor = SteppedEase;
        p.getRatio = function(p) {
          if (p < 0) {
            p = 0;
          } else if (p >= 1) {
            p = 0.999999999;
          }
          return ((this._p2 * p) >> 0) * this._p1;
        };
        p.config = SteppedEase.config = function(steps) {
          return new SteppedEase(steps);
        };
        RoughEase = _class("easing.RoughEase", function(vars) {
          vars = vars || {};
          var taper = vars.taper || "none",
              a = [],
              cnt = 0,
              points = (vars.points || 20) | 0,
              i = points,
              randomize = (vars.randomize !== false),
              clamp = (vars.clamp === true),
              template = (vars.template instanceof Ease) ? vars.template : null,
              strength = (typeof(vars.strength) === "number") ? vars.strength * 0.4 : 0.4,
              x,
              y,
              bump,
              invX,
              obj,
              pnt;
          while (--i > -1) {
            x = randomize ? Math.random() : (1 / points) * i;
            y = template ? template.getRatio(x) : x;
            if (taper === "none") {
              bump = strength;
            } else if (taper === "out") {
              invX = 1 - x;
              bump = invX * invX * strength;
            } else if (taper === "in") {
              bump = x * x * strength;
            } else if (x < 0.5) {
              invX = x * 2;
              bump = invX * invX * 0.5 * strength;
            } else {
              invX = (1 - x) * 2;
              bump = invX * invX * 0.5 * strength;
            }
            if (randomize) {
              y += (Math.random() * bump) - (bump * 0.5);
            } else if (i % 2) {
              y += bump * 0.5;
            } else {
              y -= bump * 0.5;
            }
            if (clamp) {
              if (y > 1) {
                y = 1;
              } else if (y < 0) {
                y = 0;
              }
            }
            a[cnt++] = {
              x: x,
              y: y
            };
          }
          a.sort(function(a, b) {
            return a.x - b.x;
          });
          pnt = new EasePoint(1, 1, null);
          i = points;
          while (--i > -1) {
            obj = a[i];
            pnt = new EasePoint(obj.x, obj.y, pnt);
          }
          this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next);
        }, true);
        p = RoughEase.prototype = new Ease();
        p.constructor = RoughEase;
        p.getRatio = function(p) {
          var pnt = this._prev;
          if (p > pnt.t) {
            while (pnt.next && p >= pnt.t) {
              pnt = pnt.next;
            }
            pnt = pnt.prev;
          } else {
            while (pnt.prev && p <= pnt.t) {
              pnt = pnt.prev;
            }
          }
          this._prev = pnt;
          return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c);
        };
        p.config = function(vars) {
          return new RoughEase(vars);
        };
        RoughEase.ease = new RoughEase();
        _wrap("Bounce", _create("BounceOut", function(p) {
          if (p < 1 / 2.75) {
            return 7.5625 * p * p;
          } else if (p < 2 / 2.75) {
            return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
          } else if (p < 2.5 / 2.75) {
            return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
          }
          return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
        }), _create("BounceIn", function(p) {
          if ((p = 1 - p) < 1 / 2.75) {
            return 1 - (7.5625 * p * p);
          } else if (p < 2 / 2.75) {
            return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
          } else if (p < 2.5 / 2.75) {
            return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
          }
          return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
        }), _create("BounceInOut", function(p) {
          var invert = (p < 0.5);
          if (invert) {
            p = 1 - (p * 2);
          } else {
            p = (p * 2) - 1;
          }
          if (p < 1 / 2.75) {
            p = 7.5625 * p * p;
          } else if (p < 2 / 2.75) {
            p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
          } else if (p < 2.5 / 2.75) {
            p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
          } else {
            p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
          }
          return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
        }));
        _wrap("Circ", _create("CircOut", function(p) {
          return Math.sqrt(1 - (p = p - 1) * p);
        }), _create("CircIn", function(p) {
          return -(Math.sqrt(1 - (p * p)) - 1);
        }), _create("CircInOut", function(p) {
          return ((p *= 2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
        }));
        _createElastic = function(n, f, def) {
          var C = _class("easing." + n, function(amplitude, period) {
            this._p1 = (amplitude >= 1) ? amplitude : 1;
            this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
            this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
            this._p2 = _2PI / this._p2;
          }, true),
              p = C.prototype = new Ease();
          p.constructor = C;
          p.getRatio = f;
          p.config = function(amplitude, period) {
            return new C(amplitude, period);
          };
          return C;
        };
        _wrap("Elastic", _createElastic("ElasticOut", function(p) {
          return this._p1 * Math.pow(2, -10 * p) * Math.sin((p - this._p3) * this._p2) + 1;
        }, 0.3), _createElastic("ElasticIn", function(p) {
          return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2));
        }, 0.3), _createElastic("ElasticInOut", function(p) {
          return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2) * 0.5 + 1;
        }, 0.45));
        _wrap("Expo", _create("ExpoOut", function(p) {
          return 1 - Math.pow(2, -10 * p);
        }), _create("ExpoIn", function(p) {
          return Math.pow(2, 10 * (p - 1)) - 0.001;
        }), _create("ExpoInOut", function(p) {
          return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
        }));
        _wrap("Sine", _create("SineOut", function(p) {
          return Math.sin(p * _HALF_PI);
        }), _create("SineIn", function(p) {
          return -Math.cos(p * _HALF_PI) + 1;
        }), _create("SineInOut", function(p) {
          return -0.5 * (Math.cos(Math.PI * p) - 1);
        }));
        _class("easing.EaseLookup", {find: function(s) {
            return Ease.map[s];
          }}, true);
        _easeReg(w.SlowMo, "SlowMo", "ease,");
        _easeReg(RoughEase, "RoughEase", "ease,");
        _easeReg(SteppedEase, "SteppedEase", "ease,");
        return Back;
      }, true);
    });
    if (_gsScope._gsDefine) {
      _gsScope._gsQueue.pop()();
    }
    (function(window, moduleName) {
      "use strict";
      var _exports = {},
          _globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
      if (_globals.TweenLite) {
        return;
      }
      var _namespace = function(ns) {
        var a = ns.split("."),
            p = _globals,
            i;
        for (i = 0; i < a.length; i++) {
          p[a[i]] = p = p[a[i]] || {};
        }
        return p;
      },
          gs = _namespace("com.greensock"),
          _tinyNum = 0.0000000001,
          _slice = function(a) {
            var b = [],
                l = a.length,
                i;
            for (i = 0; i !== l; b.push(a[i++])) {}
            return b;
          },
          _emptyFunc = function() {},
          _isArray = (function() {
            var toString = Object.prototype.toString,
                array = toString.call([]);
            return function(obj) {
              return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
            };
          }()),
          a,
          i,
          p,
          _ticker,
          _tickerActive,
          _defLookup = {},
          Definition = function(ns, dependencies, func, global) {
            this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : [];
            _defLookup[ns] = this;
            this.gsClass = null;
            this.func = func;
            var _classes = [];
            this.check = function(init) {
              var i = dependencies.length,
                  missing = i,
                  cur,
                  a,
                  n,
                  cl,
                  hasModule;
              while (--i > -1) {
                if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
                  _classes[i] = cur.gsClass;
                  missing--;
                } else if (init) {
                  cur.sc.push(this);
                }
              }
              if (missing === 0 && func) {
                a = ("com.greensock." + ns).split(".");
                n = a.pop();
                cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);
                if (global) {
                  _globals[n] = _exports[n] = cl;
                  hasModule = (typeof(module) !== "undefined" && module.exports);
                  if (!hasModule && typeof(define) === "function" && define.amd) {
                    define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function() {
                      return cl;
                    });
                  } else if (hasModule) {
                    if (ns === moduleName) {
                      module.exports = _exports[moduleName] = cl;
                      for (i in _exports) {
                        cl[i] = _exports[i];
                      }
                    } else if (_exports[moduleName]) {
                      _exports[moduleName][n] = cl;
                    }
                  }
                }
                for (i = 0; i < this.sc.length; i++) {
                  this.sc[i].check();
                }
              }
            };
            this.check(true);
          },
          _gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
            return new Definition(ns, dependencies, func, global);
          },
          _class = gs._class = function(ns, func, global) {
            func = func || function() {};
            _gsDefine(ns, [], function() {
              return func;
            }, global);
            return func;
          };
      _gsDefine.globals = _globals;
      var _baseParams = [0, 0, 1, 1],
          _blankArray = [],
          Ease = _class("easing.Ease", function(func, extraParams, type, power) {
            this._func = func;
            this._type = type || 0;
            this._power = power || 0;
            this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
          }, true),
          _easeMap = Ease.map = {},
          _easeReg = Ease.register = function(ease, names, types, create) {
            var na = names.split(","),
                i = na.length,
                ta = (types || "easeIn,easeOut,easeInOut").split(","),
                e,
                name,
                j,
                type;
            while (--i > -1) {
              name = na[i];
              e = create ? _class("easing." + name, null, true) : gs.easing[name] || {};
              j = ta.length;
              while (--j > -1) {
                type = ta[j];
                _easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
              }
            }
          };
      p = Ease.prototype;
      p._calcEnd = false;
      p.getRatio = function(p) {
        if (this._func) {
          this._params[0] = p;
          return this._func.apply(null, this._params);
        }
        var t = this._type,
            pw = this._power,
            r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
        if (pw === 1) {
          r *= r;
        } else if (pw === 2) {
          r *= r * r;
        } else if (pw === 3) {
          r *= r * r * r;
        } else if (pw === 4) {
          r *= r * r * r * r;
        }
        return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
      };
      a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
      i = a.length;
      while (--i > -1) {
        p = a[i] + ",Power" + i;
        _easeReg(new Ease(null, null, 1, i), p, "easeOut", true);
        _easeReg(new Ease(null, null, 2, i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
        _easeReg(new Ease(null, null, 3, i), p, "easeInOut");
      }
      _easeMap.linear = gs.easing.Linear.easeIn;
      _easeMap.swing = gs.easing.Quad.easeInOut;
      var EventDispatcher = _class("events.EventDispatcher", function(target) {
        this._listeners = {};
        this._eventTarget = target || this;
      });
      p = EventDispatcher.prototype;
      p.addEventListener = function(type, callback, scope, useParam, priority) {
        priority = priority || 0;
        var list = this._listeners[type],
            index = 0,
            listener,
            i;
        if (this === _ticker && !_tickerActive) {
          _ticker.wake();
        }
        if (list == null) {
          this._listeners[type] = list = [];
        }
        i = list.length;
        while (--i > -1) {
          listener = list[i];
          if (listener.c === callback && listener.s === scope) {
            list.splice(i, 1);
          } else if (index === 0 && listener.pr < priority) {
            index = i + 1;
          }
        }
        list.splice(index, 0, {
          c: callback,
          s: scope,
          up: useParam,
          pr: priority
        });
      };
      p.removeEventListener = function(type, callback) {
        var list = this._listeners[type],
            i;
        if (list) {
          i = list.length;
          while (--i > -1) {
            if (list[i].c === callback) {
              list.splice(i, 1);
              return;
            }
          }
        }
      };
      p.dispatchEvent = function(type) {
        var list = this._listeners[type],
            i,
            t,
            listener;
        if (list) {
          i = list.length;
          if (i > 1) {
            list = list.slice(0);
          }
          t = this._eventTarget;
          while (--i > -1) {
            listener = list[i];
            if (listener) {
              if (listener.up) {
                listener.c.call(listener.s || t, {
                  type: type,
                  target: t
                });
              } else {
                listener.c.call(listener.s || t);
              }
            }
          }
        }
      };
      var _reqAnimFrame = window.requestAnimationFrame,
          _cancelAnimFrame = window.cancelAnimationFrame,
          _getTime = Date.now || function() {
            return new Date().getTime();
          },
          _lastUpdate = _getTime();
      a = ["ms", "moz", "webkit", "o"];
      i = a.length;
      while (--i > -1 && !_reqAnimFrame) {
        _reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
        _cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
      }
      _class("Ticker", function(fps, useRAF) {
        var _self = this,
            _startTime = _getTime(),
            _useRAF = (useRAF !== false && _reqAnimFrame) ? "auto" : false,
            _lagThreshold = 500,
            _adjustedLag = 33,
            _tickWord = "tick",
            _fps,
            _req,
            _id,
            _gap,
            _nextTime,
            _tick = function(manual) {
              var elapsed = _getTime() - _lastUpdate,
                  overlap,
                  dispatch;
              if (elapsed > _lagThreshold) {
                _startTime += elapsed - _adjustedLag;
              }
              _lastUpdate += elapsed;
              _self.time = (_lastUpdate - _startTime) / 1000;
              overlap = _self.time - _nextTime;
              if (!_fps || overlap > 0 || manual === true) {
                _self.frame++;
                _nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
                dispatch = true;
              }
              if (manual !== true) {
                _id = _req(_tick);
              }
              if (dispatch) {
                _self.dispatchEvent(_tickWord);
              }
            };
        EventDispatcher.call(_self);
        _self.time = _self.frame = 0;
        _self.tick = function() {
          _tick(true);
        };
        _self.lagSmoothing = function(threshold, adjustedLag) {
          _lagThreshold = threshold || (1 / _tinyNum);
          _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
        };
        _self.sleep = function() {
          if (_id == null) {
            return;
          }
          if (!_useRAF || !_cancelAnimFrame) {
            clearTimeout(_id);
          } else {
            _cancelAnimFrame(_id);
          }
          _req = _emptyFunc;
          _id = null;
          if (_self === _ticker) {
            _tickerActive = false;
          }
        };
        _self.wake = function(seamless) {
          if (_id !== null) {
            _self.sleep();
          } else if (seamless) {
            _startTime += -_lastUpdate + (_lastUpdate = _getTime());
          } else if (_self.frame > 10) {
            _lastUpdate = _getTime() - _lagThreshold + 5;
          }
          _req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) {
            return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0);
          } : _reqAnimFrame;
          if (_self === _ticker) {
            _tickerActive = true;
          }
          _tick(2);
        };
        _self.fps = function(value) {
          if (!arguments.length) {
            return _fps;
          }
          _fps = value;
          _gap = 1 / (_fps || 60);
          _nextTime = this.time + _gap;
          _self.wake();
        };
        _self.useRAF = function(value) {
          if (!arguments.length) {
            return _useRAF;
          }
          _self.sleep();
          _useRAF = value;
          _self.fps(_fps);
        };
        _self.fps(fps);
        setTimeout(function() {
          if (_useRAF === "auto" && _self.frame < 5 && document.visibilityState !== "hidden") {
            _self.useRAF(false);
          }
        }, 1500);
      });
      p = gs.Ticker.prototype = new gs.events.EventDispatcher();
      p.constructor = gs.Ticker;
      var Animation = _class("core.Animation", function(duration, vars) {
        this.vars = vars = vars || {};
        this._duration = this._totalDuration = duration || 0;
        this._delay = Number(vars.delay) || 0;
        this._timeScale = 1;
        this._active = (vars.immediateRender === true);
        this.data = vars.data;
        this._reversed = (vars.reversed === true);
        if (!_rootTimeline) {
          return;
        }
        if (!_tickerActive) {
          _ticker.wake();
        }
        var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
        tl.add(this, tl._time);
        if (this.vars.paused) {
          this.paused(true);
        }
      });
      _ticker = Animation.ticker = new gs.Ticker();
      p = Animation.prototype;
      p._dirty = p._gc = p._initted = p._paused = false;
      p._totalTime = p._time = 0;
      p._rawPrevTime = -1;
      p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
      p._paused = false;
      var _checkTimeout = function() {
        if (_tickerActive && _getTime() - _lastUpdate > 2000) {
          _ticker.wake();
        }
        setTimeout(_checkTimeout, 2000);
      };
      _checkTimeout();
      p.play = function(from, suppressEvents) {
        if (from != null) {
          this.seek(from, suppressEvents);
        }
        return this.reversed(false).paused(false);
      };
      p.pause = function(atTime, suppressEvents) {
        if (atTime != null) {
          this.seek(atTime, suppressEvents);
        }
        return this.paused(true);
      };
      p.resume = function(from, suppressEvents) {
        if (from != null) {
          this.seek(from, suppressEvents);
        }
        return this.paused(false);
      };
      p.seek = function(time, suppressEvents) {
        return this.totalTime(Number(time), suppressEvents !== false);
      };
      p.restart = function(includeDelay, suppressEvents) {
        return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
      };
      p.reverse = function(from, suppressEvents) {
        if (from != null) {
          this.seek((from || this.totalDuration()), suppressEvents);
        }
        return this.reversed(true).paused(false);
      };
      p.render = function(time, suppressEvents, force) {};
      p.invalidate = function() {
        this._time = this._totalTime = 0;
        this._initted = this._gc = false;
        this._rawPrevTime = -1;
        if (this._gc || !this.timeline) {
          this._enabled(true);
        }
        return this;
      };
      p.isActive = function() {
        var tl = this._timeline,
            startTime = this._startTime,
            rawTime;
        return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime()) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale));
      };
      p._enabled = function(enabled, ignoreTimeline) {
        if (!_tickerActive) {
          _ticker.wake();
        }
        this._gc = !enabled;
        this._active = this.isActive();
        if (ignoreTimeline !== true) {
          if (enabled && !this.timeline) {
            this._timeline.add(this, this._startTime - this._delay);
          } else if (!enabled && this.timeline) {
            this._timeline._remove(this, true);
          }
        }
        return false;
      };
      p._kill = function(vars, target) {
        return this._enabled(false, false);
      };
      p.kill = function(vars, target) {
        this._kill(vars, target);
        return this;
      };
      p._uncache = function(includeSelf) {
        var tween = includeSelf ? this : this.timeline;
        while (tween) {
          tween._dirty = true;
          tween = tween.timeline;
        }
        return this;
      };
      p._swapSelfInParams = function(params) {
        var i = params.length,
            copy = params.concat();
        while (--i > -1) {
          if (params[i] === "{self}") {
            copy[i] = this;
          }
        }
        return copy;
      };
      p._callback = function(type) {
        var v = this.vars,
            callback = v[type],
            params = v[type + "Params"],
            scope = v[type + "Scope"] || v.callbackScope || this,
            l = params ? params.length : 0;
        switch (l) {
          case 0:
            callback.call(scope);
            break;
          case 1:
            callback.call(scope, params[0]);
            break;
          case 2:
            callback.call(scope, params[0], params[1]);
            break;
          default:
            callback.apply(scope, params);
        }
      };
      p.eventCallback = function(type, callback, params, scope) {
        if ((type || "").substr(0, 2) === "on") {
          var v = this.vars;
          if (arguments.length === 1) {
            return v[type];
          }
          if (callback == null) {
            delete v[type];
          } else {
            v[type] = callback;
            v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
            v[type + "Scope"] = scope;
          }
          if (type === "onUpdate") {
            this._onUpdate = callback;
          }
        }
        return this;
      };
      p.delay = function(value) {
        if (!arguments.length) {
          return this._delay;
        }
        if (this._timeline.smoothChildTiming) {
          this.startTime(this._startTime + value - this._delay);
        }
        this._delay = value;
        return this;
      };
      p.duration = function(value) {
        if (!arguments.length) {
          this._dirty = false;
          return this._duration;
        }
        this._duration = this._totalDuration = value;
        this._uncache(true);
        if (this._timeline.smoothChildTiming)
          if (this._time > 0)
            if (this._time < this._duration)
              if (value !== 0) {
                this.totalTime(this._totalTime * (value / this._duration), true);
              }
        return this;
      };
      p.totalDuration = function(value) {
        this._dirty = false;
        return (!arguments.length) ? this._totalDuration : this.duration(value);
      };
      p.time = function(value, suppressEvents) {
        if (!arguments.length) {
          return this._time;
        }
        if (this._dirty) {
          this.totalDuration();
        }
        return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
      };
      p.totalTime = function(time, suppressEvents, uncapped) {
        if (!_tickerActive) {
          _ticker.wake();
        }
        if (!arguments.length) {
          return this._totalTime;
        }
        if (this._timeline) {
          if (time < 0 && !uncapped) {
            time += this.totalDuration();
          }
          if (this._timeline.smoothChildTiming) {
            if (this._dirty) {
              this.totalDuration();
            }
            var totalDuration = this._totalDuration,
                tl = this._timeline;
            if (time > totalDuration && !uncapped) {
              time = totalDuration;
            }
            this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
            if (!tl._dirty) {
              this._uncache(false);
            }
            if (tl._timeline) {
              while (tl._timeline) {
                if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
                  tl.totalTime(tl._totalTime, true);
                }
                tl = tl._timeline;
              }
            }
          }
          if (this._gc) {
            this._enabled(true, false);
          }
          if (this._totalTime !== time || this._duration === 0) {
            if (_lazyTweens.length) {
              _lazyRender();
            }
            this.render(time, suppressEvents, false);
            if (_lazyTweens.length) {
              _lazyRender();
            }
          }
        }
        return this;
      };
      p.progress = p.totalProgress = function(value, suppressEvents) {
        var duration = this.duration();
        return (!arguments.length) ? (duration ? this._time / duration : this.ratio) : this.totalTime(duration * value, suppressEvents);
      };
      p.startTime = function(value) {
        if (!arguments.length) {
          return this._startTime;
        }
        if (value !== this._startTime) {
          this._startTime = value;
          if (this.timeline)
            if (this.timeline._sortChildren) {
              this.timeline.add(this, value - this._delay);
            }
        }
        return this;
      };
      p.endTime = function(includeRepeats) {
        return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
      };
      p.timeScale = function(value) {
        if (!arguments.length) {
          return this._timeScale;
        }
        value = value || _tinyNum;
        if (this._timeline && this._timeline.smoothChildTiming) {
          var pauseTime = this._pauseTime,
              t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
          this._startTime = t - ((t - this._startTime) * this._timeScale / value);
        }
        this._timeScale = value;
        return this._uncache(false);
      };
      p.reversed = function(value) {
        if (!arguments.length) {
          return this._reversed;
        }
        if (value != this._reversed) {
          this._reversed = value;
          this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
        }
        return this;
      };
      p.paused = function(value) {
        if (!arguments.length) {
          return this._paused;
        }
        var tl = this._timeline,
            raw,
            elapsed;
        if (value != this._paused)
          if (tl) {
            if (!_tickerActive && !value) {
              _ticker.wake();
            }
            raw = tl.rawTime();
            elapsed = raw - this._pauseTime;
            if (!value && tl.smoothChildTiming) {
              this._startTime += elapsed;
              this._uncache(false);
            }
            this._pauseTime = value ? raw : null;
            this._paused = value;
            this._active = this.isActive();
            if (!value && elapsed !== 0 && this._initted && this.duration()) {
              raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
              this.render(raw, (raw === this._totalTime), true);
            }
          }
        if (this._gc && !value) {
          this._enabled(true, false);
        }
        return this;
      };
      var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
        Animation.call(this, 0, vars);
        this.autoRemoveChildren = this.smoothChildTiming = true;
      });
      p = SimpleTimeline.prototype = new Animation();
      p.constructor = SimpleTimeline;
      p.kill()._gc = false;
      p._first = p._last = p._recent = null;
      p._sortChildren = false;
      p.add = p.insert = function(child, position, align, stagger) {
        var prevTween,
            st;
        child._startTime = Number(position || 0) + child._delay;
        if (child._paused)
          if (this !== child._timeline) {
            child._pauseTime = child._startTime + ((this.rawTime() - child._startTime) / child._timeScale);
          }
        if (child.timeline) {
          child.timeline._remove(child, true);
        }
        child.timeline = child._timeline = this;
        if (child._gc) {
          child._enabled(true, true);
        }
        prevTween = this._last;
        if (this._sortChildren) {
          st = child._startTime;
          while (prevTween && prevTween._startTime > st) {
            prevTween = prevTween._prev;
          }
        }
        if (prevTween) {
          child._next = prevTween._next;
          prevTween._next = child;
        } else {
          child._next = this._first;
          this._first = child;
        }
        if (child._next) {
          child._next._prev = child;
        } else {
          this._last = child;
        }
        child._prev = prevTween;
        this._recent = child;
        if (this._timeline) {
          this._uncache(true);
        }
        return this;
      };
      p._remove = function(tween, skipDisable) {
        if (tween.timeline === this) {
          if (!skipDisable) {
            tween._enabled(false, true);
          }
          if (tween._prev) {
            tween._prev._next = tween._next;
          } else if (this._first === tween) {
            this._first = tween._next;
          }
          if (tween._next) {
            tween._next._prev = tween._prev;
          } else if (this._last === tween) {
            this._last = tween._prev;
          }
          tween._next = tween._prev = tween.timeline = null;
          if (tween === this._recent) {
            this._recent = this._last;
          }
          if (this._timeline) {
            this._uncache(true);
          }
        }
        return this;
      };
      p.render = function(time, suppressEvents, force) {
        var tween = this._first,
            next;
        this._totalTime = this._time = this._rawPrevTime = time;
        while (tween) {
          next = tween._next;
          if (tween._active || (time >= tween._startTime && !tween._paused)) {
            if (!tween._reversed) {
              tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
            } else {
              tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
            }
          }
          tween = next;
        }
      };
      p.rawTime = function() {
        if (!_tickerActive) {
          _ticker.wake();
        }
        return this._totalTime;
      };
      var TweenLite = _class("TweenLite", function(target, duration, vars) {
        Animation.call(this, duration, vars);
        this.render = TweenLite.prototype.render;
        if (target == null) {
          throw "Cannot tween a null target.";
        }
        this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
        var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
            overwrite = this.vars.overwrite,
            i,
            targ,
            targets;
        this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];
        if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
          this._targets = targets = _slice(target);
          this._propLookup = [];
          this._siblings = [];
          for (i = 0; i < targets.length; i++) {
            targ = targets[i];
            if (!targ) {
              targets.splice(i--, 1);
              continue;
            } else if (typeof(targ) === "string") {
              targ = targets[i--] = TweenLite.selector(targ);
              if (typeof(targ) === "string") {
                targets.splice(i + 1, 1);
              }
              continue;
            } else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) {
              targets.splice(i--, 1);
              this._targets = targets = targets.concat(_slice(targ));
              continue;
            }
            this._siblings[i] = _register(targ, this, false);
            if (overwrite === 1)
              if (this._siblings[i].length > 1) {
                _applyOverwrite(targ, this, null, 1, this._siblings[i]);
              }
          }
        } else {
          this._propLookup = {};
          this._siblings = _register(target, this, false);
          if (overwrite === 1)
            if (this._siblings.length > 1) {
              _applyOverwrite(target, this, null, 1, this._siblings);
            }
        }
        if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
          this._time = -_tinyNum;
          this.render(Math.min(0, -this._delay));
        }
      }, true),
          _isSelector = function(v) {
            return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType)));
          },
          _autoCSS = function(vars, target) {
            var css = {},
                p;
            for (p in vars) {
              if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) {
                css[p] = vars[p];
                delete vars[p];
              }
            }
            vars.css = css;
          };
      p = TweenLite.prototype = new Animation();
      p.constructor = TweenLite;
      p.kill()._gc = false;
      p.ratio = 0;
      p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
      p._notifyPluginsOfEnabled = p._lazy = false;
      TweenLite.version = "1.19.0";
      TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
      TweenLite.defaultOverwrite = "auto";
      TweenLite.ticker = _ticker;
      TweenLite.autoSleep = 120;
      TweenLite.lagSmoothing = function(threshold, adjustedLag) {
        _ticker.lagSmoothing(threshold, adjustedLag);
      };
      TweenLite.selector = window.$ || window.jQuery || function(e) {
        var selector = window.$ || window.jQuery;
        if (selector) {
          TweenLite.selector = selector;
          return selector(e);
        }
        return (typeof(document) === "undefined") ? e : (document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
      };
      var _lazyTweens = [],
          _lazyLookup = {},
          _numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
          _setRatio = function(v) {
            var pt = this._firstPT,
                min = 0.000001,
                val;
            while (pt) {
              val = !pt.blob ? pt.c * v + pt.s : v ? this.join("") : this.start;
              if (pt.m) {
                val = pt.m(val, this._target || pt.t);
              } else if (val < min)
                if (val > -min) {
                  val = 0;
                }
              if (!pt.f) {
                pt.t[pt.p] = val;
              } else if (pt.fp) {
                pt.t[pt.p](pt.fp, val);
              } else {
                pt.t[pt.p](val);
              }
              pt = pt._next;
            }
          },
          _blobDif = function(start, end, filter, pt) {
            var a = [start, end],
                charIndex = 0,
                s = "",
                color = 0,
                startNums,
                endNums,
                num,
                i,
                l,
                nonNumbers,
                currentNum;
            a.start = start;
            if (filter) {
              filter(a);
              start = a[0];
              end = a[1];
            }
            a.length = 0;
            startNums = start.match(_numbersExp) || [];
            endNums = end.match(_numbersExp) || [];
            if (pt) {
              pt._next = null;
              pt.blob = 1;
              a._firstPT = a._applyPT = pt;
            }
            l = endNums.length;
            for (i = 0; i < l; i++) {
              currentNum = endNums[i];
              nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex) - charIndex);
              s += (nonNumbers || !i) ? nonNumbers : ",";
              charIndex += nonNumbers.length;
              if (color) {
                color = (color + 1) % 5;
              } else if (nonNumbers.substr(-5) === "rgba(") {
                color = 1;
              }
              if (currentNum === startNums[i] || startNums.length <= i) {
                s += currentNum;
              } else {
                if (s) {
                  a.push(s);
                  s = "";
                }
                num = parseFloat(startNums[i]);
                a.push(num);
                a._firstPT = {
                  _next: a._firstPT,
                  t: a,
                  p: a.length - 1,
                  s: num,
                  c: ((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0,
                  f: 0,
                  m: (color && color < 4) ? Math.round : 0
                };
              }
              charIndex += currentNum.length;
            }
            s += end.substr(charIndex);
            if (s) {
              a.push(s);
            }
            a.setRatio = _setRatio;
            return a;
          },
          _addPropTween = function(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
            if (typeof(end) === "function") {
              end = end(index || 0, target);
            }
            var s = (start === "get") ? target[prop] : start,
                type = typeof(target[prop]),
                isRelative = (typeof(end) === "string" && end.charAt(1) === "="),
                pt = {
                  t: target,
                  p: prop,
                  s: s,
                  f: (type === "function"),
                  pg: 0,
                  n: overwriteProp || prop,
                  m: (!mod ? 0 : (typeof(mod) === "function") ? mod : Math.round),
                  pr: 0,
                  c: isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0
                },
                blob,
                getterName;
            if (type !== "number") {
              if (type === "function" && start === "get") {
                getterName = ((prop.indexOf("set") || typeof(target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3));
                pt.s = s = funcParam ? target[getterName](funcParam) : target[getterName]();
              }
              if (typeof(s) === "string" && (funcParam || isNaN(s))) {
                pt.fp = funcParam;
                blob = _blobDif(s, end, stringFilter || TweenLite.defaultStringFilter, pt);
                pt = {
                  t: blob,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 2,
                  pg: 0,
                  n: overwriteProp || prop,
                  pr: 0,
                  m: 0
                };
              } else if (!isRelative) {
                pt.s = parseFloat(s);
                pt.c = (parseFloat(end) - pt.s) || 0;
              }
            }
            if (pt.c) {
              if ((pt._next = this._firstPT)) {
                pt._next._prev = pt;
              }
              this._firstPT = pt;
              return pt;
            }
          },
          _internals = TweenLite._internals = {
            isArray: _isArray,
            isSelector: _isSelector,
            lazyTweens: _lazyTweens,
            blobDif: _blobDif
          },
          _plugins = TweenLite._plugins = {},
          _tweenLookup = _internals.tweenLookup = {},
          _tweenLookupNum = 0,
          _reservedProps = _internals.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1,
            id: 1
          },
          _overwriteLookup = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
          },
          _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
          _rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
          _nextGCFrame = 30,
          _lazyRender = _internals.lazyRender = function() {
            var i = _lazyTweens.length,
                tween;
            _lazyLookup = {};
            while (--i > -1) {
              tween = _lazyTweens[i];
              if (tween && tween._lazy !== false) {
                tween.render(tween._lazy[0], tween._lazy[1], true);
                tween._lazy = false;
              }
            }
            _lazyTweens.length = 0;
          };
      _rootTimeline._startTime = _ticker.time;
      _rootFramesTimeline._startTime = _ticker.frame;
      _rootTimeline._active = _rootFramesTimeline._active = true;
      setTimeout(_lazyRender, 1);
      Animation._updateRoot = TweenLite.render = function() {
        var i,
            a,
            p;
        if (_lazyTweens.length) {
          _lazyRender();
        }
        _rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
        _rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
        if (_lazyTweens.length) {
          _lazyRender();
        }
        if (_ticker.frame >= _nextGCFrame) {
          _nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
          for (p in _tweenLookup) {
            a = _tweenLookup[p].tweens;
            i = a.length;
            while (--i > -1) {
              if (a[i]._gc) {
                a.splice(i, 1);
              }
            }
            if (a.length === 0) {
              delete _tweenLookup[p];
            }
          }
          p = _rootTimeline._first;
          if (!p || p._paused)
            if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
              while (p && p._paused) {
                p = p._next;
              }
              if (!p) {
                _ticker.sleep();
              }
            }
        }
      };
      _ticker.addEventListener("tick", Animation._updateRoot);
      var _register = function(target, tween, scrub) {
        var id = target._gsTweenID,
            a,
            i;
        if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
          _tweenLookup[id] = {
            target: target,
            tweens: []
          };
        }
        if (tween) {
          a = _tweenLookup[id].tweens;
          a[(i = a.length)] = tween;
          if (scrub) {
            while (--i > -1) {
              if (a[i] === tween) {
                a.splice(i, 1);
              }
            }
          }
        }
        return _tweenLookup[id].tweens;
      },
          _onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
            var func = overwrittenTween.vars.onOverwrite,
                r1,
                r2;
            if (func) {
              r1 = func(overwrittenTween, overwritingTween, target, killedProps);
            }
            func = TweenLite.onOverwrite;
            if (func) {
              r2 = func(overwrittenTween, overwritingTween, target, killedProps);
            }
            return (r1 !== false && r2 !== false);
          },
          _applyOverwrite = function(target, tween, props, mode, siblings) {
            var i,
                changed,
                curTween,
                l;
            if (mode === 1 || mode >= 4) {
              l = siblings.length;
              for (i = 0; i < l; i++) {
                if ((curTween = siblings[i]) !== tween) {
                  if (!curTween._gc) {
                    if (curTween._kill(null, target, tween)) {
                      changed = true;
                    }
                  }
                } else if (mode === 5) {
                  break;
                }
              }
              return changed;
            }
            var startTime = tween._startTime + _tinyNum,
                overlaps = [],
                oCount = 0,
                zeroDur = (tween._duration === 0),
                globalStart;
            i = siblings.length;
            while (--i > -1) {
              if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {} else if (curTween._timeline !== tween._timeline) {
                globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
                if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
                  overlaps[oCount++] = curTween;
                }
              } else if (curTween._startTime <= startTime)
                if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime)
                  if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
                    overlaps[oCount++] = curTween;
                  }
            }
            i = oCount;
            while (--i > -1) {
              curTween = overlaps[i];
              if (mode === 2)
                if (curTween._kill(props, target, tween)) {
                  changed = true;
                }
              if (mode !== 2 || (!curTween._firstPT && curTween._initted)) {
                if (mode !== 2 && !_onOverwrite(curTween, tween)) {
                  continue;
                }
                if (curTween._enabled(false, false)) {
                  changed = true;
                }
              }
            }
            return changed;
          },
          _checkOverlap = function(tween, reference, zeroDur) {
            var tl = tween._timeline,
                ts = tl._timeScale,
                t = tween._startTime;
            while (tl._timeline) {
              t += tl._startTime;
              ts *= tl._timeScale;
              if (tl._paused) {
                return -100;
              }
              tl = tl._timeline;
            }
            t /= ts;
            return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
          };
      p._init = function() {
        var v = this.vars,
            op = this._overwrittenProps,
            dur = this._duration,
            immediate = !!v.immediateRender,
            ease = v.ease,
            i,
            initPlugins,
            pt,
            p,
            startVars,
            l;
        if (v.startAt) {
          if (this._startAt) {
            this._startAt.render(-1, true);
            this._startAt.kill();
          }
          startVars = {};
          for (p in v.startAt) {
            startVars[p] = v.startAt[p];
          }
          startVars.overwrite = false;
          startVars.immediateRender = true;
          startVars.lazy = (immediate && v.lazy !== false);
          startVars.startAt = startVars.delay = null;
          this._startAt = TweenLite.to(this.target, 0, startVars);
          if (immediate) {
            if (this._time > 0) {
              this._startAt = null;
            } else if (dur !== 0) {
              return;
            }
          }
        } else if (v.runBackwards && dur !== 0) {
          if (this._startAt) {
            this._startAt.render(-1, true);
            this._startAt.kill();
            this._startAt = null;
          } else {
            if (this._time !== 0) {
              immediate = false;
            }
            pt = {};
            for (p in v) {
              if (!_reservedProps[p] || p === "autoCSS") {
                pt[p] = v[p];
              }
            }
            pt.overwrite = 0;
            pt.data = "isFromStart";
            pt.lazy = (immediate && v.lazy !== false);
            pt.immediateRender = immediate;
            this._startAt = TweenLite.to(this.target, 0, pt);
            if (!immediate) {
              this._startAt._init();
              this._startAt._enabled(false);
              if (this.vars.immediateRender) {
                this._startAt = null;
              }
            } else if (this._time === 0) {
              return;
            }
          }
        }
        this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
        if (v.easeParams instanceof Array && ease.config) {
          this._ease = ease.config.apply(ease, v.easeParams);
        }
        this._easeType = this._ease._type;
        this._easePower = this._ease._power;
        this._firstPT = null;
        if (this._targets) {
          l = this._targets.length;
          for (i = 0; i < l; i++) {
            if (this._initProps(this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null), i)) {
              initPlugins = true;
            }
          }
        } else {
          initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
        }
        if (initPlugins) {
          TweenLite._onPluginEvent("_onInitAllProps", this);
        }
        if (op)
          if (!this._firstPT)
            if (typeof(this.target) !== "function") {
              this._enabled(false, false);
            }
        if (v.runBackwards) {
          pt = this._firstPT;
          while (pt) {
            pt.s += pt.c;
            pt.c = -pt.c;
            pt = pt._next;
          }
        }
        this._onUpdate = v.onUpdate;
        this._initted = true;
      };
      p._initProps = function(target, propLookup, siblings, overwrittenProps, index) {
        var p,
            i,
            initPlugins,
            plugin,
            pt,
            v;
        if (target == null) {
          return false;
        }
        if (_lazyLookup[target._gsTweenID]) {
          _lazyRender();
        }
        if (!this.vars.css)
          if (target.style)
            if (target !== window && target.nodeType)
              if (_plugins.css)
                if (this.vars.autoCSS !== false) {
                  _autoCSS(this.vars, target);
                }
        for (p in this.vars) {
          v = this.vars[p];
          if (_reservedProps[p]) {
            if (v)
              if ((v instanceof Array) || (v.push && _isArray(v)))
                if (v.join("").indexOf("{self}") !== -1) {
                  this.vars[p] = v = this._swapSelfInParams(v, this);
                }
          } else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {
            this._firstPT = pt = {
              _next: this._firstPT,
              t: plugin,
              p: "setRatio",
              s: 0,
              c: 1,
              f: 1,
              n: p,
              pg: 1,
              pr: plugin._priority,
              m: 0
            };
            i = plugin._overwriteProps.length;
            while (--i > -1) {
              propLookup[plugin._overwriteProps[i]] = this._firstPT;
            }
            if (plugin._priority || plugin._onInitAllProps) {
              initPlugins = true;
            }
            if (plugin._onDisable || plugin._onEnable) {
              this._notifyPluginsOfEnabled = true;
            }
            if (pt._next) {
              pt._next._prev = pt;
            }
          } else {
            propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
          }
        }
        if (overwrittenProps)
          if (this._kill(overwrittenProps, target)) {
            return this._initProps(target, propLookup, siblings, overwrittenProps, index);
          }
        if (this._overwrite > 1)
          if (this._firstPT)
            if (siblings.length > 1)
              if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
                this._kill(propLookup, target);
                return this._initProps(target, propLookup, siblings, overwrittenProps, index);
              }
        if (this._firstPT)
          if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) {
            _lazyLookup[target._gsTweenID] = true;
          }
        return initPlugins;
      };
      p.render = function(time, suppressEvents, force) {
        var prevTime = this._time,
            duration = this._duration,
            prevRawPrevTime = this._rawPrevTime,
            isComplete,
            callback,
            pt,
            rawPrevTime;
        if (time >= duration - 0.0000001) {
          this._totalTime = this._time = duration;
          this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
          if (!this._reversed) {
            isComplete = true;
            callback = "onComplete";
            force = (force || this._timeline.autoRemoveChildren);
          }
          if (duration === 0)
            if (this._initted || !this.vars.lazy || force) {
              if (this._startTime === this._timeline._duration) {
                time = 0;
              }
              if (prevRawPrevTime < 0 || (time <= 0 && time >= -0.0000001) || (prevRawPrevTime === _tinyNum && this.data !== "isPause"))
                if (prevRawPrevTime !== time) {
                  force = true;
                  if (prevRawPrevTime > _tinyNum) {
                    callback = "onReverseComplete";
                  }
                }
              this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum;
            }
        } else if (time < 0.0000001) {
          this._totalTime = this._time = 0;
          this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
          if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
            callback = "onReverseComplete";
            isComplete = this._reversed;
          }
          if (time < 0) {
            this._active = false;
            if (duration === 0)
              if (this._initted || !this.vars.lazy || force) {
                if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
                  force = true;
                }
                this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum;
              }
          }
          if (!this._initted) {
            force = true;
          }
        } else {
          this._totalTime = this._time = time;
          if (this._easeType) {
            var r = time / duration,
                type = this._easeType,
                pow = this._easePower;
            if (type === 1 || (type === 3 && r >= 0.5)) {
              r = 1 - r;
            }
            if (type === 3) {
              r *= 2;
            }
            if (pow === 1) {
              r *= r;
            } else if (pow === 2) {
              r *= r * r;
            } else if (pow === 3) {
              r *= r * r * r;
            } else if (pow === 4) {
              r *= r * r * r * r;
            }
            if (type === 1) {
              this.ratio = 1 - r;
            } else if (type === 2) {
              this.ratio = r;
            } else if (time / duration < 0.5) {
              this.ratio = r / 2;
            } else {
              this.ratio = 1 - (r / 2);
            }
          } else {
            this.ratio = this._ease.getRatio(time / duration);
          }
        }
        if (this._time === prevTime && !force) {
          return;
        } else if (!this._initted) {
          this._init();
          if (!this._initted || this._gc) {
            return;
          } else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
            this._time = this._totalTime = prevTime;
            this._rawPrevTime = prevRawPrevTime;
            _lazyTweens.push(this);
            this._lazy = [time, suppressEvents];
            return;
          }
          if (this._time && !isComplete) {
            this.ratio = this._ease.getRatio(this._time / duration);
          } else if (isComplete && this._ease._calcEnd) {
            this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
          }
        }
        if (this._lazy !== false) {
          this._lazy = false;
        }
        if (!this._active)
          if (!this._paused && this._time !== prevTime && time >= 0) {
            this._active = true;
          }
        if (prevTime === 0) {
          if (this._startAt) {
            if (time >= 0) {
              this._startAt.render(time, suppressEvents, force);
            } else if (!callback) {
              callback = "_dummyGS";
            }
          }
          if (this.vars.onStart)
            if (this._time !== 0 || duration === 0)
              if (!suppressEvents) {
                this._callback("onStart");
              }
        }
        pt = this._firstPT;
        while (pt) {
          if (pt.f) {
            pt.t[pt.p](pt.c * this.ratio + pt.s);
          } else {
            pt.t[pt.p] = pt.c * this.ratio + pt.s;
          }
          pt = pt._next;
        }
        if (this._onUpdate) {
          if (time < 0)
            if (this._startAt && time !== -0.0001) {
              this._startAt.render(time, suppressEvents, force);
            }
          if (!suppressEvents)
            if (this._time !== prevTime || isComplete || force) {
              this._callback("onUpdate");
            }
        }
        if (callback)
          if (!this._gc || force) {
            if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) {
              this._startAt.render(time, suppressEvents, force);
            }
            if (isComplete) {
              if (this._timeline.autoRemoveChildren) {
                this._enabled(false, false);
              }
              this._active = false;
            }
            if (!suppressEvents && this.vars[callback]) {
              this._callback(callback);
            }
            if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) {
              this._rawPrevTime = 0;
            }
          }
      };
      p._kill = function(vars, target, overwritingTween) {
        if (vars === "all") {
          vars = null;
        }
        if (vars == null)
          if (target == null || target === this.target) {
            this._lazy = false;
            return this._enabled(false, false);
          }
        target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
        var simultaneousOverwrite = (overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline),
            i,
            overwrittenProps,
            p,
            pt,
            propLookup,
            changed,
            killProps,
            record,
            killed;
        if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
          i = target.length;
          while (--i > -1) {
            if (this._kill(vars, target[i], overwritingTween)) {
              changed = true;
            }
          }
        } else {
          if (this._targets) {
            i = this._targets.length;
            while (--i > -1) {
              if (target === this._targets[i]) {
                propLookup = this._propLookup[i] || {};
                this._overwrittenProps = this._overwrittenProps || [];
                overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
                break;
              }
            }
          } else if (target !== this.target) {
            return false;
          } else {
            propLookup = this._propLookup;
            overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
          }
          if (propLookup) {
            killProps = vars || propLookup;
            record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill));
            if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
              for (p in killProps) {
                if (propLookup[p]) {
                  if (!killed) {
                    killed = [];
                  }
                  killed.push(p);
                }
              }
              if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) {
                return false;
              }
            }
            for (p in killProps) {
              if ((pt = propLookup[p])) {
                if (simultaneousOverwrite) {
                  if (pt.f) {
                    pt.t[pt.p](pt.s);
                  } else {
                    pt.t[pt.p] = pt.s;
                  }
                  changed = true;
                }
                if (pt.pg && pt.t._kill(killProps)) {
                  changed = true;
                }
                if (!pt.pg || pt.t._overwriteProps.length === 0) {
                  if (pt._prev) {
                    pt._prev._next = pt._next;
                  } else if (pt === this._firstPT) {
                    this._firstPT = pt._next;
                  }
                  if (pt._next) {
                    pt._next._prev = pt._prev;
                  }
                  pt._next = pt._prev = null;
                }
                delete propLookup[p];
              }
              if (record) {
                overwrittenProps[p] = 1;
              }
            }
            if (!this._firstPT && this._initted) {
              this._enabled(false, false);
            }
          }
        }
        return changed;
      };
      p.invalidate = function() {
        if (this._notifyPluginsOfEnabled) {
          TweenLite._onPluginEvent("_onDisable", this);
        }
        this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
        this._notifyPluginsOfEnabled = this._active = this._lazy = false;
        this._propLookup = (this._targets) ? {} : [];
        Animation.prototype.invalidate.call(this);
        if (this.vars.immediateRender) {
          this._time = -_tinyNum;
          this.render(Math.min(0, -this._delay));
        }
        return this;
      };
      p._enabled = function(enabled, ignoreTimeline) {
        if (!_tickerActive) {
          _ticker.wake();
        }
        if (enabled && this._gc) {
          var targets = this._targets,
              i;
          if (targets) {
            i = targets.length;
            while (--i > -1) {
              this._siblings[i] = _register(targets[i], this, true);
            }
          } else {
            this._siblings = _register(this.target, this, true);
          }
        }
        Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
        if (this._notifyPluginsOfEnabled)
          if (this._firstPT) {
            return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
          }
        return false;
      };
      TweenLite.to = function(target, duration, vars) {
        return new TweenLite(target, duration, vars);
      };
      TweenLite.from = function(target, duration, vars) {
        vars.runBackwards = true;
        vars.immediateRender = (vars.immediateRender != false);
        return new TweenLite(target, duration, vars);
      };
      TweenLite.fromTo = function(target, duration, fromVars, toVars) {
        toVars.startAt = fromVars;
        toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
        return new TweenLite(target, duration, toVars);
      };
      TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
        return new TweenLite(callback, 0, {
          delay: delay,
          onComplete: callback,
          onCompleteParams: params,
          callbackScope: scope,
          onReverseComplete: callback,
          onReverseCompleteParams: params,
          immediateRender: false,
          lazy: false,
          useFrames: useFrames,
          overwrite: 0
        });
      };
      TweenLite.set = function(target, vars) {
        return new TweenLite(target, 0, vars);
      };
      TweenLite.getTweensOf = function(target, onlyActive) {
        if (target == null) {
          return [];
        }
        target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
        var i,
            a,
            j,
            t;
        if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
          i = target.length;
          a = [];
          while (--i > -1) {
            a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
          }
          i = a.length;
          while (--i > -1) {
            t = a[i];
            j = i;
            while (--j > -1) {
              if (t === a[j]) {
                a.splice(i, 1);
              }
            }
          }
        } else {
          a = _register(target).concat();
          i = a.length;
          while (--i > -1) {
            if (a[i]._gc || (onlyActive && !a[i].isActive())) {
              a.splice(i, 1);
            }
          }
        }
        return a;
      };
      TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
        if (typeof(onlyActive) === "object") {
          vars = onlyActive;
          onlyActive = false;
        }
        var a = TweenLite.getTweensOf(target, onlyActive),
            i = a.length;
        while (--i > -1) {
          a[i]._kill(vars, target);
        }
      };
      var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
        this._overwriteProps = (props || "").split(",");
        this._propName = this._overwriteProps[0];
        this._priority = priority || 0;
        this._super = TweenPlugin.prototype;
      }, true);
      p = TweenPlugin.prototype;
      TweenPlugin.version = "1.19.0";
      TweenPlugin.API = 2;
      p._firstPT = null;
      p._addTween = _addPropTween;
      p.setRatio = _setRatio;
      p._kill = function(lookup) {
        var a = this._overwriteProps,
            pt = this._firstPT,
            i;
        if (lookup[this._propName] != null) {
          this._overwriteProps = [];
        } else {
          i = a.length;
          while (--i > -1) {
            if (lookup[a[i]] != null) {
              a.splice(i, 1);
            }
          }
        }
        while (pt) {
          if (lookup[pt.n] != null) {
            if (pt._next) {
              pt._next._prev = pt._prev;
            }
            if (pt._prev) {
              pt._prev._next = pt._next;
              pt._prev = null;
            } else if (this._firstPT === pt) {
              this._firstPT = pt._next;
            }
          }
          pt = pt._next;
        }
        return false;
      };
      p._mod = p._roundProps = function(lookup) {
        var pt = this._firstPT,
            val;
        while (pt) {
          val = lookup[this._propName] || (pt.n != null && lookup[pt.n.split(this._propName + "_").join("")]);
          if (val && typeof(val) === "function") {
            if (pt.f === 2) {
              pt.t._applyPT.m = val;
            } else {
              pt.m = val;
            }
          }
          pt = pt._next;
        }
      };
      TweenLite._onPluginEvent = function(type, tween) {
        var pt = tween._firstPT,
            changed,
            pt2,
            first,
            last,
            next;
        if (type === "_onInitAllProps") {
          while (pt) {
            next = pt._next;
            pt2 = first;
            while (pt2 && pt2.pr > pt.pr) {
              pt2 = pt2._next;
            }
            if ((pt._prev = pt2 ? pt2._prev : last)) {
              pt._prev._next = pt;
            } else {
              first = pt;
            }
            if ((pt._next = pt2)) {
              pt2._prev = pt;
            } else {
              last = pt;
            }
            pt = next;
          }
          pt = tween._firstPT = first;
        }
        while (pt) {
          if (pt.pg)
            if (typeof(pt.t[type]) === "function")
              if (pt.t[type]()) {
                changed = true;
              }
          pt = pt._next;
        }
        return changed;
      };
      TweenPlugin.activate = function(plugins) {
        var i = plugins.length;
        while (--i > -1) {
          if (plugins[i].API === TweenPlugin.API) {
            _plugins[(new plugins[i]())._propName] = plugins[i];
          }
        }
        return true;
      };
      _gsDefine.plugin = function(config) {
        if (!config || !config.propName || !config.init || !config.API) {
          throw "illegal plugin definition.";
        }
        var propName = config.propName,
            priority = config.priority || 0,
            overwriteProps = config.overwriteProps,
            map = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_mod",
              mod: "_mod",
              initAll: "_onInitAllProps"
            },
            Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin", function() {
              TweenPlugin.call(this, propName, priority);
              this._overwriteProps = overwriteProps || [];
            }, (config.global === true)),
            p = Plugin.prototype = new TweenPlugin(propName),
            prop;
        p.constructor = Plugin;
        Plugin.API = config.API;
        for (prop in map) {
          if (typeof(config[prop]) === "function") {
            p[map[prop]] = config[prop];
          }
        }
        Plugin.version = config.version;
        TweenPlugin.activate([Plugin]);
        return Plugin;
      };
      a = window._gsQueue;
      if (a) {
        for (i = 0; i < a.length; i++) {
          a[i]();
        }
        for (p in _defLookup) {
          if (!_defLookup[p].func) {
            window.console.log("GSAP encountered missing dependency: " + p);
          }
        }
      }
      _tickerActive = false;
    })((typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window, "TweenMax");
  })($__require('59'));
  return module.exports;
});

$__System.registerDynamic("4c", ["5a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('5a');
  return module.exports;
});

$__System.register("4b", ["4", "5", "4c"], function (_export) {
    var _createClass, _classCallCheck, TweenMax, TimelineMax, Utils;

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_c) {
            TweenMax = _c.TweenMax;
            TimelineMax = _c.TimelineMax;
        }],
        execute: function () {
            "use strict";

            Utils = (function () {
                function Utils() {
                    _classCallCheck(this, Utils);
                }

                _createClass(Utils, null, [{
                    key: "addClass",
                    value: function addClass(element, newClass) {
                        var duration = arguments.length <= 2 || arguments[2] === undefined ? 0.6 : arguments[2];

                        //noinspection JSUnresolvedVariable
                        TweenMax.to(element, duration, { className: "+=" + newClass, ease: Power1.easeNone });
                    }
                }, {
                    key: "removeClass",
                    value: function removeClass(element, newClass) {
                        var duration = arguments.length <= 2 || arguments[2] === undefined ? 0.6 : arguments[2];

                        //noinspection JSUnresolvedVariable
                        TweenMax.to(element, duration, { className: "-=" + newClass, ease: Power1.easeNone });
                    }
                }, {
                    key: "drawSquare",
                    value: function drawSquare(snap, x, y, width) {
                        var drawPath = arguments.length <= 4 || arguments[4] === undefined ? this.drawPlus : arguments[4];

                        var square = snap.rect(x, y, width, width).attr({
                            fill: "yellow",
                            stroke: "black",
                            strokeWidth: 1,
                            shapeRendering: "crispEdges"
                        });

                        if (width > 15) {
                            var sign = drawPath(snap, x, y, width);

                            return snap.g().add(square, sign);
                        }

                        return square;
                    }
                }, {
                    key: "insidesOn",
                    value: function insidesOn(square) {
                        var path = $(square).find("path");
                        path.css("opacity", 1);
                    }
                }, {
                    key: "toggleInsides",
                    value: function toggleInsides(square) {
                        var path = $(square).find("path");

                        if (path.css("opacity") === 0) path.css("opacity", 1);else path.css("opacity", 0);
                    }
                }, {
                    key: "drawPlus",
                    value: function drawPlus(snap, x, y, width) {
                        return snap.path("M".concat(x + width / 2 + " " + (y + width / 4)) + "L".concat(x + width / 2 + " " + (y + width - width / 4)) + "M".concat(x + width / 4 + " " + (y + width / 2)) + "L".concat(x + width - width / 4 + " " + (y + width / 2))).attr({
                            stroke: "red",
                            strokeWidth: 1,
                            shapeRendering: "crispEdges"
                        });
                    }
                }, {
                    key: "drawMinus",
                    value: function drawMinus(snap, x, y, width) {
                        return snap.path("M".concat(x + width / 4 + " " + (y + width / 2)) + "L".concat(x + width - width / 4 + " " + (y + width / 2))).attr({
                            stroke: "blue",
                            strokeWidth: 1,
                            shapeRendering: "crispEdges"
                        });
                    }
                }, {
                    key: "individualNumberHtml",
                    value: function individualNumberHtml(opArray, animation) {
                        var op = arguments.length <= 2 || arguments[2] === undefined ? "topOp" : arguments[2];

                        var opSpans = [];

                        var newHtml = opArray.reduce(function (prev, curr, currIndex, array) {
                            var id = animation._animationId + op + (array.length - currIndex);
                            opSpans.unshift("#" + id);
                            return prev + "<span class='" + animation._animationId + "-operand' id='" + id + "'>" + curr + "</span>";
                        }, "");

                        return { spans: opSpans, html: newHtml };
                    }
                }, {
                    key: "positionTopBox",
                    value: function positionTopBox(startPos, operand, box, numWidth, botBoxText, topBoxText, letterSpacing) {
                        return startPos + operand.width() + (box.width() - box.outerWidth(true)) + numWidth + Math.max(0, botBoxText.length - topBoxText.length) * (numWidth + letterSpacing);
                    }
                }, {
                    key: "positionBotBox",
                    value: function positionBotBox(startPos, operand, box, numWidth, botBoxText, topBoxText, letterSpacing) {
                        return startPos - (box.outerWidth(true) - box.width()) + operand.width() + numWidth / 2 + Math.max(0, topBoxText.length - botBoxText.length) * (numWidth + letterSpacing);
                    }
                }, {
                    key: "intLength",
                    value: function intLength(num) {
                        return num.toString().length;
                    }
                }, {
                    key: "numWidth",
                    get: function get() {
                        return 24;
                    }
                }, {
                    key: "answerClass",
                    get: function get() {
                        return "answer";
                    }
                }, {
                    key: "carryClass",
                    get: function get() {
                        return "carry";
                    }
                }, {
                    key: "negativeClass",
                    get: function get() {
                        return "negative";
                    }
                }]);

                return Utils;
            })();

            _export("default", Utils);
        }
    };
});
$__System.register("5b", ["4", "5", "49", "4c", "4a", "4b"], function (_export) {
    var _createClass, _classCallCheck, Snap, Power3, TweenMax, TimelineMax, RenderedEquals, RenderedObject, RenderedNumber, Utils, ConceptDivideAnimation;

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_3) {
            Snap = _3.Snap;
        }, function (_c) {
            Power3 = _c.Power3;
            TweenMax = _c.TweenMax;
            TimelineMax = _c.TimelineMax;
        }, function (_a) {
            RenderedEquals = _a.RenderedEquals;
            RenderedObject = _a.RenderedObject;
            RenderedNumber = _a.RenderedNumber;
        }, function (_b) {
            Utils = _b["default"];
        }],
        execute: function () {
            /**
             * Created by Matthew on 11/15/2016.
             */
            "use strict";

            ConceptDivideAnimation = (function () {
                function ConceptDivideAnimation(containerElement) {
                    _classCallCheck(this, ConceptDivideAnimation);

                    var elem = containerElement;

                    this._leftBox = elem.children(".snapbox-left");
                    this._rightBox = elem.children(".snapbox-right");
                    this._container = elem;
                    this._timeline = new TimelineMax();
                    this._animationId = this._container.attr("id") + "-animation";
                    this._svgId = this._container.attr("id") + "-animation";
                    this._toRemove = [];
                }

                _createClass(ConceptDivideAnimation, [{
                    key: "drawGo",
                    value: function drawGo() {
                        var _this = this;

                        if (this._drawn) {
                            this.go();

                            return;
                        }

                        this._drawn = true;

                        // Utilities
                        var numWidth = Utils.numWidth;
                        var intLength = Utils.intLength;

                        // Operators
                        var firstOp = parseInt(this._leftBox.find(".number-text").text());
                        var secondOp = parseInt(this._rightBox.find(".number-text").text());

                        // Parameters
                        var letterSpacing = 18;
                        var numSpacing = numWidth + letterSpacing;

                        var canvasWidth = numSpacing * intLength(firstOp) - letterSpacing;
                        var squaresPerRow = 10;
                        var leftLine = canvasWidth;
                        var squareWidth = leftLine / squaresPerRow * .75;
                        var squareMargins = leftLine / squaresPerRow * .25;
                        var vectorHeight = (squareWidth + squareMargins) * secondOp;
                        // TODO: Fix canvas height
                        var canvasHeight = canvasWidth / squaresPerRow * Math.ceil(firstOp / squaresPerRow) + vectorHeight;

                        var divisorArray = firstOp.toString().split("").map(function (i) {
                            return parseInt(i);
                        });

                        var globalEase = Power3.easeOut;

                        var squareArray = [];

                        // Canvas
                        var canvas = Snap(canvasWidth + 1, canvasHeight);

                        canvas.node.id = this._svgId;
                        $(canvas.node).css({
                            position: "absolute",
                            top: numSpacing * 2 + letterSpacing,
                            left: (this._container.width() - numSpacing * intLength(firstOp * 10)) / 2 + letterSpacing
                        });

                        this._container.append(canvas.node);

                        // Dividend
                        var dividend = new RenderedNumber(this._svgId + "-dividend", 0, letterSpacing / 2 + 3, firstOp, false);
                        var dividendDiv = dividend.createElements(this._container).css({
                            position: "absolute"
                        });

                        this._toRemove.push(dividendDiv);

                        // Squares
                        var createSquare = function createSquare(x, y, width) {
                            return Utils.drawSquare(canvas, x, y, width);
                        };

                        divisorArray.forEach(function (value, index) {
                            var currentSquares = [];

                            for (var i = 0; i < value; i++) {
                                var square = createSquare(index * (numWidth + letterSpacing), i * (numWidth + letterSpacing) + 1, numWidth);

                                currentSquares[i] = "#" + (square.node.id = _this._svgId + index + "-" + i);
                            }

                            squareArray[index] = currentSquares;
                        });

                        /* Timeline */
                        // TODO: Improve dividendDiv centering left algorithm
                        this._timeline.to(dividendDiv, .5, {
                            paddingTop: letterSpacing + "px",
                            paddingLeft: letterSpacing + "px",
                            letterSpacing: letterSpacing + "px",
                            left: (this._container.width() - numSpacing * intLength(firstOp * 10)) / 2,
                            top: numSpacing
                        }); /* Position the dividend */

                        var staggerLength = 2;

                        var squareTime = 1;
                        var stagger = staggerLength / firstOp.toString().split("").reduce(function (callB, init) {
                            return parseInt(callB) + parseInt(init);
                        });

                        squareArray.forEach(function (value) {
                            value.forEach(function (val) {
                                _this._timeline.from(val, squareTime, {
                                    y: -canvasHeight,
                                    opacity: 0,
                                    ease: Power3.easeOut
                                }, "-=" + (squareTime - stagger));
                            });
                        });
                    }
                }, {
                    key: "go",
                    value: function go() {
                        this._timeline.timeScale(1);
                        this._timeline.play(0);
                    }
                }, {
                    key: "goAway",
                    value: function goAway() {
                        if (this._drawn) {
                            //if (this._timeline.time() > this._timeline.getLabelTime("beforeCount"))
                            //    this._timeline.seek("beforeCount");
                            this._timeline.reverse();
                            this._timeline.timeScale(8);
                        }
                    }
                }, {
                    key: "removeElements",
                    value: function removeElements() {
                        $("#" + this._svgId).remove();
                        $("#" + this._svgId + "-equals").remove();
                    }
                }]);

                return ConceptDivideAnimation;
            })();

            _export("default", ConceptDivideAnimation);
        }
    };
});
$__System.register("5c", ["2", "4", "5", "47", "48", "50", "51", "52", "3a", "4a", "4d", "4e", "4f", "5b"], function (_export) {
    var AddLong, _createClass, _classCallCheck, _getIterator, AddShort, MultiplyLong, DivideShort, DivideLong, _Map, RenderedNumber, RenderedAdd, RenderedSubtract, RenderedMultiply, RenderedDivide, SubtractShort, SubtractLong, MultiplyShort, DivideConcept, Controller;

    return {
        setters: [function (_5) {
            AddLong = _5["default"];
        }, function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_3) {
            _getIterator = _3["default"];
        }, function (_4) {
            AddShort = _4["default"];
        }, function (_6) {
            MultiplyLong = _6["default"];
        }, function (_7) {
            DivideShort = _7["default"];
        }, function (_8) {
            DivideLong = _8["default"];
        }, function (_a) {
            _Map = _a["default"];
        }, function (_a2) {
            RenderedNumber = _a2.RenderedNumber;
            RenderedAdd = _a2.RenderedAdd;
            RenderedSubtract = _a2.RenderedSubtract;
            RenderedMultiply = _a2.RenderedMultiply;
            RenderedDivide = _a2.RenderedDivide;
        }, function (_d) {
            SubtractShort = _d["default"];
        }, function (_e) {
            SubtractLong = _e["default"];
        }, function (_f) {
            MultiplyShort = _f["default"];
        }, function (_b) {
            DivideConcept = _b["default"];
        }],
        execute: function () {
            "use strict";

            Controller = (function () {
                function Controller(parentDiv) {
                    _classCallCheck(this, Controller);

                    this._parentDiv = parentDiv;
                    this._idCounter = 0;
                    this._objects = new _Map();
                }

                _createClass(Controller, [{
                    key: "printObjects",
                    value: function printObjects() {
                        var string = "";
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = _getIterator(this._objects.keys()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var key = _step.value;

                                string += key + ", ";
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator["return"]) {
                                    _iterator["return"]();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        console.log(string);
                    }
                }, {
                    key: "removeObject",
                    value: function removeObject(id) {
                        var obj = this._objects;
                        //Loop through its id-bearing children to get any attached objects and remove those from the map
                        $("#" + id).find('[id]').each(function () {
                            var id = $(this).attr("id");
                            if (obj.has(id)) {
                                obj.get(id).removeElements();
                                obj["delete"](id);
                            }
                        });
                        if (obj.has(id)) {
                            obj.get(id).removeElements();
                            obj["delete"](id);
                        }
                    }
                }, {
                    key: "createOperator",
                    value: function createOperator(ObjClass, parameters) {
                        var x = undefined,
                            y = undefined,
                            attachLeft = undefined,
                            attachRight = undefined;

                        if (parameters) {
                            x = parameters.x;
                            y = parameters.y;
                            attachLeft = parameters.attachLeft;
                            attachRight = parameters.attachRight;
                        }

                        if (!x && !y) {
                            var pos = this._getRandomPos();

                            x = pos.x;
                            y = pos.y;
                        }

                        var object = new ObjClass(this._idCounter++, x, y);
                        object.createElements(this._parentDiv);

                        if (attachLeft) {
                            object.snapLeft(attachLeft);
                        }
                        if (attachRight) {
                            object.snapRight(attachRight);
                        }

                        this._objects.set(object.id, object);

                        return object;
                    }
                }, {
                    key: "createAdd",
                    value: function createAdd(parameters) {
                        return this.createOperator(RenderedAdd, parameters);
                    }
                }, {
                    key: "createMultiply",
                    value: function createMultiply(parameters) {
                        return this.createOperator(RenderedMultiply, parameters);
                    }
                }, {
                    key: "createSubtract",
                    value: function createSubtract(parameters) {
                        return this.createOperator(RenderedSubtract, parameters);
                    }
                }, {
                    key: "createDivide",
                    value: function createDivide(parameters) {
                        return this.createOperator(RenderedDivide, parameters);
                    }
                }, {
                    key: "createNumber",
                    value: function createNumber(number, parameters) {
                        var x = undefined,
                            y = undefined;
                        if (parameters) {
                            x = parameters.x;
                            y = parameters.y;
                        }
                        if (x == null && y == null) {
                            var pos = this._getRandomPos();
                            x = pos.x;
                            y = pos.y;
                        }
                        var object = new RenderedNumber(this._idCounter++, x, y, number);
                        object.createElements(this._parentDiv);

                        this._objects.set(object.id, object);
                        this.printObjects();
                        return object;
                    }
                }, {
                    key: "_getRandomPos",
                    value: function _getRandomPos() {
                        //TODO: Make objects not spawn on top of each other?
                        return {
                            x: Math.floor(Math.random() * this._parentDiv.width() / 3),
                            y: Math.floor(Math.random() * this._parentDiv.height() * 0.1)
                        };
                    }
                }], [{
                    key: "getAddAnimation",
                    value: function getAddAnimation(container) {
                        var firstOp = container.children(".snapbox-left").find(".number-text").text();
                        var secondOp = container.children(".snapbox-right").find(".number-text").text();

                        // TODO: Create better algorithm to decide between long and short animation
                        if (firstOp > 20 && secondOp > 20) return new AddLong(container);
                        return new AddShort(container);
                    }
                }, {
                    key: "getMultiplyAnimation",
                    value: function getMultiplyAnimation(container) {
                        var firstOp = container.children(".snapbox-left").find(".number-text").text();
                        var secondOp = container.children(".snapbox-right").find(".number-text").text();

                        if (firstOp > 10 || secondOp > 10) {
                            return new MultiplyLong(container);
                        }

                        return new MultiplyShort(container);
                    }
                }, {
                    key: "getSubtractAnimation",
                    value: function getSubtractAnimation(container) {
                        var firstOp = container.children(".snapbox-left").find(".number-text").text();
                        var secondOp = container.children(".snapbox-right").find(".number-text").text();

                        // TODO: Create better algorithm to decide between long and short animation
                        if (firstOp > 20 || secondOp > 20) return new SubtractLong(container);
                        return new SubtractShort(container);
                    }
                }, {
                    key: "getDivideAnimation",
                    value: function getDivideAnimation(container) {
                        var firstOp = container.children(".snapbox-left").find(".number-text").text();
                        var secondOp = container.children(".snapbox-right").find(".number-text").text();

                        if (firstOp <= 144 && secondOp <= 12 && firstOp / secondOp <= 12) return new DivideShort(container);

                        //return new DivideConcept(container); // TODO: Change to DivideLong for long division animation
                        return new DivideLong(container);
                    }
                }]);

                return Controller;
            })();

            _export("default", Controller);
        }
    };
});
$__System.register("4a", ["4", "5", "6", "14", "1a", "4b", "5c"], function (_export) {
    var _createClass, _classCallCheck, _get, _inherits, _set, AnimatorUtils, Utils, Controller, RenderedObject, SnapObject, HasSnapboxes, RenderedNumber, RenderedOperation, RenderedAdd, RenderedSubtract, RenderedMultiply, RenderedDivide, RenderedEquals;

    return {
        setters: [function (_) {
            _createClass = _["default"];
        }, function (_2) {
            _classCallCheck = _2["default"];
        }, function (_3) {
            _get = _3["default"];
        }, function (_4) {
            _inherits = _4["default"];
        }, function (_a) {
            _set = _a["default"];
        }, function (_b) {
            AnimatorUtils = _b["default"];
            Utils = _b["default"];
        }, function (_c) {
            Controller = _c["default"];
        }],
        execute: function () {
            "use strict";

            RenderedObject = (function () {
                //A draggable (or not) DOM-rendered element

                function RenderedObject(id, x, y, type, contents) {
                    var draggable = arguments.length <= 5 || arguments[5] === undefined ? true : arguments[5];

                    _classCallCheck(this, RenderedObject);

                    this._id = id;
                    this._x = x;
                    this._y = y;
                    this._type = type;
                    this._contents = contents;
                    this._draggable = draggable;
                }

                _createClass(RenderedObject, [{
                    key: "createElements",

                    //Creates the DOM elements and children to the parent parameter. Only call this once!
                    value: function createElements(parent) {
                        var _this2 = this;

                        var container = $("<div></div>").attr("id", this._id).addClass(this._type + "-container").css({ left: this._x, top: this._y });

                        var content = $("<div></div>").addClass(this._type + "-text").html(this._contents);

                        content.appendTo(container);
                        container.appendTo(parent);

                        if (this._draggable) container.draggable({
                            containment: parent,
                            stack: ".ui-draggable"
                        });

                        container.on("dragstart", function () {
                            return _this2.dragStart(container);
                        });
                        container.on("dragstop", function () {
                            return _this2.dragStop(container);
                        });

                        this._contentDiv = content;
                        this._containerDiv = container;
                        return container;
                    }
                }, {
                    key: "removeElements",
                    value: function removeElements() {
                        console.log(this._id);
                        this.dragStop($(this._containerDiv));
                        this._contentDiv.remove();
                        this._containerDiv.remove();
                    }
                }, {
                    key: "dragStart",
                    value: function dragStart(dragger) {
                        //$("#trash").trigger("dragStart");
                    }
                }, {
                    key: "dragStop",
                    value: function dragStop(dragger) {
                        //$("#trash").trigger("dragStop");
                    }
                }, {
                    key: "id",
                    get: function get() {
                        return this._id;
                    }
                }, {
                    key: "type",
                    get: function get() {
                        return this._type;
                    }
                }, {
                    key: "contentDiv",
                    get: function get() {
                        return this._contentDiv;
                    }
                    //div, contains just the content
                }, {
                    key: "containerDiv",
                    get: function get() {
                        return this._containerDiv;
                    }
                    //div, also includes other stuff: snapboxes and snapped elements for example
                }, {
                    key: "contents",
                    set: function set(contents) {
                        this._contentDiv.html(contents);
                    }
                }]);

                return RenderedObject;
            })();

            SnapObject = (function (_RenderedObject) {
                _inherits(SnapObject, _RenderedObject);

                //Abstract. A RenderedObject that snaps to snapboxes

                function SnapObject(id, x, y, type, contents, snapTo, snapboxes, draggable) {
                    _classCallCheck(this, SnapObject);

                    _get(Object.getPrototypeOf(SnapObject.prototype), "constructor", this).call(this, id, x, y, type, contents, snapboxes, draggable);
                    this._snapTo = snapTo;

                    this._lastSnapped = null;
                }

                //TODO: Make this work or add a new classes for up/down (fraction) snapboxes and matrix snapboxes
                //TODO: Make it a droppable and use those events rather than tossing around dragStart and dragStop triggers

                //Override to configure snapping

                _createClass(SnapObject, [{
                    key: "createElements",
                    value: function createElements(parent) {
                        var elem = _get(Object.getPrototypeOf(SnapObject.prototype), "createElements", this).call(this, parent);

                        if (elem.data("ui-draggable") && this._snapTo != null) elem.draggable("option", {
                            snap: "." + this._snapTo + "snapbox",
                            snapMode: "inner",
                            snapTolerance: 9
                        });
                        //elem.on("click", () => {alert(this._lastSnapped)});
                        //start: () => { this._onStart(elem); },
                        //stop: () => { this._onStop(elem); }
                        return elem;
                    }
                }, {
                    key: "dragStart",
                    value: function dragStart(dragger) {
                        $("." + this._snapTo + "-container .snapbox").each(function () {
                            $(this).trigger("dragStart", dragger);
                        });
                        _get(Object.getPrototypeOf(SnapObject.prototype), "dragStart", this).call(this, dragger);
                    }
                }, {
                    key: "_onStart",
                    value: function _onStart(dragger) {
                        $("." + this._snapTo + "-container .snapbox").each(function () {
                            $(this).trigger("dragStart", dragger);
                        });
                    }

                    //TODO: Maybe pull this into a utility class. Called also when a helper dragger is dropped (see main.js $("#playground").droppable())
                }, {
                    key: "getSnapped",
                    value: function getSnapped(dragger) {
                        var snapElements = dragger.data('ui-draggable').snapElements;

                        /* Pull out only the snap targets that are "snapping": */
                        var snappedTo = $.map(snapElements, function (element) {
                            return element.snapping ? element.item : null;
                        });

                        //If it isn't snapping to anything, make sure it is the child of the playground div
                        if (snappedTo.length == 0) {
                            if (this._lastSnapped) {
                                var _top = dragger.offset().top;
                                var left = dragger.offset().left;
                                dragger.detach().appendTo($("#playground"));
                                dragger.css({ position: 'absolute' });
                                dragger.css("width", "auto");
                                dragger.offset({ top: _top, left: left });
                                $(this._lastSnapped).trigger("unsnapped");
                                this._lastSnapped = null;
                            }
                        } else {
                            var snapped = null;
                            if (snappedTo.length > 1) {
                                //Select the closest snapped element
                                var closest = undefined;
                                var closestDistance = 10000;
                                for (var i = 1; i < snappedTo.length; i++) {
                                    var s = $(snappedTo[i]);
                                    console.log(snappedTo.length, i);
                                    var distance = Math.sqrt( //Distance formula :) Pre-Algebra was not for nothing!
                                    Math.pow(dragger.offset().left - s.offset().left, 2) + Math.pow(dragger.offset().top - s.offset().top, 2));
                                    if (distance < closestDistance) {
                                        closestDistance = distance;
                                        closest = s;
                                    }
                                }
                                snapped = closest;
                            } else if (snappedTo.length == 1) snapped = snappedTo[0];

                            return snapped;
                        }
                    }
                }, {
                    key: "dragStop",
                    value: function dragStop(dragger) {
                        console.log("That!!!");
                        var lastSnapped = this._lastSnapped;
                        //Thanks to this answer: http://stackoverflow.com/a/5181159
                        /* Get the possible snap targets: */

                        var snapped = this.getSnapped(dragger);
                        if (snapped) {
                            dragger.detach().appendTo(snapped);

                            dragger.css({ position: "relative", "left": 0, "top": 0 });

                            $(snapped).trigger("snapped", dragger);
                            if (lastSnapped != null && !$(lastSnapped).is($(snapped))) $(lastSnapped).trigger("unsnapped");
                            this._lastSnapped = snapped;

                            $("." + this._snapTo + "-container .snapbox").each(function () {
                                $(this).trigger("dragStop", dragger);
                            });
                        }

                        _get(Object.getPrototypeOf(SnapObject.prototype), "dragStop", this).call(this, dragger);
                    }
                }]);

                return SnapObject;
            })(RenderedObject);

            HasSnapboxes = (function (_SnapObject) {
                _inherits(HasSnapboxes, _SnapObject);

                //Abstract.

                function HasSnapboxes(id, x, y, type, contents, snapTo, draggable) {
                    _classCallCheck(this, HasSnapboxes);

                    _get(Object.getPrototypeOf(HasSnapboxes.prototype), "constructor", this).call(this, id, x, y, type, contents, snapTo, draggable);
                    this._leftSnapped = null;
                    this._rightSnapped = null;
                }

                _createClass(HasSnapboxes, [{
                    key: "snapLeft",

                    //For manual attaching
                    value: function snapLeft(number) {
                        var numberDiv = number.containerDiv;
                        if (numberDiv && this._leftSnapbox) {
                            numberDiv.css({ "left": 0, "top": 0 });
                            //this.fixLeftMarginIssue(number.containerDiv)
                            number._lastSnapped = this._leftSnapbox;
                            this._leftSnapbox.append(numberDiv);
                            this._leftSnapbox.trigger("snapped", numberDiv);
                            this._leftSnapbox.trigger("dragStop", numberDiv);
                        }
                    }
                }, {
                    key: "snapRight",
                    value: function snapRight(number) {
                        var numberDiv = number._containerDiv;
                        if (numberDiv && this._rightSnapbox) {
                            numberDiv.css({ "left": 0, "top": 0 });
                            number._lastSnapped = this._rightSnapbox;
                            this._rightSnapbox.append(numberDiv);
                            this._rightSnapbox.trigger("snapped", numberDiv);
                            this._rightSnapbox.trigger("dragStop", numberDiv);
                        }
                    }

                    //Because big numbers caused problems on the left
                    /*fixLeftBoxIssue(numberContainer) {
                        const textElement = numberContainer.find(".number-text");
                        const defaultWidth = AnimatorUtils.numWidth;
                          this._leftSnapbox.css("margin-left", "-=" + (textElement.width() - defaultWidth) * .9); //TODO: (low priority) find out from where this magic number derives
                    }*/
                    //Override
                }, {
                    key: "createElements",
                    value: function createElements(parent) {
                        var element = _get(Object.getPrototypeOf(HasSnapboxes.prototype), "createElements", this).call(this, parent);
                        var _this = this;

                        this._leftSnapbox = $("<div></div>").addClass(this.type + "snapbox snapbox snapbox-left border").on("dragStart", function (event, dragger) {
                            if (!_this.snapped.left || $(_this.snapped.left).is(dragger)) {
                                $(this).addClass("border");
                            }
                        }).on("dragStop", function (event, dragger) {
                            if (_this.snapped.left) $(this).removeClass("border");
                        }).on("snapped", function (event, dragger) {
                            _this._leftSnapped = dragger;
                            /*if ($(dragger).hasClass("number-container"))
                            {
                                console.log("fired");
                                //_this.fixLeftBoxIssue($(dragger));
                                //$(this).css("width", $(dragger).find(".number-text").width());
                            }*/
                            if ($(_this.snapped.right).is(dragger)) _this._rightSnapped = null;
                            if (_this.snapped.right) if (_this._onBothSnapped != null) _this._onBothSnapped();
                            $(this).removeClass(_this.type + "snapbox");
                            console.log("left snapped", $(_this.snapped.left).attr("id"), $(_this.snapped.right).attr("id"));
                        }).on("unsnapped", function (event) {
                            console.log("leftUnsnapped");
                            if (_this.snapped.left && _this.snapped.right) if (_this._onUnsnapped != null) _this._onUnsnapped();
                            _this._leftSnapped = null;
                            $(this).addClass(_this.type + "snapbox");
                        }).prependTo(element);

                        this._rightSnapbox = $("<div></div>").addClass(this.type + "snapbox snapbox snapbox-right border").on("dragStart", function (event, dragger) {
                            if (!_this.snapped.right || $(_this.snapped.right).is(dragger)) $(this).addClass("border");
                        }).on("dragStop", function (event) {
                            if (_this.snapped.right) $(this).removeClass("border");
                        }).on("snapped", function (event, dragger) {
                            _this._rightSnapped = dragger;
                            /*if ($(dragger).hasClass("number-container")) {
                                $(this).css("width", $(dragger).find(".number-text").width());
                            }*/
                            if ($(_this.snapped.left).is(dragger)) _this._leftSnapped = null;
                            if (_this.snapped.left) if (_this._onBothSnapped != null) _this._onBothSnapped();
                            $(this).removeClass(_this.type + "snapbox");
                        }).on("unsnapped", function (event) {
                            if (_this.snapped.left && _this.snapped.right) if (_this._onUnsnapped != null) _this._onUnsnapped();
                            _this._rightSnapped = null;
                            $(this).addClass(_this.type + "snapbox");
                        }).appendTo(element);
                        return element;
                    }
                }, {
                    key: "snapped",
                    get: function get() {
                        return { left: this._leftSnapped, right: this._rightSnapped };
                    }
                }, {
                    key: "onBothSnapped",
                    set: function set(event) {
                        this._onBothSnapped = event;
                    }
                }, {
                    key: "onUnsnapped",
                    set: function set(event) {
                        this._onUnsnapped = event;
                    }
                }]);

                return HasSnapboxes;
            })(SnapObject);

            RenderedNumber = (function (_SnapObject2) {
                _inherits(RenderedNumber, _SnapObject2);

                function RenderedNumber(name, x, y, number, draggable) {
                    _classCallCheck(this, RenderedNumber);

                    _get(Object.getPrototypeOf(RenderedNumber.prototype), "constructor", this).call(this, "number" + number + "-" + name, x, y, "number", number, "operation", draggable);
                    this._number = number;
                }

                _createClass(RenderedNumber, [{
                    key: "tickBy",
                    value: function tickBy() {
                        var by = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

                        this.setNumber = this._number + by;
                    }
                }, {
                    key: "number",
                    get: function get() {
                        return this._number;
                    }
                }, {
                    key: "setNumber",
                    set: function set(number) {
                        this._number = number;
                        this.contents = number;
                    }
                }]);

                return RenderedNumber;
            })(SnapObject);

            RenderedOperation = (function (_HasSnapboxes) {
                _inherits(RenderedOperation, _HasSnapboxes);

                //Abstract

                function RenderedOperation(id, x, y, operation, contents, animatorClass) {
                    var _this3 = this;

                    _classCallCheck(this, RenderedOperation);

                    _get(Object.getPrototypeOf(RenderedOperation.prototype), "constructor", this).call(this, id, x, y, "operation", contents /*, "number"*/);

                    _set(Object.getPrototypeOf(RenderedOperation.prototype), "onBothSnapped", this.onBothSnapped, this);
                    _set(Object.getPrototypeOf(RenderedOperation.prototype), "onUnsnapped", this.onUnsnapped, this);

                    this._operation = operation;

                    //jQuery onClick calls this onClick, set in the createElements method
                    if (animatorClass) {
                        this._animatorClass = animatorClass;
                        this.onClick = function () {
                            if (_this3._animator) _this3._animator.drawGo();
                        };
                    }
                }

                _createClass(RenderedOperation, [{
                    key: "onBothSnapped",
                    value: function onBothSnapped() {
                        console.log("both snapped");
                        AnimatorUtils.addClass(this.contentDiv, this._operation + " snapped");

                        if (this._animatorClass) {
                            if (!this._animator) {
                                this._animator = this._animatorClass(this.containerDiv);
                                return;
                            }
                            if ($(this.snapped.left).attr("id") != this._lastLeft || $(this.snapped.right).attr("id") != this._lastRight) {
                                console.log("tossing old add animator");
                                this._animator.removeElements();
                                this._animator = this._animatorClass(this.containerDiv);
                            }
                        }
                    }
                }, {
                    key: "onUnsnapped",
                    value: function onUnsnapped() {
                        AnimatorUtils.removeClass(this.contentDiv, this._operation + " snapped");

                        this._lastLeft = $(this.snapped.left).attr("id");
                        this._lastRight = $(this.snapped.right).attr("id");
                        if (this._animator) this._animator.goAway();
                    }
                }, {
                    key: "createElements",

                    //Override
                    value: function createElements(parent) {
                        var _this4 = this;

                        return _get(Object.getPrototypeOf(RenderedOperation.prototype), "createElements", this).call(this, parent).on("click", function () {
                            if (_this4.snapped.left && _this4.snapped.right) {
                                if (_this4._onClick) _this4._onClick();
                            }
                        });
                    }
                }, {
                    key: "onClick",
                    set: function set(event) {
                        this._onClick = event;
                    }
                }, {
                    key: "operation",
                    get: function get() {
                        return this._operation;
                    }
                }]);

                return RenderedOperation;
            })(HasSnapboxes);

            RenderedAdd = (function (_RenderedOperation) {
                _inherits(RenderedAdd, _RenderedOperation);

                function RenderedAdd(name, x, y) {
                    _classCallCheck(this, RenderedAdd);

                    //TODO: possibly move the getAnimations into this
                    _get(Object.getPrototypeOf(RenderedAdd.prototype), "constructor", this).call(this, "add-" + name, x, y, "add", "+", Controller.getAddAnimation);
                }

                return RenderedAdd;
            })(RenderedOperation);

            RenderedSubtract = (function (_RenderedOperation2) {
                _inherits(RenderedSubtract, _RenderedOperation2);

                function RenderedSubtract(name, x, y) {
                    _classCallCheck(this, RenderedSubtract);

                    _get(Object.getPrototypeOf(RenderedSubtract.prototype), "constructor", this).call(this, "subtract-" + name, x, y, "subtract", "&minus;", Controller.getSubtractAnimation);
                }

                return RenderedSubtract;
            })(RenderedOperation);

            RenderedMultiply = (function (_RenderedOperation3) {
                _inherits(RenderedMultiply, _RenderedOperation3);

                function RenderedMultiply(name, x, y) {
                    _classCallCheck(this, RenderedMultiply);

                    _get(Object.getPrototypeOf(RenderedMultiply.prototype), "constructor", this).call(this, "multiply-" + name, x, y, "multiply", "&times;", Controller.getMultiplyAnimation);
                }

                return RenderedMultiply;
            })(RenderedOperation);

            RenderedDivide = (function (_RenderedOperation4) {
                _inherits(RenderedDivide, _RenderedOperation4);

                function RenderedDivide(name, x, y) {
                    _classCallCheck(this, RenderedDivide);

                    _get(Object.getPrototypeOf(RenderedDivide.prototype), "constructor", this).call(this, "divide-" + name, x, y, "divide", "&divide;", Controller.getDivideAnimation);
                }

                return RenderedDivide;
            })(RenderedOperation);

            RenderedEquals = (function (_RenderedObject2) {
                _inherits(RenderedEquals, _RenderedObject2);

                function RenderedEquals(id, x, y) {
                    _classCallCheck(this, RenderedEquals);

                    _get(Object.getPrototypeOf(RenderedEquals.prototype), "constructor", this).call(this, id, x, y, "equals number", "=", false);
                }

                _createClass(RenderedEquals, [{
                    key: "tickBy",
                    value: function tickBy() {
                        var by = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

                        if (!this._value) {
                            this._value = 0;
                        }
                        this._value += by;
                        this.contents = "=&nbsp;<span class=\"" + Utils.answerClass + "\">" + this._value + "</span>";
                    }
                }, {
                    key: "value",
                    set: function set(value) {
                        this._value = value;
                        this.contents = "=&nbsp;<span class=\"" + Utils.answerClass + "\">" + value + "</span>";
                    }
                }]);

                return RenderedEquals;
            })(RenderedObject);

            _export("RenderedObject", RenderedObject);

            _export("RenderedEquals", RenderedEquals);

            _export("RenderedNumber", RenderedNumber);

            _export("RenderedOperation", RenderedOperation);

            _export("RenderedAdd", RenderedAdd);

            _export("RenderedSubtract", RenderedSubtract);

            _export("RenderedMultiply", RenderedMultiply);

            _export("RenderedDivide", RenderedDivide);
        }
    };
});
$__System.register("1", ["3", "49", "5c", "4c", "4a"], function (_export) {
    //main.js
    "use strict";
    var Parser, Snap, Controller, TweenMax, TimelineMax, RenderedNumber, MQ, magicBox, playgroundDiv, controller, parser;

    function onBoxEdit() {}

    function onBoxEnter() {
        parser.parseAndCreate(magicBox.text());
    }
    return {
        setters: [function (_) {
            Parser = _["default"];
        }, function (_2) {
            Snap = _2.Snap;
        }, function (_c) {
            Controller = _c["default"];
        }, function (_c2) {
            TweenMax = _c2.TweenMax;
            TimelineMax = _c2.TimelineMax;
        }, function (_a) {
            RenderedNumber = _a.RenderedNumber;
        }],
        execute: function () {
            MQ = MathQuill.getInterface(2);
            magicBox = undefined;
            playgroundDiv = $('#playground');
            controller = new Controller(playgroundDiv);
            parser = new Parser(controller);

            $(document).ready(function () {
                magicBox = MQ.MathField(document.getElementById('mathquill-box'), {
                    handlers: {
                        edit: onBoxEdit,
                        enter: onBoxEnter
                    }
                });

                controller.createDivide({ x: 200, y: 160, attachLeft: controller.createNumber(42), attachRight: controller.createNumber(6) });
                controller.createMultiply({ x: 400, y: 44, attachLeft: controller.createNumber(274), attachRight: controller.createNumber(13) });
                controller.createSubtract({ x: 600, y: -30, attachLeft: controller.createNumber(123), attachRight: controller.createNumber(45) });
                controller.createAdd({ x: 800, y: -68, attachLeft: controller.createNumber(49), attachRight: controller.createNumber(173) });
                controller.createSubtract({ x: 1000, y: -64 });
                controller.createDivide({ x: 500, y: 100, attachLeft: controller.createNumber(425), attachRight: controller.createNumber(25) });
                controller.createNumber(Math.floor(Math.random() * 9) + 1, { x: 950, y: -60 });
                controller.createNumber(Math.floor(Math.random() * 9) + 1, { x: 1100, y: -50 });

                $("#trash").droppable({
                    activate: function activate(event, ui) {
                        TweenMax.to($(this), 0.5, { opacity: 0.2 });
                    },
                    deactivate: function deactivate(event, ui) {
                        TweenMax.to($(this), 0.2, { opacity: 0 });
                    },
                    over: function over(event, ui) {
                        TweenMax.to($(this), 0.2, { opacity: 1 });
                    },
                    out: function out(event, ui) {
                        TweenMax.to($(this), 0.2, { opacity: 0.2 });
                    },
                    drop: function drop(event, ui) {
                        console.log("dropped on trash");
                        if (ui.helper.hasClass("helper")) {
                            ui.helper.remove();
                            console.log("helper");
                        }
                        controller.removeObject(ui.draggable.attr("id"));
                    },
                    greedy: true
                });

                $("#playground").droppable({
                    drop: function drop(event, ui) {
                        var parse = ui.draggable.attr("parse");
                        if (parse) {
                            var isOperator = "+-*/".includes(parse);
                            var renderednum = parser.parseAndCreate(parse);
                            var obj = renderednum.containerDiv.css({
                                left: ui.helper.position().left - (isOperator ? 55 : 0), //Because (0,0) of a renderedoperator isn't the + or - or / or * sign
                                top: ui.helper.position().top - (isOperator ? 72 : 0),
                                position: "absolute"
                            });

                            if (!isOperator) {
                                var snapped = renderednum.getSnapped(ui.draggable);
                                if (snapped) {
                                    obj.detach().appendTo(snapped);
                                    obj.css({ position: "relative", "left": 0, "top": 0 });
                                    $(snapped).trigger("snapped", obj).trigger("dragStop", obj);
                                    renderednum._lastSnapped = snapped;
                                }
                            }
                        }
                    }
                });

                var left = 5;
                $(".dropdown-content .number-box").draggable({
                    //We make the appropriate draggable helper look exactly like the number that will be created in the droppable event above.
                    //I did try it the simpler way with the helper being the created object but, long story, it didn't work. Neither did setting helper to "clone" because the clone was appended to the disappearing dropdown div
                    helper: function helper() {
                        var number = $(this).attr("parse");
                        return new RenderedNumber("temphelper", 0, 0, number).createElements(playgroundDiv).addClass("helper");
                    },
                    stop: function stop(e, ui) {},
                    snap: ".snapbox",
                    snapMode: "inner",
                    snapTolerance: 9
                }).each(function () {
                    //Since jQuery UI draggable objects are automatically set to position: absolute, we have to
                    // manually position our divs in the dropdown menu
                    $(this).css("left", left);
                    left += 30;
                });

                $(".operation-draggable").draggable({
                    helper: "clone"
                });
            });
        }
    };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=bundledapp.js.map
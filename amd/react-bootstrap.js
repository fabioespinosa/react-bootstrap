(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrap"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrap"] = factory(root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__18__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 188);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(122)();
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(161);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NATIVE_BIND = __webpack_require__(22);
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;
  function classNames() {
    var classes = '';
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (arg) {
        classes = appendClass(classes, parseValue(arg));
      }
    }
    return classes;
  }
  function parseValue(arg) {
    if (typeof arg === 'string' || typeof arg === 'number') {
      return arg;
    }
    if (typeof arg !== 'object') {
      return '';
    }
    if (Array.isArray(arg)) {
      return classNames.apply(null, arg);
    }
    if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
      return arg.toString();
    }
    var classes = '';
    for (var key in arg) {
      if (hasOwn.call(arg, key) && arg[key]) {
        classes = appendClass(classes, key);
      }
    }
    return classes;
  }
  function appendClass(value, newClass) {
    if (!newClass) {
      return value;
    }
    if (value) {
      return value + ' ' + newClass;
    }
    return value + newClass;
  }
  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var globalThis = __webpack_require__(7);
var apply = __webpack_require__(89);
var uncurryThis = __webpack_require__(33);
var isCallable = __webpack_require__(8);
var getOwnPropertyDescriptor = __webpack_require__(90).f;
var isForced = __webpack_require__(97);
var path = __webpack_require__(15);
var bind = __webpack_require__(60);
var createNonEnumerableProperty = __webpack_require__(98);
var hasOwn = __webpack_require__(12);
// add debugging info
__webpack_require__(37);
var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0:
          return new NativeConstructor();
        case 1:
          return new NativeConstructor(a);
        case 2:
          return new NativeConstructor(a, b);
      }
      return new NativeConstructor(a, b, c);
    }
    return apply(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;
  var nativeSource = GLOBAL ? globalThis : STATIC ? globalThis[TARGET] : globalThis[TARGET] && globalThis[TARGET].prototype;
  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;
  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);
    targetProperty = target[key];
    if (USE_NATIVE) if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
    if (!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty) continue;

    // bind methods to global for calling from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, globalThis);
    // wrap global constructors for prevent changes in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }
    createNonEnumerableProperty(target, key, resultProperty);
    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
      // export real prototype methods
      if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
// eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) ||
// eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || check(typeof this == 'object' && this) ||
// eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(88)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(5);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] !== 7;
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isCallable = __webpack_require__(8);
module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
module.exports = uncurryThis({}.isPrototypeOf);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var toObject = __webpack_require__(20);
var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var globalThis = __webpack_require__(7);
var path = __webpack_require__(15);
module.exports = function (CONSTRUCTOR, METHOD) {
  var Namespace = path[CONSTRUCTOR + 'Prototype'];
  var pureMethod = Namespace && Namespace[METHOD];
  if (pureMethod) return pureMethod;
  var NativeConstructor = globalThis[CONSTRUCTOR];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  return NativePrototype && NativePrototype[METHOD];
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _reactIs = __webpack_require__(140);
var _createChainableTypeChecker = __webpack_require__(142);
var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`,expected an element type (a string ') + ', component class, or function component).');
  }
  if (!(0, _reactIs.isValidElementType)(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + ', component class, or function component).');
  }
  return null;
}
exports.default = (0, _createChainableTypeChecker2.default)(elementType);
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__18__;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var globalThis = __webpack_require__(7);
var shared = __webpack_require__(56);
var hasOwn = __webpack_require__(12);
var uid = __webpack_require__(57);
var NATIVE_SYMBOL = __webpack_require__(54);
var USE_SYMBOL_AS_UID = __webpack_require__(53);
var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol('Symbol.' + name);
  }
  return WellKnownSymbolsStore[name];
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requireObjectCoercible = __webpack_require__(29);
var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(62);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(5);
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () {/* empty */}.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);
module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(28);
var requireObjectCoercible = __webpack_require__(29);
module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isCallable = __webpack_require__(8);
var tryToString = __webpack_require__(93);
var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(167);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NATIVE_BIND = __webpack_require__(22);
var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var fails = __webpack_require__(5);
var classof = __webpack_require__(23);
var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isNullOrUndefined = __webpack_require__(50);
var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var globalThis = __webpack_require__(7);
var userAgent = __webpack_require__(55);
var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}
module.exports = version;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toLength = __webpack_require__(120);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(103);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classofRaw = __webpack_require__(23);
var uncurryThis = __webpack_require__(3);
module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
  1: 2
}, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(15);
var globalThis = __webpack_require__(7);
var isCallable = __webpack_require__(8);
var aFunction = function (variable) {
  return isCallable(variable) ? variable : undefined;
};
module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(globalThis[namespace]) : path[namespace] && path[namespace][method] || globalThis[namespace] && globalThis[namespace][method];
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IS_PURE = __webpack_require__(95);
var globalThis = __webpack_require__(7);
var defineGlobalProperty = __webpack_require__(96);
var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
(store.versions || (store.versions = [])).push({
  version: '3.44.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.44.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(58);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(61);
var anObject = __webpack_require__(39);
var toPropertyKey = __webpack_require__(51);
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(10);
var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var internalObjectKeys = __webpack_require__(117);
var enumBugKeys = __webpack_require__(66);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(5);
module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () {
      return 1;
    }, 1);
  });
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TO_STRING_TAG_SUPPORT = __webpack_require__(151);
var isCallable = __webpack_require__(8);
var classofRaw = __webpack_require__(23);
var wellKnownSymbol = __webpack_require__(19);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {/* empty */}
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
  // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O)
  // ES3 arguments fallback
  : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(5);
var wellKnownSymbol = __webpack_require__(19);
var V8_VERSION = __webpack_require__(30);
var SPECIES = wellKnownSymbol('species');
module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return {
        foo: 1
      };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(60);
var uncurryThis = __webpack_require__(3);
var IndexedObject = __webpack_require__(28);
var toObject = __webpack_require__(20);
var lengthOfArrayLike = __webpack_require__(31);
var arraySpeciesCreate = __webpack_require__(72);
var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3:
            return true;
          // some
          case 5:
            return value;
          // find
          case 6:
            return index;
          // findIndex
          case 2:
            push(target, value);
          // filter
        } else switch (TYPE) {
          case 4:
            return false;
          // every
          case 7:
            push(target, value);
          // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};
module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(83);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(124);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(16);
exports.__esModule = true;
exports.default = void 0;
var _on = _interopRequireDefault(__webpack_require__(69));
exports.on = _on.default;
var _off = _interopRequireDefault(__webpack_require__(70));
exports.off = _off.default;
var _filter = _interopRequireDefault(__webpack_require__(136));
exports.filter = _filter.default;
var _listen = _interopRequireDefault(__webpack_require__(139));
exports.listen = _listen.default;
var _default = {
  on: _on.default,
  off: _off.default,
  filter: _filter.default,
  listen: _listen.default
};
exports.default = _default;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(16);
exports.__esModule = true;
exports.default = scrollbarSize;
var _inDOM = _interopRequireDefault(__webpack_require__(17));
var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM.default) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}
module.exports = exports["default"];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(68);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toPrimitive = __webpack_require__(91);
var isSymbol = __webpack_require__(52);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBuiltIn = __webpack_require__(36);
var isCallable = __webpack_require__(8);
var isPrototypeOf = __webpack_require__(11);
var USE_SYMBOL_AS_UID = __webpack_require__(53);
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(54);
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(30);
var fails = __webpack_require__(5);
var globalThis = __webpack_require__(7);
var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
  // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var globalThis = __webpack_require__(7);
var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;
module.exports = userAgent ? String(userAgent) : '';

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(37);
module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);
module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(9);
var fails = __webpack_require__(5);
var createElement = __webpack_require__(59);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a !== 7;
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var globalThis = __webpack_require__(7);
var isObject = __webpack_require__(10);
var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(33);
var aCallable = __webpack_require__(25);
var NATIVE_BIND = __webpack_require__(22);
var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(9);
var fails = __webpack_require__(5);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {/* empty */}, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(105);
module.exports = parent;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toIndexedObject = __webpack_require__(24);
var toAbsoluteIndex = __webpack_require__(118);
var lengthOfArrayLike = __webpack_require__(31);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};
module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trunc = __webpack_require__(119);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shared = __webpack_require__(56);
var uid = __webpack_require__(57);
var keys = shared('keys');
module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(133);
module.exports = parent;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(16);
exports.__esModule = true;
exports.default = void 0;
var _inDOM = _interopRequireDefault(__webpack_require__(17));
var on = function on() {};
if (_inDOM.default) {
  on = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}
var _default = on;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(16);
exports.__esModule = true;
exports.default = void 0;
var _inDOM = _interopRequireDefault(__webpack_require__(17));
var off = function off() {};
if (_inDOM.default) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}
var _default = off;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(23);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arraySpeciesConstructor = __webpack_require__(149);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(110);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(131);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = ownerDocument;
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
module.exports = exports["default"];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(143);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(153);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
var invariant = function (condition, format, a, b, c, d, e, f) {
  if (false) {}
  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }
    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};
module.exports = invariant;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(173);

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(180);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(184);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(84);
module.exports = parent;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(85);
module.exports = parent;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(86);
module.exports = parent;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(87);
var path = __webpack_require__(15);
module.exports = path.Object.setPrototypeOf;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(6);
var setPrototypeOf = __webpack_require__(99);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({
  target: 'Object',
  stat: true
}, {
  setPrototypeOf: setPrototypeOf
});

/***/ }),
/* 88 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
  return this;
}();
try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NATIVE_BIND = __webpack_require__(22);
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(9);
var call = __webpack_require__(27);
var propertyIsEnumerableModule = __webpack_require__(34);
var createPropertyDescriptor = __webpack_require__(35);
var toIndexedObject = __webpack_require__(24);
var toPropertyKey = __webpack_require__(51);
var hasOwn = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(58);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {/* empty */}
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var call = __webpack_require__(27);
var isObject = __webpack_require__(10);
var isSymbol = __webpack_require__(52);
var getMethod = __webpack_require__(92);
var ordinaryToPrimitive = __webpack_require__(94);
var wellKnownSymbol = __webpack_require__(19);
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aCallable = __webpack_require__(25);
var isNullOrUndefined = __webpack_require__(50);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $String = String;
module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var call = __webpack_require__(27);
var isCallable = __webpack_require__(8);
var isObject = __webpack_require__(10);
var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = true;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var globalThis = __webpack_require__(7);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    globalThis[key] = value;
  }
  return value;
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(5);
var isCallable = __webpack_require__(8);
var replacement = /#|\.prototype\./;
var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(9);
var definePropertyModule = __webpack_require__(38);
var createPropertyDescriptor = __webpack_require__(35);
module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(100);
var isObject = __webpack_require__(10);
var requireObjectCoercible = __webpack_require__(29);
var aPossiblePrototype = __webpack_require__(101);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {/* empty */}
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var aCallable = __webpack_require__(25);
module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) {/* empty */}
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPossiblePrototype = __webpack_require__(102);
var $String = String;
var $TypeError = TypeError;
module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(10);
module.exports = function (argument) {
  return isObject(argument) || argument === null;
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(104);
module.exports = parent;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(62);
module.exports = parent;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototypeOf = __webpack_require__(11);
var method = __webpack_require__(106);
var FunctionPrototype = Function.prototype;
module.exports = function (it) {
  var own = it.bind;
  return it === FunctionPrototype || isPrototypeOf(FunctionPrototype, it) && own === FunctionPrototype.bind ? method : own;
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(107);
var getBuiltInPrototypeMethod = __webpack_require__(13);
module.exports = getBuiltInPrototypeMethod('Function', 'bind');

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// TODO: Remove from `core-js@4`
var $ = __webpack_require__(6);
var bind = __webpack_require__(108);

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
$({
  target: 'Function',
  proto: true,
  forced: Function.bind !== bind
}, {
  bind: bind
});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var aCallable = __webpack_require__(25);
var isObject = __webpack_require__(10);
var hasOwn = __webpack_require__(12);
var arraySlice = __webpack_require__(109);
var NATIVE_BIND = __webpack_require__(22);
var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};
var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    var list = [];
    var i = 0;
    for (; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  }
  return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */
  ) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
module.exports = uncurryThis([].slice);

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(111);
module.exports = parent;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(112);
module.exports = parent;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(113);
module.exports = parent;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(114);
var path = __webpack_require__(15);
var Object = path.Object;
module.exports = function create(P, D) {
  return Object.create(P, D);
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// TODO: Remove from `core-js@4`
var $ = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(9);
var create = __webpack_require__(115);

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$({
  target: 'Object',
  stat: true,
  sham: !DESCRIPTORS
}, {
  create: create
});

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(39);
var definePropertiesModule = __webpack_require__(116);
var enumBugKeys = __webpack_require__(66);
var hiddenKeys = __webpack_require__(65);
var html = __webpack_require__(121);
var documentCreateElement = __webpack_require__(59);
var sharedKey = __webpack_require__(67);
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');
var EmptyConstructor = function () {/* empty */};
var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {/* ignore */}
  NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(9);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(61);
var definePropertyModule = __webpack_require__(38);
var anObject = __webpack_require__(39);
var toIndexedObject = __webpack_require__(24);
var objectKeys = __webpack_require__(40);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var hasOwn = __webpack_require__(12);
var toIndexedObject = __webpack_require__(24);
var indexOf = __webpack_require__(63).indexOf;
var hiddenKeys = __webpack_require__(65);
var push = uncurryThis([].push);
module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toIntegerOrInfinity = __webpack_require__(64);
var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toIntegerOrInfinity = __webpack_require__(64);
var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBuiltIn = __webpack_require__(36);
module.exports = getBuiltIn('document', 'documentElement');

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(123);
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }
  ;
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  ;
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(125);
module.exports = parent;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(126);
module.exports = parent;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(127);
module.exports = parent;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(128);
var path = __webpack_require__(15);
module.exports = path.Object.assign;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(6);
var assign = __webpack_require__(129);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({
  target: 'Object',
  stat: true,
  arity: 2,
  forced: Object.assign !== assign
}, {
  assign: assign
});

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(9);
var uncurryThis = __webpack_require__(3);
var call = __webpack_require__(27);
var fails = __webpack_require__(5);
var objectKeys = __webpack_require__(40);
var getOwnPropertySymbolsModule = __webpack_require__(130);
var propertyIsEnumerableModule = __webpack_require__(34);
var toObject = __webpack_require__(20);
var IndexedObject = __webpack_require__(28);

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({
    b: 1
  }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol('assign detection');
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  }
  return T;
} : $assign;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(132);
module.exports = parent;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(68);
module.exports = parent;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototypeOf = __webpack_require__(11);
var method = __webpack_require__(134);
var ArrayPrototype = Array.prototype;
module.exports = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.indexOf ? method : own;
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(135);
var getBuiltInPrototypeMethod = __webpack_require__(13);
module.exports = getBuiltInPrototypeMethod('Array', 'indexOf');

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(6);
var uncurryThis = __webpack_require__(33);
var $indexOf = __webpack_require__(63).indexOf;
var arrayMethodIsStrict = __webpack_require__(41);
var nativeIndexOf = uncurryThis([].indexOf);
var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
    // convert -0 to +0
    ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
  }
});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(16);
exports.__esModule = true;
exports.default = filterEvents;
var _contains = _interopRequireDefault(__webpack_require__(137));
var _querySelectorAll = _interopRequireDefault(__webpack_require__(138));
function filterEvents(selector, handler) {
  return function filterHandler(e) {
    var top = e.currentTarget,
      target = e.target,
      matches = (0, _querySelectorAll.default)(top, selector);
    if (matches.some(function (match) {
      return (0, _contains.default)(match, target);
    })) handler.call(this, e);
  };
}
module.exports = exports["default"];

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(16);
exports.__esModule = true;
exports.default = void 0;
var _inDOM = _interopRequireDefault(__webpack_require__(17));
var _default = function () {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return _inDOM.default ? function (context, node) {
    if (context.contains) {
      return context.contains(node);
    } else if (context.compareDocumentPosition) {
      return context === node || !!(context.compareDocumentPosition(node) & 16);
    } else {
      return fallback(context, node);
    }
  } : fallback;
}();
exports.default = _default;
function fallback(context, node) {
  if (node) do {
    if (node === context) return true;
  } while (node = node.parentNode);
  return false;
}
module.exports = exports["default"];

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = qsa;
// Zepto.js
// (c) 2010-2015 Thomas Fuchs
// Zepto.js may be freely distributed under the MIT license.
var simpleSelectorRE = /^[\w-]*$/;
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  var maybeID = selector[0] === '#',
    maybeClass = selector[0] === '.',
    nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
    isSimple = simpleSelectorRE.test(nameOnly),
    found;
  if (isSimple) {
    if (maybeID) {
      element = element.getElementById ? element : document;
      return (found = element.getElementById(nameOnly)) ? [found] : [];
    }
    if (element.getElementsByClassName && maybeClass) return toArray(element.getElementsByClassName(nameOnly));
    return toArray(element.getElementsByTagName(selector));
  }
  return toArray(element.querySelectorAll(selector));
}
module.exports = exports["default"];

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(16);
exports.__esModule = true;
exports.default = void 0;
var _inDOM = _interopRequireDefault(__webpack_require__(17));
var _on = _interopRequireDefault(__webpack_require__(69));
var _off = _interopRequireDefault(__webpack_require__(70));
var listen = function listen() {};
if (_inDOM.default) {
  listen = function listen(node, eventName, handler, capture) {
    (0, _on.default)(node, eventName, handler, capture);
    return function () {
      (0, _off.default)(node, eventName, handler, capture);
    };
  };
}
var _default = listen;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(141);
} else {}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var b = "function" === typeof Symbol && Symbol.for,
  c = b ? Symbol.for("react.element") : 60103,
  d = b ? Symbol.for("react.portal") : 60106,
  e = b ? Symbol.for("react.fragment") : 60107,
  f = b ? Symbol.for("react.strict_mode") : 60108,
  g = b ? Symbol.for("react.profiler") : 60114,
  h = b ? Symbol.for("react.provider") : 60109,
  k = b ? Symbol.for("react.context") : 60110,
  l = b ? Symbol.for("react.async_mode") : 60111,
  m = b ? Symbol.for("react.concurrent_mode") : 60111,
  n = b ? Symbol.for("react.forward_ref") : 60112,
  p = b ? Symbol.for("react.suspense") : 60113,
  q = b ? Symbol.for("react.suspense_list") : 60120,
  r = b ? Symbol.for("react.memo") : 60115,
  t = b ? Symbol.for("react.lazy") : 60116,
  v = b ? Symbol.for("react.block") : 60121,
  w = b ? Symbol.for("react.fundamental") : 60117,
  x = b ? Symbol.for("react.responder") : 60118,
  y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;
    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A(a) {
  return z(a) === m;
}
exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;
exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};
exports.isConcurrentMode = A;
exports.isContextConsumer = function (a) {
  return z(a) === k;
};
exports.isContextProvider = function (a) {
  return z(a) === h;
};
exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};
exports.isForwardRef = function (a) {
  return z(a) === n;
};
exports.isFragment = function (a) {
  return z(a) === e;
};
exports.isLazy = function (a) {
  return z(a) === t;
};
exports.isMemo = function (a) {
  return z(a) === r;
};
exports.isPortal = function (a) {
  return z(a) === d;
};
exports.isProfiler = function (a) {
  return z(a) === g;
};
exports.isStrictMode = function (a) {
  return z(a) === f;
};
exports.isSuspense = function (a) {
  return z(a) === p;
};
exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
exports.typeOf = z;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;
    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }
      return null;
    }
    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }
    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }
  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
}
module.exports = exports['default'];

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(144);
module.exports = parent;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototypeOf = __webpack_require__(11);
var method = __webpack_require__(145);
var ArrayPrototype = Array.prototype;
module.exports = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.concat ? method : own;
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(146);
var getBuiltInPrototypeMethod = __webpack_require__(13);
module.exports = getBuiltInPrototypeMethod('Array', 'concat');

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(6);
var fails = __webpack_require__(5);
var isArray = __webpack_require__(71);
var isObject = __webpack_require__(10);
var toObject = __webpack_require__(20);
var lengthOfArrayLike = __webpack_require__(31);
var doesNotExceedSafeInteger = __webpack_require__(147);
var createProperty = __webpack_require__(148);
var arraySpeciesCreate = __webpack_require__(72);
var arrayMethodHasSpeciesSupport = __webpack_require__(43);
var wellKnownSymbol = __webpack_require__(19);
var V8_VERSION = __webpack_require__(30);
var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};
var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({
  target: 'Array',
  proto: true,
  arity: 1,
  forced: FORCED
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(9);
var definePropertyModule = __webpack_require__(38);
var createPropertyDescriptor = __webpack_require__(35);
module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));else object[key] = value;
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(71);
var isConstructor = __webpack_require__(150);
var isObject = __webpack_require__(10);
var wellKnownSymbol = __webpack_require__(19);
var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }
  return C === undefined ? $Array : C;
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var fails = __webpack_require__(5);
var isCallable = __webpack_require__(8);
var classof = __webpack_require__(42);
var getBuiltIn = __webpack_require__(36);
var inspectSource = __webpack_require__(152);
var noop = function () {/* empty */};
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};
isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var wellKnownSymbol = __webpack_require__(19);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var isCallable = __webpack_require__(8);
var store = __webpack_require__(37);
var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}
module.exports = store.inspectSource;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(154);
module.exports = parent;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototypeOf = __webpack_require__(11);
var method = __webpack_require__(155);
var StringPrototype = String.prototype;
module.exports = function (it) {
  var own = it.trim;
  return typeof it == 'string' || it === StringPrototype || isPrototypeOf(StringPrototype, it) && own === StringPrototype.trim ? method : own;
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(156);
var getBuiltInPrototypeMethod = __webpack_require__(13);
module.exports = getBuiltInPrototypeMethod('String', 'trim');

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(6);
var $trim = __webpack_require__(157).trim;
var forcedStringTrimMethod = __webpack_require__(159);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({
  target: 'String',
  proto: true,
  forced: forcedStringTrimMethod('trim')
}, {
  trim: function trim() {
    return $trim(this);
  }
});

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var requireObjectCoercible = __webpack_require__(29);
var toString = __webpack_require__(158);
var whitespaces = __webpack_require__(73);
var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};
module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(42);
var $String = String;
module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PROPER_FUNCTION_NAME = __webpack_require__(160).PROPER;
var fails = __webpack_require__(5);
var whitespaces = __webpack_require__(73);
var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(9);
var hasOwn = __webpack_require__(12);
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && function something() {/* empty */}.name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(42);
var hasOwn = __webpack_require__(12);
var isPrototypeOf = __webpack_require__(11);
var method = __webpack_require__(162);
__webpack_require__(166);
var ArrayPrototype = Array.prototype;
var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};
module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.forEach || hasOwn(DOMIterables, classof(it)) ? method : own;
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(163);
module.exports = parent;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(164);
var getBuiltInPrototypeMethod = __webpack_require__(13);
module.exports = getBuiltInPrototypeMethod('Array', 'forEach');

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(6);
var forEach = __webpack_require__(165);

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({
  target: 'Array',
  proto: true,
  forced: [].forEach !== forEach
}, {
  forEach: forEach
});

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $forEach = __webpack_require__(44).forEach;
var arrayMethodIsStrict = __webpack_require__(41);
var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

/***/ }),
/* 166 */
/***/ (function(module, exports) {

// empty

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(168);
module.exports = parent;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(169);
var path = __webpack_require__(15);
module.exports = path.Object.entries;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(6);
var $entries = __webpack_require__(170).entries;

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({
  target: 'Object',
  stat: true
}, {
  entries: function entries(O) {
    return $entries(O);
  }
});

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(9);
var fails = __webpack_require__(5);
var uncurryThis = __webpack_require__(3);
var objectGetPrototypeOf = __webpack_require__(171);
var objectKeys = __webpack_require__(40);
var toIndexedObject = __webpack_require__(24);
var $propertyIsEnumerable = __webpack_require__(34).f;
var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
// of `null` prototype objects
var IE_BUG = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-create -- safe
  var O = Object.create(null);
  O[2] = 2;
  return !propertyIsEnumerable(O, 2);
});

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};
module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = __webpack_require__(12);
var isCallable = __webpack_require__(8);
var toObject = __webpack_require__(20);
var sharedKey = __webpack_require__(67);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(172);
var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }
  return object instanceof $Object ? ObjectPrototype : null;
};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(5);
module.exports = !fails(function () {
  function F() {/* empty */}
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(174);
module.exports = parent;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototypeOf = __webpack_require__(11);
var method = __webpack_require__(175);
var ArrayPrototype = Array.prototype;
module.exports = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.reduce ? method : own;
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(176);
var getBuiltInPrototypeMethod = __webpack_require__(13);
module.exports = getBuiltInPrototypeMethod('Array', 'reduce');

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(6);
var $reduce = __webpack_require__(177).left;
var arrayMethodIsStrict = __webpack_require__(41);
var CHROME_VERSION = __webpack_require__(30);
var IS_NODE = __webpack_require__(178);

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aCallable = __webpack_require__(25);
var toObject = __webpack_require__(20);
var IndexedObject = __webpack_require__(28);
var lengthOfArrayLike = __webpack_require__(31);
var $TypeError = TypeError;
var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    aCallable(callbackfn);
    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError(REDUCE_EMPTY);
      }
    }
    for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};
module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ENVIRONMENT = __webpack_require__(179);
module.exports = ENVIRONMENT === 'NODE';

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global Bun, Deno -- detection */
var globalThis = __webpack_require__(7);
var userAgent = __webpack_require__(55);
var classof = __webpack_require__(23);
var userAgentStartsWith = function (string) {
  return userAgent.slice(0, string.length) === string;
};
module.exports = function () {
  if (userAgentStartsWith('Bun/')) return 'BUN';
  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  if (userAgentStartsWith('Deno/')) return 'DENO';
  if (userAgentStartsWith('Node.js/')) return 'NODE';
  if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
  if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
  if (classof(globalThis.process) === 'process') return 'NODE';
  if (globalThis.window && globalThis.document) return 'BROWSER';
  return 'REST';
}();

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(181);
module.exports = parent;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototypeOf = __webpack_require__(11);
var method = __webpack_require__(182);
var ArrayPrototype = Array.prototype;
module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.filter ? method : own;
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(183);
var getBuiltInPrototypeMethod = __webpack_require__(13);
module.exports = getBuiltInPrototypeMethod('Array', 'filter');

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(6);
var $filter = __webpack_require__(44).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(43);
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(185);
module.exports = parent;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototypeOf = __webpack_require__(11);
var method = __webpack_require__(186);
var ArrayPrototype = Array.prototype;
module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.map ? method : own;
};

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(187);
var getBuiltInPrototypeMethod = __webpack_require__(13);
module.exports = getBuiltInPrototypeMethod('Array', 'map');

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(6);
var $map = __webpack_require__(44).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(43);
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CloseButton", function() { return /* reexport */ src_CloseButton; });
__webpack_require__.d(__webpack_exports__, "Fade", function() { return /* reexport */ src_Fade; });
__webpack_require__.d(__webpack_exports__, "Modal", function() { return /* reexport */ src_Modal; });
__webpack_require__.d(__webpack_exports__, "ModalBody", function() { return /* reexport */ src_ModalBody; });
__webpack_require__.d(__webpack_exports__, "ModalDialog", function() { return /* reexport */ src_ModalDialog; });
__webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return /* reexport */ src_ModalFooter; });
__webpack_require__.d(__webpack_exports__, "ModalHeader", function() { return /* reexport */ src_ModalHeader; });
__webpack_require__.d(__webpack_exports__, "ModalTitle", function() { return /* reexport */ src_ModalTitle; });
__webpack_require__.d(__webpack_exports__, "utils", function() { return /* reexport */ utils_namespaceObject; });

// NAMESPACE OBJECT: ./src/utils/bootstrapUtils.js
var bootstrapUtils_namespaceObject = {};
__webpack_require__.r(bootstrapUtils_namespaceObject);
__webpack_require__.d(bootstrapUtils_namespaceObject, "prefix", function() { return prefix; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "bsClass", function() { return bootstrapUtils_bsClass; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "bsStyles", function() { return bsStyles; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "bsSizes", function() { return bsSizes; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "getClassSet", function() { return getClassSet; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "splitBsProps", function() { return splitBsProps; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "splitBsPropsAndOmit", function() { return splitBsPropsAndOmit; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "addStyle", function() { return addStyle; });
__webpack_require__.d(bootstrapUtils_namespaceObject, "_curry", function() { return _curry; });

// NAMESPACE OBJECT: ./src/utils/index.js
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, "bootstrapUtils", function() { return bootstrapUtils_namespaceObject; });
__webpack_require__.d(utils_namespaceObject, "createChainedFunction", function() { return utils_createChainedFunction; });
__webpack_require__.d(utils_namespaceObject, "ValidComponentChildren", function() { return ValidComponentChildren; });

// EXTERNAL MODULE: ./node_modules/core-js-pure/features/object/create.js
var create = __webpack_require__(74);
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/core-js-pure/features/object/set-prototype-of.js
var set_prototype_of = __webpack_require__(45);
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// EXTERNAL MODULE: ./node_modules/core-js-pure/features/instance/bind.js
var bind = __webpack_require__(32);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js


function _setPrototypeOf(t, e) {
  var _context;
  return _setPrototypeOf = set_prototype_of_default.a ? bind_default()(_context = set_prototype_of_default.a).call(_context) : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/inheritsLoose.js


function _inheritsLoose(t, o) {
  t.prototype = create_default()(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// CONCATENATED MODULE: ./src/CloseButton.js

var _jsxFileName = "/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/CloseButton.js";


var CloseButton_propTypes = {
  label: prop_types_default.a.string.isRequired,
  onClick: prop_types_default.a.func
};
var CloseButton_defaultProps = {
  label: 'Close'
};
var CloseButton_CloseButton = /*#__PURE__*/function (_React$Component) {
  function CloseButton() {
    return _React$Component.apply(this, arguments) || this;
  }
  _inheritsLoose(CloseButton, _React$Component);
  var _proto = CloseButton.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      label = _this$props.label,
      onClick = _this$props.onClick;
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("button", {
      type: "button",
      className: "close",
      onClick: onClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, "\xD7"), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("span", {
      className: "sr-only",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, label));
  };
  return CloseButton;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);
CloseButton_CloseButton.propTypes = CloseButton_propTypes;
CloseButton_CloseButton.defaultProps = CloseButton_defaultProps;
/* harmony default export */ var src_CloseButton = (CloseButton_CloseButton);
// EXTERNAL MODULE: ./node_modules/core-js-pure/features/object/assign.js
var object_assign = __webpack_require__(46);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/extends.js


function _extends() {
  var _context;
  return _extends = assign_default.a ? bind_default()(_context = assign_default.a).call(_context) : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// EXTERNAL MODULE: ./node_modules/core-js-pure/features/instance/index-of.js
var index_of = __webpack_require__(75);
var index_of_default = /*#__PURE__*/__webpack_require__.n(index_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== index_of_default()(e).call(e, n)) continue;
    t[n] = r[n];
  }
  return t;
}

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function setPrototypeOf_setPrototypeOf(t, e) {
  return setPrototypeOf_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, setPrototypeOf_setPrototypeOf(t, e);
}

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function inheritsLoose_inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, setPrototypeOf_setPrototypeOf(t, o);
}

// EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ = __webpack_require__(18);
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_);

// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ var config = ({
  disabled: false
});
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js

/* harmony default export */ var TransitionGroupContext = (external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createContext(null));
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/Transition.js









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition_Transition = /*#__PURE__*/function (_React$Component) {
  inheritsLoose_inheritsLoose(Transition, _React$Component);
  function Transition(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;
  var _proto = Transition.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;
    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }
    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.findDOMNode(this), appearing],
      maybeNode = _ref2[0],
      maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function () {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
        maybeNode = _ref3[0],
        maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props,
      children = _this$props.children,
      _in = _this$props.in,
      _mountOnEnter = _this$props.mountOnEnter,
      _unmountOnExit = _this$props.unmountOnExit,
      _appear = _this$props.appear,
      _enter = _this$props.enter,
      _exit = _this$props.exit,
      _timeout = _this$props.timeout,
      _addEndListener = _this$props.addEndListener,
      _onEnter = _this$props.onEnter,
      _onEntering = _this$props.onEntering,
      _onEntered = _this$props.onEntered,
      _onExit = _this$props.onExit,
      _onExiting = _this$props.onExiting,
      _onExited = _this$props.onExited,
      _nodeRef = _this$props.nodeRef,
      childProps = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (/*#__PURE__*/
      // allows for nested Transitions
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children.only(children), childProps))
    );
  };
  return Transition;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);
Transition_Transition.contextType = TransitionGroupContext;
Transition_Transition.propTypes =  false ? undefined : {}; // Name the function so it is clearer in the documentation

function noop() {}
Transition_Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition_Transition.UNMOUNTED = UNMOUNTED;
Transition_Transition.EXITED = EXITED;
Transition_Transition.ENTERING = ENTERING;
Transition_Transition.ENTERED = ENTERED;
Transition_Transition.EXITING = EXITING;
/* harmony default export */ var esm_Transition = (Transition_Transition);
// CONCATENATED MODULE: ./src/Fade.js



var _excluded = ["className", "children"];
var Fade_jsxFileName = "/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/Fade.js",
  _fadeStyles;




var Fade_propTypes = {
  /**
   * Show the component; triggers the fade in or fade out animation
   */
  "in": prop_types_default.a.bool,
  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: prop_types_default.a.bool,
  /**
   * Unmount the component (remove it from the DOM) when it is faded out
   */
  unmountOnExit: prop_types_default.a.bool,
  /**
   * Run the fade in animation when the component mounts, if it is initially
   * shown
   */
  appear: prop_types_default.a.bool,
  /**
   * Duration of the fade animation in milliseconds, to ensure that finishing
   * callbacks are fired even if the original browser transition end events are
   * canceled
   */
  timeout: prop_types_default.a.number,
  /**
   * Callback fired before the component fades in
   */
  onEnter: prop_types_default.a.func,
  /**
   * Callback fired after the component starts to fade in
   */
  onEntering: prop_types_default.a.func,
  /**
   * Callback fired after the has component faded in
   */
  onEntered: prop_types_default.a.func,
  /**
   * Callback fired before the component fades out
   */
  onExit: prop_types_default.a.func,
  /**
   * Callback fired after the component starts to fade out
   */
  onExiting: prop_types_default.a.func,
  /**
   * Callback fired after the component has faded out
   */
  onExited: prop_types_default.a.func
};
var Fade_defaultProps = {
  "in": false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[ENTERING] = 'in', _fadeStyles[ENTERED] = 'in', _fadeStyles);
var Fade_Fade = /*#__PURE__*/function (_React$Component) {
  function Fade() {
    return _React$Component.apply(this, arguments) || this;
  }
  _inheritsLoose(Fade, _React$Component);
  var _proto = Fade.prototype;
  _proto.render = function render() {
    var nodeRef = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createRef(null);
    var _this$props = this.props,
      className = _this$props.className,
      children = _this$props.children,
      props = _objectWithoutPropertiesLoose(_this$props, _excluded);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(esm_Transition, _extends({}, props, {
      nodeRef: nodeRef,
      __self: this,
      __source: {
        fileName: Fade_jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      ref: nodeRef,
      __self: this,
      __source: {
        fileName: Fade_jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }, function (status, innerProps) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(children, _extends({}, innerProps, {
        className: classnames_default()('fade', className, children.props.className, fadeStyles[status])
      }));
    }));
  };
  return Fade;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);
Fade_Fade.propTypes = Fade_propTypes;
Fade_Fade.defaultProps = Fade_defaultProps;
/* harmony default export */ var src_Fade = (Fade_Fade);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js
var instance_bind = __webpack_require__(21);
var instance_bind_default = /*#__PURE__*/__webpack_require__.n(instance_bind);

// EXTERNAL MODULE: ./node_modules/dom-helpers/events/index.js
var events = __webpack_require__(47);
var events_default = /*#__PURE__*/__webpack_require__.n(events);

// EXTERNAL MODULE: ./node_modules/dom-helpers/ownerDocument.js
var ownerDocument = __webpack_require__(76);
var ownerDocument_default = /*#__PURE__*/__webpack_require__.n(ownerDocument);

// EXTERNAL MODULE: ./node_modules/dom-helpers/util/inDOM.js
var inDOM = __webpack_require__(17);
var inDOM_default = /*#__PURE__*/__webpack_require__.n(inDOM);

// EXTERNAL MODULE: ./node_modules/dom-helpers/util/scrollbarSize.js
var scrollbarSize = __webpack_require__(48);
var scrollbarSize_default = /*#__PURE__*/__webpack_require__.n(scrollbarSize);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function extends_extends() {
  return extends_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, extends_extends.apply(null, arguments);
}

// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/ownerDocument.js
/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */
function ownerDocument_ownerDocument(node) {
  return node && node.ownerDocument || document;
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/activeElement.js

/**
 * Returns the actively focused element safely.
 *
 * @param doc the document to check
 */

function activeElement(doc) {
  if (doc === void 0) {
    doc = ownerDocument_ownerDocument();
  }

  // Support: IE 9 only
  // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
  try {
    var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>

    if (!active || !active.nodeName) return null;
    return active;
  } catch (e) {
    /* ie throws if no active element */
    return doc.body;
  }
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/contains.js
/* eslint-disable no-bitwise, no-cond-assign */

/**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */
function contains(context, node) {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/canUseDOM.js
/* harmony default export */ var canUseDOM = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/addEventListener.js
/* eslint-disable no-return-assign */

var optionsSupported = false;
var onceSupported = false;
try {
  var addEventListener_options = {
    get passive() {
      return optionsSupported = true;
    },
    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }
  };
  if (canUseDOM) {
    window.addEventListener('test', addEventListener_options, addEventListener_options);
    window.removeEventListener('test', addEventListener_options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
      capture = options.capture;
    var wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }
  node.addEventListener(eventName, handler, options);
}
/* harmony default export */ var esm_addEventListener = (addEventListener);
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/removeEventListener.js
/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
/* harmony default export */ var esm_removeEventListener = (removeEventListener);
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/listen.js


function listen(node, eventName, handler, options) {
  esm_addEventListener(node, eventName, handler, options);
  return function () {
    esm_removeEventListener(node, eventName, handler, options);
  };
}
/* harmony default export */ var esm_listen = (listen);
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/@restart/hooks/esm/useMounted.js


/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */
function useMounted() {
  const mounted = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(true);
  const isMounted = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(() => mounted.current);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/@restart/hooks/esm/useUpdatedRef.js


/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */
function useUpdatedRef(value) {
  const valueRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(value);
  valueRef.current = value;
  return valueRef;
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/@restart/hooks/esm/useWillUnmount.js



/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */
function useWillUnmount(fn) {
  const onUnmount = useUpdatedRef(fn);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => () => onUnmount.current(), []);
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/@restart/hooks/esm/usePrevious.js


/**
 * Store the last of some value. Tracked via a `Ref` only updating it
 * after the component renders.
 *
 * Helpful if you need to compare a prop value to it's previous value during render.
 *
 * ```ts
 * function Component(props) {
 *   const lastProps = usePrevious(props)
 *
 *   if (lastProps.foo !== props.foo)
 *     resetValueFromProps(props.foo)
 * }
 * ```
 *
 * @param value the value to track
 */
function usePrevious(value) {
  const ref = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    ref.current = value;
  });
  return ref.current;
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/@restart/hooks/esm/useCommittedRef.js


/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */
function useCommittedRef(value) {
  const ref = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(value);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
/* harmony default export */ var esm_useCommittedRef = (useCommittedRef);
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/@restart/hooks/esm/useEventCallback.js


function useEventCallback(fn) {
  const ref = esm_useCommittedRef(fn);
  return Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(function (...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/hasClass.js
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/addClass.js

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/ownerWindow.js

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

function ownerWindow(node) {
  var doc = ownerDocument_ownerDocument(node);
  return doc && doc.defaultView || window;
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/getComputedStyle.js

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */

function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/hyphenate.js
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/hyphenateStyle.js
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */

var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/isTransform.js
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/css.js



function css_style(node, property) {
  var css = '';
  var transforms = '';
  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }
  Object.keys(property).forEach(function (key) {
    var value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });
  if (transforms) {
    css += "transform: " + transforms + ";";
  }
  node.style.cssText += ";" + css;
}
/* harmony default export */ var esm_css = (css_style);
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/scrollbarSize.js

var scrollbarSize_size;
function scrollbarSize_scrollbarSize(recalc) {
  if (!scrollbarSize_size && scrollbarSize_size !== 0 || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      scrollbarSize_size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return scrollbarSize_size;
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/isDocument.js
function isDocument(element) {
  return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;
}
// CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/isWindow.js

function isWindow(node) {
  if ('window' in node && node.window === node) return node;
  if (isDocument(node)) return node.defaultView || false;
  return false;
}
// CONCATENATED MODULE: ./node_modules/react-overlays/esm/isOverflowing.js


function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}
function isOverflowing_bodyIsOverflowing(node) {
  var doc = isWindow(node) ? ownerDocument_ownerDocument() : ownerDocument_ownerDocument(node);
  var win = isWindow(node) || doc.defaultView;
  return doc.body.clientWidth < win.innerWidth;
}
function isOverflowing(container) {
  var win = isWindow(container);
  return win || isBody(container) ? isOverflowing_bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}
// CONCATENATED MODULE: ./node_modules/react-overlays/esm/manageAriaHidden.js
var BLACKLIST = ['template', 'script', 'style'];
var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType,
    tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};
var siblings = function siblings(container, exclude, cb) {
  [].forEach.call(container.children, function (node) {
    if (exclude.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};
function ariaHidden(hide, node) {
  if (!node) return;
  if (hide) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}
function hideSiblings(container, _ref2) {
  var dialog = _ref2.dialog,
    backdrop = _ref2.backdrop;
  siblings(container, [dialog, backdrop], function (node) {
    return ariaHidden(true, node);
  });
}
function showSiblings(container, _ref3) {
  var dialog = _ref3.dialog,
    backdrop = _ref3.backdrop;
  siblings(container, [dialog, backdrop], function (node) {
    return ariaHidden(false, node);
  });
}
// CONCATENATED MODULE: ./node_modules/react-overlays/esm/ModalManager.js






function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }
    return false;
  });
  return idx;
}

/**
 * Proper state management for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */
var ModalManager_ModalManager = /*#__PURE__*/function () {
  function ModalManager(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$hideSiblingNodes = _ref.hideSiblingNodes,
      hideSiblingNodes = _ref$hideSiblingNodes === void 0 ? true : _ref$hideSiblingNodes,
      _ref$handleContainerO = _ref.handleContainerOverflow,
      handleContainerOverflow = _ref$handleContainerO === void 0 ? true : _ref$handleContainerO;
    this.hideSiblingNodes = void 0;
    this.handleContainerOverflow = void 0;
    this.modals = void 0;
    this.containers = void 0;
    this.data = void 0;
    this.scrollbarSize = void 0;
    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    this.modals = [];
    this.containers = [];
    this.data = [];
    this.scrollbarSize = scrollbarSize_scrollbarSize();
  }
  var _proto = ModalManager.prototype;
  _proto.isContainerOverflowing = function isContainerOverflowing(modal) {
    var data = this.data[this.containerIndexFromModal(modal)];
    return data && data.overflowing;
  };
  _proto.containerIndexFromModal = function containerIndexFromModal(modal) {
    return findIndexOf(this.data, function (d) {
      return d.modals.indexOf(modal) !== -1;
    });
  };
  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var style = {
      overflow: 'hidden'
    }; // we are only interested in the actual `style` here
    // because we will override it

    containerState.style = {
      overflow: container.style.overflow,
      paddingRight: container.style.paddingRight
    };
    if (containerState.overflowing) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style.paddingRight = parseInt(esm_css(container, 'paddingRight') || '0', 10) + this.scrollbarSize + "px";
    }
    esm_css(container, style);
  };
  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    Object.assign(container.style, containerState.style);
  };
  _proto.add = function add(modal, container, className) {
    var modalIdx = this.modals.indexOf(modal);
    var containerIdx = this.containers.indexOf(container);
    if (modalIdx !== -1) {
      return modalIdx;
    }
    modalIdx = this.modals.length;
    this.modals.push(modal);
    if (this.hideSiblingNodes) {
      hideSiblings(container, modal);
    }
    if (containerIdx !== -1) {
      this.data[containerIdx].modals.push(modal);
      return modalIdx;
    }
    var data = {
      modals: [modal],
      // right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],
      overflowing: isOverflowing(container)
    };
    if (this.handleContainerOverflow) {
      this.setContainerStyle(data, container);
    }
    data.classes.forEach(addClass.bind(null, container));
    this.containers.push(container);
    this.data.push(data);
    return modalIdx;
  };
  _proto.remove = function remove(modal) {
    var modalIdx = this.modals.indexOf(modal);
    if (modalIdx === -1) {
      return;
    }
    var containerIdx = this.containerIndexFromModal(modal);
    var data = this.data[containerIdx];
    var container = this.containers[containerIdx];
    data.modals.splice(data.modals.indexOf(modal), 1);
    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (data.modals.length === 0) {
      data.classes.forEach(removeClass.bind(null, container));
      if (this.handleContainerOverflow) {
        this.removeContainerStyle(data, container);
      }
      if (this.hideSiblingNodes) {
        showSiblings(container, modal);
      }
      this.containers.splice(containerIdx, 1);
      this.data.splice(containerIdx, 1);
    } else if (this.hideSiblingNodes) {
      // otherwise make sure the next top modal is visible to a SR
      var _data$modals = data.modals[data.modals.length - 1],
        backdrop = _data$modals.backdrop,
        dialog = _data$modals.dialog;
      ariaHidden(false, dialog);
      ariaHidden(false, backdrop);
    }
  };
  _proto.isTopModal = function isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  };
  return ModalManager;
}();
/* harmony default export */ var esm_ModalManager = (ModalManager_ModalManager);
// CONCATENATED MODULE: ./node_modules/react-overlays/esm/useWaitForDOMRef.js


var useWaitForDOMRef_resolveContainerRef = function resolveContainerRef(ref) {
  var _ref;
  if (typeof document === 'undefined') return null;
  if (ref == null) return ownerDocument_ownerDocument().body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(function () {
      return useWaitForDOMRef_resolveContainerRef(ref);
    }),
    resolvedRef = _useState[0],
    setRef = _useState[1];
  if (!resolvedRef) {
    var earlyRef = useWaitForDOMRef_resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    var nextRef = useWaitForDOMRef_resolveContainerRef(ref);
    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}
// CONCATENATED MODULE: ./node_modules/react-overlays/esm/Modal.js



/* eslint-disable @typescript-eslint/no-use-before-define, react/prop-types */













var manager;
function getManager() {
  if (!manager) manager = new esm_ModalManager();
  return manager;
}
function useModalManager(provided) {
  var modalManager = provided || getManager();
  var modal = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: function add(container, className) {
      return modalManager.add(modal.current, container, className);
    },
    remove: function remove() {
      return modalManager.remove(modal.current);
    },
    isTopModal: function isTopModal() {
      return modalManager.isTopModal(modal.current);
    },
    setDialogRef: Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(function (ref) {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useCallback"])(function (ref) {
      modal.current.backdrop = ref;
    }, [])
  });
}
var Modal_Modal = /*#__PURE__*/Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["forwardRef"])(function (_ref, ref) {
  var _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    _ref$role = _ref.role,
    role = _ref$role === void 0 ? 'dialog' : _ref$role,
    className = _ref.className,
    style = _ref.style,
    children = _ref.children,
    _ref$backdrop = _ref.backdrop,
    backdrop = _ref$backdrop === void 0 ? true : _ref$backdrop,
    _ref$keyboard = _ref.keyboard,
    keyboard = _ref$keyboard === void 0 ? true : _ref$keyboard,
    onBackdropClick = _ref.onBackdropClick,
    onEscapeKeyDown = _ref.onEscapeKeyDown,
    transition = _ref.transition,
    backdropTransition = _ref.backdropTransition,
    _ref$autoFocus = _ref.autoFocus,
    autoFocus = _ref$autoFocus === void 0 ? true : _ref$autoFocus,
    _ref$enforceFocus = _ref.enforceFocus,
    enforceFocus = _ref$enforceFocus === void 0 ? true : _ref$enforceFocus,
    _ref$restoreFocus = _ref.restoreFocus,
    restoreFocus = _ref$restoreFocus === void 0 ? true : _ref$restoreFocus,
    restoreFocusOptions = _ref.restoreFocusOptions,
    renderDialog = _ref.renderDialog,
    _ref$renderBackdrop = _ref.renderBackdrop,
    renderBackdrop = _ref$renderBackdrop === void 0 ? function (props) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", props);
    } : _ref$renderBackdrop,
    providedManager = _ref.manager,
    containerRef = _ref.container,
    containerClassName = _ref.containerClassName,
    onShow = _ref.onShow,
    _ref$onHide = _ref.onHide,
    onHide = _ref$onHide === void 0 ? function () {} : _ref$onHide,
    onExit = _ref.onExit,
    onExited = _ref.onExited,
    onExiting = _ref.onExiting,
    onEnter = _ref.onEnter,
    onEntering = _ref.onEntering,
    onEntered = _ref.onEntered,
    rest = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(_ref, ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "containerClassName", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"]);
  var container = useWaitForDOMRef(containerRef);
  var modal = useModalManager(providedManager);
  var isMounted = useMounted();
  var prevShow = usePrevious(show);
  var _useState = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useState"])(!show),
    exited = _useState[0],
    setExited = _useState[1];
  var lastFocusRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])(null);
  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useImperativeHandle"])(ref, function () {
    return modal;
  }, [modal]);
  if (canUseDOM && !prevShow && show) {
    lastFocusRef.current = activeElement();
  }
  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }
  var handleShow = useEventCallback(function () {
    modal.add(container, containerClassName);
    removeKeydownListenerRef.current = esm_listen(document, 'keydown', handleDocumentKeyDown);
    removeFocusListenerRef.current = esm_listen(document, 'focus',
    // the timeout is necessary b/c this will run before the new modal is mounted
    // and so steals focus from it
    function () {
      return setTimeout(handleEnforceFocus);
    }, true);
    if (onShow) {
      onShow();
    } // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.

    if (autoFocus) {
      var currentActiveElement = activeElement(document);
      if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  var handleHide = useEventCallback(function () {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();
    if (restoreFocus) {
      var _lastFocusRef$current;

      // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  }); // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
  // Show logic when:
  //  - show is `true` _and_ `container` has resolved

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (!show || !container) return;
    handleShow();
  }, [show, container, /* should never change: */
  handleShow]); // Hide cleanup logic when:
  //  - `exited` switches to true
  //  - component unmounts;

  Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useEffect"])(function () {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  useWillUnmount(function () {
    handleHide();
  }); // --------------------------------

  var handleEnforceFocus = useEventCallback(function () {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }
    var currentActiveElement = activeElement();
    if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  var handleBackdropClick = useEventCallback(function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    onBackdropClick == null ? void 0 : onBackdropClick(e);
    if (backdrop === true) {
      onHide();
    }
  });
  var handleDocumentKeyDown = useEventCallback(function (e) {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);
      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  var removeFocusListenerRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();
  var removeKeydownListenerRef = Object(external_root_React_commonjs2_react_commonjs_react_amd_react_["useRef"])();
  var handleHidden = function handleHidden() {
    setExited(true);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    onExited == null ? void 0 : onExited.apply(void 0, args);
  };
  var Transition = transition;
  if (!container || !(show || Transition && !exited)) {
    return null;
  }
  var dialogProps = extends_extends({
    role: role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    'aria-modal': role === 'dialog' ? true : undefined
  }, rest, {
    style: style,
    className: className,
    tabIndex: -1
  });
  var dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", dialogProps, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(children, {
    role: 'document'
  }));
  if (Transition) {
    dialog = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Transition, {
      appear: true,
      unmountOnExit: true,
      "in": !!show,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, dialog);
  }
  var backdropElement = null;
  if (backdrop) {
    var BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });
    if (BackdropTransition) {
      backdropElement = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(BackdropTransition, {
        appear: true,
        "in": !!show
      }, backdropElement);
    }
  }
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, /*#__PURE__*/external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.createPortal(/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Fragment, null, backdropElement, dialog), container));
});
var Modal_propTypes = {
  /**
   * Set the visibility of the Modal
   */
  show: prop_types_default.a.bool,
  /**
   * A DOM element, a `ref` to an element, or function that returns either. The Modal is appended to it's `container` element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: prop_types_default.a.any,
  /**
   * A callback fired when the Modal is opening.
   */
  onShow: prop_types_default.a.func,
  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: prop_types_default.a.func,
  /**
   * Include a backdrop component.
   */
  backdrop: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.oneOf(['static'])]),
  /**
   * A function that returns the dialog component. Useful for custom
   * rendering. **Note:** the component should make sure to apply the provided ref.
   *
   * ```js static
   * renderDialog={props => <MyDialog {...props} />}
   * ```
   */
  renderDialog: prop_types_default.a.func,
  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: prop_types_default.a.func,
  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   *
   * If preventDefault() is called on the keyboard event, closing the modal will be cancelled.
   */
  onEscapeKeyDown: prop_types_default.a.func,
  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: prop_types_default.a.func,
  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: prop_types_default.a.string,
  /**
   * Close the modal when escape key is pressed
   */
  keyboard: prop_types_default.a.bool,
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: prop_types_default.a.elementType,
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: prop_types_default.a.elementType,
  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: prop_types_default.a.bool,
  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: prop_types_default.a.bool,
  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: prop_types_default.a.bool,
  /**
   * Options passed to focus function when `restoreFocus` is set to `true`
   *
   * @link  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Parameters
   */
  restoreFocusOptions: prop_types_default.a.shape({
    preventScroll: prop_types_default.a.bool
  }),
  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: prop_types_default.a.func,
  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: prop_types_default.a.func,
  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: prop_types_default.a.func,
  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: prop_types_default.a.func,
  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: prop_types_default.a.func,
  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: prop_types_default.a.func,
  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: prop_types_default.a.instanceOf(esm_ModalManager)
};
Modal_Modal.displayName = 'Modal';
Modal_Modal.propTypes = Modal_propTypes;
/* harmony default export */ var esm_Modal = (Object.assign(Modal_Modal, {
  Manager: esm_ModalManager
}));
// EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/elementType.js
var elementType = __webpack_require__(14);
var elementType_default = /*#__PURE__*/__webpack_require__.n(elementType);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js
var concat = __webpack_require__(77);
var concat_default = /*#__PURE__*/__webpack_require__.n(concat);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js
var trim = __webpack_require__(78);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js
var for_each = __webpack_require__(2);
var for_each_default = /*#__PURE__*/__webpack_require__.n(for_each);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js
var instance_index_of = __webpack_require__(49);
var instance_index_of_default = /*#__PURE__*/__webpack_require__.n(instance_index_of);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js
var entries = __webpack_require__(26);
var entries_default = /*#__PURE__*/__webpack_require__.n(entries);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(79);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./src/utils/StyleConfig.js
var Size = {
  LARGE: 'large',
  SMALL: 'small',
  XSMALL: 'xsmall'
};
var SIZE_MAP = {
  large: 'lg',
  medium: 'md',
  small: 'sm',
  xsmall: 'xs',
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs'
};
var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];
var State = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info'
};
var Style = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  LINK: 'link',
  INVERSE: 'inverse'
};
// CONCATENATED MODULE: ./src/utils/bootstrapUtils.js






// TODO: The publicly exposed parts of this should be in lib/BootstrapUtils.




function curry(fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var last = args[args.length - 1];
    if (typeof last === 'function') {
      return fn.apply(void 0, args);
    }
    return function (Component) {
      return fn.apply(void 0, concat_default()(args).call(args, [Component]));
    };
  };
}
function prefix(props, variant) {
  var _context;
  var bsClass = trim_default()(_context = props.bsClass || '').call(_context);
  !(bsClass != null) ?  false ? undefined : browser_default()(false) : void 0;
  return bsClass + (variant ? "-" + variant : '');
}
var bootstrapUtils_bsClass = curry(function (defaultClass, Component) {
  var propTypes = Component.propTypes || (Component.propTypes = {});
  var defaultProps = Component.defaultProps || (Component.defaultProps = {});
  propTypes.bsClass = prop_types_default.a.string;
  defaultProps.bsClass = defaultClass;
  return Component;
});
var bsStyles = curry(function (styles, defaultStyle, Component) {
  if (typeof defaultStyle !== 'string') {
    Component = defaultStyle;
    defaultStyle = undefined;
  }
  var existing = Component.STYLES || [];
  var propTypes = Component.propTypes || {};
  for_each_default()(styles).call(styles, function (style) {
    if (instance_index_of_default()(existing).call(existing, style) === -1) {
      existing.push(style);
    }
  });
  var propType = prop_types_default.a.oneOf(existing);

  // expose the values on the propType function for documentation
  Component.STYLES = existing;
  propType._values = existing;
  Component.propTypes = _extends({}, propTypes, {
    bsStyle: propType
  });
  if (defaultStyle !== undefined) {
    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
    defaultProps.bsStyle = defaultStyle;
  }
  return Component;
});
var bsSizes = curry(function (sizes, defaultSize, Component) {
  if (typeof defaultSize !== 'string') {
    Component = defaultSize;
    defaultSize = undefined;
  }
  var existing = Component.SIZES || [];
  var propTypes = Component.propTypes || {};
  for_each_default()(sizes).call(sizes, function (size) {
    if (instance_index_of_default()(existing).call(existing, size) === -1) {
      existing.push(size);
    }
  });
  var values = [];
  for_each_default()(existing).call(existing, function (size) {
    var mappedSize = SIZE_MAP[size];
    if (mappedSize && mappedSize !== size) {
      values.push(mappedSize);
    }
    values.push(size);
  });
  var propType = prop_types_default.a.oneOf(values);
  propType._values = values;

  // expose the values on the propType function for documentation
  Component.SIZES = existing;
  Component.propTypes = _extends({}, propTypes, {
    bsSize: propType
  });
  if (defaultSize !== undefined) {
    if (!Component.defaultProps) {
      Component.defaultProps = {};
    }
    Component.defaultProps.bsSize = defaultSize;
  }
  return Component;
});
function getClassSet(props) {
  var _classes;
  var classes = (_classes = {}, _classes[prefix(props)] = true, _classes);
  if (props.bsSize) {
    var bsSize = SIZE_MAP[props.bsSize] || props.bsSize;
    classes[prefix(props, bsSize)] = true;
  }
  if (props.bsStyle) {
    classes[prefix(props, props.bsStyle)] = true;
  }
  return classes;
}
function getBsProps(props) {
  return {
    bsClass: props.bsClass,
    bsSize: props.bsSize,
    bsStyle: props.bsStyle,
    bsRole: props.bsRole
  };
}
function isBsProp(propName) {
  return propName === 'bsClass' || propName === 'bsSize' || propName === 'bsStyle' || propName === 'bsRole';
}
function splitBsProps(props) {
  var _context2;
  var elementProps = {};
  for_each_default()(_context2 = entries_default()(props)).call(_context2, function (_ref) {
    var propName = _ref[0],
      propValue = _ref[1];
    if (!isBsProp(propName)) {
      elementProps[propName] = propValue;
    }
  });
  return [getBsProps(props), elementProps];
}
function splitBsPropsAndOmit(props, omittedPropNames) {
  var _context3;
  var isOmittedProp = {};
  for_each_default()(omittedPropNames).call(omittedPropNames, function (propName) {
    isOmittedProp[propName] = true;
  });
  var elementProps = {};
  for_each_default()(_context3 = entries_default()(props)).call(_context3, function (_ref2) {
    var propName = _ref2[0],
      propValue = _ref2[1];
    if (!isBsProp(propName) && !isOmittedProp[propName]) {
      elementProps[propName] = propValue;
    }
  });
  return [getBsProps(props), elementProps];
}

/**
 * Add a style variant to a Component. Mutates the propTypes of the component
 * in order to validate the new variant.
 */
function addStyle(Component) {
  for (var _len2 = arguments.length, styleVariant = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styleVariant[_key2 - 1] = arguments[_key2];
  }
  bsStyles(styleVariant)(Component);
}
var _curry = curry;
// CONCATENATED MODULE: ./src/ModalBody.js



var ModalBody_excluded = ["componentClass", "className"];
var ModalBody_jsxFileName = "/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/ModalBody.js";




var ModalBody_propTypes = {
  componentClass: elementType_default.a
};
var ModalBody_defaultProps = {
  componentClass: 'div'
};
var ModalBody_ModalBody = /*#__PURE__*/function (_React$Component) {
  function ModalBody() {
    return _React$Component.apply(this, arguments) || this;
  }
  _inheritsLoose(ModalBody, _React$Component);
  var _proto = ModalBody.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      Component = _this$props.componentClass,
      className = _this$props.className,
      props = _objectWithoutPropertiesLoose(_this$props, ModalBody_excluded);
    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: ModalBody_jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }));
  };
  return ModalBody;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);
ModalBody_ModalBody.propTypes = ModalBody_propTypes;
ModalBody_ModalBody.defaultProps = ModalBody_defaultProps;
/* harmony default export */ var src_ModalBody = (bootstrapUtils_bsClass('modal-body', ModalBody_ModalBody));
// CONCATENATED MODULE: ./src/ModalDialog.js



var ModalDialog_excluded = ["dialogClassName", "className", "style", "children", "onMouseDownDialog"];
var ModalDialog_jsxFileName = "/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/ModalDialog.js";





var ModalDialog_propTypes = {
  /**
   * A css class to apply to the Modal dialog DOM node.
   */
  dialogClassName: prop_types_default.a.string
};
var ModalDialog_ModalDialog = /*#__PURE__*/function (_React$Component) {
  function ModalDialog() {
    return _React$Component.apply(this, arguments) || this;
  }
  _inheritsLoose(ModalDialog, _React$Component);
  var _proto = ModalDialog.prototype;
  _proto.render = function render() {
    var _extends2;
    var _this$props = this.props,
      dialogClassName = _this$props.dialogClassName,
      className = _this$props.className,
      style = _this$props.style,
      children = _this$props.children,
      onMouseDownDialog = _this$props.onMouseDownDialog,
      props = _objectWithoutPropertiesLoose(_this$props, ModalDialog_excluded);
    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var bsClassName = prefix(bsProps);
    var modalStyle = _extends({
      display: 'block'
    }, style);
    var dialogClasses = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[bsClassName] = false, _extends2[prefix(bsProps, 'dialog')] = true, _extends2));
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      tabIndex: "-1",
      role: "dialog",
      style: modalStyle,
      className: classnames_default()(className, bsClassName),
      __self: this,
      __source: {
        fileName: ModalDialog_jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: classnames_default()(dialogClassName, dialogClasses),
      onMouseDown: onMouseDownDialog,
      __self: this,
      __source: {
        fileName: ModalDialog_jsxFileName,
        lineNumber: 53,
        columnNumber: 10
      }
    }, /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: prefix(bsProps, 'content'),
      role: "document",
      __self: this,
      __source: {
        fileName: ModalDialog_jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, children)));
  };
  return ModalDialog;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);
ModalDialog_ModalDialog.propTypes = ModalDialog_propTypes;
/* harmony default export */ var src_ModalDialog = (bootstrapUtils_bsClass('modal', bsSizes([Size.LARGE, Size.SMALL], ModalDialog_ModalDialog)));
// CONCATENATED MODULE: ./src/ModalFooter.js



var ModalFooter_excluded = ["componentClass", "className"];
var ModalFooter_jsxFileName = "/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/ModalFooter.js";




var ModalFooter_propTypes = {
  componentClass: elementType_default.a
};
var ModalFooter_defaultProps = {
  componentClass: 'div'
};
var ModalFooter_ModalFooter = /*#__PURE__*/function (_React$Component) {
  function ModalFooter() {
    return _React$Component.apply(this, arguments) || this;
  }
  _inheritsLoose(ModalFooter, _React$Component);
  var _proto = ModalFooter.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      Component = _this$props.componentClass,
      className = _this$props.className,
      props = _objectWithoutPropertiesLoose(_this$props, ModalFooter_excluded);
    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: ModalFooter_jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }));
  };
  return ModalFooter;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);
ModalFooter_ModalFooter.propTypes = ModalFooter_propTypes;
ModalFooter_ModalFooter.defaultProps = ModalFooter_defaultProps;
/* harmony default export */ var src_ModalFooter = (bootstrapUtils_bsClass('modal-footer', ModalFooter_ModalFooter));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js
var reduce = __webpack_require__(80);
var reduce_default = /*#__PURE__*/__webpack_require__.n(reduce);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js
var filter = __webpack_require__(81);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// CONCATENATED MODULE: ./src/utils/createChainedFunction.js


/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  var _context;
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  return reduce_default()(_context = filter_default()(funcs).call(funcs, function (f) {
    return f != null;
  })).call(_context, function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }
    if (acc === null) {
      return f;
    }
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}
/* harmony default export */ var utils_createChainedFunction = (createChainedFunction);
// CONCATENATED MODULE: ./src/ModalHeader.js



var ModalHeader_excluded = ["closeLabel", "closeButton", "onHide", "className", "children"];
var ModalHeader_jsxFileName = "/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/ModalHeader.js";







// TODO: `aria-label` should be `closeLabel`.

var ModalHeader_propTypes = {
  /**
   * Provides an accessible label for the close
   * button. It is used for Assistive Technology when the label text is not
   * readable.
   */
  closeLabel: prop_types_default.a.string,
  /**
   * Specify whether the Component should contain a close button
   */
  closeButton: prop_types_default.a.bool,
  /**
   * A Callback fired when the close button is clicked. If used directly inside
   * a Modal component, the onHide will automatically be propagated up to the
   * parent Modal `onHide`.
   */
  onHide: prop_types_default.a.func
};
var ModalHeader_defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
var contextTypes = {
  $bs_modal: prop_types_default.a.shape({
    onHide: prop_types_default.a.func
  })
};
var ModalHeader_ModalHeader = /*#__PURE__*/function (_React$Component) {
  function ModalHeader() {
    return _React$Component.apply(this, arguments) || this;
  }
  _inheritsLoose(ModalHeader, _React$Component);
  var _proto = ModalHeader.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      closeLabel = _this$props.closeLabel,
      closeButton = _this$props.closeButton,
      onHide = _this$props.onHide,
      className = _this$props.className,
      children = _this$props.children,
      props = _objectWithoutPropertiesLoose(_this$props, ModalHeader_excluded);
    var modal = this.context.$bs_modal;
    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: ModalHeader_jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }
    }), closeButton && /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_CloseButton, {
      label: closeLabel,
      onClick: utils_createChainedFunction(modal && modal.onHide, onHide),
      __self: this,
      __source: {
        fileName: ModalHeader_jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }), children);
  };
  return ModalHeader;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);
ModalHeader_ModalHeader.propTypes = ModalHeader_propTypes;
ModalHeader_ModalHeader.defaultProps = ModalHeader_defaultProps;
ModalHeader_ModalHeader.contextTypes = contextTypes;
/* harmony default export */ var src_ModalHeader = (bootstrapUtils_bsClass('modal-header', ModalHeader_ModalHeader));
// CONCATENATED MODULE: ./src/ModalTitle.js



var ModalTitle_excluded = ["componentClass", "className"];
var ModalTitle_jsxFileName = "/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/ModalTitle.js";




var ModalTitle_propTypes = {
  componentClass: elementType_default.a
};
var ModalTitle_defaultProps = {
  componentClass: 'h4'
};
var ModalTitle_ModalTitle = /*#__PURE__*/function (_React$Component) {
  function ModalTitle() {
    return _React$Component.apply(this, arguments) || this;
  }
  _inheritsLoose(ModalTitle, _React$Component);
  var _proto = ModalTitle.prototype;
  _proto.render = function render() {
    var _this$props = this.props,
      Component = _this$props.componentClass,
      className = _this$props.className,
      props = _objectWithoutPropertiesLoose(_this$props, ModalTitle_excluded);
    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];
    var classes = getClassSet(bsProps);
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Component, _extends({}, elementProps, {
      className: classnames_default()(className, classes),
      __self: this,
      __source: {
        fileName: ModalTitle_jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }));
  };
  return ModalTitle;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);
ModalTitle_ModalTitle.propTypes = ModalTitle_propTypes;
ModalTitle_ModalTitle.defaultProps = ModalTitle_defaultProps;
/* harmony default export */ var src_ModalTitle = (bootstrapUtils_bsClass('modal-title', ModalTitle_ModalTitle));
// CONCATENATED MODULE: ./src/utils/splitComponentProps.js


function splitComponentProps(props, Component) {
  var _context;
  var componentPropTypes = Component.propTypes;
  var parentProps = {};
  var childProps = {};
  for_each_default()(_context = entries_default()(props)).call(_context, function (_ref) {
    var propName = _ref[0],
      propValue = _ref[1];
    if (componentPropTypes[propName]) {
      parentProps[propName] = propValue;
    } else {
      childProps[propName] = propValue;
    }
  });
  return [parentProps, childProps];
}
// CONCATENATED MODULE: ./src/Modal.js



var Modal_excluded = ["backdrop", "backdropClassName", "animation", "show", "dialogComponentClass", "className", "style", "children", "onEntering", "onExited"];
var Modal_jsxFileName = "/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/Modal.js";





















var src_Modal_propTypes = _extends({}, esm_Modal.propTypes, src_ModalDialog.propTypes, {
  /**
   * Include a backdrop component. Specify 'static' for a backdrop that doesn't
   * trigger an "onHide" when clicked.
   */
  backdrop: prop_types_default.a.oneOf(['static', true, false]),
  /**
   * Add an optional extra class name to .modal-backdrop
   * It could end up looking like class="modal-backdrop foo-modal-backdrop in".
   */
  backdropClassName: prop_types_default.a.string,
  /**
   * Close the modal when escape key is pressed
   */
  keyboard: prop_types_default.a.bool,
  /**
   * Open and close the Modal with a slide and fade animation.
   */
  animation: prop_types_default.a.bool,
  /**
   * A Component type that provides the modal content Markup. This is a useful
   * prop when you want to use your own styles and markup to create a custom
   * modal component.
   */
  dialogComponentClass: elementType_default.a,
  /**
   * When `true` The modal will automatically shift focus to itself when it
   * opens, and replace it to the last focused element when it closes.
   * Generally this should never be set to false as it makes the Modal less
   * accessible to assistive technologies, like screen-readers.
   */
  autoFocus: prop_types_default.a.bool,
  /**
   * When `true` The modal will prevent focus from leaving the Modal while
   * open. Consider leaving the default value here, as it is necessary to make
   * the Modal work well with assistive technologies, such as screen readers.
   */
  enforceFocus: prop_types_default.a.bool,
  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: prop_types_default.a.bool,
  /**
   * When `true` The modal will show itself.
   */
  show: prop_types_default.a.bool,
  /**
   * A callback fired when the header closeButton or non-static backdrop is
   * clicked. Required if either are specified.
   */
  onHide: prop_types_default.a.func,
  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: prop_types_default.a.func,
  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: prop_types_default.a.func,
  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: prop_types_default.a.func,
  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: prop_types_default.a.func,
  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: prop_types_default.a.func,
  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: prop_types_default.a.func,
  /**
   * @private
   */
  container: esm_Modal.propTypes.container
});
var Modal_defaultProps = _extends({}, esm_Modal.defaultProps, {
  animation: true,
  dialogComponentClass: src_ModalDialog
});
var childContextTypes = {
  $bs_modal: prop_types_default.a.shape({
    onHide: prop_types_default.a.func
  })
};

/* eslint-disable no-use-before-define, react/no-multi-comp */
function DialogTransition(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Fade, _extends({}, props, {
    timeout: src_Modal_Modal.TRANSITION_DURATION,
    __self: this,
    __source: {
      fileName: Modal_jsxFileName,
      lineNumber: 138,
      columnNumber: 10
    }
  }));
}
function Modal_BackdropTransition(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Fade, _extends({}, props, {
    timeout: src_Modal_Modal.BACKDROP_TRANSITION_DURATION,
    __self: this,
    __source: {
      fileName: Modal_jsxFileName,
      lineNumber: 142,
      columnNumber: 10
    }
  }));
}

/* eslint-enable no-use-before-define */
var src_Modal_Modal = /*#__PURE__*/function (_React$Component) {
  function Modal(props, context) {
    var _context, _context2, _context3, _context4, _context5;
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    _this.handleDialogBackdropMouseDown = function () {
      _this._waitingForMouseUp = true;
    };
    _this.handleMouseUp = function (ev) {
      var dialogNode = _this.dialogRef.current;
      if (_this._waitingForMouseUp && dialogNode && ev.target === dialogNode) {
        _this._ignoreBackdropClick = true;
      }
      _this._waitingForMouseUp = false;
    };
    _this.handleEntering = instance_bind_default()(_context = _this.handleEntering).call(_context, _this);
    _this.handleExited = instance_bind_default()(_context2 = _this.handleExited).call(_context2, _this);
    _this.handleWindowResize = instance_bind_default()(_context3 = _this.handleWindowResize).call(_context3, _this);
    _this.handleDialogClick = instance_bind_default()(_context4 = _this.handleDialogClick).call(_context4, _this);
    _this.setModalRef = instance_bind_default()(_context5 = _this.setModalRef).call(_context5, _this);
    _this.dialogRef = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createRef();
    _this.state = {
      style: {}
    };
    return _this;
  }
  _inheritsLoose(Modal, _React$Component);
  var _proto = Modal.prototype;
  _proto.getChildContext = function getChildContext() {
    return {
      $bs_modal: {
        onHide: this.props.onHide
      }
    };
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    // Clean up the listener if we need to.
    this.handleExited();
  };
  _proto.setModalRef = function setModalRef(ref) {
    this._modal = ref;
  };
  _proto.handleDialogClick = function handleDialogClick(e) {
    if (this._ignoreBackdropClick || e.target !== e.currentTarget) {
      this._ignoreBackdropClick = false;
      return;
    }
    this.props.onHide();
  };
  _proto.handleEntering = function handleEntering() {
    // FIXME: This should work even when animation is disabled.
    events_default.a.on(window, 'resize', this.handleWindowResize);
    this.updateStyle();
  };
  _proto.handleExited = function handleExited() {
    // FIXME: This should work even when animation is disabled.
    events_default.a.off(window, 'resize', this.handleWindowResize);
  };
  _proto.handleWindowResize = function handleWindowResize() {
    this.updateStyle();
  };
  _proto.updateStyle = function updateStyle() {
    if (!inDOM_default.a) {
      return;
    }
    var dialogNode = this.dialogRef.current;
    if (!dialogNode) {
      return;
    }
    var dialogHeight = dialogNode.scrollHeight;
    var document = ownerDocument_default()(dialogNode);
    var bodyIsOverflowing = isOverflowing(this.props.container || document.body);
    var modalIsOverflowing = dialogHeight > document.documentElement.clientHeight;
    this.setState({
      style: {
        paddingRight: bodyIsOverflowing && !modalIsOverflowing ? scrollbarSize_default()() : undefined,
        paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? scrollbarSize_default()() : undefined
      }
    });
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props,
      backdrop = _this$props.backdrop,
      backdropClassName = _this$props.backdropClassName,
      animation = _this$props.animation,
      show = _this$props.show,
      Dialog = _this$props.dialogComponentClass,
      className = _this$props.className,
      style = _this$props.style,
      children = _this$props.children,
      onEntering = _this$props.onEntering,
      onExited = _this$props.onExited,
      props = _objectWithoutPropertiesLoose(_this$props, Modal_excluded);
    var inClassName = show && !animation && 'in';
    var renderBackdrop = function renderBackdrop(backdropProps) {
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", _extends({}, backdropProps, {
        className: classnames_default()(prefix(props, 'backdrop'), backdropClassName, inClassName),
        __self: _this2,
        __source: {
          fileName: Modal_jsxFileName,
          lineNumber: 266,
          columnNumber: 7
        }
      }));
    };
    var _splitComponentProps = splitComponentProps(props, esm_Modal),
      baseModalProps = _splitComponentProps[0],
      dialogProps = _splitComponentProps[1];
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(esm_Modal, _extends({}, baseModalProps, {
      ref: this.setModalRef,
      show: show,
      containerClassName: prefix(props, 'open'),
      transition: animation ? DialogTransition : undefined,
      backdrop: backdrop,
      backdropTransition: animation ? Modal_BackdropTransition : undefined,
      renderBackdrop: renderBackdrop,
      onEntering: utils_createChainedFunction(onEntering, this.handleEntering),
      onExited: utils_createChainedFunction(onExited, this.handleExited),
      onMouseUp: this.handleMouseUp,
      __self: this,
      __source: {
        fileName: Modal_jsxFileName,
        lineNumber: 279,
        columnNumber: 7
      }
    }), /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Dialog, _extends({}, dialogProps, {
      ref: this.dialogRef,
      style: _extends({}, this.state.style, style),
      className: classnames_default()(className, inClassName),
      onClick: backdrop === true ? this.handleDialogClick : null,
      onMouseDownDialog: this.handleDialogBackdropMouseDown,
      __self: this,
      __source: {
        fileName: Modal_jsxFileName,
        lineNumber: 292,
        columnNumber: 9
      }
    }), children));
  };
  return Modal;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);
src_Modal_Modal.propTypes = src_Modal_propTypes;
src_Modal_Modal.defaultProps = Modal_defaultProps;
src_Modal_Modal.childContextTypes = childContextTypes;
src_Modal_Modal.Body = src_ModalBody;
src_Modal_Modal.Header = src_ModalHeader;
src_Modal_Modal.Title = src_ModalTitle;
src_Modal_Modal.Footer = src_ModalFooter;
src_Modal_Modal.Dialog = src_ModalDialog;
src_Modal_Modal.TRANSITION_DURATION = 300;
src_Modal_Modal.BACKDROP_TRANSITION_DURATION = 150;
/* harmony default export */ var src_Modal = (bootstrapUtils_bsClass('modal', bsSizes([Size.LARGE, Size.SMALL], src_Modal_Modal)));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js
var map = __webpack_require__(82);
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// CONCATENATED MODULE: ./src/utils/ValidComponentChildren.js


// TODO: This module should be ElementChildren, and should use named exports.



/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid components".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @return {object} Object containing the ordered map of results.
 */
function ValidComponentChildren_map(children, func, context) {
  var _context;
  var index = 0;
  return map_default()(_context = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context, children, function (child) {
    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return child;
    }
    return func.call(context, child, index++);
  });
}

/**
 * Iterates through children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for context.
 */
function forEach(children, func, context) {
  var _context2;
  var index = 0;
  for_each_default()(_context2 = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context2, children, function (child) {
    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return;
    }
    func.call(context, child, index++);
  });
}

/**
 * Count the number of "valid components" in the Children container.
 *
 * @param {?*} children Children tree container.
 * @returns {number}
 */
function count(children) {
  var _context3;
  var result = 0;
  for_each_default()(_context3 = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context3, children, function (child) {
    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return;
    }
    ++result;
  });
  return result;
}

/**
 * Finds children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @returns {array} of children that meet the func return statement
 */
function ValidComponentChildren_filter(children, func, context) {
  var _context4;
  var index = 0;
  var result = [];
  for_each_default()(_context4 = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context4, children, function (child) {
    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return;
    }
    if (func.call(context, child, index++)) {
      result.push(child);
    }
  });
  return result;
}
function find(children, func, context) {
  var _context5;
  var index = 0;
  var result;
  for_each_default()(_context5 = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context5, children, function (child) {
    if (result) {
      return;
    }
    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return;
    }
    if (func.call(context, child, index++)) {
      result = child;
    }
  });
  return result;
}
function every(children, func, context) {
  var _context6;
  var index = 0;
  var result = true;
  for_each_default()(_context6 = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context6, children, function (child) {
    if (!result) {
      return;
    }
    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return;
    }
    if (!func.call(context, child, index++)) {
      result = false;
    }
  });
  return result;
}
function some(children, func, context) {
  var _context7;
  var index = 0;
  var result = false;
  for_each_default()(_context7 = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context7, children, function (child) {
    if (result) {
      return;
    }
    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return;
    }
    if (func.call(context, child, index++)) {
      result = true;
    }
  });
  return result;
}
function toArray(children) {
  var _context8;
  var result = [];
  for_each_default()(_context8 = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Children).call(_context8, children, function (child) {
    if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(child)) {
      return;
    }
    result.push(child);
  });
  return result;
}
/* harmony default export */ var ValidComponentChildren = ({
  map: ValidComponentChildren_map,
  forEach: forEach,
  count: count,
  find: find,
  filter: ValidComponentChildren_filter,
  every: every,
  some: some,
  toArray: toArray
});
// CONCATENATED MODULE: ./src/utils/index.js




// CONCATENATED MODULE: ./src/index.js











/***/ })
/******/ ]);
});
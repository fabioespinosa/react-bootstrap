(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrap"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrap"] = factory(root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__12__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 218);
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
  module.exports = __webpack_require__(131)();
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(191);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NATIVE_BIND = __webpack_require__(23);
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
/***/ (function(module, exports) {

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var globalThis = __webpack_require__(8);
var apply = __webpack_require__(98);
var uncurryThis = __webpack_require__(36);
var isCallable = __webpack_require__(9);
var getOwnPropertyDescriptor = __webpack_require__(99).f;
var isForced = __webpack_require__(106);
var path = __webpack_require__(18);
var bind = __webpack_require__(68);
var createNonEnumerableProperty = __webpack_require__(107);
var hasOwn = __webpack_require__(16);
// add debugging info
__webpack_require__(40);
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
/* 8 */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(97)))

/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isCallable = __webpack_require__(9);
module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
module.exports = uncurryThis({}.isPrototypeOf);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _reactIs = __webpack_require__(151);
var _createChainableTypeChecker = __webpack_require__(78);
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var globalThis = __webpack_require__(8);
var path = __webpack_require__(18);
module.exports = function (CONSTRUCTOR, METHOD) {
  var Namespace = path[CONSTRUCTOR + 'Prototype'];
  var pureMethod = Namespace && Namespace[METHOD];
  if (pureMethod) return pureMethod;
  var NativeConstructor = globalThis[CONSTRUCTOR];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  return NativePrototype && NativePrototype[METHOD];
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var globalThis = __webpack_require__(8);
var shared = __webpack_require__(64);
var hasOwn = __webpack_require__(16);
var uid = __webpack_require__(65);
var NATIVE_SYMBOL = __webpack_require__(62);
var USE_SYMBOL_AS_UID = __webpack_require__(61);
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


var requireObjectCoercible = __webpack_require__(31);
var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _activeElement = __webpack_require__(148);
var _activeElement2 = _interopRequireDefault(_activeElement);
var _contains = __webpack_require__(77);
var _contains2 = _interopRequireDefault(_contains);
var _inDOM = __webpack_require__(11);
var _inDOM2 = _interopRequireDefault(_inDOM);
var _propTypes = __webpack_require__(1);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _componentOrElement = __webpack_require__(47);
var _componentOrElement2 = _interopRequireDefault(_componentOrElement);
var _deprecated = __webpack_require__(149);
var _deprecated2 = _interopRequireDefault(_deprecated);
var _elementType = __webpack_require__(15);
var _elementType2 = _interopRequireDefault(_elementType);
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _reactDom = __webpack_require__(12);
var _reactDom2 = _interopRequireDefault(_reactDom);
var _warning = __webpack_require__(153);
var _warning2 = _interopRequireDefault(_warning);
var _ModalManager = __webpack_require__(154);
var _ModalManager2 = _interopRequireDefault(_ModalManager);
var _Portal = __webpack_require__(168);
var _Portal2 = _interopRequireDefault(_Portal);
var _RefHolder = __webpack_require__(170);
var _RefHolder2 = _interopRequireDefault(_RefHolder);
var _addEventListener = __webpack_require__(171);
var _addEventListener2 = _interopRequireDefault(_addEventListener);
var _addFocusListener = __webpack_require__(172);
var _addFocusListener2 = _interopRequireDefault(_addFocusListener);
var _getContainer = __webpack_require__(48);
var _getContainer2 = _interopRequireDefault(_getContainer);
var _ownerDocument = __webpack_require__(49);
var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /* eslint-disable react/prop-types */

var modalManager = new _ModalManager2.default();

/**
 * Love them or hate them, `<Modal/>` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
 * The Modal component renders its `children` node in front of a backdrop component.
 *
 * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
 *
 * - Manages dialog stacking when one-at-a-time just isn't enough.
 * - Creates a backdrop, for disabling interaction below the modal.
 * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
 * - It disables scrolling of the page content while open.
 * - Adds the appropriate ARIA roles are automatically.
 * - Easily pluggable animations via a `<Transition/>` component.
 *
 * Note that, in the same way the backdrop element prevents users from clicking or interacting
 * with the page content underneath the Modal, Screen readers also need to be signaled to not to
 * interact with page content while the Modal is open. To do this, we use a common technique of applying
 * the `aria-hidden='true'` attribute to the non-Modal elements in the Modal `container`. This means that for
 * a Modal to be truly modal, it should have a `container` that is _outside_ your app's
 * React hierarchy (such as the default: document.body).
 */

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);
  function Modal() {
    var _temp, _this, _ret;
    _classCallCheck(this, Modal);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }
  Modal.prototype.omitProps = function omitProps(props, propTypes) {
    var keys = Object.keys(props);
    var newProps = {};
    keys.map(function (prop) {
      if (!Object.prototype.hasOwnProperty.call(propTypes, prop)) {
        newProps[prop] = props[prop];
      }
    });
    return newProps;
  };
  Modal.prototype.render = function render() {
    var _props = this.props,
      show = _props.show,
      container = _props.container,
      children = _props.children,
      Transition = _props.transition,
      backdrop = _props.backdrop,
      className = _props.className,
      style = _props.style,
      onExit = _props.onExit,
      onExiting = _props.onExiting,
      onEnter = _props.onEnter,
      onEntering = _props.onEntering,
      onEntered = _props.onEntered;
    var dialog = _react2.default.Children.only(children);
    var filteredProps = this.omitProps(this.props, Modal.propTypes);
    var mountModal = show || Transition && !this.state.exited;
    if (!mountModal) {
      return null;
    }
    var _dialog$props = dialog.props,
      role = _dialog$props.role,
      tabIndex = _dialog$props.tabIndex;
    if (role === undefined || tabIndex === undefined) {
      dialog = (0, _react.cloneElement)(dialog, {
        role: role === undefined ? 'document' : role,
        tabIndex: tabIndex == null ? '-1' : tabIndex
      });
    }
    if (Transition) {
      dialog = _react2.default.createElement(Transition, {
        appear: true,
        unmountOnExit: true,
        'in': show,
        onExit: onExit,
        onExiting: onExiting,
        onExited: this.handleHidden,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered
      }, dialog);
    }
    return _react2.default.createElement(_Portal2.default, {
      ref: this.setMountNode,
      container: container,
      onRendered: this.onPortalRendered
    }, _react2.default.createElement('div', _extends({
      ref: this.setModalNodeRef,
      role: role || 'dialog'
    }, filteredProps, {
      style: style,
      className: className
    }), backdrop && this.renderBackdrop(), _react2.default.createElement(_RefHolder2.default, {
      ref: this.setDialogRef
    }, dialog)));
  };
  Modal.prototype.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({
        exited: false
      });
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      this.setState({
        exited: true
      });
    }
  };
  Modal.prototype.UNSAFE_componentWillUpdate = function UNSAFE_componentWillUpdate(nextProps) {
    if (!this.props.show && nextProps.show) {
      this.checkForFocus();
    }
  };
  Modal.prototype.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    if (this.props.show) {
      this.onShow();
    }
  };
  Modal.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var transition = this.props.transition;
    if (prevProps.show && !this.props.show && !transition) {
      // Otherwise handleHidden will call this.
      this.onHide();
    } else if (!prevProps.show && this.props.show) {
      this.onShow();
    }
  };
  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
    var _props2 = this.props,
      show = _props2.show,
      transition = _props2.transition;
    this._isMounted = false;
    if (show || transition && !this.state.exited) {
      this.onHide();
    }
  };
  Modal.prototype.autoFocus = function autoFocus() {
    if (!this.props.autoFocus) {
      return;
    }
    var dialogElement = this.getDialogElement();
    var currentActiveElement = (0, _activeElement2.default)((0, _ownerDocument2.default)(this));
    if (dialogElement && !(0, _contains2.default)(dialogElement, currentActiveElement)) {
      this.lastFocus = currentActiveElement;
      if (!dialogElement.hasAttribute('tabIndex')) {
        (0, _warning2.default)(false, 'The modal content node does not accept focus. For the benefit of ' + 'assistive technologies, the tabIndex of the node is being set ' + 'to "-1".');
        dialogElement.setAttribute('tabIndex', -1);
      }
      dialogElement.focus();
    }
  };
  Modal.prototype.restoreLastFocus = function restoreLastFocus() {
    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
    if (this.lastFocus && this.lastFocus.focus) {
      this.lastFocus.focus();
      this.lastFocus = null;
    }
  };
  Modal.prototype.getDialogElement = function getDialogElement() {
    return _reactDom2.default.findDOMNode(this.dialog);
  };
  Modal.prototype.isTopModal = function isTopModal() {
    return this.props.manager.isTopModal(this);
  };
  return Modal;
}(_react2.default.Component);
Modal.propTypes = _extends({}, _Portal2.default.propTypes, {
  /**
   * Set the visibility of the Modal
   */
  show: _propTypes2.default.bool,
  /**
   * A Node, Component instance, or function that returns either. The Modal is appended to it's container element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),
  /**
   * A callback fired when the Modal is opening.
   */
  onShow: _propTypes2.default.func,
  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: _propTypes2.default.func,
  /**
   * Include a backdrop component.
   */
  backdrop: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['static'])]),
  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: _propTypes2.default.func,
  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   */
  onEscapeKeyDown: _propTypes2.default.func,
  /**
   * Support for this function will be deprecated. Please use `onEscapeKeyDown` instead
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   * @deprecated
   */
  onEscapeKeyUp: (0, _deprecated2.default)(_propTypes2.default.func, 'Please use onEscapeKeyDown instead for consistency'),
  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: _propTypes2.default.func,
  /**
   * A style object for the backdrop component.
   */
  backdropStyle: _propTypes2.default.object,
  /**
   * A css class or classes for the backdrop component.
   */
  backdropClassName: _propTypes2.default.string,
  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: _propTypes2.default.string,
  /**
   * Close the modal when escape key is pressed
   */
  keyboard: _propTypes2.default.bool,
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: _elementType2.default,
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: _elementType2.default,
  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: _propTypes2.default.bool,
  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: _propTypes2.default.bool,
  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: _propTypes2.default.bool,
  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: _propTypes2.default.func,
  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: _propTypes2.default.func,
  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: _propTypes2.default.func,
  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: _propTypes2.default.object.isRequired
});
Modal.defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  onHide: function onHide() {},
  manager: modalManager,
  renderBackdrop: function renderBackdrop(props) {
    return _react2.default.createElement('div', props);
  }
};
var _initialiseProps = function _initialiseProps() {
  var _this2 = this;
  this.state = {
    exited: !this.props.show
  };
  this.renderBackdrop = function () {
    var _props3 = _this2.props,
      backdropStyle = _props3.backdropStyle,
      backdropClassName = _props3.backdropClassName,
      renderBackdrop = _props3.renderBackdrop,
      Transition = _props3.backdropTransition;
    var backdropRef = function backdropRef(ref) {
      return _this2.backdrop = ref;
    };
    var backdrop = renderBackdrop({
      ref: backdropRef,
      style: backdropStyle,
      className: backdropClassName,
      onClick: _this2.handleBackdropClick
    });
    if (Transition) {
      backdrop = _react2.default.createElement(Transition, {
        appear: true,
        'in': _this2.props.show
      }, backdrop);
    }
    return backdrop;
  };
  this.onPortalRendered = function () {
    _this2.autoFocus();
    if (_this2.props.onShow) {
      _this2.props.onShow();
    }
  };
  this.onShow = function () {
    var doc = (0, _ownerDocument2.default)(_this2);
    var container = (0, _getContainer2.default)(_this2.props.container, doc.body);
    _this2.props.manager.add(_this2, container, _this2.props.containerClassName);
    _this2._onDocumentKeydownListener = (0, _addEventListener2.default)(doc, 'keydown', _this2.handleDocumentKeyDown);
    _this2._onDocumentKeyupListener = (0, _addEventListener2.default)(doc, 'keyup', _this2.handleDocumentKeyUp);
    _this2._onFocusinListener = (0, _addFocusListener2.default)(_this2.enforceFocus);
  };
  this.onHide = function () {
    _this2.props.manager.remove(_this2);
    _this2._onDocumentKeydownListener.remove();
    _this2._onDocumentKeyupListener.remove();
    _this2._onFocusinListener.remove();
    if (_this2.props.restoreFocus) {
      _this2.restoreLastFocus();
    }
  };
  this.setMountNode = function (ref) {
    _this2.mountNode = ref ? ref.getMountNode() : ref;
  };
  this.setModalNodeRef = function (ref) {
    _this2.modalNode = ref;
  };
  this.setDialogRef = function (ref) {
    _this2.dialog = ref;
  };
  this.handleHidden = function () {
    _this2.setState({
      exited: true
    });
    _this2.onHide();
    if (_this2.props.onExited) {
      var _props4;
      (_props4 = _this2.props).onExited.apply(_props4, arguments);
    }
  };
  this.handleBackdropClick = function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    if (_this2.props.onBackdropClick) {
      _this2.props.onBackdropClick(e);
    }
    if (_this2.props.backdrop === true) {
      _this2.props.onHide();
    }
  };
  this.handleDocumentKeyDown = function (e) {
    if (_this2.props.keyboard && e.keyCode === 27 && _this2.isTopModal()) {
      if (_this2.props.onEscapeKeyDown) {
        _this2.props.onEscapeKeyDown(e);
      }
      _this2.props.onHide();
    }
  };
  this.handleDocumentKeyUp = function (e) {
    if (_this2.props.keyboard && e.keyCode === 27 && _this2.isTopModal()) {
      if (_this2.props.onEscapeKeyUp) {
        _this2.props.onEscapeKeyUp(e);
      }
    }
  };
  this.checkForFocus = function () {
    if (_inDOM2.default) {
      _this2.lastFocus = (0, _activeElement2.default)();
    }
  };
  this.enforceFocus = function () {
    if (!_this2.props.enforceFocus || !_this2._isMounted || !_this2.isTopModal()) {
      return;
    }
    var dialogElement = _this2.getDialogElement();
    var currentActiveElement = (0, _activeElement2.default)((0, _ownerDocument2.default)(_this2));
    if (dialogElement && !(0, _contains2.default)(dialogElement, currentActiveElement)) {
      dialogElement.focus();
    }
  };
};
Modal.Manager = _ModalManager2.default;
exports.default = Modal;
module.exports = exports['default'];

/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);
module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(30);
var requireObjectCoercible = __webpack_require__(31);
module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isCallable = __webpack_require__(9);
var tryToString = __webpack_require__(102);
var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = ownerDocument;
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
module.exports = exports["default"];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(197);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NATIVE_BIND = __webpack_require__(23);
var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var fails = __webpack_require__(5);
var classof = __webpack_require__(24);
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isNullOrUndefined = __webpack_require__(58);
var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var globalThis = __webpack_require__(8);
var userAgent = __webpack_require__(63);
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toLength = __webpack_require__(129);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(112);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);
exports.__esModule = true;
exports.default = scrollbarSize;
var _inDOM = _interopRequireDefault(__webpack_require__(11));
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classofRaw = __webpack_require__(24);
var uncurryThis = __webpack_require__(3);
module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

/***/ }),
/* 37 */
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
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(18);
var globalThis = __webpack_require__(8);
var isCallable = __webpack_require__(9);
var aFunction = function (variable) {
  return isCallable(variable) ? variable : undefined;
};
module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(globalThis[namespace]) : path[namespace] && path[namespace][method] || globalThis[namespace] && globalThis[namespace][method];
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IS_PURE = __webpack_require__(104);
var globalThis = __webpack_require__(8);
var defineGlobalProperty = __webpack_require__(105);
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(66);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(69);
var anObject = __webpack_require__(42);
var toPropertyKey = __webpack_require__(59);
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(13);
var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var internalObjectKeys = __webpack_require__(126);
var enumBugKeys = __webpack_require__(74);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);
exports.__esModule = true;
exports.default = void 0;
var _inDOM = _interopRequireDefault(__webpack_require__(11));
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);
exports.__esModule = true;
exports.default = void 0;
var _inDOM = _interopRequireDefault(__webpack_require__(11));
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _createChainableTypeChecker = __webpack_require__(78);
var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function validate(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
  }
  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
  }
  return null;
}
exports.default = (0, _createChainableTypeChecker2.default)(validate);
module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getContainer;
var _reactDom = __webpack_require__(12);
var _reactDom2 = _interopRequireDefault(_reactDom);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom2.default.findDOMNode(container) || defaultContainer;
}
module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = function (componentOrElement) {
  return (0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(componentOrElement));
};
var _reactDom = __webpack_require__(12);
var _reactDom2 = _interopRequireDefault(_reactDom);
var _ownerDocument = __webpack_require__(27);
var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TO_STRING_TAG_SUPPORT = __webpack_require__(181);
var isCallable = __webpack_require__(9);
var classofRaw = __webpack_require__(24);
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(5);
var wellKnownSymbol = __webpack_require__(19);
var V8_VERSION = __webpack_require__(32);
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(68);
var uncurryThis = __webpack_require__(3);
var IndexedObject = __webpack_require__(30);
var toObject = __webpack_require__(20);
var lengthOfArrayLike = __webpack_require__(33);
var arraySpeciesCreate = __webpack_require__(82);
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isOverflowing;
var _isWindow = __webpack_require__(166);
var _isWindow2 = _interopRequireDefault(_isWindow);
var _ownerDocument = __webpack_require__(27);
var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}
function bodyIsOverflowing(node) {
  var doc = (0, _ownerDocument2.default)(node);
  var win = (0, _isWindow2.default)(doc);
  var fullWidth = win.innerWidth;

  // Support: ie8, no innerWidth
  if (!fullWidth) {
    var documentElementRect = doc.documentElement.getBoundingClientRect();
    fullWidth = documentElementRect.right - Math.abs(documentElementRect.left);
  }
  return doc.body.clientWidth < fullWidth;
}
function isOverflowing(container) {
  var win = (0, _isWindow2.default)(container);
  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(92);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(133);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);
exports.__esModule = true;
exports.default = void 0;
var _on = _interopRequireDefault(__webpack_require__(45));
exports.on = _on.default;
var _off = _interopRequireDefault(__webpack_require__(46));
exports.off = _off.default;
var _filter = _interopRequireDefault(__webpack_require__(145));
exports.filter = _filter.default;
var _listen = _interopRequireDefault(__webpack_require__(147));
exports.listen = _listen.default;
var _default = {
  on: _on.default,
  off: _off.default,
  filter: _filter.default,
  listen: _listen.default
};
exports.default = _default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toPrimitive = __webpack_require__(100);
var isSymbol = __webpack_require__(60);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBuiltIn = __webpack_require__(39);
var isCallable = __webpack_require__(9);
var isPrototypeOf = __webpack_require__(14);
var USE_SYMBOL_AS_UID = __webpack_require__(61);
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(62);
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(32);
var fails = __webpack_require__(5);
var globalThis = __webpack_require__(8);
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var globalThis = __webpack_require__(8);
var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;
module.exports = userAgent ? String(userAgent) : '';

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(40);
module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};

/***/ }),
/* 65 */
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(10);
var fails = __webpack_require__(5);
var createElement = __webpack_require__(67);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var globalThis = __webpack_require__(8);
var isObject = __webpack_require__(13);
var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(36);
var aCallable = __webpack_require__(26);
var NATIVE_BIND = __webpack_require__(23);
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(10);
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(114);
module.exports = parent;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toIndexedObject = __webpack_require__(25);
var toAbsoluteIndex = __webpack_require__(127);
var lengthOfArrayLike = __webpack_require__(33);

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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trunc = __webpack_require__(128);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shared = __webpack_require__(64);
var uid = __webpack_require__(65);
var keys = shared('keys');
module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(142);
module.exports = parent;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);
exports.__esModule = true;
exports.default = void 0;
var _inDOM = _interopRequireDefault(__webpack_require__(11));
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
/* 78 */
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);
exports.__esModule = true;
exports.default = camelizeStyleName;
var _camelize = _interopRequireDefault(__webpack_require__(159));

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
 */
var msPattern = /^-ms-/;
function camelizeStyleName(string) {
  return (0, _camelize.default)(string.replace(msPattern, 'ms-'));
}
module.exports = exports["default"];

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(24);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arraySpeciesConstructor = __webpack_require__(179);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(119);

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(140);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(173);

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(183);

/***/ }),
/* 88 */
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(203);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(210);

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(214);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(93);
module.exports = parent;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(94);
module.exports = parent;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(95);
module.exports = parent;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(96);
var path = __webpack_require__(18);
module.exports = path.Object.setPrototypeOf;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(7);
var setPrototypeOf = __webpack_require__(108);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({
  target: 'Object',
  stat: true
}, {
  setPrototypeOf: setPrototypeOf
});

/***/ }),
/* 97 */
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NATIVE_BIND = __webpack_require__(23);
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(10);
var call = __webpack_require__(29);
var propertyIsEnumerableModule = __webpack_require__(37);
var createPropertyDescriptor = __webpack_require__(38);
var toIndexedObject = __webpack_require__(25);
var toPropertyKey = __webpack_require__(59);
var hasOwn = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(66);

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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var call = __webpack_require__(29);
var isObject = __webpack_require__(13);
var isSymbol = __webpack_require__(60);
var getMethod = __webpack_require__(101);
var ordinaryToPrimitive = __webpack_require__(103);
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aCallable = __webpack_require__(26);
var isNullOrUndefined = __webpack_require__(58);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};

/***/ }),
/* 102 */
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var call = __webpack_require__(29);
var isCallable = __webpack_require__(9);
var isObject = __webpack_require__(13);
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = true;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var globalThis = __webpack_require__(8);

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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(5);
var isCallable = __webpack_require__(9);
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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(10);
var definePropertyModule = __webpack_require__(41);
var createPropertyDescriptor = __webpack_require__(38);
module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(109);
var isObject = __webpack_require__(13);
var requireObjectCoercible = __webpack_require__(31);
var aPossiblePrototype = __webpack_require__(110);

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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var aCallable = __webpack_require__(26);
module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) {/* empty */}
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPossiblePrototype = __webpack_require__(111);
var $String = String;
var $TypeError = TypeError;
module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(13);
module.exports = function (argument) {
  return isObject(argument) || argument === null;
};

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


var parent = __webpack_require__(70);
module.exports = parent;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototypeOf = __webpack_require__(14);
var method = __webpack_require__(115);
var FunctionPrototype = Function.prototype;
module.exports = function (it) {
  var own = it.bind;
  return it === FunctionPrototype || isPrototypeOf(FunctionPrototype, it) && own === FunctionPrototype.bind ? method : own;
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(116);
var getBuiltInPrototypeMethod = __webpack_require__(17);
module.exports = getBuiltInPrototypeMethod('Function', 'bind');

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7);
var bind = __webpack_require__(117);

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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var aCallable = __webpack_require__(26);
var isObject = __webpack_require__(13);
var hasOwn = __webpack_require__(16);
var arraySlice = __webpack_require__(118);
var NATIVE_BIND = __webpack_require__(23);
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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
module.exports = uncurryThis([].slice);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(120);
module.exports = parent;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(121);
module.exports = parent;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(122);
module.exports = parent;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(123);
var path = __webpack_require__(18);
var Object = path.Object;
module.exports = function create(P, D) {
  return Object.create(P, D);
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(10);
var create = __webpack_require__(124);

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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(42);
var definePropertiesModule = __webpack_require__(125);
var enumBugKeys = __webpack_require__(74);
var hiddenKeys = __webpack_require__(73);
var html = __webpack_require__(130);
var documentCreateElement = __webpack_require__(67);
var sharedKey = __webpack_require__(75);
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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(10);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(69);
var definePropertyModule = __webpack_require__(41);
var anObject = __webpack_require__(42);
var toIndexedObject = __webpack_require__(25);
var objectKeys = __webpack_require__(43);

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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var hasOwn = __webpack_require__(16);
var toIndexedObject = __webpack_require__(25);
var indexOf = __webpack_require__(71).indexOf;
var hiddenKeys = __webpack_require__(73);
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toIntegerOrInfinity = __webpack_require__(72);
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
/* 128 */
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
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toIntegerOrInfinity = __webpack_require__(72);
var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBuiltIn = __webpack_require__(39);
module.exports = getBuiltIn('document', 'documentElement');

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(132);
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
/* 132 */
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(134);
module.exports = parent;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(135);
module.exports = parent;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(136);
module.exports = parent;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(137);
var path = __webpack_require__(18);
module.exports = path.Object.assign;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(7);
var assign = __webpack_require__(138);

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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(10);
var uncurryThis = __webpack_require__(3);
var call = __webpack_require__(29);
var fails = __webpack_require__(5);
var objectKeys = __webpack_require__(43);
var getOwnPropertySymbolsModule = __webpack_require__(139);
var propertyIsEnumerableModule = __webpack_require__(37);
var toObject = __webpack_require__(20);
var IndexedObject = __webpack_require__(30);

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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(141);
module.exports = parent;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(76);
module.exports = parent;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototypeOf = __webpack_require__(14);
var method = __webpack_require__(143);
var ArrayPrototype = Array.prototype;
module.exports = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.indexOf ? method : own;
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(144);
var getBuiltInPrototypeMethod = __webpack_require__(17);
module.exports = getBuiltInPrototypeMethod('Array', 'indexOf');

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(7);
var uncurryThis = __webpack_require__(36);
var $indexOf = __webpack_require__(71).indexOf;
var arrayMethodIsStrict = __webpack_require__(44);
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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);
exports.__esModule = true;
exports.default = filterEvents;
var _contains = _interopRequireDefault(__webpack_require__(77));
var _querySelectorAll = _interopRequireDefault(__webpack_require__(146));
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
/* 146 */
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
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);
exports.__esModule = true;
exports.default = void 0;
var _inDOM = _interopRequireDefault(__webpack_require__(11));
var _on = _interopRequireDefault(__webpack_require__(45));
var _off = _interopRequireDefault(__webpack_require__(46));
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
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);
exports.__esModule = true;
exports.default = activeElement;
var _ownerDocument = _interopRequireDefault(__webpack_require__(27));
function activeElement(doc) {
  if (doc === void 0) {
    doc = (0, _ownerDocument.default)();
  }
  try {
    return doc.activeElement;
  } catch (e) {
    /* ie throws if no active element */
  }
}
module.exports = exports["default"];

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deprecated;
var _warning = __webpack_require__(150);
var _warning2 = _interopRequireDefault(_warning);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var warned = {};
function deprecated(validator, reason) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;
    if (props[propName] != null) {
      var messageKey = componentName + '.' + propName;
      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));
      warned[messageKey] = true;
    }
    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }
    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}

/* eslint-disable no-underscore-dangle */
function _resetWarned() {
  warned = {};
}
deprecated._resetWarned = _resetWarned;
/* eslint-enable no-underscore-dangle */

module.exports = exports['default'];

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var __DEV__ = "production" !== 'production';
var warning = function () {};
if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
  warning = function (condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}
module.exports = warning;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(152);
} else {}

/***/ }),
/* 152 */
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
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var warning = function () {};
if (false) {}
module.exports = warning;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _class = __webpack_require__(155);
var _class2 = _interopRequireDefault(_class);
var _style = __webpack_require__(158);
var _style2 = _interopRequireDefault(_style);
var _scrollbarSize = __webpack_require__(35);
var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);
var _isOverflowing = __webpack_require__(53);
var _isOverflowing2 = _interopRequireDefault(_isOverflowing);
var _manageAriaHidden = __webpack_require__(167);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }
  });
  return idx;
}
function findContainer(data, modal) {
  return findIndexOf(data, function (d) {
    return d.modals.indexOf(modal) !== -1;
  });
}
function setContainerStyle(state, container) {
  var style = {
    overflow: 'hidden'
  };

  // we are only interested in the actual `style` here
  // becasue we will override it
  state.style = {
    overflow: container.style.overflow,
    paddingRight: container.style.paddingRight
  };
  if (state.overflowing) {
    // use computed style, here to get the real padding
    // to add our scrollbar width
    style.paddingRight = parseInt((0, _style2.default)(container, 'paddingRight') || 0, 10) + (0, _scrollbarSize2.default)() + 'px';
  }
  (0, _style2.default)(container, style);
}
function removeContainerStyle(_ref, container) {
  var style = _ref.style;
  Object.keys(style).forEach(function (key) {
    return container.style[key] = style[key];
  });
}
/**
 * Proper state managment for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */

var ModalManager = function ModalManager() {
  var _this = this;
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref2$hideSiblingNode = _ref2.hideSiblingNodes,
    hideSiblingNodes = _ref2$hideSiblingNode === undefined ? true : _ref2$hideSiblingNode,
    _ref2$handleContainer = _ref2.handleContainerOverflow,
    handleContainerOverflow = _ref2$handleContainer === undefined ? true : _ref2$handleContainer;
  _classCallCheck(this, ModalManager);
  this.add = function (modal, container, className) {
    var modalIdx = _this.modals.indexOf(modal);
    var containerIdx = _this.containers.indexOf(container);
    if (modalIdx !== -1) {
      return modalIdx;
    }
    modalIdx = _this.modals.length;
    _this.modals.push(modal);
    if (_this.hideSiblingNodes) {
      (0, _manageAriaHidden.hideSiblings)(container, modal.modalNode);
    }
    if (containerIdx !== -1) {
      _this.data[containerIdx].modals.push(modal);
      return modalIdx;
    }
    var data = {
      modals: [modal],
      //right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],
      overflowing: (0, _isOverflowing2.default)(container)
    };
    if (_this.handleContainerOverflow) {
      setContainerStyle(data, container);
    }
    data.classes.forEach(_class2.default.addClass.bind(null, container));
    _this.containers.push(container);
    _this.data.push(data);
    return modalIdx;
  };
  this.remove = function (modal) {
    var modalIdx = _this.modals.indexOf(modal);
    if (modalIdx === -1) {
      return;
    }
    var containerIdx = findContainer(_this.data, modal);
    var data = _this.data[containerIdx];
    var container = _this.containers[containerIdx];
    data.modals.splice(data.modals.indexOf(modal), 1);
    _this.modals.splice(modalIdx, 1);

    // if that was the last modal in a container,
    // clean up the container
    if (data.modals.length === 0) {
      data.classes.forEach(_class2.default.removeClass.bind(null, container));
      if (_this.handleContainerOverflow) {
        removeContainerStyle(data, container);
      }
      if (_this.hideSiblingNodes) {
        (0, _manageAriaHidden.showSiblings)(container, modal.modalNode);
      }
      _this.containers.splice(containerIdx, 1);
      _this.data.splice(containerIdx, 1);
    } else if (_this.hideSiblingNodes) {
      //otherwise make sure the next top modal is visible to a SR
      (0, _manageAriaHidden.ariaHidden)(false, data.modals[data.modals.length - 1].modalNode);
    }
  };
  this.isTopModal = function (modal) {
    return !!_this.modals.length && _this.modals[_this.modals.length - 1] === modal;
  };
  this.hideSiblingNodes = hideSiblingNodes;
  this.handleContainerOverflow = handleContainerOverflow;
  this.modals = [];
  this.containers = [];
  this.data = [];
};
exports.default = ModalManager;
module.exports = exports['default'];

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);
exports.__esModule = true;
exports.default = void 0;
var _addClass = _interopRequireDefault(__webpack_require__(156));
exports.addClass = _addClass.default;
var _removeClass = _interopRequireDefault(__webpack_require__(157));
exports.removeClass = _removeClass.default;
var _hasClass = _interopRequireDefault(__webpack_require__(79));
exports.hasClass = _hasClass.default;
var _default = {
  addClass: _addClass.default,
  removeClass: _removeClass.default,
  hasClass: _hasClass.default
};
exports.default = _default;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);
exports.__esModule = true;
exports.default = addClass;
var _hasClass = _interopRequireDefault(__webpack_require__(79));
function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}
module.exports = exports["default"];

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);
exports.__esModule = true;
exports.default = style;
var _camelizeStyle = _interopRequireDefault(__webpack_require__(80));
var _hyphenateStyle = _interopRequireDefault(__webpack_require__(160));
var _getComputedStyle2 = _interopRequireDefault(__webpack_require__(162));
var _removeStyle = _interopRequireDefault(__webpack_require__(163));
var _properties = __webpack_require__(164);
var _isTransform = _interopRequireDefault(__webpack_require__(165));
function style(node, property, value) {
  var css = '';
  var transforms = '';
  var props = property;
  if (typeof property === 'string') {
    if (value === undefined) {
      return node.style[(0, _camelizeStyle.default)(property)] || (0, _getComputedStyle2.default)(node).getPropertyValue((0, _hyphenateStyle.default)(property));
    } else {
      (props = {})[property] = value;
    }
  }
  Object.keys(props).forEach(function (key) {
    var value = props[key];
    if (!value && value !== 0) {
      (0, _removeStyle.default)(node, (0, _hyphenateStyle.default)(key));
    } else if ((0, _isTransform.default)(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += (0, _hyphenateStyle.default)(key) + ": " + value + ";";
    }
  });
  if (transforms) {
    css += _properties.transform + ": " + transforms + ";";
  }
  node.style.cssText += ';' + css;
}
module.exports = exports["default"];

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = camelize;
var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}
module.exports = exports["default"];

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);
exports.__esModule = true;
exports.default = hyphenateStyleName;
var _hyphenate = _interopRequireDefault(__webpack_require__(161));

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return (0, _hyphenate.default)(string).replace(msPattern, '-ms-');
}
module.exports = exports["default"];

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hyphenate;
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
module.exports = exports["default"];

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);
exports.__esModule = true;
exports.default = _getComputedStyle;
var _camelizeStyle = _interopRequireDefault(__webpack_require__(80));
var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;
  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;
      prop = (0, _camelizeStyle.default)(prop);
      if (prop == 'float') prop = 'styleFloat';
      var current = node.currentStyle[prop] || null;
      if (current == null && style && style[prop]) current = style[prop];
      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left; // Put in the new values to get a computed value out

        if (rsLeft) runStyle.left = node.currentStyle.left;
        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px'; // Revert the changed values

        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }
      return current;
    }
  };
}
module.exports = exports["default"];

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = removeStyle;
function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
}
module.exports = exports["default"];

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(6);
exports.__esModule = true;
exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;
var _inDOM = _interopRequireDefault(__webpack_require__(11));
var transform = 'transform';
exports.transform = transform;
var prefix, transitionEnd, animationEnd;
exports.animationEnd = animationEnd;
exports.transitionEnd = transitionEnd;
var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
exports.transitionDelay = transitionDelay;
exports.transitionTiming = transitionTiming;
exports.transitionDuration = transitionDuration;
exports.transitionProperty = transitionProperty;
var animationName, animationDuration, animationTiming, animationDelay;
exports.animationDelay = animationDelay;
exports.animationTiming = animationTiming;
exports.animationDuration = animationDuration;
exports.animationName = animationName;
if (_inDOM.default) {
  var _getTransitionPropert = getTransitionProperties();
  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
  exports.transform = transform = prefix + "-" + transform;
  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
  exports.animationName = animationName = prefix + "-animation-name";
  exports.animationDuration = animationDuration = prefix + "-animation-duration";
  exports.animationTiming = animationTiming = prefix + "-animation-delay";
  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
}
var _default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};
exports.default = _default;
function getTransitionProperties() {
  var style = document.createElement('div').style;
  var vendorMap = {
    O: function O(e) {
      return "o" + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return "webkit" + e;
    },
    ms: function ms(e) {
      return "MS" + e;
    }
  };
  var vendors = Object.keys(vendorMap);
  var transitionEnd, animationEnd;
  var prefix = '';
  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];
    if (vendor + "TransitionProperty" in style) {
      prefix = "-" + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }
  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
  style = null;
  return {
    animationEnd: animationEnd,
    transitionEnd: transitionEnd,
    prefix: prefix
  };
}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(property) {
  return !!(property && supportedTransforms.test(property));
}
module.exports = exports["default"];

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getWindow;
function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}
module.exports = exports["default"];

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ariaHidden = ariaHidden;
exports.hideSiblings = hideSiblings;
exports.showSiblings = showSiblings;
var BLACKLIST = ['template', 'script', 'style'];
var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType,
    tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};
var siblings = function siblings(container, mount, cb) {
  mount = [].concat(mount);
  [].forEach.call(container.children, function (node) {
    if (mount.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};
function ariaHidden(show, node) {
  if (!node) {
    return;
  }
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}
function hideSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(true, node);
  });
}
function showSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(false, node);
  });
}

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _inDOM = __webpack_require__(11);
var _inDOM2 = _interopRequireDefault(_inDOM);
var _propTypes = __webpack_require__(1);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _componentOrElement = __webpack_require__(47);
var _componentOrElement2 = _interopRequireDefault(_componentOrElement);
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _reactDom = __webpack_require__(12);
var _reactDom2 = _interopRequireDefault(_reactDom);
var _getContainer = __webpack_require__(48);
var _getContainer2 = _interopRequireDefault(_getContainer);
var _ownerDocument = __webpack_require__(49);
var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
var _LegacyPortal = __webpack_require__(169);
var _LegacyPortal2 = _interopRequireDefault(_LegacyPortal);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */
var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);
  function Portal() {
    var _temp, _this, _ret;
    _classCallCheck(this, Portal);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.getMountNode = function () {
      return _this._portalContainerNode;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  Portal.prototype.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    if (!_inDOM2.default) {
      return;
    }
    var container = this.props.container;
    if (typeof container === 'function') {
      container = container();
    }
    if (container && !_reactDom2.default.findDOMNode(container)) {
      // The container is a React component that has not yet been rendered.
      // Don't set the container node yet.
      return;
    }
    this.setContainer(container);
  };
  Portal.prototype.componentDidMount = function componentDidMount() {
    if (!this._portalContainerNode) {
      this.setContainer(this.props.container);
      this.forceUpdate(this.props.onRendered);
    } else if (this.props.onRendered) {
      this.props.onRendered();
    }
  };
  Portal.prototype.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.container !== this.props.container) {
      this.setContainer(nextProps.container);
    }
  };
  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    this._portalContainerNode = null;
  };
  Portal.prototype.setContainer = function setContainer(container) {
    this._portalContainerNode = (0, _getContainer2.default)(container, (0, _ownerDocument2.default)(this).body);
  };
  Portal.prototype.render = function render() {
    return this.props.children && this._portalContainerNode ? _reactDom2.default.createPortal(this.props.children, this._portalContainerNode) : null;
  };
  return Portal;
}(_react2.default.Component);
Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),
  onRendered: _propTypes2.default.func
};
exports.default = _reactDom2.default.createPortal ? Portal : _LegacyPortal2.default;
module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _propTypes = __webpack_require__(1);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _componentOrElement = __webpack_require__(47);
var _componentOrElement2 = _interopRequireDefault(_componentOrElement);
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
var _reactDom = __webpack_require__(12);
var _reactDom2 = _interopRequireDefault(_reactDom);
var _getContainer = __webpack_require__(48);
var _getContainer2 = _interopRequireDefault(_getContainer);
var _ownerDocument = __webpack_require__(49);
var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */
var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);
  function Portal() {
    var _temp, _this, _ret;
    _classCallCheck(this, Portal);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._mountOverlayTarget = function () {
      if (!_this._overlayTarget) {
        _this._overlayTarget = document.createElement('div');
        _this._portalContainerNode = (0, _getContainer2.default)(_this.props.container, (0, _ownerDocument2.default)(_this).body);
        _this._portalContainerNode.appendChild(_this._overlayTarget);
      }
    }, _this._unmountOverlayTarget = function () {
      if (_this._overlayTarget) {
        _this._portalContainerNode.removeChild(_this._overlayTarget);
        _this._overlayTarget = null;
      }
      _this._portalContainerNode = null;
    }, _this._renderOverlay = function () {
      var overlay = !_this.props.children ? null : _react2.default.Children.only(_this.props.children);

      // Save reference for future access.
      if (overlay !== null) {
        _this._mountOverlayTarget();
        var initialRender = !_this._overlayInstance;
        _this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(_this, overlay, _this._overlayTarget, function () {
          if (initialRender && _this.props.onRendered) {
            _this.props.onRendered();
          }
        });
      } else {
        // Unrender if the component is null for transitions to null
        _this._unrenderOverlay();
        _this._unmountOverlayTarget();
      }
    }, _this._unrenderOverlay = function () {
      if (_this._overlayTarget) {
        _reactDom2.default.unmountComponentAtNode(_this._overlayTarget);
        _this._overlayInstance = null;
      }
    }, _this.getMountNode = function () {
      return _this._overlayTarget;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  Portal.prototype.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this._renderOverlay();
  };
  Portal.prototype.componentDidUpdate = function componentDidUpdate() {
    this._renderOverlay();
  };
  Portal.prototype.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (this._overlayTarget && nextProps.container !== this.props.container) {
      this._portalContainerNode.removeChild(this._overlayTarget);
      this._portalContainerNode = (0, _getContainer2.default)(nextProps.container, (0, _ownerDocument2.default)(this).body);
      this._portalContainerNode.appendChild(this._overlayTarget);
    }
  };
  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
    this._unrenderOverlay();
    this._unmountOverlayTarget();
  };
  Portal.prototype.render = function render() {
    return null;
  };
  return Portal;
}(_react2.default.Component);
Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),
  onRendered: _propTypes2.default.func
};
exports.default = Portal;
module.exports = exports['default'];

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _propTypes = __webpack_require__(1);
var _propTypes2 = _interopRequireDefault(_propTypes);
var _react = __webpack_require__(0);
var _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var propTypes = {
  children: _propTypes2.default.node
};

/**
 * Internal helper component to allow attaching a non-conflicting ref to a
 * child element that may not accept refs.
 */

var RefHolder = function (_React$Component) {
  _inherits(RefHolder, _React$Component);
  function RefHolder() {
    _classCallCheck(this, RefHolder);
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }
  RefHolder.prototype.render = function render() {
    return this.props.children;
  };
  return RefHolder;
}(_react2.default.Component);
RefHolder.propTypes = propTypes;
exports.default = RefHolder;
module.exports = exports['default'];

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = function (node, event, handler, capture) {
  (0, _on2.default)(node, event, handler, capture);
  return {
    remove: function remove() {
      (0, _off2.default)(node, event, handler, capture);
    }
  };
};
var _on = __webpack_require__(45);
var _on2 = _interopRequireDefault(_on);
var _off = __webpack_require__(46);
var _off2 = _interopRequireDefault(_off);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
module.exports = exports['default'];

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = addFocusListener;
/**
 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
 *
 * We only allow one Listener at a time to avoid stack overflows
 */
function addFocusListener(handler) {
  var useFocusin = !document.addEventListener;
  var remove = void 0;
  if (useFocusin) {
    document.attachEvent('onfocusin', handler);
    remove = function remove() {
      return document.detachEvent('onfocusin', handler);
    };
  } else {
    document.addEventListener('focus', handler, true);
    remove = function remove() {
      return document.removeEventListener('focus', handler, true);
    };
  }
  return {
    remove: remove
  };
}
module.exports = exports['default'];

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


var isPrototypeOf = __webpack_require__(14);
var method = __webpack_require__(175);
var ArrayPrototype = Array.prototype;
module.exports = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.concat ? method : own;
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(176);
var getBuiltInPrototypeMethod = __webpack_require__(17);
module.exports = getBuiltInPrototypeMethod('Array', 'concat');

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(7);
var fails = __webpack_require__(5);
var isArray = __webpack_require__(81);
var isObject = __webpack_require__(13);
var toObject = __webpack_require__(20);
var lengthOfArrayLike = __webpack_require__(33);
var doesNotExceedSafeInteger = __webpack_require__(177);
var createProperty = __webpack_require__(178);
var arraySpeciesCreate = __webpack_require__(82);
var arrayMethodHasSpeciesSupport = __webpack_require__(51);
var wellKnownSymbol = __webpack_require__(19);
var V8_VERSION = __webpack_require__(32);
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
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(10);
var definePropertyModule = __webpack_require__(41);
var createPropertyDescriptor = __webpack_require__(38);
module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));else object[key] = value;
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(81);
var isConstructor = __webpack_require__(180);
var isObject = __webpack_require__(13);
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
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var fails = __webpack_require__(5);
var isCallable = __webpack_require__(9);
var classof = __webpack_require__(50);
var getBuiltIn = __webpack_require__(39);
var inspectSource = __webpack_require__(182);
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
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var wellKnownSymbol = __webpack_require__(19);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var isCallable = __webpack_require__(9);
var store = __webpack_require__(40);
var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}
module.exports = store.inspectSource;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(184);
module.exports = parent;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototypeOf = __webpack_require__(14);
var method = __webpack_require__(185);
var StringPrototype = String.prototype;
module.exports = function (it) {
  var own = it.trim;
  return typeof it == 'string' || it === StringPrototype || isPrototypeOf(StringPrototype, it) && own === StringPrototype.trim ? method : own;
};

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(186);
var getBuiltInPrototypeMethod = __webpack_require__(17);
module.exports = getBuiltInPrototypeMethod('String', 'trim');

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(7);
var $trim = __webpack_require__(187).trim;
var forcedStringTrimMethod = __webpack_require__(189);

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
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uncurryThis = __webpack_require__(3);
var requireObjectCoercible = __webpack_require__(31);
var toString = __webpack_require__(188);
var whitespaces = __webpack_require__(83);
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
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(50);
var $String = String;
module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PROPER_FUNCTION_NAME = __webpack_require__(190).PROPER;
var fails = __webpack_require__(5);
var whitespaces = __webpack_require__(83);
var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(10);
var hasOwn = __webpack_require__(16);
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
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(50);
var hasOwn = __webpack_require__(16);
var isPrototypeOf = __webpack_require__(14);
var method = __webpack_require__(192);
__webpack_require__(196);
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
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(193);
module.exports = parent;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(194);
var getBuiltInPrototypeMethod = __webpack_require__(17);
module.exports = getBuiltInPrototypeMethod('Array', 'forEach');

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(7);
var forEach = __webpack_require__(195);

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
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $forEach = __webpack_require__(52).forEach;
var arrayMethodIsStrict = __webpack_require__(44);
var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

/***/ }),
/* 196 */
/***/ (function(module, exports) {

// empty

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(198);
module.exports = parent;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(199);
var path = __webpack_require__(18);
module.exports = path.Object.entries;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(7);
var $entries = __webpack_require__(200).entries;

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
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(10);
var fails = __webpack_require__(5);
var uncurryThis = __webpack_require__(3);
var objectGetPrototypeOf = __webpack_require__(201);
var objectKeys = __webpack_require__(43);
var toIndexedObject = __webpack_require__(25);
var $propertyIsEnumerable = __webpack_require__(37).f;
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
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = __webpack_require__(16);
var isCallable = __webpack_require__(9);
var toObject = __webpack_require__(20);
var sharedKey = __webpack_require__(75);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(202);
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
/* 202 */
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
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(204);
module.exports = parent;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototypeOf = __webpack_require__(14);
var method = __webpack_require__(205);
var ArrayPrototype = Array.prototype;
module.exports = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.reduce ? method : own;
};

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(206);
var getBuiltInPrototypeMethod = __webpack_require__(17);
module.exports = getBuiltInPrototypeMethod('Array', 'reduce');

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(7);
var $reduce = __webpack_require__(207).left;
var arrayMethodIsStrict = __webpack_require__(44);
var CHROME_VERSION = __webpack_require__(32);
var IS_NODE = __webpack_require__(208);

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
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aCallable = __webpack_require__(26);
var toObject = __webpack_require__(20);
var IndexedObject = __webpack_require__(30);
var lengthOfArrayLike = __webpack_require__(33);
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
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ENVIRONMENT = __webpack_require__(209);
module.exports = ENVIRONMENT === 'NODE';

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global Bun, Deno -- detection */
var globalThis = __webpack_require__(8);
var userAgent = __webpack_require__(63);
var classof = __webpack_require__(24);
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
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(211);
module.exports = parent;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototypeOf = __webpack_require__(14);
var method = __webpack_require__(212);
var ArrayPrototype = Array.prototype;
module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.filter ? method : own;
};

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(213);
var getBuiltInPrototypeMethod = __webpack_require__(17);
module.exports = getBuiltInPrototypeMethod('Array', 'filter');

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(7);
var $filter = __webpack_require__(52).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(51);
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
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parent = __webpack_require__(215);
module.exports = parent;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototypeOf = __webpack_require__(14);
var method = __webpack_require__(216);
var ArrayPrototype = Array.prototype;
module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.map ? method : own;
};

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(217);
var getBuiltInPrototypeMethod = __webpack_require__(17);
module.exports = getBuiltInPrototypeMethod('Array', 'map');

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(7);
var $map = __webpack_require__(52).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(51);
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
/* 218 */
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
var create = __webpack_require__(84);
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/core-js-pure/features/object/set-prototype-of.js
var set_prototype_of = __webpack_require__(54);
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// EXTERNAL MODULE: ./node_modules/core-js-pure/features/instance/bind.js
var bind = __webpack_require__(34);
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
var object_assign = __webpack_require__(55);
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
var index_of = __webpack_require__(85);
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
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ = __webpack_require__(12);
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
function Fade(_ref) {
  var className = _ref.className,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var nodeRef = external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.useRef(null);
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(esm_Transition, _extends({
    nodeRef: nodeRef
  }, props, {
    __self: this,
    __source: {
      fileName: Fade_jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }), function (status, innerProps) {
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(children, _extends({}, innerProps, {
      className: classnames_default()('fade', className, children.props.className, fadeStyles[status])
    }));
  });
}
Fade.propTypes = Fade_propTypes;
Fade.defaultProps = Fade_defaultProps;
/* harmony default export */ var src_Fade = (Fade);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js
var instance_bind = __webpack_require__(21);
var instance_bind_default = /*#__PURE__*/__webpack_require__.n(instance_bind);

// EXTERNAL MODULE: ./node_modules/dom-helpers/events/index.js
var events = __webpack_require__(56);
var events_default = /*#__PURE__*/__webpack_require__.n(events);

// EXTERNAL MODULE: ./node_modules/dom-helpers/ownerDocument.js
var ownerDocument = __webpack_require__(27);
var ownerDocument_default = /*#__PURE__*/__webpack_require__.n(ownerDocument);

// EXTERNAL MODULE: ./node_modules/dom-helpers/util/inDOM.js
var inDOM = __webpack_require__(11);
var inDOM_default = /*#__PURE__*/__webpack_require__.n(inDOM);

// EXTERNAL MODULE: ./node_modules/dom-helpers/util/scrollbarSize.js
var scrollbarSize = __webpack_require__(35);
var scrollbarSize_default = /*#__PURE__*/__webpack_require__.n(scrollbarSize);

// EXTERNAL MODULE: ./node_modules/react-overlays/lib/Modal.js
var lib_Modal = __webpack_require__(22);
var Modal_default = /*#__PURE__*/__webpack_require__.n(lib_Modal);

// EXTERNAL MODULE: ./node_modules/react-overlays/lib/utils/isOverflowing.js
var isOverflowing = __webpack_require__(53);
var isOverflowing_default = /*#__PURE__*/__webpack_require__.n(isOverflowing);

// EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/elementType.js
var elementType = __webpack_require__(15);
var elementType_default = /*#__PURE__*/__webpack_require__.n(elementType);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js
var concat = __webpack_require__(86);
var concat_default = /*#__PURE__*/__webpack_require__.n(concat);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js
var trim = __webpack_require__(87);
var trim_default = /*#__PURE__*/__webpack_require__.n(trim);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js
var for_each = __webpack_require__(2);
var for_each_default = /*#__PURE__*/__webpack_require__.n(for_each);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js
var instance_index_of = __webpack_require__(57);
var instance_index_of_default = /*#__PURE__*/__webpack_require__.n(instance_index_of);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js
var entries = __webpack_require__(28);
var entries_default = /*#__PURE__*/__webpack_require__.n(entries);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(88);
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
var reduce = __webpack_require__(89);
var reduce_default = /*#__PURE__*/__webpack_require__.n(reduce);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js
var filter = __webpack_require__(90);
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





















var Modal_propTypes = _extends({}, Modal_default.a.propTypes, src_ModalDialog.propTypes, {
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
  container: Modal_default.a.propTypes.container
});
var Modal_defaultProps = _extends({}, Modal_default.a.defaultProps, {
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
    timeout: Modal_Modal.TRANSITION_DURATION,
    __self: this,
    __source: {
      fileName: Modal_jsxFileName,
      lineNumber: 138,
      columnNumber: 10
    }
  }));
}
function BackdropTransition(props) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(src_Fade, _extends({}, props, {
    timeout: Modal_Modal.BACKDROP_TRANSITION_DURATION,
    __self: this,
    __source: {
      fileName: Modal_jsxFileName,
      lineNumber: 142,
      columnNumber: 10
    }
  }));
}

/* eslint-enable no-use-before-define */
var Modal_Modal = /*#__PURE__*/function (_React$Component) {
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
    var bodyIsOverflowing = isOverflowing_default()(this.props.container || document.body);
    var modalIsOverflowing = dialogHeight > document.documentElement.clientHeight;
    this.setState({
      style: {
        paddingRight: bodyIsOverflowing && !modalIsOverflowing ? scrollbarSize_default()() : undefined,
        paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? scrollbarSize_default()() : undefined
      }
    });
  };
  _proto.render = function render() {
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
    var _splitComponentProps = splitComponentProps(props, Modal_default.a),
      baseModalProps = _splitComponentProps[0],
      dialogProps = _splitComponentProps[1];
    var inClassName = show && !animation && 'in';
    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Modal_default.a, _extends({}, baseModalProps, {
      ref: this.setModalRef,
      show: show,
      containerClassName: prefix(props, 'open'),
      transition: animation ? DialogTransition : undefined,
      backdrop: backdrop,
      backdropTransition: animation ? BackdropTransition : undefined,
      backdropClassName: classnames_default()(prefix(props, 'backdrop'), backdropClassName, inClassName),
      onEntering: utils_createChainedFunction(onEntering, this.handleEntering),
      onExited: utils_createChainedFunction(onExited, this.handleExited),
      onMouseUp: this.handleMouseUp,
      __self: this,
      __source: {
        fileName: Modal_jsxFileName,
        lineNumber: 269,
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
        lineNumber: 286,
        columnNumber: 9
      }
    }), children));
  };
  return Modal;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.Component);
Modal_Modal.propTypes = Modal_propTypes;
Modal_Modal.defaultProps = Modal_defaultProps;
Modal_Modal.childContextTypes = childContextTypes;
Modal_Modal.Body = src_ModalBody;
Modal_Modal.Header = src_ModalHeader;
Modal_Modal.Title = src_ModalTitle;
Modal_Modal.Footer = src_ModalFooter;
Modal_Modal.Dialog = src_ModalDialog;
Modal_Modal.TRANSITION_DURATION = 300;
Modal_Modal.BACKDROP_TRANSITION_DURATION = 150;
/* harmony default export */ var src_Modal = (bootstrapUtils_bsClass('modal', bsSizes([Size.LARGE, Size.SMALL], Modal_Modal)));
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js
var map = __webpack_require__(91);
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
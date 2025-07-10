(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require('react'), require('react-dom'));
  else if (typeof define === 'function' && define.amd)
    define(['react', 'react-dom'], factory);
  else if (typeof exports === 'object')
    exports['ReactBootstrap'] = factory(require('react'), require('react-dom'));
  else root['ReactBootstrap'] = factory(root['React'], root['ReactDOM']);
})(window, function(
  __WEBPACK_EXTERNAL_MODULE__0__,
  __WEBPACK_EXTERNAL_MODULE__43__
) {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === 'object' &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, 'default', {
        enumerable: true,
        value: value
      });
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 168));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

        /***/
      },
      /* 1 */
      /***/ function(module, exports, __webpack_require__) {
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        if (false) {
          var throwOnDirectAccess, ReactIs;
        } else {
          // By explicitly using `prop-types` you are opting into new production behavior.
          // http://fb.me/prop-types-in-prod
          module.exports = __webpack_require__(91)();
        }

        /***/
      },
      /* 2 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(123);

        /***/
      },
      /* 3 */
      /***/ function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__; /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

        /* global define */
        (function() {
          'use strict';

          var hasOwn = {}.hasOwnProperty;

          function classNames() {
            var classes = [];

            for (var i = 0; i < arguments.length; i++) {
              var arg = arguments[i];
              if (!arg) continue;
              var argType = typeof arg;

              if (argType === 'string' || argType === 'number') {
                classes.push(arg);
              } else if (Array.isArray(arg) && arg.length) {
                var inner = classNames.apply(null, arg);

                if (inner) {
                  classes.push(inner);
                }
              } else if (argType === 'object') {
                for (var key in arg) {
                  if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                  }
                }
              }
            }

            return classes.join(' ');
          }

          if (true && module.exports) {
            classNames.default = classNames;
            module.exports = classNames;
          } else if (true) {
            // register as 'classnames', consistent with npm package name
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
              return classNames;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })();

        /***/
      },
      /* 4 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(6);

        var getOwnPropertyDescriptor = __webpack_require__(84).f;

        var isForced = __webpack_require__(85);

        var path = __webpack_require__(14);

        var bind = __webpack_require__(49);

        var createNonEnumerableProperty = __webpack_require__(11);

        var has = __webpack_require__(8);

        var wrapConstructor = function(NativeConstructor) {
          var Wrapper = function(a, b, c) {
            if (this instanceof NativeConstructor) {
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

            return NativeConstructor.apply(this, arguments);
          };

          Wrapper.prototype = NativeConstructor.prototype;
          return Wrapper;
        };
        /*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/

        module.exports = function(options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var PROTO = options.proto;
          var nativeSource = GLOBAL
            ? global
            : STATIC
              ? global[TARGET]
              : (global[TARGET] || {}).prototype;
          var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
          var targetPrototype = target.prototype;
          var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
          var key,
            sourceProperty,
            targetProperty,
            nativeProperty,
            resultProperty,
            descriptor;

          for (key in source) {
            FORCED = isForced(
              GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key,
              options.forced
            ); // contains in native

            USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);
            targetProperty = target[key];
            if (USE_NATIVE)
              if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(nativeSource, key);
                nativeProperty = descriptor && descriptor.value;
              } else nativeProperty = nativeSource[key]; // export native or implementation

            sourceProperty =
              USE_NATIVE && nativeProperty ? nativeProperty : source[key];
            if (USE_NATIVE && typeof targetProperty === typeof sourceProperty)
              continue; // bind timers to global for call from export context

            if (options.bind && USE_NATIVE)
              resultProperty = bind(sourceProperty, global);
            // wrap global constructors for prevent changs in this version
            else if (options.wrap && USE_NATIVE)
              resultProperty = wrapConstructor(sourceProperty);
            // make static versions for prototype methods
            else if (PROTO && typeof sourceProperty == 'function')
              resultProperty = bind(Function.call, sourceProperty);
            // default case
            else resultProperty = sourceProperty; // add a flag to not completely full polyfills

            if (
              options.sham ||
              (sourceProperty && sourceProperty.sham) ||
              (targetProperty && targetProperty.sham)
            ) {
              createNonEnumerableProperty(resultProperty, 'sham', true);
            }

            target[key] = resultProperty;

            if (PROTO) {
              VIRTUAL_PROTOTYPE = TARGET + 'Prototype';

              if (!has(path, VIRTUAL_PROTOTYPE)) {
                createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
              } // export virtual prototype methods

              path[VIRTUAL_PROTOTYPE][key] = sourceProperty; // export real prototype methods

              if (options.real && targetPrototype && !targetPrototype[key]) {
                createNonEnumerableProperty(
                  targetPrototype,
                  key,
                  sourceProperty
                );
              }
            }
          }
        };

        /***/
      },
      /* 5 */
      /***/ function(module, exports) {
        module.exports = function(exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };

        /***/
      },
      /* 6 */
      /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(global) {
          var check = function(it) {
            return it && it.Math == Math && it;
          }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028

          module.exports = // eslint-disable-next-line no-undef
            check(typeof globalThis == 'object' && globalThis) ||
            check(typeof window == 'object' && window) ||
            check(typeof self == 'object' && self) ||
            check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func
            Function('return this')();
          /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(83)));

        /***/
      },
      /* 7 */
      /***/ function(module, exports, __webpack_require__) {
        var fails = __webpack_require__(5); // Thank's IE8 for his funny defineProperty

        module.exports = !fails(function() {
          return (
            Object.defineProperty({}, 1, {
              get: function() {
                return 7;
              }
            })[1] != 7
          );
        });

        /***/
      },
      /* 8 */
      /***/ function(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;

        module.exports = function(it, key) {
          return hasOwnProperty.call(it, key);
        };

        /***/
      },
      /* 9 */
      /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(6);

        var shared = __webpack_require__(55);

        var has = __webpack_require__(8);

        var uid = __webpack_require__(57);

        var NATIVE_SYMBOL = __webpack_require__(63);

        var USE_SYMBOL_AS_UID = __webpack_require__(133);

        var WellKnownSymbolsStore = shared('wks');
        var Symbol = global.Symbol;
        var createWellKnownSymbol = USE_SYMBOL_AS_UID
          ? Symbol
          : (Symbol && Symbol.withoutSetter) || uid;

        module.exports = function(name) {
          if (!has(WellKnownSymbolsStore, name)) {
            if (NATIVE_SYMBOL && has(Symbol, name))
              WellKnownSymbolsStore[name] = Symbol[name];
            else
              WellKnownSymbolsStore[name] = createWellKnownSymbol(
                'Symbol.' + name
              );
          }

          return WellKnownSymbolsStore[name];
        };

        /***/
      },
      /* 10 */
      /***/ function(module, exports) {
        module.exports = function(it) {
          return typeof it === 'object'
            ? it !== null
            : typeof it === 'function';
        };

        /***/
      },
      /* 11 */
      /***/ function(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(7);

        var definePropertyModule = __webpack_require__(24);

        var createPropertyDescriptor = __webpack_require__(22);

        module.exports = DESCRIPTORS
          ? function(object, key, value) {
              return definePropertyModule.f(
                object,
                key,
                createPropertyDescriptor(1, value)
              );
            }
          : function(object, key, value) {
              object[key] = value;
              return object;
            };

        /***/
      },
      /* 12 */
      /***/ function(module, exports, __webpack_require__) {
        var path = __webpack_require__(14);

        module.exports = function(CONSTRUCTOR) {
          return path[CONSTRUCTOR + 'Prototype'];
        };

        /***/
      },
      /* 13 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        var _react = __webpack_require__(0);

        var _react2 = _interopRequireDefault(_react);

        var _reactIs = __webpack_require__(115);

        var _createChainableTypeChecker = __webpack_require__(117);

        var _createChainableTypeChecker2 = _interopRequireDefault(
          _createChainableTypeChecker
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj
              };
        }

        function elementType(
          props,
          propName,
          componentName,
          location,
          propFullName
        ) {
          var propValue = props[propName];

          if (_react2.default.isValidElement(propValue)) {
            return new Error(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of type ReactElement ' +
                ('supplied to `' +
                  componentName +
                  '`,expected an element type (a string ') +
                ', component class, or function component).'
            );
          }

          if (!(0, _reactIs.isValidElementType)(propValue)) {
            return new Error(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` of value `' +
                propValue +
                '` ' +
                ('supplied to `' +
                  componentName +
                  '`, expected an element type (a string ') +
                ', component class, or function component).'
            );
          }

          return null;
        }

        exports.default = (0, _createChainableTypeChecker2.default)(
          elementType
        );
        module.exports = exports['default'];

        /***/
      },
      /* 14 */
      /***/ function(module, exports) {
        module.exports = {};

        /***/
      },
      /* 15 */
      /***/ function(module, exports) {
        function _interopRequireDefault(e) {
          return e && e.__esModule
            ? e
            : {
                default: e
              };
        }

        (module.exports = _interopRequireDefault),
          (module.exports.__esModule = true),
          (module.exports['default'] = module.exports);

        /***/
      },
      /* 16 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        exports.__esModule = true;
        exports.default = void 0;

        var _default = !!(
          typeof window !== 'undefined' &&
          window.document &&
          window.document.createElement
        );

        exports.default = _default;
        module.exports = exports['default'];

        /***/
      },
      /* 17 */
      /***/ function(module, exports, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__(32); // `ToObject` abstract operation
        // https://tc39.github.io/ecma262/#sec-toobject

        module.exports = function(argument) {
          return Object(requireObjectCoercible(argument));
        };

        /***/
      },
      /* 18 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(106);

        /***/
      },
      /* 19 */
      /***/ function(module, exports, __webpack_require__) {
        // toObject with fallback for non-array-like ES3 strings
        var IndexedObject = __webpack_require__(23);

        var requireObjectCoercible = __webpack_require__(32);

        module.exports = function(it) {
          return IndexedObject(requireObjectCoercible(it));
        };

        /***/
      },
      /* 20 */
      /***/ function(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(7);

        var fails = __webpack_require__(5);

        var has = __webpack_require__(8);

        var defineProperty = Object.defineProperty;
        var cache = {};

        var thrower = function(it) {
          throw it;
        };

        module.exports = function(METHOD_NAME, options) {
          if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
          if (!options) options = {};
          var method = [][METHOD_NAME];
          var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
          var argument0 = has(options, 0) ? options[0] : thrower;
          var argument1 = has(options, 1) ? options[1] : undefined;
          return (cache[METHOD_NAME] =
            !!method &&
            !fails(function() {
              if (ACCESSORS && !DESCRIPTORS) return true;
              var O = {
                length: -1
              };
              if (ACCESSORS)
                defineProperty(O, 1, {
                  enumerable: true,
                  get: thrower
                });
              else O[1] = 1;
              method.call(O, argument0, argument1);
            }));
        };

        /***/
      },
      /* 21 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(118);

        /***/
      },
      /* 22 */
      /***/ function(module, exports) {
        module.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
          };
        };

        /***/
      },
      /* 23 */
      /***/ function(module, exports, __webpack_require__) {
        var fails = __webpack_require__(5);

        var classof = __webpack_require__(31);

        var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

        module.exports = fails(function() {
          // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
          // eslint-disable-next-line no-prototype-builtins
          return !Object('z').propertyIsEnumerable(0);
        })
          ? function(it) {
              return classof(it) == 'String' ? split.call(it, '') : Object(it);
            }
          : Object;

        /***/
      },
      /* 24 */
      /***/ function(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(7);

        var IE8_DOM_DEFINE = __webpack_require__(47);

        var anObject = __webpack_require__(25);

        var toPrimitive = __webpack_require__(33);

        var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperty

        exports.f = DESCRIPTORS
          ? nativeDefineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPrimitive(P, true);
              anObject(Attributes);
              if (IE8_DOM_DEFINE)
                try {
                  return nativeDefineProperty(O, P, Attributes);
                } catch (error) {
                  /* empty */
                }
              if ('get' in Attributes || 'set' in Attributes)
                throw TypeError('Accessors not supported');
              if ('value' in Attributes) O[P] = Attributes.value;
              return O;
            };

        /***/
      },
      /* 25 */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(10);

        module.exports = function(it) {
          if (!isObject(it)) {
            throw TypeError(String(it) + ' is not an object');
          }

          return it;
        };

        /***/
      },
      /* 26 */
      /***/ function(module, exports, __webpack_require__) {
        var internalObjectKeys = __webpack_require__(87);

        var enumBugKeys = __webpack_require__(53); // `Object.keys` method
        // https://tc39.github.io/ecma262/#sec-object.keys

        module.exports =
          Object.keys ||
          function keys(O) {
            return internalObjectKeys(O, enumBugKeys);
          };

        /***/
      },
      /* 27 */
      /***/ function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(52);

        var min = Math.min; // `ToLength` abstract operation
        // https://tc39.github.io/ecma262/#sec-tolength

        module.exports = function(argument) {
          return argument > 0 ? min(toInteger(argument), 0x1fffffffffffff) : 0; // 2 ** 53 - 1 == 9007199254740991
        };

        /***/
      },
      /* 28 */
      /***/ function(module, exports) {
        module.exports = {};

        /***/
      },
      /* 29 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        exports.__esModule = true;
        exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

        var PropTypes = _interopRequireWildcard(__webpack_require__(1));

        var _react = _interopRequireDefault(__webpack_require__(0));

        var _reactDom = _interopRequireDefault(__webpack_require__(43));

        var _reactLifecyclesCompat = __webpack_require__(104);

        var _PropTypes = __webpack_require__(105);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj
              };
        }

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};

            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc =
                    Object.defineProperty && Object.getOwnPropertyDescriptor
                      ? Object.getOwnPropertyDescriptor(obj, key)
                      : {};

                  if (desc.get || desc.set) {
                    Object.defineProperty(newObj, key, desc);
                  } else {
                    newObj[key] = obj[key];
                  }
                }
              }
            }

            newObj.default = obj;
            return newObj;
          }
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;

          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }

          return target;
        }

        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          subClass.__proto__ = superClass;
        }

        var UNMOUNTED = 'unmounted';
        exports.UNMOUNTED = UNMOUNTED;
        var EXITED = 'exited';
        exports.EXITED = EXITED;
        var ENTERING = 'entering';
        exports.ENTERING = ENTERING;
        var ENTERED = 'entered';
        exports.ENTERED = ENTERED;
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
         *   entering: { opacity: 0 },
         *   entered:  { opacity: 1 },
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

        exports.EXITING = EXITING;

        var Transition = /*#__PURE__*/ (function(_React$Component) {
          _inheritsLoose(Transition, _React$Component);

          function Transition(props, context) {
            var _this;

            _this = _React$Component.call(this, props, context) || this;
            var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

            var appear =
              parentGroup && !parentGroup.isMounting
                ? props.enter
                : props.appear;
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

          var _proto = Transition.prototype;

          _proto.getChildContext = function getChildContext() {
            return {
              transitionGroup: null // allows for nested Transitions
            };
          };

          Transition.getDerivedStateFromProps = function getDerivedStateFromProps(
            _ref,
            prevState
          ) {
            var nextIn = _ref.in;

            if (nextIn && prevState.status === UNMOUNTED) {
              return {
                status: EXITED
              };
            }

            return null;
          }; // getSnapshotBeforeUpdate(prevProps) {
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

              var node = this;

              if (nextStatus === ENTERING) {
                this.performEnter(node, mounting);
              } else {
                this.performExit(node);
              }
            } else if (
              this.props.unmountOnExit &&
              this.state.status === EXITED
            ) {
              this.setState({
                status: UNMOUNTED
              });
            }
          };

          _proto.performEnter = function performEnter(node, mounting) {
            var _this2 = this;

            var enter = this.props.enter;
            var appearing = this.context.transitionGroup
              ? this.context.transitionGroup.isMounting
              : mounting;
            var timeouts = this.getTimeouts();
            var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
            // if we are mounting and running this it means appear _must_ be set

            if (!mounting && !enter) {
              this.safeSetState(
                {
                  status: ENTERED
                },
                function() {
                  _this2.props.onEntered(node);
                }
              );
              return;
            }

            this.props.onEnter(node, appearing);
            this.safeSetState(
              {
                status: ENTERING
              },
              function() {
                _this2.props.onEntering(node, appearing);

                _this2.onTransitionEnd(node, enterTimeout, function() {
                  _this2.safeSetState(
                    {
                      status: ENTERED
                    },
                    function() {
                      _this2.props.onEntered(node, appearing);
                    }
                  );
                });
              }
            );
          };

          _proto.performExit = function performExit(node) {
            var _this3 = this;

            var exit = this.props.exit;
            var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

            if (!exit) {
              this.safeSetState(
                {
                  status: EXITED
                },
                function() {
                  _this3.props.onExited(node);
                }
              );
              return;
            }

            this.props.onExit(node);
            this.safeSetState(
              {
                status: EXITING
              },
              function() {
                _this3.props.onExiting(node);

                _this3.onTransitionEnd(node, timeouts.exit, function() {
                  _this3.safeSetState(
                    {
                      status: EXITED
                    },
                    function() {
                      _this3.props.onExited(node);
                    }
                  );
                });
              }
            );
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

            this.nextCallback = function(event) {
              if (active) {
                active = false;
                _this4.nextCallback = null;
                callback(event);
              }
            };

            this.nextCallback.cancel = function() {
              active = false;
            };

            return this.nextCallback;
          };

          _proto.onTransitionEnd = function onTransitionEnd(
            node,
            timeout,
            handler
          ) {
            this.setNextCallback(handler);
            var doesNotHaveTimeoutOrListener =
              timeout == null && !this.props.addEndListener;

            if (!node || doesNotHaveTimeoutOrListener) {
              setTimeout(this.nextCallback, 0);
              return;
            }

            if (this.props.addEndListener) {
              this.props.addEndListener(node, this.nextCallback);
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
              childProps = _objectWithoutPropertiesLoose(_this$props, [
                'children'
              ]); // filter props for Transtition

            delete childProps.in;
            delete childProps.mountOnEnter;
            delete childProps.unmountOnExit;
            delete childProps.appear;
            delete childProps.enter;
            delete childProps.exit;
            delete childProps.timeout;
            delete childProps.addEndListener;
            delete childProps.onEnter;
            delete childProps.onEntering;
            delete childProps.onEntered;
            delete childProps.onExit;
            delete childProps.onExiting;
            delete childProps.onExited;

            if (typeof children === 'function') {
              return children(status, childProps);
            }

            var child = _react.default.Children.only(children);

            return _react.default.cloneElement(child, childProps);
          };

          return Transition;
        })(_react.default.Component);

        Transition.contextTypes = {
          transitionGroup: PropTypes.object
        };
        Transition.childContextTypes = {
          transitionGroup: function transitionGroup() {}
        };
        Transition.propTypes = false ? undefined : {};

        function noop() {}

        Transition.defaultProps = {
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
        Transition.UNMOUNTED = 0;
        Transition.EXITED = 1;
        Transition.ENTERING = 2;
        Transition.ENTERED = 3;
        Transition.EXITING = 4;

        var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

        exports.default = _default;

        /***/
      },
      /* 30 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

        var NASHORN_BUG =
          getOwnPropertyDescriptor &&
          !nativePropertyIsEnumerable.call(
            {
              1: 2
            },
            1
          ); // `Object.prototype.propertyIsEnumerable` method implementation
        // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

        exports.f = NASHORN_BUG
          ? function propertyIsEnumerable(V) {
              var descriptor = getOwnPropertyDescriptor(this, V);
              return !!descriptor && descriptor.enumerable;
            }
          : nativePropertyIsEnumerable;

        /***/
      },
      /* 31 */
      /***/ function(module, exports) {
        var toString = {}.toString;

        module.exports = function(it) {
          return toString.call(it).slice(8, -1);
        };

        /***/
      },
      /* 32 */
      /***/ function(module, exports) {
        // `RequireObjectCoercible` abstract operation
        // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
        module.exports = function(it) {
          if (it == undefined) throw TypeError("Can't call method on " + it);
          return it;
        };

        /***/
      },
      /* 33 */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(10); // `ToPrimitive` abstract operation
        // https://tc39.github.io/ecma262/#sec-toprimitive
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string

        module.exports = function(input, PREFERRED_STRING) {
          if (!isObject(input)) return input;
          var fn, val;
          if (
            PREFERRED_STRING &&
            typeof (fn = input.toString) == 'function' &&
            !isObject((val = fn.call(input)))
          )
            return val;
          if (
            typeof (fn = input.valueOf) == 'function' &&
            !isObject((val = fn.call(input)))
          )
            return val;
          if (
            !PREFERRED_STRING &&
            typeof (fn = input.toString) == 'function' &&
            !isObject((val = fn.call(input)))
          )
            return val;
          throw TypeError("Can't convert object to primitive value");
        };

        /***/
      },
      /* 34 */
      /***/ function(module, exports) {
        module.exports = function(it) {
          if (typeof it != 'function') {
            throw TypeError(String(it) + ' is not a function');
          }

          return it;
        };

        /***/
      },
      /* 35 */
      /***/ function(module, exports) {
        module.exports = {};

        /***/
      },
      /* 36 */
      /***/ function(module, exports, __webpack_require__) {
        var shared = __webpack_require__(55);

        var uid = __webpack_require__(57);

        var keys = shared('keys');

        module.exports = function(key) {
          return keys[key] || (keys[key] = uid(key));
        };

        /***/
      },
      /* 37 */
      /***/ function(module, exports) {
        module.exports = true;

        /***/
      },
      /* 38 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var fails = __webpack_require__(5);

        module.exports = function(METHOD_NAME, argument) {
          var method = [][METHOD_NAME];
          return (
            !!method &&
            fails(function() {
              // eslint-disable-next-line no-useless-call,no-throw-literal
              method.call(
                null,
                argument ||
                  function() {
                    throw 1;
                  },
                1
              );
            })
          );
        };

        /***/
      },
      /* 39 */
      /***/ function(module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(9);

        var TO_STRING_TAG = wellKnownSymbol('toStringTag');
        var test = {};
        test[TO_STRING_TAG] = 'z';
        module.exports = String(test) === '[object z]';

        /***/
      },
      /* 40 */
      /***/ function(module, exports, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__(39);

        var classofRaw = __webpack_require__(31);

        var wellKnownSymbol = __webpack_require__(9);

        var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

        var CORRECT_ARGUMENTS =
          classofRaw(
            (function() {
              return arguments;
            })()
          ) == 'Arguments'; // fallback for IE11 Script Access Denied error

        var tryGet = function(it, key) {
          try {
            return it[key];
          } catch (error) {
            /* empty */
          }
        }; // getting tag from ES6+ `Object.prototype.toString`

        module.exports = TO_STRING_TAG_SUPPORT
          ? classofRaw
          : function(it) {
              var O, tag, result;
              return it === undefined
                ? 'Undefined'
                : it === null
                  ? 'Null' // @@toStringTag case
                  : typeof (tag = tryGet((O = Object(it)), TO_STRING_TAG)) ==
                    'string'
                    ? tag // builtinTag case
                    : CORRECT_ARGUMENTS
                      ? classofRaw(O) // ES3 arguments fallback
                      : (result = classofRaw(O)) == 'Object' &&
                        typeof O.callee == 'function'
                        ? 'Arguments'
                        : result;
            };

        /***/
      },
      /* 41 */
      /***/ function(module, exports, __webpack_require__) {
        var bind = __webpack_require__(49);

        var IndexedObject = __webpack_require__(23);

        var toObject = __webpack_require__(17);

        var toLength = __webpack_require__(27);

        var arraySpeciesCreate = __webpack_require__(65);

        var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation

        var createMethod = function(TYPE) {
          var IS_MAP = TYPE == 1;
          var IS_FILTER = TYPE == 2;
          var IS_SOME = TYPE == 3;
          var IS_EVERY = TYPE == 4;
          var IS_FIND_INDEX = TYPE == 6;
          var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
          return function($this, callbackfn, that, specificCreate) {
            var O = toObject($this);
            var self = IndexedObject(O);
            var boundFunction = bind(callbackfn, that, 3);
            var length = toLength(self.length);
            var index = 0;
            var create = specificCreate || arraySpeciesCreate;
            var target = IS_MAP
              ? create($this, length)
              : IS_FILTER
                ? create($this, 0)
                : undefined;
            var value, result;

            for (; length > index; index++)
              if (NO_HOLES || index in self) {
                value = self[index];
                result = boundFunction(value, index, O);

                if (TYPE) {
                  if (IS_MAP) target[index] = result;
                  // map
                  else if (result)
                    switch (TYPE) {
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
                        push.call(target, value);
                      // filter
                    }
                  else if (IS_EVERY) return false; // every
                }
              }

            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
          };
        };

        module.exports = {
          // `Array.prototype.forEach` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
          forEach: createMethod(0),
          // `Array.prototype.map` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.map
          map: createMethod(1),
          // `Array.prototype.filter` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.filter
          filter: createMethod(2),
          // `Array.prototype.some` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.some
          some: createMethod(3),
          // `Array.prototype.every` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.every
          every: createMethod(4),
          // `Array.prototype.find` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.find
          find: createMethod(5),
          // `Array.prototype.findIndex` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
          findIndex: createMethod(6)
        };

        /***/
      },
      /* 42 */
      /***/ function(module, exports, __webpack_require__) {
        var fails = __webpack_require__(5);

        var wellKnownSymbol = __webpack_require__(9);

        var V8_VERSION = __webpack_require__(68);

        var SPECIES = wellKnownSymbol('species');

        module.exports = function(METHOD_NAME) {
          // We can't use this feature detection in V8 since it causes
          // deoptimization and serious performance degradation
          // https://github.com/zloirock/core-js/issues/677
          return (
            V8_VERSION >= 51 ||
            !fails(function() {
              var array = [];
              var constructor = (array.constructor = {});

              constructor[SPECIES] = function() {
                return {
                  foo: 1
                };
              };

              return array[METHOD_NAME](Boolean).foo !== 1;
            })
          );
        };

        /***/
      },
      /* 43 */
      /***/ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__43__;

        /***/
      },
      /* 44 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var _interopRequireDefault = __webpack_require__(15);

        exports.__esModule = true;
        exports.default = void 0;

        var _on = _interopRequireDefault(__webpack_require__(59));

        exports.on = _on.default;

        var _off = _interopRequireDefault(__webpack_require__(60));

        exports.off = _off.default;

        var _filter = _interopRequireDefault(__webpack_require__(111));

        exports.filter = _filter.default;

        var _listen = _interopRequireDefault(__webpack_require__(114));

        exports.listen = _listen.default;
        var _default = {
          on: _on.default,
          off: _off.default,
          filter: _filter.default,
          listen: _listen.default
        };
        exports.default = _default;

        /***/
      },
      /* 45 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var _interopRequireDefault = __webpack_require__(15);

        exports.__esModule = true;
        exports.default = scrollbarSize;

        var _inDOM = _interopRequireDefault(__webpack_require__(16));

        var size;

        function scrollbarSize(recalc) {
          if ((!size && size !== 0) || recalc) {
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

        module.exports = exports['default'];

        /***/
      },
      /* 46 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(122);

        /***/
      },
      /* 47 */
      /***/ function(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(7);

        var fails = __webpack_require__(5);

        var createElement = __webpack_require__(48); // Thank's IE8 for his funny defineProperty

        module.exports =
          !DESCRIPTORS &&
          !fails(function() {
            return (
              Object.defineProperty(createElement('div'), 'a', {
                get: function() {
                  return 7;
                }
              }).a != 7
            );
          });

        /***/
      },
      /* 48 */
      /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(6);

        var isObject = __webpack_require__(10);

        var document = global.document; // typeof document.createElement is 'object' in old IE

        var EXISTS = isObject(document) && isObject(document.createElement);

        module.exports = function(it) {
          return EXISTS ? document.createElement(it) : {};
        };

        /***/
      },
      /* 49 */
      /***/ function(module, exports, __webpack_require__) {
        var aFunction = __webpack_require__(34); // optional / simple context binding

        module.exports = function(fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;

          switch (length) {
            case 0:
              return function() {
                return fn.call(that);
              };

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

          return function() /* ...args */
          {
            return fn.apply(that, arguments);
          };
        };

        /***/
      },
      /* 50 */
      /***/ function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(25);

        var defineProperties = __webpack_require__(86);

        var enumBugKeys = __webpack_require__(53);

        var hiddenKeys = __webpack_require__(35);

        var html = __webpack_require__(89);

        var documentCreateElement = __webpack_require__(48);

        var sharedKey = __webpack_require__(36);

        var GT = '>';
        var LT = '<';
        var PROTOTYPE = 'prototype';
        var SCRIPT = 'script';
        var IE_PROTO = sharedKey('IE_PROTO');

        var EmptyConstructor = function() {
          /* empty */
        };

        var scriptTag = function(content) {
          return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
        }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype

        var NullProtoObjectViaActiveX = function(activeXDocument) {
          activeXDocument.write(scriptTag(''));
          activeXDocument.close();
          var temp = activeXDocument.parentWindow.Object;
          activeXDocument = null; // avoid memory leak

          return temp;
        }; // Create object with fake `null` prototype: use iframe Object with cleared prototype

        var NullProtoObjectViaIFrame = function() {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = documentCreateElement('iframe');
          var JS = 'java' + SCRIPT + ':';
          var iframeDocument;
          iframe.style.display = 'none';
          html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

          iframe.src = String(JS);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(scriptTag('document.F=Object'));
          iframeDocument.close();
          return iframeDocument.F;
        }; // Check for document.domain and active x support
        // No need to use active x approach when document.domain is not set
        // see https://github.com/es-shims/es5-shim/issues/150
        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
        // avoid IE GC bug

        var activeXDocument;

        var NullProtoObject = function() {
          try {
            /* global ActiveXObject */
            activeXDocument = document.domain && new ActiveXObject('htmlfile');
          } catch (error) {
            /* ignore */
          }

          NullProtoObject = activeXDocument
            ? NullProtoObjectViaActiveX(activeXDocument)
            : NullProtoObjectViaIFrame();
          var length = enumBugKeys.length;

          while (length--)
            delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

          return NullProtoObject();
        };

        hiddenKeys[IE_PROTO] = true; // `Object.create` method
        // https://tc39.github.io/ecma262/#sec-object.create

        module.exports =
          Object.create ||
          function create(O, Properties) {
            var result;

            if (O !== null) {
              EmptyConstructor[PROTOTYPE] = anObject(O);
              result = new EmptyConstructor();
              EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

              result[IE_PROTO] = O;
            } else result = NullProtoObject();

            return Properties === undefined
              ? result
              : defineProperties(result, Properties);
          };

        /***/
      },
      /* 51 */
      /***/ function(module, exports, __webpack_require__) {
        var toIndexedObject = __webpack_require__(19);

        var toLength = __webpack_require__(27);

        var toAbsoluteIndex = __webpack_require__(88); // `Array.prototype.{ indexOf, includes }` methods implementation

        var createMethod = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value; // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare

            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++]; // eslint-disable-next-line no-self-compare

                if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
              }
            else
              for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el)
                  return IS_INCLUDES || index || 0;
              }
            return !IS_INCLUDES && -1;
          };
        };

        module.exports = {
          // `Array.prototype.includes` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.includes
          includes: createMethod(true),
          // `Array.prototype.indexOf` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
          indexOf: createMethod(false)
        };

        /***/
      },
      /* 52 */
      /***/ function(module, exports) {
        var ceil = Math.ceil;
        var floor = Math.floor; // `ToInteger` abstract operation
        // https://tc39.github.io/ecma262/#sec-tointeger

        module.exports = function(argument) {
          return isNaN((argument = +argument))
            ? 0
            : (argument > 0 ? floor : ceil)(argument);
        };

        /***/
      },
      /* 53 */
      /***/ function(module, exports) {
        // IE8- don't enum bug keys
        module.exports = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf'
        ];

        /***/
      },
      /* 54 */
      /***/ function(module, exports, __webpack_require__) {
        var path = __webpack_require__(14);

        var global = __webpack_require__(6);

        var aFunction = function(variable) {
          return typeof variable == 'function' ? variable : undefined;
        };

        module.exports = function(namespace, method) {
          return arguments.length < 2
            ? aFunction(path[namespace]) || aFunction(global[namespace])
            : (path[namespace] && path[namespace][method]) ||
                (global[namespace] && global[namespace][method]);
        };

        /***/
      },
      /* 55 */
      /***/ function(module, exports, __webpack_require__) {
        var IS_PURE = __webpack_require__(37);

        var store = __webpack_require__(56);

        (module.exports = function(key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })('versions', []).push({
          version: '3.6.4',
          mode: IS_PURE ? 'pure' : 'global',
          copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
        });

        /***/
      },
      /* 56 */
      /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(6);

        var setGlobal = __webpack_require__(90);

        var SHARED = '__core-js_shared__';
        var store = global[SHARED] || setGlobal(SHARED, {});
        module.exports = store;

        /***/
      },
      /* 57 */
      /***/ function(module, exports) {
        var id = 0;
        var postfix = Math.random();

        module.exports = function(key) {
          return (
            'Symbol(' +
            String(key === undefined ? '' : key) +
            ')_' +
            (++id + postfix).toString(36)
          );
        };

        /***/
      },
      /* 58 */
      /***/ function(module, exports, __webpack_require__) {
        var indexOf = __webpack_require__(99);

        var ArrayPrototype = Array.prototype;

        module.exports = function(it) {
          var own = it.indexOf;
          return it === ArrayPrototype ||
            (it instanceof Array && own === ArrayPrototype.indexOf)
            ? indexOf
            : own;
        };

        /***/
      },
      /* 59 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var _interopRequireDefault = __webpack_require__(15);

        exports.__esModule = true;
        exports.default = void 0;

        var _inDOM = _interopRequireDefault(__webpack_require__(16));

        var on = function on() {};

        if (_inDOM.default) {
          on = (function() {
            if (document.addEventListener)
              return function(node, eventName, handler, capture) {
                return node.addEventListener(
                  eventName,
                  handler,
                  capture || false
                );
              };
            else if (document.attachEvent)
              return function(node, eventName, handler) {
                return node.attachEvent('on' + eventName, function(e) {
                  e = e || window.event;
                  e.target = e.target || e.srcElement;
                  e.currentTarget = node;
                  handler.call(node, e);
                });
              };
          })();
        }

        var _default = on;
        exports.default = _default;
        module.exports = exports['default'];

        /***/
      },
      /* 60 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var _interopRequireDefault = __webpack_require__(15);

        exports.__esModule = true;
        exports.default = void 0;

        var _inDOM = _interopRequireDefault(__webpack_require__(16));

        var off = function off() {};

        if (_inDOM.default) {
          off = (function() {
            if (document.addEventListener)
              return function(node, eventName, handler, capture) {
                return node.removeEventListener(
                  eventName,
                  handler,
                  capture || false
                );
              };
            else if (document.attachEvent)
              return function(node, eventName, handler) {
                return node.detachEvent('on' + eventName, handler);
              };
          })();
        }

        var _default = off;
        exports.default = _default;
        module.exports = exports['default'];

        /***/
      },
      /* 61 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var getPrototypeOf = __webpack_require__(62);

        var createNonEnumerableProperty = __webpack_require__(11);

        var has = __webpack_require__(8);

        var wellKnownSymbol = __webpack_require__(9);

        var IS_PURE = __webpack_require__(37);

        var ITERATOR = wellKnownSymbol('iterator');
        var BUGGY_SAFARI_ITERATORS = false;

        var returnThis = function() {
          return this;
        }; // `%IteratorPrototype%` object
        // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object

        var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

        if ([].keys) {
          arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

          if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
          else {
            PrototypeOfArrayIteratorPrototype = getPrototypeOf(
              getPrototypeOf(arrayIterator)
            );
            if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
              IteratorPrototype = PrototypeOfArrayIteratorPrototype;
          }
        }

        if (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

        if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
          createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
        }

        module.exports = {
          IteratorPrototype: IteratorPrototype,
          BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
        };

        /***/
      },
      /* 62 */
      /***/ function(module, exports, __webpack_require__) {
        var has = __webpack_require__(8);

        var toObject = __webpack_require__(17);

        var sharedKey = __webpack_require__(36);

        var CORRECT_PROTOTYPE_GETTER = __webpack_require__(132);

        var IE_PROTO = sharedKey('IE_PROTO');
        var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
        // https://tc39.github.io/ecma262/#sec-object.getprototypeof

        module.exports = CORRECT_PROTOTYPE_GETTER
          ? Object.getPrototypeOf
          : function(O) {
              O = toObject(O);
              if (has(O, IE_PROTO)) return O[IE_PROTO];

              if (
                typeof O.constructor == 'function' &&
                O instanceof O.constructor
              ) {
                return O.constructor.prototype;
              }

              return O instanceof Object ? ObjectPrototype : null;
            };

        /***/
      },
      /* 63 */
      /***/ function(module, exports, __webpack_require__) {
        var fails = __webpack_require__(5);

        module.exports =
          !!Object.getOwnPropertySymbols &&
          !fails(function() {
            // Chrome 38 Symbol has incorrect toString conversion
            // eslint-disable-next-line no-undef
            return !String(Symbol());
          });

        /***/
      },
      /* 64 */
      /***/ function(module, exports, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__(39);

        var defineProperty = __webpack_require__(24).f;

        var createNonEnumerableProperty = __webpack_require__(11);

        var has = __webpack_require__(8);

        var toString = __webpack_require__(134);

        var wellKnownSymbol = __webpack_require__(9);

        var TO_STRING_TAG = wellKnownSymbol('toStringTag');

        module.exports = function(it, TAG, STATIC, SET_METHOD) {
          if (it) {
            var target = STATIC ? it : it.prototype;

            if (!has(target, TO_STRING_TAG)) {
              defineProperty(target, TO_STRING_TAG, {
                configurable: true,
                value: TAG
              });
            }

            if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
              createNonEnumerableProperty(target, 'toString', toString);
            }
          }
        };

        /***/
      },
      /* 65 */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(10);

        var isArray = __webpack_require__(66);

        var wellKnownSymbol = __webpack_require__(9);

        var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
        // https://tc39.github.io/ecma262/#sec-arrayspeciescreate

        module.exports = function(originalArray, length) {
          var C;

          if (isArray(originalArray)) {
            C = originalArray.constructor; // cross-realm fallback

            if (typeof C == 'function' && (C === Array || isArray(C.prototype)))
              C = undefined;
            else if (isObject(C)) {
              C = C[SPECIES];
              if (C === null) C = undefined;
            }
          }

          return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
        };

        /***/
      },
      /* 66 */
      /***/ function(module, exports, __webpack_require__) {
        var classof = __webpack_require__(31); // `IsArray` abstract operation
        // https://tc39.github.io/ecma262/#sec-isarray

        module.exports =
          Array.isArray ||
          function isArray(arg) {
            return classof(arg) == 'Array';
          };

        /***/
      },
      /* 67 */
      /***/ function(module, exports) {
        // a string of all valid unicode whitespaces
        // eslint-disable-next-line max-len
        module.exports =
          '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

        /***/
      },
      /* 68 */
      /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(6);

        var userAgent = __webpack_require__(154);

        var process = global.process;
        var versions = process && process.versions;
        var v8 = versions && versions.v8;
        var match, version;

        if (v8) {
          match = v8.split('.');
          version = match[0] + match[1];
        } else if (userAgent) {
          match = userAgent.match(/Edge\/(\d+)/);

          if (!match || match[1] >= 74) {
            match = userAgent.match(/Chrome\/(\d+)/);
            if (match) version = match[1];
          }
        }

        module.exports = version && +version;

        /***/
      },
      /* 69 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(80);

        /***/
      },
      /* 70 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(93);

        /***/
      },
      /* 71 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(98);

        /***/
      },
      /* 72 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(101);

        /***/
      },
      /* 73 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        exports.__esModule = true;
        exports.default = ownerDocument;

        function ownerDocument(node) {
          return (node && node.ownerDocument) || document;
        }

        module.exports = exports['default'];

        /***/
      },
      /* 74 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(143);

        /***/
      },
      /* 75 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(149);

        /***/
      },
      /* 76 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
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

        var invariant = function(condition, format, a, b, c, d, e, f) {
          if (false) {
          }

          if (!condition) {
            var error;

            if (format === undefined) {
              error = new Error(
                'Minified exception occurred; use the non-minified dev environment ' +
                  'for the full error message and additional helpful warnings.'
              );
            } else {
              var args = [a, b, c, d, e, f];
              var argIndex = 0;
              error = new Error(
                format.replace(/%s/g, function() {
                  return args[argIndex++];
                })
              );
              error.name = 'Invariant Violation';
            }

            error.framesToPop = 1; // we don't care about invariant's own frame

            throw error;
          }
        };

        module.exports = invariant;

        /***/
      },
      /* 77 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(155);

        /***/
      },
      /* 78 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(159);

        /***/
      },
      /* 79 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(164);

        /***/
      },
      /* 80 */
      /***/ function(module, exports, __webpack_require__) {
        var parent = __webpack_require__(81);

        module.exports = parent;

        /***/
      },
      /* 81 */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(82);

        var path = __webpack_require__(14);

        var Object = path.Object;

        module.exports = function create(P, D) {
          return Object.create(P, D);
        };

        /***/
      },
      /* 82 */
      /***/ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(4);

        var DESCRIPTORS = __webpack_require__(7);

        var create = __webpack_require__(50); // `Object.create` method
        // https://tc39.github.io/ecma262/#sec-object.create

        $(
          {
            target: 'Object',
            stat: true,
            sham: !DESCRIPTORS
          },
          {
            create: create
          }
        );

        /***/
      },
      /* 83 */
      /***/ function(module, exports) {
        var g; // This works in non-strict mode

        g = (function() {
          return this;
        })();

        try {
          // This works if eval is allowed (see CSP)
          g = g || new Function('return this')();
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === 'object') g = window;
        } // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;

        /***/
      },
      /* 84 */
      /***/ function(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(7);

        var propertyIsEnumerableModule = __webpack_require__(30);

        var createPropertyDescriptor = __webpack_require__(22);

        var toIndexedObject = __webpack_require__(19);

        var toPrimitive = __webpack_require__(33);

        var has = __webpack_require__(8);

        var IE8_DOM_DEFINE = __webpack_require__(47);

        var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

        exports.f = DESCRIPTORS
          ? nativeGetOwnPropertyDescriptor
          : function getOwnPropertyDescriptor(O, P) {
              O = toIndexedObject(O);
              P = toPrimitive(P, true);
              if (IE8_DOM_DEFINE)
                try {
                  return nativeGetOwnPropertyDescriptor(O, P);
                } catch (error) {
                  /* empty */
                }
              if (has(O, P))
                return createPropertyDescriptor(
                  !propertyIsEnumerableModule.f.call(O, P),
                  O[P]
                );
            };

        /***/
      },
      /* 85 */
      /***/ function(module, exports, __webpack_require__) {
        var fails = __webpack_require__(5);

        var replacement = /#|\.prototype\./;

        var isForced = function(feature, detection) {
          var value = data[normalize(feature)];
          return value == POLYFILL
            ? true
            : value == NATIVE
              ? false
              : typeof detection == 'function'
                ? fails(detection)
                : !!detection;
        };

        var normalize = (isForced.normalize = function(string) {
          return String(string)
            .replace(replacement, '.')
            .toLowerCase();
        });

        var data = (isForced.data = {});
        var NATIVE = (isForced.NATIVE = 'N');
        var POLYFILL = (isForced.POLYFILL = 'P');
        module.exports = isForced;

        /***/
      },
      /* 86 */
      /***/ function(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(7);

        var definePropertyModule = __webpack_require__(24);

        var anObject = __webpack_require__(25);

        var objectKeys = __webpack_require__(26); // `Object.defineProperties` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperties

        module.exports = DESCRIPTORS
          ? Object.defineProperties
          : function defineProperties(O, Properties) {
              anObject(O);
              var keys = objectKeys(Properties);
              var length = keys.length;
              var index = 0;
              var key;

              while (length > index)
                definePropertyModule.f(
                  O,
                  (key = keys[index++]),
                  Properties[key]
                );

              return O;
            };

        /***/
      },
      /* 87 */
      /***/ function(module, exports, __webpack_require__) {
        var has = __webpack_require__(8);

        var toIndexedObject = __webpack_require__(19);

        var indexOf = __webpack_require__(51).indexOf;

        var hiddenKeys = __webpack_require__(35);

        module.exports = function(object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;

          for (key in O)
            !has(hiddenKeys, key) && has(O, key) && result.push(key); // Don't enum bug & hidden keys

          while (names.length > i)
            if (has(O, (key = names[i++]))) {
              ~indexOf(result, key) || result.push(key);
            }

          return result;
        };

        /***/
      },
      /* 88 */
      /***/ function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(52);

        var max = Math.max;
        var min = Math.min; // Helper for a popular repeating case of the spec:
        // Let integer be ? ToInteger(index).
        // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

        module.exports = function(index, length) {
          var integer = toInteger(index);
          return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };

        /***/
      },
      /* 89 */
      /***/ function(module, exports, __webpack_require__) {
        var getBuiltIn = __webpack_require__(54);

        module.exports = getBuiltIn('document', 'documentElement');

        /***/
      },
      /* 90 */
      /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(6);

        var createNonEnumerableProperty = __webpack_require__(11);

        module.exports = function(key, value) {
          try {
            createNonEnumerableProperty(global, key, value);
          } catch (error) {
            global[key] = value;
          }

          return value;
        };

        /***/
      },
      /* 91 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var ReactPropTypesSecret = __webpack_require__(92);

        function emptyFunction() {}

        function emptyFunctionWithReset() {}

        emptyFunctionWithReset.resetWarningCache = emptyFunction;

        module.exports = function() {
          function shim(
            props,
            propName,
            componentName,
            location,
            propFullName,
            secret
          ) {
            if (secret === ReactPropTypesSecret) {
              // It is still safe when called from React.
              return;
            }

            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use PropTypes.checkPropTypes() to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          }

          shim.isRequired = shim;

          function getShim() {
            return shim;
          } // Important!

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

        /***/
      },
      /* 92 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var ReactPropTypesSecret =
          'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        module.exports = ReactPropTypesSecret;

        /***/
      },
      /* 93 */
      /***/ function(module, exports, __webpack_require__) {
        var parent = __webpack_require__(94);

        module.exports = parent;

        /***/
      },
      /* 94 */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(95);

        var path = __webpack_require__(14);

        module.exports = path.Object.assign;

        /***/
      },
      /* 95 */
      /***/ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(4);

        var assign = __webpack_require__(96); // `Object.assign` method
        // https://tc39.github.io/ecma262/#sec-object.assign

        $(
          {
            target: 'Object',
            stat: true,
            forced: Object.assign !== assign
          },
          {
            assign: assign
          }
        );

        /***/
      },
      /* 96 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var DESCRIPTORS = __webpack_require__(7);

        var fails = __webpack_require__(5);

        var objectKeys = __webpack_require__(26);

        var getOwnPropertySymbolsModule = __webpack_require__(97);

        var propertyIsEnumerableModule = __webpack_require__(30);

        var toObject = __webpack_require__(17);

        var IndexedObject = __webpack_require__(23);

        var nativeAssign = Object.assign;
        var defineProperty = Object.defineProperty; // `Object.assign` method
        // https://tc39.github.io/ecma262/#sec-object.assign

        module.exports =
          !nativeAssign ||
          fails(function() {
            // should have correct order of operations (Edge bug)
            if (
              DESCRIPTORS &&
              nativeAssign(
                {
                  b: 1
                },
                nativeAssign(
                  defineProperty({}, 'a', {
                    enumerable: true,
                    get: function() {
                      defineProperty(this, 'b', {
                        value: 3,
                        enumerable: false
                      });
                    }
                  }),
                  {
                    b: 2
                  }
                )
              ).b !== 1
            )
              return true; // should work with symbols and should have deterministic property order (V8 bug)

            var A = {};
            var B = {}; // eslint-disable-next-line no-undef

            var symbol = Symbol();
            var alphabet = 'abcdefghijklmnopqrst';
            A[symbol] = 7;
            alphabet.split('').forEach(function(chr) {
              B[chr] = chr;
            });
            return (
              nativeAssign({}, A)[symbol] != 7 ||
              objectKeys(nativeAssign({}, B)).join('') != alphabet
            );
          })
            ? function assign(target, source) {
                // eslint-disable-line no-unused-vars
                var T = toObject(target);
                var argumentsLength = arguments.length;
                var index = 1;
                var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                var propertyIsEnumerable = propertyIsEnumerableModule.f;

                while (argumentsLength > index) {
                  var S = IndexedObject(arguments[index++]);
                  var keys = getOwnPropertySymbols
                    ? objectKeys(S).concat(getOwnPropertySymbols(S))
                    : objectKeys(S);
                  var length = keys.length;
                  var j = 0;
                  var key;

                  while (length > j) {
                    key = keys[j++];
                    if (!DESCRIPTORS || propertyIsEnumerable.call(S, key))
                      T[key] = S[key];
                  }
                }

                return T;
              }
            : nativeAssign;

        /***/
      },
      /* 97 */
      /***/ function(module, exports) {
        exports.f = Object.getOwnPropertySymbols;

        /***/
      },
      /* 98 */
      /***/ function(module, exports, __webpack_require__) {
        var parent = __webpack_require__(58);

        module.exports = parent;

        /***/
      },
      /* 99 */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(100);

        var entryVirtual = __webpack_require__(12);

        module.exports = entryVirtual('Array').indexOf;

        /***/
      },
      /* 100 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(4);

        var $indexOf = __webpack_require__(51).indexOf;

        var arrayMethodIsStrict = __webpack_require__(38);

        var arrayMethodUsesToLength = __webpack_require__(20);

        var nativeIndexOf = [].indexOf;
        var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
        var STRICT_METHOD = arrayMethodIsStrict('indexOf');
        var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', {
          ACCESSORS: true,
          1: 0
        }); // `Array.prototype.indexOf` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.indexof

        $(
          {
            target: 'Array',
            proto: true,
            forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH
          },
          {
            indexOf: function indexOf(
              searchElement
              /* , fromIndex = 0 */
            ) {
              return NEGATIVE_ZERO // convert -0 to +0
                ? nativeIndexOf.apply(this, arguments) || 0
                : $indexOf(
                    this,
                    searchElement,
                    arguments.length > 1 ? arguments[1] : undefined
                  );
            }
          }
        );

        /***/
      },
      /* 101 */
      /***/ function(module, exports, __webpack_require__) {
        var parent = __webpack_require__(102);

        module.exports = parent;

        /***/
      },
      /* 102 */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(103);

        var path = __webpack_require__(14);

        module.exports = path.Object.keys;

        /***/
      },
      /* 103 */
      /***/ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(4);

        var toObject = __webpack_require__(17);

        var nativeKeys = __webpack_require__(26);

        var fails = __webpack_require__(5);

        var FAILS_ON_PRIMITIVES = fails(function() {
          nativeKeys(1);
        }); // `Object.keys` method
        // https://tc39.github.io/ecma262/#sec-object.keys

        $(
          {
            target: 'Object',
            stat: true,
            forced: FAILS_ON_PRIMITIVES
          },
          {
            keys: function keys(it) {
              return nativeKeys(toObject(it));
            }
          }
        );

        /***/
      },
      /* 104 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'polyfill',
          function() {
            return polyfill;
          }
        );
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        function componentWillMount() {
          // Call this.constructor.gDSFP to support sub-classes.
          var state = this.constructor.getDerivedStateFromProps(
            this.props,
            this.state
          );

          if (state !== null && state !== undefined) {
            this.setState(state);
          }
        }

        function componentWillReceiveProps(nextProps) {
          // Call this.constructor.gDSFP to support sub-classes.
          // Use the setState() updater to ensure state isn't stale in certain edge cases.
          function updater(prevState) {
            var state = this.constructor.getDerivedStateFromProps(
              nextProps,
              prevState
            );
            return state !== null && state !== undefined ? state : null;
          } // Binding "this" is important for shallow renderer support.

          this.setState(updater.bind(this));
        }

        function componentWillUpdate(nextProps, nextState) {
          try {
            var prevProps = this.props;
            var prevState = this.state;
            this.props = nextProps;
            this.state = nextState;
            this.__reactInternalSnapshotFlag = true;
            this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
              prevProps,
              prevState
            );
          } finally {
            this.props = prevProps;
            this.state = prevState;
          }
        } // React may warn about cWM/cWRP/cWU methods being deprecated.
        // Add a flag to suppress these warnings for this special case.

        componentWillMount.__suppressDeprecationWarning = true;
        componentWillReceiveProps.__suppressDeprecationWarning = true;
        componentWillUpdate.__suppressDeprecationWarning = true;

        function polyfill(Component) {
          var prototype = Component.prototype;

          if (!prototype || !prototype.isReactComponent) {
            throw new Error('Can only polyfill class components');
          }

          if (
            typeof Component.getDerivedStateFromProps !== 'function' &&
            typeof prototype.getSnapshotBeforeUpdate !== 'function'
          ) {
            return Component;
          } // If new component APIs are defined, "unsafe" lifecycles won't be called.
          // Error if any of these lifecycles are present,
          // Because they would work differently between older and newer (16.3+) versions of React.

          var foundWillMountName = null;
          var foundWillReceivePropsName = null;
          var foundWillUpdateName = null;

          if (typeof prototype.componentWillMount === 'function') {
            foundWillMountName = 'componentWillMount';
          } else if (
            typeof prototype.UNSAFE_componentWillMount === 'function'
          ) {
            foundWillMountName = 'UNSAFE_componentWillMount';
          }

          if (typeof prototype.componentWillReceiveProps === 'function') {
            foundWillReceivePropsName = 'componentWillReceiveProps';
          } else if (
            typeof prototype.UNSAFE_componentWillReceiveProps === 'function'
          ) {
            foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
          }

          if (typeof prototype.componentWillUpdate === 'function') {
            foundWillUpdateName = 'componentWillUpdate';
          } else if (
            typeof prototype.UNSAFE_componentWillUpdate === 'function'
          ) {
            foundWillUpdateName = 'UNSAFE_componentWillUpdate';
          }

          if (
            foundWillMountName !== null ||
            foundWillReceivePropsName !== null ||
            foundWillUpdateName !== null
          ) {
            var componentName = Component.displayName || Component.name;
            var newApiName =
              typeof Component.getDerivedStateFromProps === 'function'
                ? 'getDerivedStateFromProps()'
                : 'getSnapshotBeforeUpdate()';
            throw Error(
              'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
                componentName +
                ' uses ' +
                newApiName +
                ' but also contains the following legacy lifecycles:' +
                (foundWillMountName !== null
                  ? '\n  ' + foundWillMountName
                  : '') +
                (foundWillReceivePropsName !== null
                  ? '\n  ' + foundWillReceivePropsName
                  : '') +
                (foundWillUpdateName !== null
                  ? '\n  ' + foundWillUpdateName
                  : '') +
                '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
                'https://fb.me/react-async-component-lifecycle-hooks'
            );
          } // React <= 16.2 does not support static getDerivedStateFromProps.
          // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
          // Newer versions of React will ignore these lifecycles if gDSFP exists.

          if (typeof Component.getDerivedStateFromProps === 'function') {
            prototype.componentWillMount = componentWillMount;
            prototype.componentWillReceiveProps = componentWillReceiveProps;
          } // React <= 16.2 does not support getSnapshotBeforeUpdate.
          // As a workaround, use cWU to invoke the new lifecycle.
          // Newer versions of React will ignore that lifecycle if gSBU exists.

          if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
            if (typeof prototype.componentDidUpdate !== 'function') {
              throw new Error(
                'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
              );
            }

            prototype.componentWillUpdate = componentWillUpdate;
            var componentDidUpdate = prototype.componentDidUpdate;

            prototype.componentDidUpdate = function componentDidUpdatePolyfill(
              prevProps,
              prevState,
              maybeSnapshot
            ) {
              // 16.3+ will not execute our will-update method;
              // It will pass a snapshot value to did-update though.
              // Older versions will require our polyfilled will-update value.
              // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
              // Because for <= 15.x versions this might be a "prevContext" object.
              // We also can't just check "__reactInternalSnapshot",
              // Because get-snapshot might return a falsy value.
              // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
              var snapshot = this.__reactInternalSnapshotFlag
                ? this.__reactInternalSnapshot
                : maybeSnapshot;
              componentDidUpdate.call(this, prevProps, prevState, snapshot);
            };
          }

          return Component;
        }

        /***/
      },
      /* 105 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        exports.__esModule = true;
        exports.classNamesShape = exports.timeoutsShape = void 0;

        var _propTypes = _interopRequireDefault(__webpack_require__(1));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj
              };
        }

        var timeoutsShape = false ? undefined : null;
        exports.timeoutsShape = timeoutsShape;
        var classNamesShape = false ? undefined : null;
        exports.classNamesShape = classNamesShape;

        /***/
      },
      /* 106 */
      /***/ function(module, exports, __webpack_require__) {
        var parent = __webpack_require__(107);

        module.exports = parent;

        /***/
      },
      /* 107 */
      /***/ function(module, exports, __webpack_require__) {
        var bind = __webpack_require__(108);

        var FunctionPrototype = Function.prototype;

        module.exports = function(it) {
          var own = it.bind;
          return it === FunctionPrototype ||
            (it instanceof Function && own === FunctionPrototype.bind)
            ? bind
            : own;
        };

        /***/
      },
      /* 108 */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(109);

        var entryVirtual = __webpack_require__(12);

        module.exports = entryVirtual('Function').bind;

        /***/
      },
      /* 109 */
      /***/ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(4);

        var bind = __webpack_require__(110); // `Function.prototype.bind` method
        // https://tc39.github.io/ecma262/#sec-function.prototype.bind

        $(
          {
            target: 'Function',
            proto: true
          },
          {
            bind: bind
          }
        );

        /***/
      },
      /* 110 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var aFunction = __webpack_require__(34);

        var isObject = __webpack_require__(10);

        var slice = [].slice;
        var factories = {};

        var construct = function(C, argsLength, args) {
          if (!(argsLength in factories)) {
            for (var list = [], i = 0; i < argsLength; i++)
              list[i] = 'a[' + i + ']'; // eslint-disable-next-line no-new-func

            factories[argsLength] = Function(
              'C,a',
              'return new C(' + list.join(',') + ')'
            );
          }

          return factories[argsLength](C, args);
        }; // `Function.prototype.bind` method implementation
        // https://tc39.github.io/ecma262/#sec-function.prototype.bind

        module.exports =
          Function.bind ||
          function bind(
            that
            /* , ...args */
          ) {
            var fn = aFunction(this);
            var partArgs = slice.call(arguments, 1);

            var boundFunction = function bound /* args... */() {
              var args = partArgs.concat(slice.call(arguments));
              return this instanceof boundFunction
                ? construct(fn, args.length, args)
                : fn.apply(that, args);
            };

            if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
            return boundFunction;
          };

        /***/
      },
      /* 111 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var _interopRequireDefault = __webpack_require__(15);

        exports.__esModule = true;
        exports.default = filterEvents;

        var _contains = _interopRequireDefault(__webpack_require__(112));

        var _querySelectorAll = _interopRequireDefault(
          __webpack_require__(113)
        );

        function filterEvents(selector, handler) {
          return function filterHandler(e) {
            var top = e.currentTarget,
              target = e.target,
              matches = (0, _querySelectorAll.default)(top, selector);
            if (
              matches.some(function(match) {
                return (0, _contains.default)(match, target);
              })
            )
              handler.call(this, e);
          };
        }

        module.exports = exports['default'];

        /***/
      },
      /* 112 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var _interopRequireDefault = __webpack_require__(15);

        exports.__esModule = true;
        exports.default = void 0;

        var _inDOM = _interopRequireDefault(__webpack_require__(16));

        var _default = (function() {
          // HTML DOM and SVG DOM may have different support levels,
          // so we need to check on context instead of a document root element.
          return _inDOM.default
            ? function(context, node) {
                if (context.contains) {
                  return context.contains(node);
                } else if (context.compareDocumentPosition) {
                  return (
                    context === node ||
                    !!(context.compareDocumentPosition(node) & 16)
                  );
                } else {
                  return fallback(context, node);
                }
              }
            : fallback;
        })();

        exports.default = _default;

        function fallback(context, node) {
          if (node)
            do {
              if (node === context) return true;
            } while ((node = node.parentNode));
          return false;
        }

        module.exports = exports['default'];

        /***/
      },
      /* 113 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        exports.__esModule = true;
        exports.default = qsa; // Zepto.js
        // (c) 2010-2015 Thomas Fuchs
        // Zepto.js may be freely distributed under the MIT license.

        var simpleSelectorRE = /^[\w-]*$/;
        var toArray = Function.prototype.bind.call(
          Function.prototype.call,
          [].slice
        );

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

            if (element.getElementsByClassName && maybeClass)
              return toArray(element.getElementsByClassName(nameOnly));
            return toArray(element.getElementsByTagName(selector));
          }

          return toArray(element.querySelectorAll(selector));
        }

        module.exports = exports['default'];

        /***/
      },
      /* 114 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var _interopRequireDefault = __webpack_require__(15);

        exports.__esModule = true;
        exports.default = void 0;

        var _inDOM = _interopRequireDefault(__webpack_require__(16));

        var _on = _interopRequireDefault(__webpack_require__(59));

        var _off = _interopRequireDefault(__webpack_require__(60));

        var listen = function listen() {};

        if (_inDOM.default) {
          listen = function listen(node, eventName, handler, capture) {
            (0, _on.default)(node, eventName, handler, capture);
            return function() {
              (0, _off.default)(node, eventName, handler, capture);
            };
          };
        }

        var _default = listen;
        exports.default = _default;
        module.exports = exports['default'];

        /***/
      },
      /* 115 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        if (true) {
          module.exports = __webpack_require__(116);
        } else {
        }

        /***/
      },
      /* 116 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';
        /** @license React v16.13.1
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var b = 'function' === typeof Symbol && Symbol.for,
          c = b ? Symbol.for('react.element') : 60103,
          d = b ? Symbol.for('react.portal') : 60106,
          e = b ? Symbol.for('react.fragment') : 60107,
          f = b ? Symbol.for('react.strict_mode') : 60108,
          g = b ? Symbol.for('react.profiler') : 60114,
          h = b ? Symbol.for('react.provider') : 60109,
          k = b ? Symbol.for('react.context') : 60110,
          l = b ? Symbol.for('react.async_mode') : 60111,
          m = b ? Symbol.for('react.concurrent_mode') : 60111,
          n = b ? Symbol.for('react.forward_ref') : 60112,
          p = b ? Symbol.for('react.suspense') : 60113,
          q = b ? Symbol.for('react.suspense_list') : 60120,
          r = b ? Symbol.for('react.memo') : 60115,
          t = b ? Symbol.for('react.lazy') : 60116,
          v = b ? Symbol.for('react.block') : 60121,
          w = b ? Symbol.for('react.fundamental') : 60117,
          x = b ? Symbol.for('react.responder') : 60118,
          y = b ? Symbol.for('react.scope') : 60119;

        function z(a) {
          if ('object' === typeof a && null !== a) {
            var u = a.$$typeof;

            switch (u) {
              case c:
                switch (((a = a.type), a)) {
                  case l:
                  case m:
                  case e:
                  case g:
                  case f:
                  case p:
                    return a;

                  default:
                    switch (((a = a && a.$$typeof), a)) {
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

        exports.isAsyncMode = function(a) {
          return A(a) || z(a) === l;
        };

        exports.isConcurrentMode = A;

        exports.isContextConsumer = function(a) {
          return z(a) === k;
        };

        exports.isContextProvider = function(a) {
          return z(a) === h;
        };

        exports.isElement = function(a) {
          return 'object' === typeof a && null !== a && a.$$typeof === c;
        };

        exports.isForwardRef = function(a) {
          return z(a) === n;
        };

        exports.isFragment = function(a) {
          return z(a) === e;
        };

        exports.isLazy = function(a) {
          return z(a) === t;
        };

        exports.isMemo = function(a) {
          return z(a) === r;
        };

        exports.isPortal = function(a) {
          return z(a) === d;
        };

        exports.isProfiler = function(a) {
          return z(a) === g;
        };

        exports.isStrictMode = function(a) {
          return z(a) === f;
        };

        exports.isSuspense = function(a) {
          return z(a) === p;
        };

        exports.isValidElementType = function(a) {
          return (
            'string' === typeof a ||
            'function' === typeof a ||
            a === e ||
            a === m ||
            a === g ||
            a === f ||
            a === p ||
            a === q ||
            ('object' === typeof a &&
              null !== a &&
              (a.$$typeof === t ||
                a.$$typeof === r ||
                a.$$typeof === h ||
                a.$$typeof === k ||
                a.$$typeof === n ||
                a.$$typeof === w ||
                a.$$typeof === x ||
                a.$$typeof === y ||
                a.$$typeof === v))
          );
        };

        exports.typeOf = z;

        /***/
      },
      /* 117 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
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
          function checkType(
            isRequired,
            props,
            propName,
            componentName,
            location,
            propFullName
          ) {
            var componentNameSafe = componentName || '<<anonymous>>';
            var propFullNameSafe = propFullName || propName;

            if (props[propName] == null) {
              if (isRequired) {
                return new Error(
                  'Required ' +
                    location +
                    ' `' +
                    propFullNameSafe +
                    '` was not specified ' +
                    ('in `' + componentNameSafe + '`.')
                );
              }

              return null;
            }

            for (
              var _len = arguments.length,
                args = Array(_len > 6 ? _len - 6 : 0),
                _key = 6;
              _key < _len;
              _key++
            ) {
              args[_key - 6] = arguments[_key];
            }

            return validate.apply(
              undefined,
              [
                props,
                propName,
                componentNameSafe,
                location,
                propFullNameSafe
              ].concat(args)
            );
          }

          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);
          return chainedCheckType;
        }

        module.exports = exports['default'];

        /***/
      },
      /* 118 */
      /***/ function(module, exports, __webpack_require__) {
        var parent = __webpack_require__(119);

        module.exports = parent;

        /***/
      },
      /* 119 */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(120);

        var path = __webpack_require__(14);

        module.exports = path.Object.entries;

        /***/
      },
      /* 120 */
      /***/ function(module, exports, __webpack_require__) {
        var $ = __webpack_require__(4);

        var $entries = __webpack_require__(121).entries; // `Object.entries` method
        // https://tc39.github.io/ecma262/#sec-object.entries

        $(
          {
            target: 'Object',
            stat: true
          },
          {
            entries: function entries(O) {
              return $entries(O);
            }
          }
        );

        /***/
      },
      /* 121 */
      /***/ function(module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(7);

        var objectKeys = __webpack_require__(26);

        var toIndexedObject = __webpack_require__(19);

        var propertyIsEnumerable = __webpack_require__(30).f; // `Object.{ entries, values }` methods implementation

        var createMethod = function(TO_ENTRIES) {
          return function(it) {
            var O = toIndexedObject(it);
            var keys = objectKeys(O);
            var length = keys.length;
            var i = 0;
            var result = [];
            var key;

            while (length > i) {
              key = keys[i++];

              if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
                result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
              }
            }

            return result;
          };
        };

        module.exports = {
          // `Object.entries` method
          // https://tc39.github.io/ecma262/#sec-object.entries
          entries: createMethod(true),
          // `Object.values` method
          // https://tc39.github.io/ecma262/#sec-object.values
          values: createMethod(false)
        };

        /***/
      },
      /* 122 */
      /***/ function(module, exports, __webpack_require__) {
        var parent = __webpack_require__(58);

        module.exports = parent;

        /***/
      },
      /* 123 */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(124);

        var forEach = __webpack_require__(139);

        var classof = __webpack_require__(40);

        var ArrayPrototype = Array.prototype;
        var DOMIterables = {
          DOMTokenList: true,
          NodeList: true
        };

        module.exports = function(it) {
          var own = it.forEach;
          return it === ArrayPrototype ||
          (it instanceof Array && own === ArrayPrototype.forEach) || // eslint-disable-next-line no-prototype-builtins
            DOMIterables.hasOwnProperty(classof(it))
            ? forEach
            : own;
        };

        /***/
      },
      /* 124 */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(125);

        var DOMIterables = __webpack_require__(138);

        var global = __webpack_require__(6);

        var classof = __webpack_require__(40);

        var createNonEnumerableProperty = __webpack_require__(11);

        var Iterators = __webpack_require__(28);

        var wellKnownSymbol = __webpack_require__(9);

        var TO_STRING_TAG = wellKnownSymbol('toStringTag');

        for (var COLLECTION_NAME in DOMIterables) {
          var Collection = global[COLLECTION_NAME];
          var CollectionPrototype = Collection && Collection.prototype;

          if (
            CollectionPrototype &&
            classof(CollectionPrototype) !== TO_STRING_TAG
          ) {
            createNonEnumerableProperty(
              CollectionPrototype,
              TO_STRING_TAG,
              COLLECTION_NAME
            );
          }

          Iterators[COLLECTION_NAME] = Iterators.Array;
        }

        /***/
      },
      /* 125 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var toIndexedObject = __webpack_require__(19);

        var addToUnscopables = __webpack_require__(126);

        var Iterators = __webpack_require__(28);

        var InternalStateModule = __webpack_require__(127);

        var defineIterator = __webpack_require__(130);

        var ARRAY_ITERATOR = 'Array Iterator';
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.entries
        // `Array.prototype.keys` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.keys
        // `Array.prototype.values` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.values
        // `Array.prototype[@@iterator]` method
        // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
        // `CreateArrayIterator` internal method
        // https://tc39.github.io/ecma262/#sec-createarrayiterator

        module.exports = defineIterator(
          Array,
          'Array',
          function(iterated, kind) {
            setInternalState(this, {
              type: ARRAY_ITERATOR,
              target: toIndexedObject(iterated),
              // target
              index: 0,
              // next index
              kind: kind // kind
            }); // `%ArrayIteratorPrototype%.next` method
            // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
          },
          function() {
            var state = getInternalState(this);
            var target = state.target;
            var kind = state.kind;
            var index = state.index++;

            if (!target || index >= target.length) {
              state.target = undefined;
              return {
                value: undefined,
                done: true
              };
            }

            if (kind == 'keys')
              return {
                value: index,
                done: false
              };
            if (kind == 'values')
              return {
                value: target[index],
                done: false
              };
            return {
              value: [index, target[index]],
              done: false
            };
          },
          'values'
        ); // argumentsList[@@iterator] is %ArrayProto_values%
        // https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
        // https://tc39.github.io/ecma262/#sec-createmappedargumentsobject

        Iterators.Arguments = Iterators.Array; // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

        addToUnscopables('keys');
        addToUnscopables('values');
        addToUnscopables('entries');

        /***/
      },
      /* 126 */
      /***/ function(module, exports) {
        module.exports = function() {
          /* empty */
        };

        /***/
      },
      /* 127 */
      /***/ function(module, exports, __webpack_require__) {
        var NATIVE_WEAK_MAP = __webpack_require__(128);

        var global = __webpack_require__(6);

        var isObject = __webpack_require__(10);

        var createNonEnumerableProperty = __webpack_require__(11);

        var objectHas = __webpack_require__(8);

        var sharedKey = __webpack_require__(36);

        var hiddenKeys = __webpack_require__(35);

        var WeakMap = global.WeakMap;
        var set, get, has;

        var enforce = function(it) {
          return has(it) ? get(it) : set(it, {});
        };

        var getterFor = function(TYPE) {
          return function(it) {
            var state;

            if (!isObject(it) || (state = get(it)).type !== TYPE) {
              throw TypeError('Incompatible receiver, ' + TYPE + ' required');
            }

            return state;
          };
        };

        if (NATIVE_WEAK_MAP) {
          var store = new WeakMap();
          var wmget = store.get;
          var wmhas = store.has;
          var wmset = store.set;

          set = function(it, metadata) {
            wmset.call(store, it, metadata);
            return metadata;
          };

          get = function(it) {
            return wmget.call(store, it) || {};
          };

          has = function(it) {
            return wmhas.call(store, it);
          };
        } else {
          var STATE = sharedKey('state');
          hiddenKeys[STATE] = true;

          set = function(it, metadata) {
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };

          get = function(it) {
            return objectHas(it, STATE) ? it[STATE] : {};
          };

          has = function(it) {
            return objectHas(it, STATE);
          };
        }

        module.exports = {
          set: set,
          get: get,
          has: has,
          enforce: enforce,
          getterFor: getterFor
        };

        /***/
      },
      /* 128 */
      /***/ function(module, exports, __webpack_require__) {
        var global = __webpack_require__(6);

        var inspectSource = __webpack_require__(129);

        var WeakMap = global.WeakMap;
        module.exports =
          typeof WeakMap === 'function' &&
          /native code/.test(inspectSource(WeakMap));

        /***/
      },
      /* 129 */
      /***/ function(module, exports, __webpack_require__) {
        var store = __webpack_require__(56);

        var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

        if (typeof store.inspectSource != 'function') {
          store.inspectSource = function(it) {
            return functionToString.call(it);
          };
        }

        module.exports = store.inspectSource;

        /***/
      },
      /* 130 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(4);

        var createIteratorConstructor = __webpack_require__(131);

        var getPrototypeOf = __webpack_require__(62);

        var setPrototypeOf = __webpack_require__(135);

        var setToStringTag = __webpack_require__(64);

        var createNonEnumerableProperty = __webpack_require__(11);

        var redefine = __webpack_require__(137);

        var wellKnownSymbol = __webpack_require__(9);

        var IS_PURE = __webpack_require__(37);

        var Iterators = __webpack_require__(28);

        var IteratorsCore = __webpack_require__(61);

        var IteratorPrototype = IteratorsCore.IteratorPrototype;
        var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
        var ITERATOR = wellKnownSymbol('iterator');
        var KEYS = 'keys';
        var VALUES = 'values';
        var ENTRIES = 'entries';

        var returnThis = function() {
          return this;
        };

        module.exports = function(
          Iterable,
          NAME,
          IteratorConstructor,
          next,
          DEFAULT,
          IS_SET,
          FORCED
        ) {
          createIteratorConstructor(IteratorConstructor, NAME, next);

          var getIterationMethod = function(KIND) {
            if (KIND === DEFAULT && defaultIterator) return defaultIterator;
            if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
              return IterablePrototype[KIND];

            switch (KIND) {
              case KEYS:
                return function keys() {
                  return new IteratorConstructor(this, KIND);
                };

              case VALUES:
                return function values() {
                  return new IteratorConstructor(this, KIND);
                };

              case ENTRIES:
                return function entries() {
                  return new IteratorConstructor(this, KIND);
                };
            }

            return function() {
              return new IteratorConstructor(this);
            };
          };

          var TO_STRING_TAG = NAME + ' Iterator';
          var INCORRECT_VALUES_NAME = false;
          var IterablePrototype = Iterable.prototype;
          var nativeIterator =
            IterablePrototype[ITERATOR] ||
            IterablePrototype['@@iterator'] ||
            (DEFAULT && IterablePrototype[DEFAULT]);
          var defaultIterator =
            (!BUGGY_SAFARI_ITERATORS && nativeIterator) ||
            getIterationMethod(DEFAULT);
          var anyNativeIterator =
            NAME == 'Array'
              ? IterablePrototype.entries || nativeIterator
              : nativeIterator;
          var CurrentIteratorPrototype, methods, KEY; // fix native

          if (anyNativeIterator) {
            CurrentIteratorPrototype = getPrototypeOf(
              anyNativeIterator.call(new Iterable())
            );

            if (
              IteratorPrototype !== Object.prototype &&
              CurrentIteratorPrototype.next
            ) {
              if (
                !IS_PURE &&
                getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype
              ) {
                if (setPrototypeOf) {
                  setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                } else if (
                  typeof CurrentIteratorPrototype[ITERATOR] != 'function'
                ) {
                  createNonEnumerableProperty(
                    CurrentIteratorPrototype,
                    ITERATOR,
                    returnThis
                  );
                }
              } // Set @@toStringTag to native iterators

              setToStringTag(
                CurrentIteratorPrototype,
                TO_STRING_TAG,
                true,
                true
              );
              if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
            }
          } // fix Array#{values, @@iterator}.name in V8 / FF

          if (
            DEFAULT == VALUES &&
            nativeIterator &&
            nativeIterator.name !== VALUES
          ) {
            INCORRECT_VALUES_NAME = true;

            defaultIterator = function values() {
              return nativeIterator.call(this);
            };
          } // define iterator

          if (
            (!IS_PURE || FORCED) &&
            IterablePrototype[ITERATOR] !== defaultIterator
          ) {
            createNonEnumerableProperty(
              IterablePrototype,
              ITERATOR,
              defaultIterator
            );
          }

          Iterators[NAME] = defaultIterator; // export additional methods

          if (DEFAULT) {
            methods = {
              values: getIterationMethod(VALUES),
              keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
              entries: getIterationMethod(ENTRIES)
            };
            if (FORCED)
              for (KEY in methods) {
                if (
                  BUGGY_SAFARI_ITERATORS ||
                  INCORRECT_VALUES_NAME ||
                  !(KEY in IterablePrototype)
                ) {
                  redefine(IterablePrototype, KEY, methods[KEY]);
                }
              }
            else
              $(
                {
                  target: NAME,
                  proto: true,
                  forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
                },
                methods
              );
          }

          return methods;
        };

        /***/
      },
      /* 131 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var IteratorPrototype = __webpack_require__(61).IteratorPrototype;

        var create = __webpack_require__(50);

        var createPropertyDescriptor = __webpack_require__(22);

        var setToStringTag = __webpack_require__(64);

        var Iterators = __webpack_require__(28);

        var returnThis = function() {
          return this;
        };

        module.exports = function(IteratorConstructor, NAME, next) {
          var TO_STRING_TAG = NAME + ' Iterator';
          IteratorConstructor.prototype = create(IteratorPrototype, {
            next: createPropertyDescriptor(1, next)
          });
          setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
          Iterators[TO_STRING_TAG] = returnThis;
          return IteratorConstructor;
        };

        /***/
      },
      /* 132 */
      /***/ function(module, exports, __webpack_require__) {
        var fails = __webpack_require__(5);

        module.exports = !fails(function() {
          function F() {
            /* empty */
          }

          F.prototype.constructor = null;
          return Object.getPrototypeOf(new F()) !== F.prototype;
        });

        /***/
      },
      /* 133 */
      /***/ function(module, exports, __webpack_require__) {
        var NATIVE_SYMBOL = __webpack_require__(63);

        module.exports =
          NATIVE_SYMBOL && // eslint-disable-next-line no-undef
          !Symbol.sham && // eslint-disable-next-line no-undef
          typeof Symbol.iterator == 'symbol';

        /***/
      },
      /* 134 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var TO_STRING_TAG_SUPPORT = __webpack_require__(39);

        var classof = __webpack_require__(40); // `Object.prototype.toString` method implementation
        // https://tc39.github.io/ecma262/#sec-object.prototype.tostring

        module.exports = TO_STRING_TAG_SUPPORT
          ? {}.toString
          : function toString() {
              return '[object ' + classof(this) + ']';
            };

        /***/
      },
      /* 135 */
      /***/ function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(25);

        var aPossiblePrototype = __webpack_require__(136); // `Object.setPrototypeOf` method
        // https://tc39.github.io/ecma262/#sec-object.setprototypeof
        // Works with __proto__ only. Old v8 can't work with null proto objects.

        /* eslint-disable no-proto */

        module.exports =
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function() {
                var CORRECT_SETTER = false;
                var test = {};
                var setter;

                try {
                  setter = Object.getOwnPropertyDescriptor(
                    Object.prototype,
                    '__proto__'
                  ).set;
                  setter.call(test, []);
                  CORRECT_SETTER = test instanceof Array;
                } catch (error) {
                  /* empty */
                }

                return function setPrototypeOf(O, proto) {
                  anObject(O);
                  aPossiblePrototype(proto);
                  if (CORRECT_SETTER) setter.call(O, proto);
                  else O.__proto__ = proto;
                  return O;
                };
              })()
            : undefined);

        /***/
      },
      /* 136 */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(10);

        module.exports = function(it) {
          if (!isObject(it) && it !== null) {
            throw TypeError("Can't set " + String(it) + ' as a prototype');
          }

          return it;
        };

        /***/
      },
      /* 137 */
      /***/ function(module, exports, __webpack_require__) {
        var createNonEnumerableProperty = __webpack_require__(11);

        module.exports = function(target, key, value, options) {
          if (options && options.enumerable) target[key] = value;
          else createNonEnumerableProperty(target, key, value);
        };

        /***/
      },
      /* 138 */
      /***/ function(module, exports) {
        // iterable DOM collections
        // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
        module.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
        };

        /***/
      },
      /* 139 */
      /***/ function(module, exports, __webpack_require__) {
        var parent = __webpack_require__(140);

        module.exports = parent;

        /***/
      },
      /* 140 */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(141);

        var entryVirtual = __webpack_require__(12);

        module.exports = entryVirtual('Array').forEach;

        /***/
      },
      /* 141 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(4);

        var forEach = __webpack_require__(142); // `Array.prototype.forEach` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.foreach

        $(
          {
            target: 'Array',
            proto: true,
            forced: [].forEach != forEach
          },
          {
            forEach: forEach
          }
        );

        /***/
      },
      /* 142 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var $forEach = __webpack_require__(41).forEach;

        var arrayMethodIsStrict = __webpack_require__(38);

        var arrayMethodUsesToLength = __webpack_require__(20);

        var STRICT_METHOD = arrayMethodIsStrict('forEach');
        var USES_TO_LENGTH = arrayMethodUsesToLength('forEach'); // `Array.prototype.forEach` method implementation
        // https://tc39.github.io/ecma262/#sec-array.prototype.foreach

        module.exports =
          !STRICT_METHOD || !USES_TO_LENGTH
            ? function forEach(
                callbackfn
                /* , thisArg */
              ) {
                return $forEach(
                  this,
                  callbackfn,
                  arguments.length > 1 ? arguments[1] : undefined
                );
              }
            : [].forEach;

        /***/
      },
      /* 143 */
      /***/ function(module, exports, __webpack_require__) {
        var parent = __webpack_require__(144);

        module.exports = parent;

        /***/
      },
      /* 144 */
      /***/ function(module, exports, __webpack_require__) {
        var trim = __webpack_require__(145);

        var StringPrototype = String.prototype;

        module.exports = function(it) {
          var own = it.trim;
          return typeof it === 'string' ||
            it === StringPrototype ||
            (it instanceof String && own === StringPrototype.trim)
            ? trim
            : own;
        };

        /***/
      },
      /* 145 */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(146);

        var entryVirtual = __webpack_require__(12);

        module.exports = entryVirtual('String').trim;

        /***/
      },
      /* 146 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(4);

        var $trim = __webpack_require__(147).trim;

        var forcedStringTrimMethod = __webpack_require__(148); // `String.prototype.trim` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.trim

        $(
          {
            target: 'String',
            proto: true,
            forced: forcedStringTrimMethod('trim')
          },
          {
            trim: function trim() {
              return $trim(this);
            }
          }
        );

        /***/
      },
      /* 147 */
      /***/ function(module, exports, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__(32);

        var whitespaces = __webpack_require__(67);

        var whitespace = '[' + whitespaces + ']';
        var ltrim = RegExp('^' + whitespace + whitespace + '*');
        var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

        var createMethod = function(TYPE) {
          return function($this) {
            var string = String(requireObjectCoercible($this));
            if (TYPE & 1) string = string.replace(ltrim, '');
            if (TYPE & 2) string = string.replace(rtrim, '');
            return string;
          };
        };

        module.exports = {
          // `String.prototype.{ trimLeft, trimStart }` methods
          // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
          start: createMethod(1),
          // `String.prototype.{ trimRight, trimEnd }` methods
          // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
          end: createMethod(2),
          // `String.prototype.trim` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.trim
          trim: createMethod(3)
        };

        /***/
      },
      /* 148 */
      /***/ function(module, exports, __webpack_require__) {
        var fails = __webpack_require__(5);

        var whitespaces = __webpack_require__(67);

        var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
        // of whitespaces and has a correct name

        module.exports = function(METHOD_NAME) {
          return fails(function() {
            return (
              !!whitespaces[METHOD_NAME]() ||
              non[METHOD_NAME]() != non ||
              whitespaces[METHOD_NAME].name !== METHOD_NAME
            );
          });
        };

        /***/
      },
      /* 149 */
      /***/ function(module, exports, __webpack_require__) {
        var parent = __webpack_require__(150);

        module.exports = parent;

        /***/
      },
      /* 150 */
      /***/ function(module, exports, __webpack_require__) {
        var concat = __webpack_require__(151);

        var ArrayPrototype = Array.prototype;

        module.exports = function(it) {
          var own = it.concat;
          return it === ArrayPrototype ||
            (it instanceof Array && own === ArrayPrototype.concat)
            ? concat
            : own;
        };

        /***/
      },
      /* 151 */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(152);

        var entryVirtual = __webpack_require__(12);

        module.exports = entryVirtual('Array').concat;

        /***/
      },
      /* 152 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(4);

        var fails = __webpack_require__(5);

        var isArray = __webpack_require__(66);

        var isObject = __webpack_require__(10);

        var toObject = __webpack_require__(17);

        var toLength = __webpack_require__(27);

        var createProperty = __webpack_require__(153);

        var arraySpeciesCreate = __webpack_require__(65);

        var arrayMethodHasSpeciesSupport = __webpack_require__(42);

        var wellKnownSymbol = __webpack_require__(9);

        var V8_VERSION = __webpack_require__(68);

        var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
        var MAX_SAFE_INTEGER = 0x1fffffffffffff;
        var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
        // deoptimization and serious performance degradation
        // https://github.com/zloirock/core-js/issues/679

        var IS_CONCAT_SPREADABLE_SUPPORT =
          V8_VERSION >= 51 ||
          !fails(function() {
            var array = [];
            array[IS_CONCAT_SPREADABLE] = false;
            return array.concat()[0] !== array;
          });
        var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

        var isConcatSpreadable = function(O) {
          if (!isObject(O)) return false;
          var spreadable = O[IS_CONCAT_SPREADABLE];
          return spreadable !== undefined ? !!spreadable : isArray(O);
        };

        var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.concat
        // with adding support of @@isConcatSpreadable and @@species

        $(
          {
            target: 'Array',
            proto: true,
            forced: FORCED
          },
          {
            concat: function concat(arg) {
              // eslint-disable-line no-unused-vars
              var O = toObject(this);
              var A = arraySpeciesCreate(O, 0);
              var n = 0;
              var i, k, length, len, E;

              for (i = -1, length = arguments.length; i < length; i++) {
                E = i === -1 ? O : arguments[i];

                if (isConcatSpreadable(E)) {
                  len = toLength(E.length);
                  if (n + len > MAX_SAFE_INTEGER)
                    throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

                  for (k = 0; k < len; k++, n++)
                    if (k in E) createProperty(A, n, E[k]);
                } else {
                  if (n >= MAX_SAFE_INTEGER)
                    throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                  createProperty(A, n++, E);
                }
              }

              A.length = n;
              return A;
            }
          }
        );

        /***/
      },
      /* 153 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var toPrimitive = __webpack_require__(33);

        var definePropertyModule = __webpack_require__(24);

        var createPropertyDescriptor = __webpack_require__(22);

        module.exports = function(object, key, value) {
          var propertyKey = toPrimitive(key);
          if (propertyKey in object)
            definePropertyModule.f(
              object,
              propertyKey,
              createPropertyDescriptor(0, value)
            );
          else object[propertyKey] = value;
        };

        /***/
      },
      /* 154 */
      /***/ function(module, exports, __webpack_require__) {
        var getBuiltIn = __webpack_require__(54);

        module.exports = getBuiltIn('navigator', 'userAgent') || '';

        /***/
      },
      /* 155 */
      /***/ function(module, exports, __webpack_require__) {
        var parent = __webpack_require__(156);

        module.exports = parent;

        /***/
      },
      /* 156 */
      /***/ function(module, exports, __webpack_require__) {
        var filter = __webpack_require__(157);

        var ArrayPrototype = Array.prototype;

        module.exports = function(it) {
          var own = it.filter;
          return it === ArrayPrototype ||
            (it instanceof Array && own === ArrayPrototype.filter)
            ? filter
            : own;
        };

        /***/
      },
      /* 157 */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(158);

        var entryVirtual = __webpack_require__(12);

        module.exports = entryVirtual('Array').filter;

        /***/
      },
      /* 158 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(4);

        var $filter = __webpack_require__(41).filter;

        var arrayMethodHasSpeciesSupport = __webpack_require__(42);

        var arrayMethodUsesToLength = __webpack_require__(20);

        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // Edge 14- issue

        var USES_TO_LENGTH = arrayMethodUsesToLength('filter'); // `Array.prototype.filter` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.filter
        // with adding support of @@species

        $(
          {
            target: 'Array',
            proto: true,
            forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
          },
          {
            filter: function filter(
              callbackfn
              /* , thisArg */
            ) {
              return $filter(
                this,
                callbackfn,
                arguments.length > 1 ? arguments[1] : undefined
              );
            }
          }
        );

        /***/
      },
      /* 159 */
      /***/ function(module, exports, __webpack_require__) {
        var parent = __webpack_require__(160);

        module.exports = parent;

        /***/
      },
      /* 160 */
      /***/ function(module, exports, __webpack_require__) {
        var reduce = __webpack_require__(161);

        var ArrayPrototype = Array.prototype;

        module.exports = function(it) {
          var own = it.reduce;
          return it === ArrayPrototype ||
            (it instanceof Array && own === ArrayPrototype.reduce)
            ? reduce
            : own;
        };

        /***/
      },
      /* 161 */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(162);

        var entryVirtual = __webpack_require__(12);

        module.exports = entryVirtual('Array').reduce;

        /***/
      },
      /* 162 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(4);

        var $reduce = __webpack_require__(163).left;

        var arrayMethodIsStrict = __webpack_require__(38);

        var arrayMethodUsesToLength = __webpack_require__(20);

        var STRICT_METHOD = arrayMethodIsStrict('reduce');
        var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', {
          1: 0
        }); // `Array.prototype.reduce` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.reduce

        $(
          {
            target: 'Array',
            proto: true,
            forced: !STRICT_METHOD || !USES_TO_LENGTH
          },
          {
            reduce: function reduce(
              callbackfn
              /* , initialValue */
            ) {
              return $reduce(
                this,
                callbackfn,
                arguments.length,
                arguments.length > 1 ? arguments[1] : undefined
              );
            }
          }
        );

        /***/
      },
      /* 163 */
      /***/ function(module, exports, __webpack_require__) {
        var aFunction = __webpack_require__(34);

        var toObject = __webpack_require__(17);

        var IndexedObject = __webpack_require__(23);

        var toLength = __webpack_require__(27); // `Array.prototype.{ reduce, reduceRight }` methods implementation

        var createMethod = function(IS_RIGHT) {
          return function(that, callbackfn, argumentsLength, memo) {
            aFunction(callbackfn);
            var O = toObject(that);
            var self = IndexedObject(O);
            var length = toLength(O.length);
            var index = IS_RIGHT ? length - 1 : 0;
            var i = IS_RIGHT ? -1 : 1;
            if (argumentsLength < 2)
              while (true) {
                if (index in self) {
                  memo = self[index];
                  index += i;
                  break;
                }

                index += i;

                if (IS_RIGHT ? index < 0 : length <= index) {
                  throw TypeError(
                    'Reduce of empty array with no initial value'
                  );
                }
              }

            for (; IS_RIGHT ? index >= 0 : length > index; index += i)
              if (index in self) {
                memo = callbackfn(memo, self[index], index, O);
              }

            return memo;
          };
        };

        module.exports = {
          // `Array.prototype.reduce` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
          left: createMethod(false),
          // `Array.prototype.reduceRight` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
          right: createMethod(true)
        };

        /***/
      },
      /* 164 */
      /***/ function(module, exports, __webpack_require__) {
        var parent = __webpack_require__(165);

        module.exports = parent;

        /***/
      },
      /* 165 */
      /***/ function(module, exports, __webpack_require__) {
        var map = __webpack_require__(166);

        var ArrayPrototype = Array.prototype;

        module.exports = function(it) {
          var own = it.map;
          return it === ArrayPrototype ||
            (it instanceof Array && own === ArrayPrototype.map)
            ? map
            : own;
        };

        /***/
      },
      /* 166 */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(167);

        var entryVirtual = __webpack_require__(12);

        module.exports = entryVirtual('Array').map;

        /***/
      },
      /* 167 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(4);

        var $map = __webpack_require__(41).map;

        var arrayMethodHasSpeciesSupport = __webpack_require__(42);

        var arrayMethodUsesToLength = __webpack_require__(20);

        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // FF49- issue

        var USES_TO_LENGTH = arrayMethodUsesToLength('map'); // `Array.prototype.map` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.map
        // with adding support of @@species

        $(
          {
            target: 'Array',
            proto: true,
            forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
          },
          {
            map: function map(
              callbackfn
              /* , thisArg */
            ) {
              return $map(
                this,
                callbackfn,
                arguments.length > 1 ? arguments[1] : undefined
              );
            }
          }
        );

        /***/
      },
      /* 168 */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        var bootstrapUtils_namespaceObject = {};
        __webpack_require__.r(bootstrapUtils_namespaceObject);
        __webpack_require__.d(
          bootstrapUtils_namespaceObject,
          'prefix',
          function() {
            return prefix;
          }
        );
        __webpack_require__.d(
          bootstrapUtils_namespaceObject,
          'bsClass',
          function() {
            return bootstrapUtils_bsClass;
          }
        );
        __webpack_require__.d(
          bootstrapUtils_namespaceObject,
          'bsStyles',
          function() {
            return bsStyles;
          }
        );
        __webpack_require__.d(
          bootstrapUtils_namespaceObject,
          'bsSizes',
          function() {
            return bsSizes;
          }
        );
        __webpack_require__.d(
          bootstrapUtils_namespaceObject,
          'getClassSet',
          function() {
            return getClassSet;
          }
        );
        __webpack_require__.d(
          bootstrapUtils_namespaceObject,
          'splitBsProps',
          function() {
            return splitBsProps;
          }
        );
        __webpack_require__.d(
          bootstrapUtils_namespaceObject,
          'splitBsPropsAndOmit',
          function() {
            return splitBsPropsAndOmit;
          }
        );
        __webpack_require__.d(
          bootstrapUtils_namespaceObject,
          'addStyle',
          function() {
            return addStyle;
          }
        );
        __webpack_require__.d(
          bootstrapUtils_namespaceObject,
          '_curry',
          function() {
            return _curry;
          }
        );
        var utils_namespaceObject = {};
        __webpack_require__.r(utils_namespaceObject);
        __webpack_require__.d(
          utils_namespaceObject,
          'bootstrapUtils',
          function() {
            return bootstrapUtils_namespaceObject;
          }
        );
        __webpack_require__.d(
          utils_namespaceObject,
          'createChainedFunction',
          function() {
            return utils_createChainedFunction;
          }
        );
        __webpack_require__.d(
          utils_namespaceObject,
          'ValidComponentChildren',
          function() {
            return ValidComponentChildren;
          }
        );

        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/object/create.js
        var create = __webpack_require__(69);
        var create_default = /*#__PURE__*/ __webpack_require__.n(create);

        // CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/inheritsLoose.js

        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = create_default()(superClass.prototype);
          subClass.prototype.constructor = subClass;
          subClass.__proto__ = superClass;
        }
        // EXTERNAL MODULE: ./node_modules/prop-types/index.js
        var prop_types = __webpack_require__(1);
        var prop_types_default = /*#__PURE__*/ __webpack_require__.n(
          prop_types
        );

        // EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
        var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(
          0
        );
        var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/ __webpack_require__.n(
          external_root_React_commonjs2_react_commonjs_react_amd_react_
        );

        // CONCATENATED MODULE: ./src/CloseButton.js

        var _jsxFileName =
          '/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/CloseButton.js';

        var CloseButton_propTypes = {
          label: prop_types_default.a.string.isRequired,
          onClick: prop_types_default.a.func
        };
        var CloseButton_defaultProps = {
          label: 'Close'
        };

        var CloseButton_CloseButton = /*#__PURE__*/ (function(
          _React$Component
        ) {
          _inheritsLoose(CloseButton, _React$Component);

          function CloseButton() {
            return _React$Component.apply(this, arguments) || this;
          }

          var _proto = CloseButton.prototype;

          _proto.render = function render() {
            var _this$props = this.props,
              label = _this$props.label,
              onClick = _this$props.onClick;
            return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              'button',
              {
                type: 'button',
                className: 'close',
                onClick: onClick,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 7
                }
              },
              /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                'span',
                {
                  'aria-hidden': 'true',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 9
                  }
                },
                '\xD7'
              ),
              /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                'span',
                {
                  className: 'sr-only',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 9
                  }
                },
                label
              )
            );
          };

          return CloseButton;
        })(
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a
            .Component
        );

        CloseButton_CloseButton.propTypes = CloseButton_propTypes;
        CloseButton_CloseButton.defaultProps = CloseButton_defaultProps;
        /* harmony default export */ var src_CloseButton = CloseButton_CloseButton;
        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/object/assign.js
        var object_assign = __webpack_require__(70);
        var assign_default = /*#__PURE__*/ __webpack_require__.n(object_assign);

        // CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/extends.js

        function _extends() {
          _extends =
            assign_default.a ||
            function(target) {
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

          return _extends.apply(this, arguments);
        }
        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js
        var index_of = __webpack_require__(71);
        var index_of_default = /*#__PURE__*/ __webpack_require__.n(index_of);

        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js/object/keys.js
        var keys = __webpack_require__(72);
        var keys_default = /*#__PURE__*/ __webpack_require__.n(keys);

        // CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose.js

        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};

          var sourceKeys = keys_default()(source);

          var key, i;

          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (index_of_default()(excluded).call(excluded, key) >= 0) continue;
            target[key] = source[key];
          }

          return target;
        }
        // EXTERNAL MODULE: ./node_modules/classnames/index.js
        var classnames = __webpack_require__(3);
        var classnames_default = /*#__PURE__*/ __webpack_require__.n(
          classnames
        );

        // EXTERNAL MODULE: ./node_modules/react-transition-group/Transition.js
        var react_transition_group_Transition = __webpack_require__(29);
        var Transition_default = /*#__PURE__*/ __webpack_require__.n(
          react_transition_group_Transition
        );

        // CONCATENATED MODULE: ./src/Fade.js

        var _fadeStyles,
          Fade_jsxFileName =
            '/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/Fade.js';

        var Fade_propTypes = {
          /**
           * Show the component; triggers the fade in or fade out animation
           */
          in: prop_types_default.a.bool,

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
          in: false,
          timeout: 300,
          mountOnEnter: false,
          unmountOnExit: false,
          appear: false
        };
        var fadeStyles = ((_fadeStyles = {}),
        (_fadeStyles[react_transition_group_Transition['ENTERING']] = 'in'),
        (_fadeStyles[react_transition_group_Transition['ENTERED']] = 'in'),
        _fadeStyles);

        var Fade_Fade = /*#__PURE__*/ (function(_React$Component) {
          _inheritsLoose(Fade, _React$Component);

          function Fade() {
            return _React$Component.apply(this, arguments) || this;
          }

          var _proto = Fade.prototype;

          _proto.render = function render() {
            var _this$props = this.props,
              className = _this$props.className,
              children = _this$props.children,
              props = _objectWithoutPropertiesLoose(_this$props, [
                'className',
                'children'
              ]);

            return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              Transition_default.a,
              _extends({}, props, {
                __self: this,
                __source: {
                  fileName: Fade_jsxFileName,
                  lineNumber: 82,
                  columnNumber: 7
                }
              }),
              function(status, innerProps) {
                return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(
                  children,
                  _extends({}, innerProps, {
                    className: classnames_default()(
                      'fade',
                      className,
                      children.props.className,
                      fadeStyles[status]
                    )
                  })
                );
              }
            );
          };

          return Fade;
        })(
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a
            .Component
        );

        Fade_Fade.propTypes = Fade_propTypes;
        Fade_Fade.defaultProps = Fade_defaultProps;
        /* harmony default export */ var src_Fade = Fade_Fade;
        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js
        var bind = __webpack_require__(18);
        var bind_default = /*#__PURE__*/ __webpack_require__.n(bind);

        // CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js
        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }

          return self;
        }
        // EXTERNAL MODULE: ./node_modules/dom-helpers/events/index.js
        var events = __webpack_require__(44);
        var events_default = /*#__PURE__*/ __webpack_require__.n(events);

        // EXTERNAL MODULE: ./node_modules/dom-helpers/ownerDocument.js
        var ownerDocument = __webpack_require__(73);
        var ownerDocument_default = /*#__PURE__*/ __webpack_require__.n(
          ownerDocument
        );

        // EXTERNAL MODULE: ./node_modules/dom-helpers/util/inDOM.js
        var inDOM = __webpack_require__(16);
        var inDOM_default = /*#__PURE__*/ __webpack_require__.n(inDOM);

        // EXTERNAL MODULE: ./node_modules/dom-helpers/util/scrollbarSize.js
        var scrollbarSize = __webpack_require__(45);
        var scrollbarSize_default = /*#__PURE__*/ __webpack_require__.n(
          scrollbarSize
        );

        // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
        function extends_extends() {
          return (
            (extends_extends = Object.assign
              ? Object.assign.bind()
              : function(n) {
                  for (var e = 1; e < arguments.length; e++) {
                    var t = arguments[e];

                    for (var r in t)
                      ({}.hasOwnProperty.call(t, r) && (n[r] = t[r]));
                  }

                  return n;
                }),
            extends_extends.apply(null, arguments)
          );
        }

        // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
        function objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(
          r,
          e
        ) {
          if (null == r) return {};
          var t = {};

          for (var n in r)
            if ({}.hasOwnProperty.call(r, n)) {
              if (-1 !== e.indexOf(n)) continue;
              t[n] = r[n];
            }

          return t;
        }

        // CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/ownerDocument.js
        /**
         * Returns the owner document of a given element.
         *
         * @param node the element
         */
        function ownerDocument_ownerDocument(node) {
          return (node && node.ownerDocument) || document;
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
          } // Support: IE 9 only
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
          if (context.compareDocumentPosition)
            return (
              context === node || !!(context.compareDocumentPosition(node) & 16)
            );
        }
        // CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/canUseDOM.js
        /* harmony default export */ var canUseDOM = !!(
          typeof window !== 'undefined' &&
          window.document &&
          window.document.createElement
        );
        // CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/addEventListener.js
        /* eslint-disable no-return-assign */

        var optionsSupported = false;
        var onceSupported = false;

        try {
          var addEventListener_options = {
            get passive() {
              return (optionsSupported = true);
            },

            get once() {
              // eslint-disable-next-line no-multi-assign
              return (onceSupported = optionsSupported = true);
            }
          };

          if (canUseDOM) {
            window.addEventListener(
              'test',
              addEventListener_options,
              addEventListener_options
            );
            window.removeEventListener('test', addEventListener_options, true);
          }
        } catch (e) {}
        /* */

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
              wrappedHandler =
                handler.__once ||
                function onceHandler(event) {
                  this.removeEventListener(eventName, onceHandler, capture);
                  handler.call(this, event);
                };

              handler.__once = wrappedHandler;
            }

            node.addEventListener(
              eventName,
              wrappedHandler,
              optionsSupported ? options : capture
            );
          }

          node.addEventListener(eventName, handler, options);
        }

        /* harmony default export */ var esm_addEventListener = addEventListener;
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
          var capture =
            options && typeof options !== 'boolean' ? options.capture : options;
          node.removeEventListener(eventName, handler, capture);

          if (handler.__once) {
            node.removeEventListener(eventName, handler.__once, capture);
          }
        }

        /* harmony default export */ var esm_removeEventListener = removeEventListener;
        // CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/listen.js

        function listen(node, eventName, handler, options) {
          esm_addEventListener(node, eventName, handler, options);
          return function() {
            esm_removeEventListener(node, eventName, handler, options);
          };
        }

        /* harmony default export */ var esm_listen = listen;
        // EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
        var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ = __webpack_require__(
          43
        );
        var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default = /*#__PURE__*/ __webpack_require__.n(
          external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_
        );

        // CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useMounted.js

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
          const mounted = Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useRef'
            ]
          )(true);
          const isMounted = Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useRef'
            ]
          )(() => mounted.current);
          Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useEffect'
            ]
          )(() => {
            mounted.current = true;
            return () => {
              mounted.current = false;
            };
          }, []);
          return isMounted.current;
        }
        // CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useUpdatedRef.js

        /**
         * Returns a ref that is immediately updated with the new value
         *
         * @param value The Ref value
         * @category refs
         */

        function useUpdatedRef(value) {
          const valueRef = Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useRef'
            ]
          )(value);
          valueRef.current = value;
          return valueRef;
        }
        // CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useWillUnmount.js

        /**
         * Attach a callback that fires when a component unmounts
         *
         * @param fn Handler to run when the component unmounts
         * @category effects
         */

        function useWillUnmount(fn) {
          const onUnmount = useUpdatedRef(fn);
          Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useEffect'
            ]
          )(() => () => onUnmount.current(), []);
        }
        // CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/usePrevious.js

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
          const ref = Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useRef'
            ]
          )(null);
          Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useEffect'
            ]
          )(() => {
            ref.current = value;
          });
          return ref.current;
        }
        // CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useCommittedRef.js

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
          const ref = Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useRef'
            ]
          )(value);
          Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useEffect'
            ]
          )(
            () => {
              ref.current = value;
            },
            [value]
          );
          return ref;
        }

        /* harmony default export */ var esm_useCommittedRef = useCommittedRef;
        // CONCATENATED MODULE: ./node_modules/@restart/hooks/esm/useEventCallback.js

        function useEventCallback(fn) {
          const ref = esm_useCommittedRef(fn);
          return Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useCallback'
            ]
          )(
            function(...args) {
              return ref.current && ref.current(...args);
            },
            [ref]
          );
        }
        // CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/hasClass.js
        /**
         * Checks if a given element has a CSS class.
         *
         * @param element the element
         * @param className the CSS class name
         */
        function hasClass(element, className) {
          if (element.classList)
            return !!className && element.classList.contains(className);
          return (
            (
              ' ' +
              (element.className.baseVal || element.className) +
              ' '
            ).indexOf(' ' + className + ' ') !== -1
          );
        }
        // CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/addClass.js

        /**
         * Adds a CSS class to a given element.
         *
         * @param element the element
         * @param className the CSS class name
         */

        function addClass(element, className) {
          if (element.classList) element.classList.add(className);
          else if (!hasClass(element, className))
            if (typeof element.className === 'string')
              element.className = element.className + ' ' + className;
            else
              element.setAttribute(
                'class',
                ((element.className && element.className.baseVal) || '') +
                  ' ' +
                  className
              );
        }
        // CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/removeClass.js
        function replaceClassName(origClass, classToRemove) {
          return origClass
            .replace(
              new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'),
              '$1'
            )
            .replace(/\s+/g, ' ')
            .replace(/^\s*|\s*$/g, '');
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
            element.setAttribute(
              'class',
              replaceClassName(
                (element.className && element.className.baseVal) || '',
                className
              )
            );
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
          return (doc && doc.defaultView) || window;
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
            return (
              node.style.getPropertyValue(hyphenateStyleName(property)) ||
              getComputedStyle(node).getPropertyValue(
                hyphenateStyleName(property)
              )
            );
          }

          Object.keys(property).forEach(function(key) {
            var value = property[key];

            if (!value && value !== 0) {
              node.style.removeProperty(hyphenateStyleName(key));
            } else if (isTransform(key)) {
              transforms += key + '(' + value + ') ';
            } else {
              css += hyphenateStyleName(key) + ': ' + value + ';';
            }
          });

          if (transforms) {
            css += 'transform: ' + transforms + ';';
          }

          node.style.cssText += ';' + css;
        }

        /* harmony default export */ var esm_css = css_style;
        // CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/scrollbarSize.js

        var scrollbarSize_size;
        function scrollbarSize_scrollbarSize(recalc) {
          if ((!scrollbarSize_size && scrollbarSize_size !== 0) || recalc) {
            if (canUseDOM) {
              var scrollDiv = document.createElement('div');
              scrollDiv.style.position = 'absolute';
              scrollDiv.style.top = '-9999px';
              scrollDiv.style.width = '50px';
              scrollDiv.style.height = '50px';
              scrollDiv.style.overflow = 'scroll';
              document.body.appendChild(scrollDiv);
              scrollbarSize_size =
                scrollDiv.offsetWidth - scrollDiv.clientWidth;
              document.body.removeChild(scrollDiv);
            }
          }

          return scrollbarSize_size;
        }
        // CONCATENATED MODULE: ./node_modules/react-overlays/node_modules/dom-helpers/esm/isDocument.js
        function isDocument(element) {
          return (
            'nodeType' in element && element.nodeType === document.DOCUMENT_NODE
          );
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
          var doc = isWindow(node)
            ? ownerDocument_ownerDocument()
            : ownerDocument_ownerDocument(node);
          var win = isWindow(node) || doc.defaultView;
          return doc.body.clientWidth < win.innerWidth;
        }

        function isOverflowing(container) {
          var win = isWindow(container);
          return win || isBody(container)
            ? isOverflowing_bodyIsOverflowing(container)
            : container.scrollHeight > container.clientHeight;
        }
        // CONCATENATED MODULE: ./node_modules/react-overlays/esm/manageAriaHidden.js
        var BLACKLIST = ['template', 'script', 'style'];

        var isHidable = function isHidable(_ref) {
          var nodeType = _ref.nodeType,
            tagName = _ref.tagName;
          return (
            nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1
          );
        };

        var siblings = function siblings(container, exclude, cb) {
          [].forEach.call(container.children, function(node) {
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
          siblings(container, [dialog, backdrop], function(node) {
            return ariaHidden(true, node);
          });
        }
        function showSiblings(container, _ref3) {
          var dialog = _ref3.dialog,
            backdrop = _ref3.backdrop;
          siblings(container, [dialog, backdrop], function(node) {
            return ariaHidden(false, node);
          });
        }
        // CONCATENATED MODULE: ./node_modules/react-overlays/esm/ModalManager.js

        function findIndexOf(arr, cb) {
          var idx = -1;
          arr.some(function(d, i) {
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

        var ModalManager_ModalManager = /*#__PURE__*/ (function() {
          function ModalManager(_temp) {
            var _ref = _temp === void 0 ? {} : _temp,
              _ref$hideSiblingNodes = _ref.hideSiblingNodes,
              hideSiblingNodes =
                _ref$hideSiblingNodes === void 0 ? true : _ref$hideSiblingNodes,
              _ref$handleContainerO = _ref.handleContainerOverflow,
              handleContainerOverflow =
                _ref$handleContainerO === void 0 ? true : _ref$handleContainerO;

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

          _proto.isContainerOverflowing = function isContainerOverflowing(
            modal
          ) {
            var data = this.data[this.containerIndexFromModal(modal)];
            return data && data.overflowing;
          };

          _proto.containerIndexFromModal = function containerIndexFromModal(
            modal
          ) {
            return findIndexOf(this.data, function(d) {
              return d.modals.indexOf(modal) !== -1;
            });
          };

          _proto.setContainerStyle = function setContainerStyle(
            containerState,
            container
          ) {
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
              style.paddingRight =
                parseInt(esm_css(container, 'paddingRight') || '0', 10) +
                this.scrollbarSize +
                'px';
            }

            esm_css(container, style);
          };

          _proto.removeContainerStyle = function removeContainerStyle(
            containerState,
            container
          ) {
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
            return (
              !!this.modals.length &&
              this.modals[this.modals.length - 1] === modal
            );
          };

          return ModalManager;
        })();

        /* harmony default export */ var esm_ModalManager = ModalManager_ModalManager;
        // CONCATENATED MODULE: ./node_modules/react-overlays/esm/useWaitForDOMRef.js

        var useWaitForDOMRef_resolveContainerRef = function resolveContainerRef(
          ref
        ) {
          var _ref;

          if (typeof document === 'undefined') return null;
          if (ref == null) return ownerDocument_ownerDocument().body;
          if (typeof ref === 'function') ref = ref();
          if (ref && 'current' in ref) ref = ref.current;
          if ((_ref = ref) != null && _ref.nodeType) return ref || null;
          return null;
        };
        function useWaitForDOMRef(ref, onResolved) {
          var _useState = Object(
              external_root_React_commonjs2_react_commonjs_react_amd_react_[
                'useState'
              ]
            )(function() {
              return useWaitForDOMRef_resolveContainerRef(ref);
            }),
            resolvedRef = _useState[0],
            setRef = _useState[1];

          if (!resolvedRef) {
            var earlyRef = useWaitForDOMRef_resolveContainerRef(ref);
            if (earlyRef) setRef(earlyRef);
          }

          Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useEffect'
            ]
          )(
            function() {
              if (onResolved && resolvedRef) {
                onResolved(resolvedRef);
              }
            },
            [onResolved, resolvedRef]
          );
          Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useEffect'
            ]
          )(
            function() {
              var nextRef = useWaitForDOMRef_resolveContainerRef(ref);

              if (nextRef !== resolvedRef) {
                setRef(nextRef);
              }
            },
            [ref, resolvedRef]
          );
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
          var modal = Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useRef'
            ]
          )({
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
            setDialogRef: Object(
              external_root_React_commonjs2_react_commonjs_react_amd_react_[
                'useCallback'
              ]
            )(function(ref) {
              modal.current.dialog = ref;
            }, []),
            setBackdropRef: Object(
              external_root_React_commonjs2_react_commonjs_react_amd_react_[
                'useCallback'
              ]
            )(function(ref) {
              modal.current.backdrop = ref;
            }, [])
          });
        }

        var Modal_Modal = /*#__PURE__*/ Object(
          external_root_React_commonjs2_react_commonjs_react_amd_react_[
            'forwardRef'
          ]
        )(function(_ref, ref) {
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
            enforceFocus =
              _ref$enforceFocus === void 0 ? true : _ref$enforceFocus,
            _ref$restoreFocus = _ref.restoreFocus,
            restoreFocus =
              _ref$restoreFocus === void 0 ? true : _ref$restoreFocus,
            restoreFocusOptions = _ref.restoreFocusOptions,
            renderDialog = _ref.renderDialog,
            _ref$renderBackdrop = _ref.renderBackdrop,
            renderBackdrop =
              _ref$renderBackdrop === void 0
                ? function(props) {
                    return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                      'div',
                      props
                    );
                  }
                : _ref$renderBackdrop,
            providedManager = _ref.manager,
            containerRef = _ref.container,
            containerClassName = _ref.containerClassName,
            onShow = _ref.onShow,
            _ref$onHide = _ref.onHide,
            onHide = _ref$onHide === void 0 ? function() {} : _ref$onHide,
            onExit = _ref.onExit,
            onExited = _ref.onExited,
            onExiting = _ref.onExiting,
            onEnter = _ref.onEnter,
            onEntering = _ref.onEntering,
            onEntered = _ref.onEntered,
            rest = objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(
              _ref,
              [
                'show',
                'role',
                'className',
                'style',
                'children',
                'backdrop',
                'keyboard',
                'onBackdropClick',
                'onEscapeKeyDown',
                'transition',
                'backdropTransition',
                'autoFocus',
                'enforceFocus',
                'restoreFocus',
                'restoreFocusOptions',
                'renderDialog',
                'renderBackdrop',
                'manager',
                'container',
                'containerClassName',
                'onShow',
                'onHide',
                'onExit',
                'onExited',
                'onExiting',
                'onEnter',
                'onEntering',
                'onEntered'
              ]
            );

          var container = useWaitForDOMRef(containerRef);
          var modal = useModalManager(providedManager);
          var isMounted = useMounted();
          var prevShow = usePrevious(show);

          var _useState = Object(
              external_root_React_commonjs2_react_commonjs_react_amd_react_[
                'useState'
              ]
            )(!show),
            exited = _useState[0],
            setExited = _useState[1];

          var lastFocusRef = Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useRef'
            ]
          )(null);
          Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useImperativeHandle'
            ]
          )(
            ref,
            function() {
              return modal;
            },
            [modal]
          );

          if (canUseDOM && !prevShow && show) {
            lastFocusRef.current = activeElement();
          }

          if (!transition && !show && !exited) {
            setExited(true);
          } else if (show && exited) {
            setExited(false);
          }

          var handleShow = useEventCallback(function() {
            modal.add(container, containerClassName);
            removeKeydownListenerRef.current = esm_listen(
              document,
              'keydown',
              handleDocumentKeyDown
            );
            removeFocusListenerRef.current = esm_listen(
              document,
              'focus', // the timeout is necessary b/c this will run before the new modal is mounted
              // and so steals focus from it
              function() {
                return setTimeout(handleEnforceFocus);
              },
              true
            );

            if (onShow) {
              onShow();
            } // autofocus after onShow to not trigger a focus event for previous
            // modals before this one is shown.

            if (autoFocus) {
              var currentActiveElement = activeElement(document);

              if (
                modal.dialog &&
                currentActiveElement &&
                !contains(modal.dialog, currentActiveElement)
              ) {
                lastFocusRef.current = currentActiveElement;
                modal.dialog.focus();
              }
            }
          });
          var handleHide = useEventCallback(function() {
            modal.remove();
            removeKeydownListenerRef.current == null
              ? void 0
              : removeKeydownListenerRef.current();
            removeFocusListenerRef.current == null
              ? void 0
              : removeFocusListenerRef.current();

            if (restoreFocus) {
              var _lastFocusRef$current; // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)

              (_lastFocusRef$current = lastFocusRef.current) == null
                ? void 0
                : _lastFocusRef$current.focus == null
                  ? void 0
                  : _lastFocusRef$current.focus(restoreFocusOptions);
              lastFocusRef.current = null;
            }
          }); // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
          // Show logic when:
          //  - show is `true` _and_ `container` has resolved

          Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useEffect'
            ]
          )(
            function() {
              if (!show || !container) return;
              handleShow();
            },
            [
              show,
              container,
              /* should never change: */
              handleShow
            ]
          ); // Hide cleanup logic when:
          //  - `exited` switches to true
          //  - component unmounts;

          Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useEffect'
            ]
          )(
            function() {
              if (!exited) return;
              handleHide();
            },
            [exited, handleHide]
          );
          useWillUnmount(function() {
            handleHide();
          }); // --------------------------------

          var handleEnforceFocus = useEventCallback(function() {
            if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
              return;
            }

            var currentActiveElement = activeElement();

            if (
              modal.dialog &&
              currentActiveElement &&
              !contains(modal.dialog, currentActiveElement)
            ) {
              modal.dialog.focus();
            }
          });
          var handleBackdropClick = useEventCallback(function(e) {
            if (e.target !== e.currentTarget) {
              return;
            }

            onBackdropClick == null ? void 0 : onBackdropClick(e);

            if (backdrop === true) {
              onHide();
            }
          });
          var handleDocumentKeyDown = useEventCallback(function(e) {
            if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
              onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);

              if (!e.defaultPrevented) {
                onHide();
              }
            }
          });
          var removeFocusListenerRef = Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useRef'
            ]
          )();
          var removeKeydownListenerRef = Object(
            external_root_React_commonjs2_react_commonjs_react_amd_react_[
              'useRef'
            ]
          )();

          var handleHidden = function handleHidden() {
            setExited(true);

            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            onExited == null ? void 0 : onExited.apply(void 0, args);
          };

          var Transition = transition;

          if (!container || !(show || (Transition && !exited))) {
            return null;
          }

          var dialogProps = extends_extends(
            {
              role: role,
              ref: modal.setDialogRef,
              // apparently only works on the dialog role element
              'aria-modal': role === 'dialog' ? true : undefined
            },
            rest,
            {
              style: style,
              className: className,
              tabIndex: -1
            }
          );

          var dialog = renderDialog
            ? renderDialog(dialogProps)
            : /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                'div',
                dialogProps,
                /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.cloneElement(
                  children,
                  {
                    role: 'document'
                  }
                )
              );

          if (Transition) {
            dialog = /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              Transition,
              {
                appear: true,
                unmountOnExit: true,
                in: !!show,
                onExit: onExit,
                onExiting: onExiting,
                onExited: handleHidden,
                onEnter: onEnter,
                onEntering: onEntering,
                onEntered: onEntered
              },
              dialog
            );
          }

          var backdropElement = null;

          if (backdrop) {
            var BackdropTransition = backdropTransition;
            backdropElement = renderBackdrop({
              ref: modal.setBackdropRef,
              onClick: handleBackdropClick
            });

            if (BackdropTransition) {
              backdropElement = /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                BackdropTransition,
                {
                  appear: true,
                  in: !!show
                },
                backdropElement
              );
            }
          }

          return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
            external_root_React_commonjs2_react_commonjs_react_amd_react_default
              .a.Fragment,
            null,
            /*#__PURE__*/ external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.createPortal(
              /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                external_root_React_commonjs2_react_commonjs_react_amd_react_default
                  .a.Fragment,
                null,
                backdropElement,
                dialog
              ),
              container
            )
          );
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
          backdrop: prop_types_default.a.oneOfType([
            prop_types_default.a.bool,
            prop_types_default.a.oneOf(['static'])
          ]),

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
        /* harmony default export */ var esm_Modal = Object.assign(
          Modal_Modal,
          {
            Manager: esm_ModalManager
          }
        );
        // EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/elementType.js
        var elementType = __webpack_require__(13);
        var elementType_default = /*#__PURE__*/ __webpack_require__.n(
          elementType
        );

        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js
        var entries = __webpack_require__(21);
        var entries_default = /*#__PURE__*/ __webpack_require__.n(entries);

        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js
        var instance_index_of = __webpack_require__(46);
        var instance_index_of_default = /*#__PURE__*/ __webpack_require__.n(
          instance_index_of
        );

        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js
        var for_each = __webpack_require__(2);
        var for_each_default = /*#__PURE__*/ __webpack_require__.n(for_each);

        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js
        var trim = __webpack_require__(74);
        var trim_default = /*#__PURE__*/ __webpack_require__.n(trim);

        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js
        var concat = __webpack_require__(75);
        var concat_default = /*#__PURE__*/ __webpack_require__.n(concat);

        // EXTERNAL MODULE: ./node_modules/invariant/browser.js
        var browser = __webpack_require__(76);
        var browser_default = /*#__PURE__*/ __webpack_require__.n(browser);

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
          return function() {
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            var last = args[args.length - 1];

            if (typeof last === 'function') {
              return fn.apply(void 0, args);
            }

            return function(Component) {
              return fn.apply(
                void 0,
                concat_default()(args).call(args, [Component])
              );
            };
          };
        }

        function prefix(props, variant) {
          var _context;

          var bsClass = trim_default()((_context = props.bsClass || '')).call(
            _context
          );

          !(bsClass != null)
            ? false
              ? undefined
              : browser_default()(false)
            : void 0;
          return bsClass + (variant ? '-' + variant : '');
        }
        var bootstrapUtils_bsClass = curry(function(defaultClass, Component) {
          var propTypes = Component.propTypes || (Component.propTypes = {});
          var defaultProps =
            Component.defaultProps || (Component.defaultProps = {});
          propTypes.bsClass = prop_types_default.a.string;
          defaultProps.bsClass = defaultClass;
          return Component;
        });
        var bsStyles = curry(function(styles, defaultStyle, Component) {
          if (typeof defaultStyle !== 'string') {
            Component = defaultStyle;
            defaultStyle = undefined;
          }

          var existing = Component.STYLES || [];
          var propTypes = Component.propTypes || {};

          for_each_default()(styles).call(styles, function(style) {
            if (
              instance_index_of_default()(existing).call(existing, style) === -1
            ) {
              existing.push(style);
            }
          });

          var propType = prop_types_default.a.oneOf(existing); // expose the values on the propType function for documentation

          Component.STYLES = existing;
          propType._values = existing;
          Component.propTypes = _extends({}, propTypes, {
            bsStyle: propType
          });

          if (defaultStyle !== undefined) {
            var defaultProps =
              Component.defaultProps || (Component.defaultProps = {});
            defaultProps.bsStyle = defaultStyle;
          }

          return Component;
        });
        var bsSizes = curry(function(sizes, defaultSize, Component) {
          if (typeof defaultSize !== 'string') {
            Component = defaultSize;
            defaultSize = undefined;
          }

          var existing = Component.SIZES || [];
          var propTypes = Component.propTypes || {};

          for_each_default()(sizes).call(sizes, function(size) {
            if (
              instance_index_of_default()(existing).call(existing, size) === -1
            ) {
              existing.push(size);
            }
          });

          var values = [];

          for_each_default()(existing).call(existing, function(size) {
            var mappedSize = SIZE_MAP[size];

            if (mappedSize && mappedSize !== size) {
              values.push(mappedSize);
            }

            values.push(size);
          });

          var propType = prop_types_default.a.oneOf(values);
          propType._values = values; // expose the values on the propType function for documentation

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

          var classes = ((_classes = {}),
          (_classes[prefix(props)] = true),
          _classes);

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
          return (
            propName === 'bsClass' ||
            propName === 'bsSize' ||
            propName === 'bsStyle' ||
            propName === 'bsRole'
          );
        }

        function splitBsProps(props) {
          var _context2;

          var elementProps = {};

          for_each_default()((_context2 = entries_default()(props))).call(
            _context2,
            function(_ref) {
              var propName = _ref[0],
                propValue = _ref[1];

              if (!isBsProp(propName)) {
                elementProps[propName] = propValue;
              }
            }
          );

          return [getBsProps(props), elementProps];
        }
        function splitBsPropsAndOmit(props, omittedPropNames) {
          var _context3;

          var isOmittedProp = {};

          for_each_default()(omittedPropNames).call(omittedPropNames, function(
            propName
          ) {
            isOmittedProp[propName] = true;
          });

          var elementProps = {};

          for_each_default()((_context3 = entries_default()(props))).call(
            _context3,
            function(_ref2) {
              var propName = _ref2[0],
                propValue = _ref2[1];

              if (!isBsProp(propName) && !isOmittedProp[propName]) {
                elementProps[propName] = propValue;
              }
            }
          );

          return [getBsProps(props), elementProps];
        }
        /**
         * Add a style variant to a Component. Mutates the propTypes of the component
         * in order to validate the new variant.
         */

        function addStyle(Component) {
          for (
            var _len2 = arguments.length,
              styleVariant = new Array(_len2 > 1 ? _len2 - 1 : 0),
              _key2 = 1;
            _key2 < _len2;
            _key2++
          ) {
            styleVariant[_key2 - 1] = arguments[_key2];
          }

          bsStyles(styleVariant)(Component);
        }
        var _curry = curry;
        // CONCATENATED MODULE: ./src/ModalBody.js

        var ModalBody_jsxFileName =
          '/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/ModalBody.js';

        var ModalBody_propTypes = {
          componentClass: elementType_default.a
        };
        var ModalBody_defaultProps = {
          componentClass: 'div'
        };

        var ModalBody_ModalBody = /*#__PURE__*/ (function(_React$Component) {
          _inheritsLoose(ModalBody, _React$Component);

          function ModalBody() {
            return _React$Component.apply(this, arguments) || this;
          }

          var _proto = ModalBody.prototype;

          _proto.render = function render() {
            var _this$props = this.props,
              Component = _this$props.componentClass,
              className = _this$props.className,
              props = _objectWithoutPropertiesLoose(_this$props, [
                'componentClass',
                'className'
              ]);

            var _splitBsProps = splitBsProps(props),
              bsProps = _splitBsProps[0],
              elementProps = _splitBsProps[1];

            var classes = getClassSet(bsProps);
            return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              Component,
              _extends({}, elementProps, {
                className: classnames_default()(className, classes),
                __self: this,
                __source: {
                  fileName: ModalBody_jsxFileName,
                  lineNumber: 23,
                  columnNumber: 7
                }
              })
            );
          };

          return ModalBody;
        })(
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a
            .Component
        );

        ModalBody_ModalBody.propTypes = ModalBody_propTypes;
        ModalBody_ModalBody.defaultProps = ModalBody_defaultProps;
        /* harmony default export */ var src_ModalBody = bootstrapUtils_bsClass(
          'modal-body',
          ModalBody_ModalBody
        );
        // CONCATENATED MODULE: ./src/ModalDialog.js

        var ModalDialog_jsxFileName =
          '/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/ModalDialog.js';

        var ModalDialog_propTypes = {
          /**
           * A css class to apply to the Modal dialog DOM node.
           */
          dialogClassName: prop_types_default.a.string
        };

        var ModalDialog_ModalDialog = /*#__PURE__*/ (function(
          _React$Component
        ) {
          _inheritsLoose(ModalDialog, _React$Component);

          function ModalDialog() {
            return _React$Component.apply(this, arguments) || this;
          }

          var _proto = ModalDialog.prototype;

          _proto.render = function render() {
            var _extends2;

            var _this$props = this.props,
              dialogClassName = _this$props.dialogClassName,
              className = _this$props.className,
              style = _this$props.style,
              children = _this$props.children,
              onMouseDownDialog = _this$props.onMouseDownDialog,
              props = _objectWithoutPropertiesLoose(_this$props, [
                'dialogClassName',
                'className',
                'style',
                'children',
                'onMouseDownDialog'
              ]);

            var _splitBsProps = splitBsProps(props),
              bsProps = _splitBsProps[0],
              elementProps = _splitBsProps[1];

            var bsClassName = prefix(bsProps);

            var modalStyle = _extends(
              {
                display: 'block'
              },
              style
            );

            var dialogClasses = _extends(
              {},
              getClassSet(bsProps),
              ((_extends2 = {}),
              (_extends2[bsClassName] = false),
              (_extends2[prefix(bsProps, 'dialog')] = true),
              _extends2)
            );

            return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              'div',
              _extends({}, elementProps, {
                tabIndex: '-1',
                role: 'dialog',
                style: modalStyle,
                className: classnames_default()(className, bsClassName),
                __self: this,
                __source: {
                  fileName: ModalDialog_jsxFileName,
                  lineNumber: 44,
                  columnNumber: 7
                }
              }),
              /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                'div',
                {
                  className: classnames_default()(
                    dialogClassName,
                    dialogClasses
                  ),
                  onMouseDown: onMouseDownDialog,
                  __self: this,
                  __source: {
                    fileName: ModalDialog_jsxFileName,
                    lineNumber: 53,
                    columnNumber: 10
                  }
                },
                /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                  'div',
                  {
                    className: prefix(bsProps, 'content'),
                    role: 'document',
                    __self: this,
                    __source: {
                      fileName: ModalDialog_jsxFileName,
                      lineNumber: 57,
                      columnNumber: 11
                    }
                  },
                  children
                )
              )
            );
          };

          return ModalDialog;
        })(
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a
            .Component
        );

        ModalDialog_ModalDialog.propTypes = ModalDialog_propTypes;
        /* harmony default export */ var src_ModalDialog = bootstrapUtils_bsClass(
          'modal',
          bsSizes([Size.LARGE, Size.SMALL], ModalDialog_ModalDialog)
        );
        // CONCATENATED MODULE: ./src/ModalFooter.js

        var ModalFooter_jsxFileName =
          '/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/ModalFooter.js';

        var ModalFooter_propTypes = {
          componentClass: elementType_default.a
        };
        var ModalFooter_defaultProps = {
          componentClass: 'div'
        };

        var ModalFooter_ModalFooter = /*#__PURE__*/ (function(
          _React$Component
        ) {
          _inheritsLoose(ModalFooter, _React$Component);

          function ModalFooter() {
            return _React$Component.apply(this, arguments) || this;
          }

          var _proto = ModalFooter.prototype;

          _proto.render = function render() {
            var _this$props = this.props,
              Component = _this$props.componentClass,
              className = _this$props.className,
              props = _objectWithoutPropertiesLoose(_this$props, [
                'componentClass',
                'className'
              ]);

            var _splitBsProps = splitBsProps(props),
              bsProps = _splitBsProps[0],
              elementProps = _splitBsProps[1];

            var classes = getClassSet(bsProps);
            return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              Component,
              _extends({}, elementProps, {
                className: classnames_default()(className, classes),
                __self: this,
                __source: {
                  fileName: ModalFooter_jsxFileName,
                  lineNumber: 23,
                  columnNumber: 7
                }
              })
            );
          };

          return ModalFooter;
        })(
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a
            .Component
        );

        ModalFooter_ModalFooter.propTypes = ModalFooter_propTypes;
        ModalFooter_ModalFooter.defaultProps = ModalFooter_defaultProps;
        /* harmony default export */ var src_ModalFooter = bootstrapUtils_bsClass(
          'modal-footer',
          ModalFooter_ModalFooter
        );
        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js
        var filter = __webpack_require__(77);
        var filter_default = /*#__PURE__*/ __webpack_require__.n(filter);

        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js
        var reduce = __webpack_require__(78);
        var reduce_default = /*#__PURE__*/ __webpack_require__.n(reduce);

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

          for (
            var _len = arguments.length, funcs = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            funcs[_key] = arguments[_key];
          }

          return reduce_default()(
            (_context = filter_default()(funcs).call(funcs, function(f) {
              return f != null;
            }))
          ).call(
            _context,
            function(acc, f) {
              if (typeof f !== 'function') {
                throw new Error(
                  'Invalid Argument Type, must only provide functions, undefined, or null.'
                );
              }

              if (acc === null) {
                return f;
              }

              return function chainedFunction() {
                for (
                  var _len2 = arguments.length,
                    args = new Array(_len2),
                    _key2 = 0;
                  _key2 < _len2;
                  _key2++
                ) {
                  args[_key2] = arguments[_key2];
                }

                acc.apply(this, args);
                f.apply(this, args);
              };
            },
            null
          );
        }

        /* harmony default export */ var utils_createChainedFunction = createChainedFunction;
        // CONCATENATED MODULE: ./src/ModalHeader.js

        var ModalHeader_jsxFileName =
          '/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/ModalHeader.js';

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

        var ModalHeader_ModalHeader = /*#__PURE__*/ (function(
          _React$Component
        ) {
          _inheritsLoose(ModalHeader, _React$Component);

          function ModalHeader() {
            return _React$Component.apply(this, arguments) || this;
          }

          var _proto = ModalHeader.prototype;

          _proto.render = function render() {
            var _this$props = this.props,
              closeLabel = _this$props.closeLabel,
              closeButton = _this$props.closeButton,
              onHide = _this$props.onHide,
              className = _this$props.className,
              children = _this$props.children,
              props = _objectWithoutPropertiesLoose(_this$props, [
                'closeLabel',
                'closeButton',
                'onHide',
                'className',
                'children'
              ]);

            var modal = this.context.$bs_modal;

            var _splitBsProps = splitBsProps(props),
              bsProps = _splitBsProps[0],
              elementProps = _splitBsProps[1];

            var classes = getClassSet(bsProps);
            return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              'div',
              _extends({}, elementProps, {
                className: classnames_default()(className, classes),
                __self: this,
                __source: {
                  fileName: ModalHeader_jsxFileName,
                  lineNumber: 61,
                  columnNumber: 7
                }
              }),
              closeButton &&
                /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                  src_CloseButton,
                  {
                    label: closeLabel,
                    onClick: utils_createChainedFunction(
                      modal && modal.onHide,
                      onHide
                    ),
                    __self: this,
                    __source: {
                      fileName: ModalHeader_jsxFileName,
                      lineNumber: 63,
                      columnNumber: 11
                    }
                  }
                ),
              children
            );
          };

          return ModalHeader;
        })(
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a
            .Component
        );

        ModalHeader_ModalHeader.propTypes = ModalHeader_propTypes;
        ModalHeader_ModalHeader.defaultProps = ModalHeader_defaultProps;
        ModalHeader_ModalHeader.contextTypes = contextTypes;
        /* harmony default export */ var src_ModalHeader = bootstrapUtils_bsClass(
          'modal-header',
          ModalHeader_ModalHeader
        );
        // CONCATENATED MODULE: ./src/ModalTitle.js

        var ModalTitle_jsxFileName =
          '/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/ModalTitle.js';

        var ModalTitle_propTypes = {
          componentClass: elementType_default.a
        };
        var ModalTitle_defaultProps = {
          componentClass: 'h4'
        };

        var ModalTitle_ModalTitle = /*#__PURE__*/ (function(_React$Component) {
          _inheritsLoose(ModalTitle, _React$Component);

          function ModalTitle() {
            return _React$Component.apply(this, arguments) || this;
          }

          var _proto = ModalTitle.prototype;

          _proto.render = function render() {
            var _this$props = this.props,
              Component = _this$props.componentClass,
              className = _this$props.className,
              props = _objectWithoutPropertiesLoose(_this$props, [
                'componentClass',
                'className'
              ]);

            var _splitBsProps = splitBsProps(props),
              bsProps = _splitBsProps[0],
              elementProps = _splitBsProps[1];

            var classes = getClassSet(bsProps);
            return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              Component,
              _extends({}, elementProps, {
                className: classnames_default()(className, classes),
                __self: this,
                __source: {
                  fileName: ModalTitle_jsxFileName,
                  lineNumber: 23,
                  columnNumber: 7
                }
              })
            );
          };

          return ModalTitle;
        })(
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a
            .Component
        );

        ModalTitle_ModalTitle.propTypes = ModalTitle_propTypes;
        ModalTitle_ModalTitle.defaultProps = ModalTitle_defaultProps;
        /* harmony default export */ var src_ModalTitle = bootstrapUtils_bsClass(
          'modal-title',
          ModalTitle_ModalTitle
        );
        // CONCATENATED MODULE: ./src/utils/splitComponentProps.js

        function splitComponentProps(props, Component) {
          var _context;

          var componentPropTypes = Component.propTypes;
          var parentProps = {};
          var childProps = {};

          for_each_default()((_context = entries_default()(props))).call(
            _context,
            function(_ref) {
              var propName = _ref[0],
                propValue = _ref[1];

              if (componentPropTypes[propName]) {
                parentProps[propName] = propValue;
              } else {
                childProps[propName] = propValue;
              }
            }
          );

          return [parentProps, childProps];
        }
        // CONCATENATED MODULE: ./src/Modal.js

        var Modal_jsxFileName =
          '/Users/fabioespinosa/Desktop/gradsthink/react-bootstrap/src/Modal.js';

        var src_Modal_propTypes = _extends(
          {},
          esm_Modal.propTypes,
          src_ModalDialog.propTypes,
          {
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
          }
        );

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
          return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
            src_Fade,
            _extends({}, props, {
              timeout: src_Modal_Modal.TRANSITION_DURATION,
              __self: this,
              __source: {
                fileName: Modal_jsxFileName,
                lineNumber: 138,
                columnNumber: 10
              }
            })
          );
        }

        function Modal_BackdropTransition(props) {
          return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
            src_Fade,
            _extends({}, props, {
              timeout: src_Modal_Modal.BACKDROP_TRANSITION_DURATION,
              __self: this,
              __source: {
                fileName: Modal_jsxFileName,
                lineNumber: 142,
                columnNumber: 10
              }
            })
          );
        }
        /* eslint-enable no-use-before-define */

        var src_Modal_Modal = /*#__PURE__*/ (function(_React$Component) {
          _inheritsLoose(Modal, _React$Component);

          function Modal(props, context) {
            var _context, _context2, _context3, _context4, _context5;

            var _this;

            _this = _React$Component.call(this, props, context) || this;

            _this.handleDialogBackdropMouseDown = function() {
              _this._waitingForMouseUp = true;
            };

            _this.handleMouseUp = function(ev) {
              var dialogNode = _this._modal.getDialogElement();

              if (_this._waitingForMouseUp && ev.target === dialogNode) {
                _this._ignoreBackdropClick = true;
              }

              _this._waitingForMouseUp = false;
            };

            _this.handleEntering = bind_default()(
              (_context = _this.handleEntering)
            ).call(_context, _assertThisInitialized(_this));
            _this.handleExited = bind_default()(
              (_context2 = _this.handleExited)
            ).call(_context2, _assertThisInitialized(_this));
            _this.handleWindowResize = bind_default()(
              (_context3 = _this.handleWindowResize)
            ).call(_context3, _assertThisInitialized(_this));
            _this.handleDialogClick = bind_default()(
              (_context4 = _this.handleDialogClick)
            ).call(_context4, _assertThisInitialized(_this));
            _this.setModalRef = bind_default()(
              (_context5 = _this.setModalRef)
            ).call(_context5, _assertThisInitialized(_this));
            _this.state = {
              style: {}
            };
            return _this;
          }

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

            var dialogNode = this._modal.getDialogElement();

            var dialogHeight = dialogNode.scrollHeight;
            var document = ownerDocument_default()(dialogNode);
            var bodyIsOverflowing = isOverflowing(
              this.props.container || document.body
            );
            var modalIsOverflowing =
              dialogHeight > document.documentElement.clientHeight;
            this.setState({
              style: {
                paddingRight:
                  bodyIsOverflowing && !modalIsOverflowing
                    ? scrollbarSize_default()()
                    : undefined,
                paddingLeft:
                  !bodyIsOverflowing && modalIsOverflowing
                    ? scrollbarSize_default()()
                    : undefined
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
              props = _objectWithoutPropertiesLoose(_this$props, [
                'backdrop',
                'backdropClassName',
                'animation',
                'show',
                'dialogComponentClass',
                'className',
                'style',
                'children',
                'onEntering',
                'onExited'
              ]);

            var _splitComponentProps = splitComponentProps(props, esm_Modal),
              baseModalProps = _splitComponentProps[0],
              dialogProps = _splitComponentProps[1];

            var inClassName = show && !animation && 'in';
            return /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              esm_Modal,
              _extends({}, baseModalProps, {
                ref: this.setModalRef,
                show: show,
                containerClassName: prefix(props, 'open'),
                transition: animation ? DialogTransition : undefined,
                backdrop: backdrop,
                backdropTransition: animation
                  ? Modal_BackdropTransition
                  : undefined,
                backdropClassName: classnames_default()(
                  prefix(props, 'backdrop'),
                  backdropClassName,
                  inClassName
                ),
                onEntering: utils_createChainedFunction(
                  onEntering,
                  this.handleEntering
                ),
                onExited: utils_createChainedFunction(
                  onExited,
                  this.handleExited
                ),
                onMouseUp: this.handleMouseUp,
                __self: this,
                __source: {
                  fileName: Modal_jsxFileName,
                  lineNumber: 264,
                  columnNumber: 7
                }
              }),
              /*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                Dialog,
                _extends({}, dialogProps, {
                  style: _extends({}, this.state.style, style),
                  className: classnames_default()(className, inClassName),
                  onClick: backdrop === true ? this.handleDialogClick : null,
                  onMouseDownDialog: this.handleDialogBackdropMouseDown,
                  __self: this,
                  __source: {
                    fileName: Modal_jsxFileName,
                    lineNumber: 281,
                    columnNumber: 9
                  }
                }),
                children
              )
            );
          };

          return Modal;
        })(
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a
            .Component
        );

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
        /* harmony default export */ var src_Modal = bootstrapUtils_bsClass(
          'modal',
          bsSizes([Size.LARGE, Size.SMALL], src_Modal_Modal)
        );
        // EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js
        var map = __webpack_require__(79);
        var map_default = /*#__PURE__*/ __webpack_require__.n(map);

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
          return map_default()(
            (_context =
              external_root_React_commonjs2_react_commonjs_react_amd_react_default
                .a.Children)
          ).call(_context, children, function(child) {
            if (
              !/*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(
                child
              )
            ) {
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

          for_each_default()(
            (_context2 =
              external_root_React_commonjs2_react_commonjs_react_amd_react_default
                .a.Children)
          ).call(_context2, children, function(child) {
            if (
              !/*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(
                child
              )
            ) {
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

          for_each_default()(
            (_context3 =
              external_root_React_commonjs2_react_commonjs_react_amd_react_default
                .a.Children)
          ).call(_context3, children, function(child) {
            if (
              !/*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(
                child
              )
            ) {
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

          for_each_default()(
            (_context4 =
              external_root_React_commonjs2_react_commonjs_react_amd_react_default
                .a.Children)
          ).call(_context4, children, function(child) {
            if (
              !/*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(
                child
              )
            ) {
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

          for_each_default()(
            (_context5 =
              external_root_React_commonjs2_react_commonjs_react_amd_react_default
                .a.Children)
          ).call(_context5, children, function(child) {
            if (result) {
              return;
            }

            if (
              !/*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(
                child
              )
            ) {
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

          for_each_default()(
            (_context6 =
              external_root_React_commonjs2_react_commonjs_react_amd_react_default
                .a.Children)
          ).call(_context6, children, function(child) {
            if (!result) {
              return;
            }

            if (
              !/*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(
                child
              )
            ) {
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

          for_each_default()(
            (_context7 =
              external_root_React_commonjs2_react_commonjs_react_amd_react_default
                .a.Children)
          ).call(_context7, children, function(child) {
            if (result) {
              return;
            }

            if (
              !/*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(
                child
              )
            ) {
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

          for_each_default()(
            (_context8 =
              external_root_React_commonjs2_react_commonjs_react_amd_react_default
                .a.Children)
          ).call(_context8, children, function(child) {
            if (
              !/*#__PURE__*/ external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.isValidElement(
                child
              )
            ) {
              return;
            }

            result.push(child);
          });

          return result;
        }

        /* harmony default export */ var ValidComponentChildren = {
          map: ValidComponentChildren_map,
          forEach: forEach,
          count: count,
          find: find,
          filter: ValidComponentChildren_filter,
          every: every,
          some: some,
          toArray: toArray
        };
        // CONCATENATED MODULE: ./src/utils/index.js

        // CONCATENATED MODULE: ./src/index.js
        /* concated harmony reexport CloseButton */ __webpack_require__.d(
          __webpack_exports__,
          'CloseButton',
          function() {
            return src_CloseButton;
          }
        );
        /* concated harmony reexport Fade */ __webpack_require__.d(
          __webpack_exports__,
          'Fade',
          function() {
            return src_Fade;
          }
        );
        /* concated harmony reexport Modal */ __webpack_require__.d(
          __webpack_exports__,
          'Modal',
          function() {
            return src_Modal;
          }
        );
        /* concated harmony reexport ModalBody */ __webpack_require__.d(
          __webpack_exports__,
          'ModalBody',
          function() {
            return src_ModalBody;
          }
        );
        /* concated harmony reexport ModalDialog */ __webpack_require__.d(
          __webpack_exports__,
          'ModalDialog',
          function() {
            return src_ModalDialog;
          }
        );
        /* concated harmony reexport ModalFooter */ __webpack_require__.d(
          __webpack_exports__,
          'ModalFooter',
          function() {
            return src_ModalFooter;
          }
        );
        /* concated harmony reexport ModalHeader */ __webpack_require__.d(
          __webpack_exports__,
          'ModalHeader',
          function() {
            return src_ModalHeader;
          }
        );
        /* concated harmony reexport ModalTitle */ __webpack_require__.d(
          __webpack_exports__,
          'ModalTitle',
          function() {
            return src_ModalTitle;
          }
        );
        /* concated harmony reexport utils */ __webpack_require__.d(
          __webpack_exports__,
          'utils',
          function() {
            return utils_namespaceObject;
          }
        );

        /***/
      }
      /******/
    ]
  );
});

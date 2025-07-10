import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children", "childRef"];
import React, { useCallback, useRef, useMemo } from 'react';
import Transition from 'react-transition-group/Transition';

// Simple ref merging utility
function mergeRefs(refA, refB) {
  var a = !refA || typeof refA === 'function' ? refA : function (value) {
    refA.current = value;
  };
  var b = !refB || typeof refB === 'function' ? refB : function (value) {
    refB.current = value;
  };
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}

// Normalizes Transition callbacks when nodeRef is used.
var TransitionWrapper = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var onEnter = _ref.onEnter,
    onEntering = _ref.onEntering,
    onEntered = _ref.onEntered,
    onExit = _ref.onExit,
    onExiting = _ref.onExiting,
    onExited = _ref.onExited,
    addEndListener = _ref.addEndListener,
    children = _ref.children,
    childRef = _ref.childRef,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var nodeRef = useRef(null);
  var mergedRef = useMemo(function () {
    return mergeRefs(nodeRef, childRef);
  }, [childRef]);
  var normalize = function normalize(callback) {
    return function (param) {
      if (callback && nodeRef.current) {
        callback(nodeRef.current, param);
      }
    };
  };
  var handleEnter = useCallback(normalize(onEnter), [onEnter]);
  var handleEntering = useCallback(normalize(onEntering), [onEntering]);
  var handleEntered = useCallback(normalize(onEntered), [onEntered]);
  var handleExit = useCallback(normalize(onExit), [onExit]);
  var handleExiting = useCallback(normalize(onExiting), [onExiting]);
  var handleExited = useCallback(normalize(onExited), [onExited]);
  var handleAddEndListener = useCallback(normalize(addEndListener), [addEndListener]);
  return /*#__PURE__*/React.createElement(Transition, _extends({
    ref: ref
  }, props, {
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef: nodeRef
  }), typeof children === 'function' ? function (status, innerProps) {
    return (
      // TODO: Types for RTG missing innerProps, so need to cast.
      children(status, _extends({}, innerProps, {
        ref: mergedRef
      }))
    );
  } : /*#__PURE__*/React.cloneElement(children, {
    ref: mergedRef
  }));
});
TransitionWrapper.displayName = 'TransitionWrapper';
export default TransitionWrapper;
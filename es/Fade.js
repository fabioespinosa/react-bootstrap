import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "transitionClasses", "onEnter"];
var _fadeStyles;
import classNames from 'classnames';
import React, { useCallback } from 'react';
import { ENTERED, ENTERING } from 'react-transition-group/Transition';
import { getChildRef } from '@restart/ui/utils';
import transitionEndListener from './transitionEndListener';
import triggerBrowserReflow from './triggerBrowserReflow';
import TransitionWrapper from './TransitionWrapper';
var fadeStyles = (_fadeStyles = {}, _fadeStyles[ENTERING] = 'in', _fadeStyles[ENTERED] = 'in', _fadeStyles);
var Fade = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    children = _ref.children,
    _ref$transitionClasse = _ref.transitionClasses,
    transitionClasses = _ref$transitionClasse === void 0 ? {} : _ref$transitionClasse,
    onEnter = _ref.onEnter,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var props = _extends({
    "in": false,
    timeout: 300,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false
  }, rest);
  var handleEnter = useCallback(function (node, isAppearing) {
    triggerBrowserReflow(node);
    onEnter == null || onEnter(node, isAppearing);
  }, [onEnter]);
  return /*#__PURE__*/React.createElement(TransitionWrapper, _extends({
    ref: ref,
    addEndListener: transitionEndListener
  }, props, {
    onEnter: handleEnter,
    childRef: getChildRef(children)
  }), function (status, innerProps) {
    return /*#__PURE__*/React.cloneElement(children, _extends({}, innerProps, {
      className: classNames('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
    }));
  });
});
Fade.displayName = 'Fade';
export default Fade;
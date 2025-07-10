import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "onEnter", "childRef"];
var _fadeStyles;
import classNames from 'classnames';
import React, { useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import Transition, { ENTERED, ENTERING } from 'react-transition-group/Transition';
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}
var propTypes = {
  /**
   * Show the component; triggers the fade in or fade out animation
   */
  "in": PropTypes.bool,
  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: PropTypes.bool,
  /**
   * Unmount the component (remove it from the DOM) when it is faded out
   */
  unmountOnExit: PropTypes.bool,
  /**
   * Run the fade in animation when the component mounts, if it is initially
   * shown
   */
  appear: PropTypes.bool,
  /**
   * Duration of the fade animation in milliseconds, to ensure that finishing
   * callbacks are fired even if the original browser transition end events are
   * canceled
   */
  timeout: PropTypes.number,
  /**
   * Callback fired before the component fades in
   */
  onEnter: PropTypes.func,
  /**
   * Callback fired after the component starts to fade in
   */
  onEntering: PropTypes.func,
  /**
   * Callback fired after the has component faded in
   */
  onEntered: PropTypes.func,
  /**
   * Callback fired before the component fades out
   */
  onExit: PropTypes.func,
  /**
   * Callback fired after the component starts to fade out
   */
  onExiting: PropTypes.func,
  /**
   * Callback fired after the component has faded out
   */
  onExited: PropTypes.func
};
var defaultProps = {
  "in": false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[ENTERING] = 'show', _fadeStyles[ENTERED] = 'show', _fadeStyles);
var Fade = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
    children = props.children,
    onEnter = props.onEnter,
    childRef = props.childRef,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  var handleEnter = useCallback(function (node, isAppearing) {
    triggerBrowserReflow(node);
    onEnter == null || onEnter(node, isAppearing);
  }, [onEnter]);
  var nodeRef = useRef(null);
  return /*#__PURE__*/React.createElement(Transition, _extends({}, rest, {
    ref: ref,
    nodeRef: nodeRef,
    onEnter: handleEnter
  }), function (status, innerProps) {
    return /*#__PURE__*/React.cloneElement(children, _extends({}, innerProps, {
      ref: nodeRef,
      className: classNames('fade', className, children.props.className, fadeStyles[status])
    }));
  });
});
Fade.defaultProps = defaultProps;
export default Fade;
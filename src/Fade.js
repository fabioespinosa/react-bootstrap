import * as React from 'react';
import { ENTERED, ENTERING } from 'react-transition-group/Transition';
import { getChildRef } from '@restart/ui/utils';
import classNames from 'classnames';
import transitionEndListener from './transitionEndListener';
import TransitionWrapper from './TransitionWrapper';

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}

const fadeStyles = {
  [ENTERING]: 'show',
  [ENTERED]: 'show'
};

const Fade = React.forwardRef(
  ({ className, children, transitionClasses = {}, onEnter, ...rest }, ref) => {
    const props = {
      in: false,
      timeout: 300,
      mountOnEnter: false,
      unmountOnExit: false,
      appear: false,
      ...rest
    };

    const handleEnter = React.useCallback(
      (node, isAppearing) => {
        triggerBrowserReflow(node);
        onEnter?.(node, isAppearing);
      },
      [onEnter]
    );

    return (
      <TransitionWrapper
        ref={ref}
        addEndListener={transitionEndListener}
        {...props}
        onEnter={handleEnter}
        childRef={getChildRef(children)}
      >
        {(status, innerProps) =>
          React.cloneElement(children, {
            ...innerProps,
            className: classNames(
              'fade',
              className,
              children.props.className,
              fadeStyles[status],
              transitionClasses[status]
            )
          })
        }
      </TransitionWrapper>
    );
  }
);

Fade.displayName = 'Fade';

export default Fade;

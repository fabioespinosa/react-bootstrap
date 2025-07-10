import classNames from 'classnames';
import React, { useCallback } from 'react';
import { ENTERED, ENTERING } from 'react-transition-group/Transition';
import { getChildRef } from '@restart/ui/utils';
import transitionEndListener from './transitionEndListener';
import triggerBrowserReflow from './triggerBrowserReflow';
import TransitionWrapper from './TransitionWrapper';

const fadeStyles = {
  [ENTERING]: 'in',
  [ENTERED]: 'in'
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

    const handleEnter = useCallback(
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

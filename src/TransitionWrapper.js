import React, { useCallback, useRef, useMemo } from 'react';
import Transition from 'react-transition-group/Transition';

// Simple ref merging utility
function mergeRefs(refA, refB) {
  const a =
    !refA || typeof refA === 'function'
      ? refA
      : value => {
          refA.current = value;
        };
  const b =
    !refB || typeof refB === 'function'
      ? refB
      : value => {
          refB.current = value;
        };

  return value => {
    if (a) a(value);
    if (b) b(value);
  };
}

// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = React.forwardRef(
  (
    {
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      addEndListener,
      children,
      childRef,
      ...props
    },
    ref
  ) => {
    const nodeRef = useRef(null);
    const mergedRef = useMemo(() => mergeRefs(nodeRef, childRef), [childRef]);

    const normalize = callback => param => {
      if (callback && nodeRef.current) {
        callback(nodeRef.current, param);
      }
    };

    const handleEnter = useCallback(normalize(onEnter), [onEnter]);
    const handleEntering = useCallback(normalize(onEntering), [onEntering]);
    const handleEntered = useCallback(normalize(onEntered), [onEntered]);
    const handleExit = useCallback(normalize(onExit), [onExit]);
    const handleExiting = useCallback(normalize(onExiting), [onExiting]);
    const handleExited = useCallback(normalize(onExited), [onExited]);
    const handleAddEndListener = useCallback(normalize(addEndListener), [
      addEndListener
    ]);

    return (
      <Transition
        ref={ref}
        {...props}
        onEnter={handleEnter}
        onEntered={handleEntered}
        onEntering={handleEntering}
        onExit={handleExit}
        onExited={handleExited}
        onExiting={handleExiting}
        addEndListener={handleAddEndListener}
        nodeRef={nodeRef}
      >
        {typeof children === 'function'
          ? (status, innerProps) =>
              // TODO: Types for RTG missing innerProps, so need to cast.
              children(status, {
                ...innerProps,
                ref: mergedRef
              })
          : React.cloneElement(children, {
              ref: mergedRef
            })}
      </Transition>
    );
  }
);

TransitionWrapper.displayName = 'TransitionWrapper';

export default TransitionWrapper;

'use client'

import React, { useRef } from 'react';
import { composeRefs } from '../hooks/useComposedRefs';
import { useStickyElement, DimensionProps } from './useStickyElement';

type ComponentProps = DimensionProps &
  React.ComponentPropsWithoutRef<'div'> & {
    as?: React.ElementType;
  };

/**
 * @param {number} top - top position of the element from where it becomes sticky;
 */
export const Sticky = React.forwardRef<HTMLDivElement, ComponentProps>((props, ref) => {
  const { children, top, as = 'div', ...restOfTheProps } = props;
  const Element = as;
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const mergedRefs = composeRefs(ref, stickyContainerRef);
  const { top: _top, position } = useStickyElement({
    elRef: stickyContainerRef,
    top,
  });
  return (
    <Element
      ref={mergedRefs}
      style={{
        top: _top,
        position,
        height: 'fit-content',
      }}
      {...restOfTheProps}
    >
      {children}
    </Element>
  );
});

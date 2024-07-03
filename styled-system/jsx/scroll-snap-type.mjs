import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollSnapTypeStyle } from '../patterns/scroll-snap-type.mjs';
import { styled } from './factory.mjs';

export const ScrollSnapType = /* @__PURE__ */ forwardRef(function ScrollSnapType(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollSnapTypeStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
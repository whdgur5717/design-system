import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollSnapAlignStyle } from '../patterns/scroll-snap-align.mjs';
import { styled } from './factory.mjs';

export const ScrollSnapAlign = /* @__PURE__ */ forwardRef(function ScrollSnapAlign(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollSnapAlignStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
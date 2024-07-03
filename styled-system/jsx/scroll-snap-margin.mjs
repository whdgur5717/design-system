import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollSnapMarginStyle } from '../patterns/scroll-snap-margin.mjs';
import { styled } from './factory.mjs';

export const ScrollSnapMargin = /* @__PURE__ */ forwardRef(function ScrollSnapMargin(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollSnapMarginStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
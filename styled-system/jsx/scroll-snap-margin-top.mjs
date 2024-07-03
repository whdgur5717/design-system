import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollSnapMarginTopStyle } from '../patterns/scroll-snap-margin-top.mjs';
import { styled } from './factory.mjs';

export const ScrollSnapMarginTop = /* @__PURE__ */ forwardRef(function ScrollSnapMarginTop(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollSnapMarginTopStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
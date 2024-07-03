import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollSnapMarginLeftStyle } from '../patterns/scroll-snap-margin-left.mjs';
import { styled } from './factory.mjs';

export const ScrollSnapMarginLeft = /* @__PURE__ */ forwardRef(function ScrollSnapMarginLeft(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollSnapMarginLeftStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
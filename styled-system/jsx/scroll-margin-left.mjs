import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollMarginLeftStyle } from '../patterns/scroll-margin-left.mjs';
import { styled } from './factory.mjs';

export const ScrollMarginLeft = /* @__PURE__ */ forwardRef(function ScrollMarginLeft(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollMarginLeftStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
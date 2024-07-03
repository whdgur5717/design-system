import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollMarginTopStyle } from '../patterns/scroll-margin-top.mjs';
import { styled } from './factory.mjs';

export const ScrollMarginTop = /* @__PURE__ */ forwardRef(function ScrollMarginTop(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollMarginTopStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollMarginInlineEndStyle } from '../patterns/scroll-margin-inline-end.mjs';
import { styled } from './factory.mjs';

export const ScrollMarginInlineEnd = /* @__PURE__ */ forwardRef(function ScrollMarginInlineEnd(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollMarginInlineEndStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMarginInlineEndStyle } from '../patterns/margin-inline-end.mjs';
import { styled } from './factory.mjs';

export const MarginInlineEnd = /* @__PURE__ */ forwardRef(function MarginInlineEnd(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMarginInlineEndStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMarginInlineStyle } from '../patterns/margin-inline.mjs';
import { styled } from './factory.mjs';

export const MarginInline = /* @__PURE__ */ forwardRef(function MarginInline(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMarginInlineStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
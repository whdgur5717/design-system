import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMarginInlineStartStyle } from '../patterns/margin-inline-start.mjs';
import { styled } from './factory.mjs';

export const MarginInlineStart = /* @__PURE__ */ forwardRef(function MarginInlineStart(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMarginInlineStartStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
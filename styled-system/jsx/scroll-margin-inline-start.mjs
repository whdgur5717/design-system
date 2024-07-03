import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollMarginInlineStartStyle } from '../patterns/scroll-margin-inline-start.mjs';
import { styled } from './factory.mjs';

export const ScrollMarginInlineStart = /* @__PURE__ */ forwardRef(function ScrollMarginInlineStart(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollMarginInlineStartStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
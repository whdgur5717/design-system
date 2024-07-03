import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollMarginInlineStyle } from '../patterns/scroll-margin-inline.mjs';
import { styled } from './factory.mjs';

export const ScrollMarginInline = /* @__PURE__ */ forwardRef(function ScrollMarginInline(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollMarginInlineStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
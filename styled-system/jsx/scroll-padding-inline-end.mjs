import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollPaddingInlineEndStyle } from '../patterns/scroll-padding-inline-end.mjs';
import { styled } from './factory.mjs';

export const ScrollPaddingInlineEnd = /* @__PURE__ */ forwardRef(function ScrollPaddingInlineEnd(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollPaddingInlineEndStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
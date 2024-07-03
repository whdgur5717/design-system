import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollPaddingInlineStyle } from '../patterns/scroll-padding-inline.mjs';
import { styled } from './factory.mjs';

export const ScrollPaddingInline = /* @__PURE__ */ forwardRef(function ScrollPaddingInline(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollPaddingInlineStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
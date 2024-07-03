import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollPaddingInlineStartStyle } from '../patterns/scroll-padding-inline-start.mjs';
import { styled } from './factory.mjs';

export const ScrollPaddingInlineStart = /* @__PURE__ */ forwardRef(function ScrollPaddingInlineStart(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollPaddingInlineStartStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollPaddingStyle } from '../patterns/scroll-padding.mjs';
import { styled } from './factory.mjs';

export const ScrollPadding = /* @__PURE__ */ forwardRef(function ScrollPadding(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollPaddingStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
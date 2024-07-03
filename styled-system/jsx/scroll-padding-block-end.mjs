import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollPaddingBlockEndStyle } from '../patterns/scroll-padding-block-end.mjs';
import { styled } from './factory.mjs';

export const ScrollPaddingBlockEnd = /* @__PURE__ */ forwardRef(function ScrollPaddingBlockEnd(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollPaddingBlockEndStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
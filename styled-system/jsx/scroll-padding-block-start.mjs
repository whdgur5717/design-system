import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollPaddingBlockStartStyle } from '../patterns/scroll-padding-block-start.mjs';
import { styled } from './factory.mjs';

export const ScrollPaddingBlockStart = /* @__PURE__ */ forwardRef(function ScrollPaddingBlockStart(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollPaddingBlockStartStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
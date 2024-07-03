import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollPaddingBlockStyle } from '../patterns/scroll-padding-block.mjs';
import { styled } from './factory.mjs';

export const ScrollPaddingBlock = /* @__PURE__ */ forwardRef(function ScrollPaddingBlock(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollPaddingBlockStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
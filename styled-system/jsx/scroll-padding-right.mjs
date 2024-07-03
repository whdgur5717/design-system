import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollPaddingRightStyle } from '../patterns/scroll-padding-right.mjs';
import { styled } from './factory.mjs';

export const ScrollPaddingRight = /* @__PURE__ */ forwardRef(function ScrollPaddingRight(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollPaddingRightStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
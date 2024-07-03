import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollPaddingTopStyle } from '../patterns/scroll-padding-top.mjs';
import { styled } from './factory.mjs';

export const ScrollPaddingTop = /* @__PURE__ */ forwardRef(function ScrollPaddingTop(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollPaddingTopStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollPaddingLeftStyle } from '../patterns/scroll-padding-left.mjs';
import { styled } from './factory.mjs';

export const ScrollPaddingLeft = /* @__PURE__ */ forwardRef(function ScrollPaddingLeft(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollPaddingLeftStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
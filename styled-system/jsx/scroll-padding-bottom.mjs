import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollPaddingBottomStyle } from '../patterns/scroll-padding-bottom.mjs';
import { styled } from './factory.mjs';

export const ScrollPaddingBottom = /* @__PURE__ */ forwardRef(function ScrollPaddingBottom(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollPaddingBottomStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
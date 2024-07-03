import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollMarginStyle } from '../patterns/scroll-margin.mjs';
import { styled } from './factory.mjs';

export const ScrollMargin = /* @__PURE__ */ forwardRef(function ScrollMargin(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollMarginStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
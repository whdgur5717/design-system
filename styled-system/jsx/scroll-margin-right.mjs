import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollMarginRightStyle } from '../patterns/scroll-margin-right.mjs';
import { styled } from './factory.mjs';

export const ScrollMarginRight = /* @__PURE__ */ forwardRef(function ScrollMarginRight(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollMarginRightStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollSnapMarginRightStyle } from '../patterns/scroll-snap-margin-right.mjs';
import { styled } from './factory.mjs';

export const ScrollSnapMarginRight = /* @__PURE__ */ forwardRef(function ScrollSnapMarginRight(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollSnapMarginRightStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
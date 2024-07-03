import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollMarginBottomStyle } from '../patterns/scroll-margin-bottom.mjs';
import { styled } from './factory.mjs';

export const ScrollMarginBottom = /* @__PURE__ */ forwardRef(function ScrollMarginBottom(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollMarginBottomStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollSnapMarginBottomStyle } from '../patterns/scroll-snap-margin-bottom.mjs';
import { styled } from './factory.mjs';

export const ScrollSnapMarginBottom = /* @__PURE__ */ forwardRef(function ScrollSnapMarginBottom(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollSnapMarginBottomStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
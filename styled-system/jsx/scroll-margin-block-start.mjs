import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollMarginBlockStartStyle } from '../patterns/scroll-margin-block-start.mjs';
import { styled } from './factory.mjs';

export const ScrollMarginBlockStart = /* @__PURE__ */ forwardRef(function ScrollMarginBlockStart(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollMarginBlockStartStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
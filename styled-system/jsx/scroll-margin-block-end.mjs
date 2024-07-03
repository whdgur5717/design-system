import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollMarginBlockEndStyle } from '../patterns/scroll-margin-block-end.mjs';
import { styled } from './factory.mjs';

export const ScrollMarginBlockEnd = /* @__PURE__ */ forwardRef(function ScrollMarginBlockEnd(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollMarginBlockEndStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
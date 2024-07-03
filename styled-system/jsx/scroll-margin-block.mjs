import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollMarginBlockStyle } from '../patterns/scroll-margin-block.mjs';
import { styled } from './factory.mjs';

export const ScrollMarginBlock = /* @__PURE__ */ forwardRef(function ScrollMarginBlock(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollMarginBlockStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
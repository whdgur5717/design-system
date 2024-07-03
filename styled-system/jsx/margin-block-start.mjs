import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMarginBlockStartStyle } from '../patterns/margin-block-start.mjs';
import { styled } from './factory.mjs';

export const MarginBlockStart = /* @__PURE__ */ forwardRef(function MarginBlockStart(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMarginBlockStartStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMarginBlockEndStyle } from '../patterns/margin-block-end.mjs';
import { styled } from './factory.mjs';

export const MarginBlockEnd = /* @__PURE__ */ forwardRef(function MarginBlockEnd(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMarginBlockEndStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
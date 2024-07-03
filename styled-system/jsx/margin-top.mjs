import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMarginTopStyle } from '../patterns/margin-top.mjs';
import { styled } from './factory.mjs';

export const MarginTop = /* @__PURE__ */ forwardRef(function MarginTop(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMarginTopStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
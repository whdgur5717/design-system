import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMarginLeftStyle } from '../patterns/margin-left.mjs';
import { styled } from './factory.mjs';

export const MarginLeft = /* @__PURE__ */ forwardRef(function MarginLeft(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMarginLeftStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
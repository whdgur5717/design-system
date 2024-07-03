import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMarginRightStyle } from '../patterns/margin-right.mjs';
import { styled } from './factory.mjs';

export const MarginRight = /* @__PURE__ */ forwardRef(function MarginRight(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMarginRightStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
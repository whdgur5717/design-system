import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMarginBottomStyle } from '../patterns/margin-bottom.mjs';
import { styled } from './factory.mjs';

export const MarginBottom = /* @__PURE__ */ forwardRef(function MarginBottom(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMarginBottomStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
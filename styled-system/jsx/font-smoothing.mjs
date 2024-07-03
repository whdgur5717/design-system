import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getFontSmoothingStyle } from '../patterns/font-smoothing.mjs';
import { styled } from './factory.mjs';

export const FontSmoothing = /* @__PURE__ */ forwardRef(function FontSmoothing(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getFontSmoothingStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
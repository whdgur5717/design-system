import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTextGradientStyle } from '../patterns/text-gradient.mjs';
import { styled } from './factory.mjs';

export const TextGradient = /* @__PURE__ */ forwardRef(function TextGradient(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTextGradientStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
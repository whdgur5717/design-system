import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGradientFromStyle } from '../patterns/gradient-from.mjs';
import { styled } from './factory.mjs';

export const GradientFrom = /* @__PURE__ */ forwardRef(function GradientFrom(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGradientFromStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
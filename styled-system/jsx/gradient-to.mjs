import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGradientToStyle } from '../patterns/gradient-to.mjs';
import { styled } from './factory.mjs';

export const GradientTo = /* @__PURE__ */ forwardRef(function GradientTo(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGradientToStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
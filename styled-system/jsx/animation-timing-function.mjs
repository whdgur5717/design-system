import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getAnimationTimingFunctionStyle } from '../patterns/animation-timing-function.mjs';
import { styled } from './factory.mjs';

export const AnimationTimingFunction = /* @__PURE__ */ forwardRef(function AnimationTimingFunction(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getAnimationTimingFunctionStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
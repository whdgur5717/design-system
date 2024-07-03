import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTransitionTimingFunctionStyle } from '../patterns/transition-timing-function.mjs';
import { styled } from './factory.mjs';

export const TransitionTimingFunction = /* @__PURE__ */ forwardRef(function TransitionTimingFunction(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTransitionTimingFunctionStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
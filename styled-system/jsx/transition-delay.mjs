import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTransitionDelayStyle } from '../patterns/transition-delay.mjs';
import { styled } from './factory.mjs';

export const TransitionDelay = /* @__PURE__ */ forwardRef(function TransitionDelay(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTransitionDelayStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
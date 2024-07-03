import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getAnimationDelayStyle } from '../patterns/animation-delay.mjs';
import { styled } from './factory.mjs';

export const AnimationDelay = /* @__PURE__ */ forwardRef(function AnimationDelay(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getAnimationDelayStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
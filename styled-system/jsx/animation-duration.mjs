import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getAnimationDurationStyle } from '../patterns/animation-duration.mjs';
import { styled } from './factory.mjs';

export const AnimationDuration = /* @__PURE__ */ forwardRef(function AnimationDuration(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getAnimationDurationStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
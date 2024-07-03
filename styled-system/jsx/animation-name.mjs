import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getAnimationNameStyle } from '../patterns/animation-name.mjs';
import { styled } from './factory.mjs';

export const AnimationName = /* @__PURE__ */ forwardRef(function AnimationName(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getAnimationNameStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
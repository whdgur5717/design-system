import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getAnimationStyle } from '../patterns/animation.mjs';
import { styled } from './factory.mjs';

export const Animation = /* @__PURE__ */ forwardRef(function Animation(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getAnimationStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTransitionDurationStyle } from '../patterns/transition-duration.mjs';
import { styled } from './factory.mjs';

export const TransitionDuration = /* @__PURE__ */ forwardRef(function TransitionDuration(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTransitionDurationStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
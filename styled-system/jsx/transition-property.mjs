import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTransitionPropertyStyle } from '../patterns/transition-property.mjs';
import { styled } from './factory.mjs';

export const TransitionProperty = /* @__PURE__ */ forwardRef(function TransitionProperty(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTransitionPropertyStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
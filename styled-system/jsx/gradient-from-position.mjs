import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGradientFromPositionStyle } from '../patterns/gradient-from-position.mjs';
import { styled } from './factory.mjs';

export const GradientFromPosition = /* @__PURE__ */ forwardRef(function GradientFromPosition(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGradientFromPositionStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
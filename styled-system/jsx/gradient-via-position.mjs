import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGradientViaPositionStyle } from '../patterns/gradient-via-position.mjs';
import { styled } from './factory.mjs';

export const GradientViaPosition = /* @__PURE__ */ forwardRef(function GradientViaPosition(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGradientViaPositionStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
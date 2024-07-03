import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGradientToPositionStyle } from '../patterns/gradient-to-position.mjs';
import { styled } from './factory.mjs';

export const GradientToPosition = /* @__PURE__ */ forwardRef(function GradientToPosition(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGradientToPositionStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
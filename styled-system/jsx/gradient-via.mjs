import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGradientViaStyle } from '../patterns/gradient-via.mjs';
import { styled } from './factory.mjs';

export const GradientVia = /* @__PURE__ */ forwardRef(function GradientVia(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGradientViaStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackgroundGradientStyle } from '../patterns/background-gradient.mjs';
import { styled } from './factory.mjs';

export const BackgroundGradient = /* @__PURE__ */ forwardRef(function BackgroundGradient(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackgroundGradientStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
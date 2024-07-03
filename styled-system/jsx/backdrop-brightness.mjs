import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackdropBrightnessStyle } from '../patterns/backdrop-brightness.mjs';
import { styled } from './factory.mjs';

export const BackdropBrightness = /* @__PURE__ */ forwardRef(function BackdropBrightness(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackdropBrightnessStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
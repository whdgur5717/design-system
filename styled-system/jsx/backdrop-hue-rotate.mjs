import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackdropHueRotateStyle } from '../patterns/backdrop-hue-rotate.mjs';
import { styled } from './factory.mjs';

export const BackdropHueRotate = /* @__PURE__ */ forwardRef(function BackdropHueRotate(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackdropHueRotateStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
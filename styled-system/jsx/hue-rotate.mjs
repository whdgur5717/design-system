import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getHueRotateStyle } from '../patterns/hue-rotate.mjs';
import { styled } from './factory.mjs';

export const HueRotate = /* @__PURE__ */ forwardRef(function HueRotate(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getHueRotateStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
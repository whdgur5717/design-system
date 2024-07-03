import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackdropInvertStyle } from '../patterns/backdrop-invert.mjs';
import { styled } from './factory.mjs';

export const BackdropInvert = /* @__PURE__ */ forwardRef(function BackdropInvert(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackdropInvertStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
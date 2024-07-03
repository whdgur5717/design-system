import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackdropBlurStyle } from '../patterns/backdrop-blur.mjs';
import { styled } from './factory.mjs';

export const BackdropBlur = /* @__PURE__ */ forwardRef(function BackdropBlur(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackdropBlurStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
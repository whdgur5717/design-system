import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackdropGrayscaleStyle } from '../patterns/backdrop-grayscale.mjs';
import { styled } from './factory.mjs';

export const BackdropGrayscale = /* @__PURE__ */ forwardRef(function BackdropGrayscale(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackdropGrayscaleStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
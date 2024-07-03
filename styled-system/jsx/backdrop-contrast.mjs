import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackdropContrastStyle } from '../patterns/backdrop-contrast.mjs';
import { styled } from './factory.mjs';

export const BackdropContrast = /* @__PURE__ */ forwardRef(function BackdropContrast(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackdropContrastStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackdropOpacityStyle } from '../patterns/backdrop-opacity.mjs';
import { styled } from './factory.mjs';

export const BackdropOpacity = /* @__PURE__ */ forwardRef(function BackdropOpacity(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackdropOpacityStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
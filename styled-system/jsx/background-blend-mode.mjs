import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackgroundBlendModeStyle } from '../patterns/background-blend-mode.mjs';
import { styled } from './factory.mjs';

export const BackgroundBlendMode = /* @__PURE__ */ forwardRef(function BackgroundBlendMode(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackgroundBlendModeStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
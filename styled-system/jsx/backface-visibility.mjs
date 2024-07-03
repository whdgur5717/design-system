import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackfaceVisibilityStyle } from '../patterns/backface-visibility.mjs';
import { styled } from './factory.mjs';

export const BackfaceVisibility = /* @__PURE__ */ forwardRef(function BackfaceVisibility(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackfaceVisibilityStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
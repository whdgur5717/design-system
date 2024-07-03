import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getContrastStyle } from '../patterns/contrast.mjs';
import { styled } from './factory.mjs';

export const Contrast = /* @__PURE__ */ forwardRef(function Contrast(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getContrastStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
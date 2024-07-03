import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBlurStyle } from '../patterns/blur.mjs';
import { styled } from './factory.mjs';

export const Blur = /* @__PURE__ */ forwardRef(function Blur(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBlurStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
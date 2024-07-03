import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGrayscaleStyle } from '../patterns/grayscale.mjs';
import { styled } from './factory.mjs';

export const Grayscale = /* @__PURE__ */ forwardRef(function Grayscale(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGrayscaleStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
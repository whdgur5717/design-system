import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getSepiaStyle } from '../patterns/sepia.mjs';
import { styled } from './factory.mjs';

export const Sepia = /* @__PURE__ */ forwardRef(function Sepia(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getSepiaStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getInvertStyle } from '../patterns/invert.mjs';
import { styled } from './factory.mjs';

export const Invert = /* @__PURE__ */ forwardRef(function Invert(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getInvertStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
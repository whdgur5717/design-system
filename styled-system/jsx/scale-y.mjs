import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScaleYStyle } from '../patterns/scale-y.mjs';
import { styled } from './factory.mjs';

export const ScaleY = /* @__PURE__ */ forwardRef(function ScaleY(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScaleYStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
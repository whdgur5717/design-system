import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getStrokeWidthStyle } from '../patterns/stroke-width.mjs';
import { styled } from './factory.mjs';

export const StrokeWidth = /* @__PURE__ */ forwardRef(function StrokeWidth(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getStrokeWidthStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
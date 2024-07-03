import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScaleXStyle } from '../patterns/scale-x.mjs';
import { styled } from './factory.mjs';

export const ScaleX = /* @__PURE__ */ forwardRef(function ScaleX(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScaleXStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScaleStyle } from '../patterns/scale.mjs';
import { styled } from './factory.mjs';

export const Scale = /* @__PURE__ */ forwardRef(function Scale(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScaleStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
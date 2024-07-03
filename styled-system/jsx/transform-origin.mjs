import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTransformOriginStyle } from '../patterns/transform-origin.mjs';
import { styled } from './factory.mjs';

export const TransformOrigin = /* @__PURE__ */ forwardRef(function TransformOrigin(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTransformOriginStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getStrokeStyle } from '../patterns/stroke.mjs';
import { styled } from './factory.mjs';

export const Stroke = /* @__PURE__ */ forwardRef(function Stroke(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getStrokeStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
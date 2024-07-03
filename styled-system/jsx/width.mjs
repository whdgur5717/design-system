import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getWidthStyle } from '../patterns/width.mjs';
import { styled } from './factory.mjs';

export const Width = /* @__PURE__ */ forwardRef(function Width(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getWidthStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
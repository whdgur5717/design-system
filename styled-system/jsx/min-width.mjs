import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMinWidthStyle } from '../patterns/min-width.mjs';
import { styled } from './factory.mjs';

export const MinWidth = /* @__PURE__ */ forwardRef(function MinWidth(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMinWidthStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
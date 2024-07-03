import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getVerticalAlignStyle } from '../patterns/vertical-align.mjs';
import { styled } from './factory.mjs';

export const VerticalAlign = /* @__PURE__ */ forwardRef(function VerticalAlign(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getVerticalAlignStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
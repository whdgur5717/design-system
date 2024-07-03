import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getPaddingInlineEndStyle } from '../patterns/padding-inline-end.mjs';
import { styled } from './factory.mjs';

export const PaddingInlineEnd = /* @__PURE__ */ forwardRef(function PaddingInlineEnd(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getPaddingInlineEndStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
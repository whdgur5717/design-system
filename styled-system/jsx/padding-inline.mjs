import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getPaddingInlineStyle } from '../patterns/padding-inline.mjs';
import { styled } from './factory.mjs';

export const PaddingInline = /* @__PURE__ */ forwardRef(function PaddingInline(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getPaddingInlineStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getPaddingInlineStartStyle } from '../patterns/padding-inline-start.mjs';
import { styled } from './factory.mjs';

export const PaddingInlineStart = /* @__PURE__ */ forwardRef(function PaddingInlineStart(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getPaddingInlineStartStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
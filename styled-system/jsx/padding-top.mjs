import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getPaddingTopStyle } from '../patterns/padding-top.mjs';
import { styled } from './factory.mjs';

export const PaddingTop = /* @__PURE__ */ forwardRef(function PaddingTop(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getPaddingTopStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
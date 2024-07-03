import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getPaddingRightStyle } from '../patterns/padding-right.mjs';
import { styled } from './factory.mjs';

export const PaddingRight = /* @__PURE__ */ forwardRef(function PaddingRight(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getPaddingRightStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
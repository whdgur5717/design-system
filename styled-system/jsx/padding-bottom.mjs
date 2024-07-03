import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getPaddingBottomStyle } from '../patterns/padding-bottom.mjs';
import { styled } from './factory.mjs';

export const PaddingBottom = /* @__PURE__ */ forwardRef(function PaddingBottom(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getPaddingBottomStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
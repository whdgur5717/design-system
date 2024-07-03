import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getPaddingLeftStyle } from '../patterns/padding-left.mjs';
import { styled } from './factory.mjs';

export const PaddingLeft = /* @__PURE__ */ forwardRef(function PaddingLeft(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getPaddingLeftStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
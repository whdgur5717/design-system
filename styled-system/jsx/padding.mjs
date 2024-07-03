import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getPaddingStyle } from '../patterns/padding.mjs';
import { styled } from './factory.mjs';

export const Padding = /* @__PURE__ */ forwardRef(function Padding(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getPaddingStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
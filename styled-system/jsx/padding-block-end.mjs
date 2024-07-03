import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getPaddingBlockEndStyle } from '../patterns/padding-block-end.mjs';
import { styled } from './factory.mjs';

export const PaddingBlockEnd = /* @__PURE__ */ forwardRef(function PaddingBlockEnd(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getPaddingBlockEndStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
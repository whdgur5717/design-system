import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getPaddingBlockStartStyle } from '../patterns/padding-block-start.mjs';
import { styled } from './factory.mjs';

export const PaddingBlockStart = /* @__PURE__ */ forwardRef(function PaddingBlockStart(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getPaddingBlockStartStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
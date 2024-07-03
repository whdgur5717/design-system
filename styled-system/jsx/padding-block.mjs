import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getPaddingBlockStyle } from '../patterns/padding-block.mjs';
import { styled } from './factory.mjs';

export const PaddingBlock = /* @__PURE__ */ forwardRef(function PaddingBlock(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getPaddingBlockStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
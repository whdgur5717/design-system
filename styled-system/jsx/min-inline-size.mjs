import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMinInlineSizeStyle } from '../patterns/min-inline-size.mjs';
import { styled } from './factory.mjs';

export const MinInlineSize = /* @__PURE__ */ forwardRef(function MinInlineSize(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMinInlineSizeStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
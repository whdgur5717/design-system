import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMaxInlineSizeStyle } from '../patterns/max-inline-size.mjs';
import { styled } from './factory.mjs';

export const MaxInlineSize = /* @__PURE__ */ forwardRef(function MaxInlineSize(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMaxInlineSizeStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
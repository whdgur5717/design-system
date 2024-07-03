import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getInsetInlineStyle } from '../patterns/inset-inline.mjs';
import { styled } from './factory.mjs';

export const InsetInline = /* @__PURE__ */ forwardRef(function InsetInline(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getInsetInlineStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getInsetInlineEndStyle } from '../patterns/inset-inline-end.mjs';
import { styled } from './factory.mjs';

export const InsetInlineEnd = /* @__PURE__ */ forwardRef(function InsetInlineEnd(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getInsetInlineEndStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getInsetInlineStartStyle } from '../patterns/inset-inline-start.mjs';
import { styled } from './factory.mjs';

export const InsetInlineStart = /* @__PURE__ */ forwardRef(function InsetInlineStart(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getInsetInlineStartStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
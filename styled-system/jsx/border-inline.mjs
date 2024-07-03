import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderInlineStyle } from '../patterns/border-inline.mjs';
import { styled } from './factory.mjs';

export const BorderInline = /* @__PURE__ */ forwardRef(function BorderInline(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderInlineStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
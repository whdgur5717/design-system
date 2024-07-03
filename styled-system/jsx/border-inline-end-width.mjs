import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderInlineEndWidthStyle } from '../patterns/border-inline-end-width.mjs';
import { styled } from './factory.mjs';

export const BorderInlineEndWidth = /* @__PURE__ */ forwardRef(function BorderInlineEndWidth(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderInlineEndWidthStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
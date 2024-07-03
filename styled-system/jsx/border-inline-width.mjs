import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderInlineWidthStyle } from '../patterns/border-inline-width.mjs';
import { styled } from './factory.mjs';

export const BorderInlineWidth = /* @__PURE__ */ forwardRef(function BorderInlineWidth(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderInlineWidthStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
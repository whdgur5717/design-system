import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderInlineStartWidthStyle } from '../patterns/border-inline-start-width.mjs';
import { styled } from './factory.mjs';

export const BorderInlineStartWidth = /* @__PURE__ */ forwardRef(function BorderInlineStartWidth(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderInlineStartWidthStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
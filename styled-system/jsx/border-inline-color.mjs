import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderInlineColorStyle } from '../patterns/border-inline-color.mjs';
import { styled } from './factory.mjs';

export const BorderInlineColor = /* @__PURE__ */ forwardRef(function BorderInlineColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderInlineColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
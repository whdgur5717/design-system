import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderInlineEndColorStyle } from '../patterns/border-inline-end-color.mjs';
import { styled } from './factory.mjs';

export const BorderInlineEndColor = /* @__PURE__ */ forwardRef(function BorderInlineEndColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderInlineEndColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
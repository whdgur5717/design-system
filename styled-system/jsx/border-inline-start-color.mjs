import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderInlineStartColorStyle } from '../patterns/border-inline-start-color.mjs';
import { styled } from './factory.mjs';

export const BorderInlineStartColor = /* @__PURE__ */ forwardRef(function BorderInlineStartColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderInlineStartColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
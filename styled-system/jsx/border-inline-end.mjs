import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderInlineEndStyle } from '../patterns/border-inline-end.mjs';
import { styled } from './factory.mjs';

export const BorderInlineEnd = /* @__PURE__ */ forwardRef(function BorderInlineEnd(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderInlineEndStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
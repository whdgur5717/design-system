import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderInlineStartStyle } from '../patterns/border-inline-start.mjs';
import { styled } from './factory.mjs';

export const BorderInlineStart = /* @__PURE__ */ forwardRef(function BorderInlineStart(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderInlineStartStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
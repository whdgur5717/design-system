import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderWidthStyle } from '../patterns/border-width.mjs';
import { styled } from './factory.mjs';

export const BorderWidth = /* @__PURE__ */ forwardRef(function BorderWidth(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderWidthStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
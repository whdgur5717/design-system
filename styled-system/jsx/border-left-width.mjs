import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderLeftWidthStyle } from '../patterns/border-left-width.mjs';
import { styled } from './factory.mjs';

export const BorderLeftWidth = /* @__PURE__ */ forwardRef(function BorderLeftWidth(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderLeftWidthStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
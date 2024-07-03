import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderLeftColorStyle } from '../patterns/border-left-color.mjs';
import { styled } from './factory.mjs';

export const BorderLeftColor = /* @__PURE__ */ forwardRef(function BorderLeftColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderLeftColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
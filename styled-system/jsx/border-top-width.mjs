import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderTopWidthStyle } from '../patterns/border-top-width.mjs';
import { styled } from './factory.mjs';

export const BorderTopWidth = /* @__PURE__ */ forwardRef(function BorderTopWidth(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderTopWidthStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
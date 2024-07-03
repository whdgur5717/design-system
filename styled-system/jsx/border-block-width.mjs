import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderBlockWidthStyle } from '../patterns/border-block-width.mjs';
import { styled } from './factory.mjs';

export const BorderBlockWidth = /* @__PURE__ */ forwardRef(function BorderBlockWidth(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderBlockWidthStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
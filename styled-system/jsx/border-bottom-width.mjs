import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderBottomWidthStyle } from '../patterns/border-bottom-width.mjs';
import { styled } from './factory.mjs';

export const BorderBottomWidth = /* @__PURE__ */ forwardRef(function BorderBottomWidth(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderBottomWidthStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
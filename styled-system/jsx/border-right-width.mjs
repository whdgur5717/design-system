import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderRightWidthStyle } from '../patterns/border-right-width.mjs';
import { styled } from './factory.mjs';

export const BorderRightWidth = /* @__PURE__ */ forwardRef(function BorderRightWidth(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderRightWidthStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
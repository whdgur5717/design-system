import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderRightColorStyle } from '../patterns/border-right-color.mjs';
import { styled } from './factory.mjs';

export const BorderRightColor = /* @__PURE__ */ forwardRef(function BorderRightColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderRightColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
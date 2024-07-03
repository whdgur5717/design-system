import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderColorStyle } from '../patterns/border-color.mjs';
import { styled } from './factory.mjs';

export const BorderColor = /* @__PURE__ */ forwardRef(function BorderColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
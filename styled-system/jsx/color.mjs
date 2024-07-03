import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getColorStyle } from '../patterns/color.mjs';
import { styled } from './factory.mjs';

export const Color = /* @__PURE__ */ forwardRef(function Color(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
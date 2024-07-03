import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTextShadowColorStyle } from '../patterns/text-shadow-color.mjs';
import { styled } from './factory.mjs';

export const TextShadowColor = /* @__PURE__ */ forwardRef(function TextShadowColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTextShadowColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
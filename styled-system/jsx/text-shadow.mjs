import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTextShadowStyle } from '../patterns/text-shadow.mjs';
import { styled } from './factory.mjs';

export const TextShadow = /* @__PURE__ */ forwardRef(function TextShadow(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTextShadowStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
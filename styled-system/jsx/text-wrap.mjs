import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTextWrapStyle } from '../patterns/text-wrap.mjs';
import { styled } from './factory.mjs';

export const TextWrap = /* @__PURE__ */ forwardRef(function TextWrap(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTextWrapStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
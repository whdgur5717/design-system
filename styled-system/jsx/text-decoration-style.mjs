import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTextDecorationStyleStyle } from '../patterns/text-decoration-style.mjs';
import { styled } from './factory.mjs';

export const TextDecorationStyle = /* @__PURE__ */ forwardRef(function TextDecorationStyle(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTextDecorationStyleStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
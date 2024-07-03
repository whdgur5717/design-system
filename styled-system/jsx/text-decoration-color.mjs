import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTextDecorationColorStyle } from '../patterns/text-decoration-color.mjs';
import { styled } from './factory.mjs';

export const TextDecorationColor = /* @__PURE__ */ forwardRef(function TextDecorationColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTextDecorationColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
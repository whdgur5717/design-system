import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTextDecorationThicknessStyle } from '../patterns/text-decoration-thickness.mjs';
import { styled } from './factory.mjs';

export const TextDecorationThickness = /* @__PURE__ */ forwardRef(function TextDecorationThickness(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTextDecorationThicknessStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
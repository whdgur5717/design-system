import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTextDecorationStyle } from '../patterns/text-decoration.mjs';
import { styled } from './factory.mjs';

export const TextDecoration = /* @__PURE__ */ forwardRef(function TextDecoration(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTextDecorationStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
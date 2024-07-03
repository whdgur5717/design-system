import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTextUnderlineOffsetStyle } from '../patterns/text-underline-offset.mjs';
import { styled } from './factory.mjs';

export const TextUnderlineOffset = /* @__PURE__ */ forwardRef(function TextUnderlineOffset(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTextUnderlineOffsetStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
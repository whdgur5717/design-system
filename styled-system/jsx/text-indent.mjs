import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTextIndentStyle } from '../patterns/text-indent.mjs';
import { styled } from './factory.mjs';

export const TextIndent = /* @__PURE__ */ forwardRef(function TextIndent(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTextIndentStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
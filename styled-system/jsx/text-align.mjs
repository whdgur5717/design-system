import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTextAlignStyle } from '../patterns/text-align.mjs';
import { styled } from './factory.mjs';

export const TextAlign = /* @__PURE__ */ forwardRef(function TextAlign(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTextAlignStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
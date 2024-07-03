import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTextSizeAdjustStyle } from '../patterns/text-size-adjust.mjs';
import { styled } from './factory.mjs';

export const TextSizeAdjust = /* @__PURE__ */ forwardRef(function TextSizeAdjust(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTextSizeAdjustStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
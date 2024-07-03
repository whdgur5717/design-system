import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTextTransformStyle } from '../patterns/text-transform.mjs';
import { styled } from './factory.mjs';

export const TextTransform = /* @__PURE__ */ forwardRef(function TextTransform(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTextTransformStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
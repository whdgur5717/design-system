import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTextOverflowStyle } from '../patterns/text-overflow.mjs';
import { styled } from './factory.mjs';

export const TextOverflow = /* @__PURE__ */ forwardRef(function TextOverflow(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTextOverflowStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
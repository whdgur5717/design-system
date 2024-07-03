import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getOutlineOffsetStyle } from '../patterns/outline-offset.mjs';
import { styled } from './factory.mjs';

export const OutlineOffset = /* @__PURE__ */ forwardRef(function OutlineOffset(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getOutlineOffsetStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
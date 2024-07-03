import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getOutlineWidthStyle } from '../patterns/outline-width.mjs';
import { styled } from './factory.mjs';

export const OutlineWidth = /* @__PURE__ */ forwardRef(function OutlineWidth(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getOutlineWidthStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
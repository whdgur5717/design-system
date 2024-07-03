import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getOutlineColorStyle } from '../patterns/outline-color.mjs';
import { styled } from './factory.mjs';

export const OutlineColor = /* @__PURE__ */ forwardRef(function OutlineColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getOutlineColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
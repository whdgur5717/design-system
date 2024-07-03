import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getOutlineStyle } from '../patterns/outline.mjs';
import { styled } from './factory.mjs';

export const Outline = /* @__PURE__ */ forwardRef(function Outline(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getOutlineStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
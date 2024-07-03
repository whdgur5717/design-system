import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getDisplayStyle } from '../patterns/display.mjs';
import { styled } from './factory.mjs';

export const Display = /* @__PURE__ */ forwardRef(function Display(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getDisplayStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
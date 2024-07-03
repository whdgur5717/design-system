import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollbarStyle } from '../patterns/scrollbar.mjs';
import { styled } from './factory.mjs';

export const Scrollbar = /* @__PURE__ */ forwardRef(function Scrollbar(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollbarStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
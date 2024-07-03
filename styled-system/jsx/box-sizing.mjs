import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBoxSizingStyle } from '../patterns/box-sizing.mjs';
import { styled } from './factory.mjs';

export const BoxSizing = /* @__PURE__ */ forwardRef(function BoxSizing(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBoxSizingStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderTopStyle } from '../patterns/border-top.mjs';
import { styled } from './factory.mjs';

export const BorderTop = /* @__PURE__ */ forwardRef(function BorderTop(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderTopStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
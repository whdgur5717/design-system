import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBoxDecorationBreakStyle } from '../patterns/box-decoration-break.mjs';
import { styled } from './factory.mjs';

export const BoxDecorationBreak = /* @__PURE__ */ forwardRef(function BoxDecorationBreak(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBoxDecorationBreakStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getLineClampStyle } from '../patterns/line-clamp.mjs';
import { styled } from './factory.mjs';

export const LineClamp = /* @__PURE__ */ forwardRef(function LineClamp(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getLineClampStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
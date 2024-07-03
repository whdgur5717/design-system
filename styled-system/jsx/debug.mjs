import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getDebugStyle } from '../patterns/debug.mjs';
import { styled } from './factory.mjs';

export const Debug = /* @__PURE__ */ forwardRef(function Debug(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getDebugStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
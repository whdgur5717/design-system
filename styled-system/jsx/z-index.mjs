import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getZIndexStyle } from '../patterns/z-index.mjs';
import { styled } from './factory.mjs';

export const ZIndex = /* @__PURE__ */ forwardRef(function ZIndex(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getZIndexStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
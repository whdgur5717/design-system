import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMaxHeightStyle } from '../patterns/max-height.mjs';
import { styled } from './factory.mjs';

export const MaxHeight = /* @__PURE__ */ forwardRef(function MaxHeight(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMaxHeightStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
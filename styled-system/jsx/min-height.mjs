import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMinHeightStyle } from '../patterns/min-height.mjs';
import { styled } from './factory.mjs';

export const MinHeight = /* @__PURE__ */ forwardRef(function MinHeight(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMinHeightStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
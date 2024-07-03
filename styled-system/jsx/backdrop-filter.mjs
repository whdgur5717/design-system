import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackdropFilterStyle } from '../patterns/backdrop-filter.mjs';
import { styled } from './factory.mjs';

export const BackdropFilter = /* @__PURE__ */ forwardRef(function BackdropFilter(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackdropFilterStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
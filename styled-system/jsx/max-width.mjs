import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMaxWidthStyle } from '../patterns/max-width.mjs';
import { styled } from './factory.mjs';

export const MaxWidth = /* @__PURE__ */ forwardRef(function MaxWidth(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMaxWidthStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
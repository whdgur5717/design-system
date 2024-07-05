import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getFontWeightStyle } from '../patterns/font-weight.mjs';
import { styled } from './factory.mjs';

export const FontWeight = /* @__PURE__ */ forwardRef(function FontWeight(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getFontWeightStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
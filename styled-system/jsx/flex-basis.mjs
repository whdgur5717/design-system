import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getFlexBasisStyle } from '../patterns/flex-basis.mjs';
import { styled } from './factory.mjs';

export const FlexBasis = /* @__PURE__ */ forwardRef(function FlexBasis(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getFlexBasisStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
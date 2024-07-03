import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getFontVariantNumericStyle } from '../patterns/font-variant-numeric.mjs';
import { styled } from './factory.mjs';

export const FontVariantNumeric = /* @__PURE__ */ forwardRef(function FontVariantNumeric(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getFontVariantNumericStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
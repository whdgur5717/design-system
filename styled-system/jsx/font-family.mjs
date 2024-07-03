import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getFontFamilyStyle } from '../patterns/font-family.mjs';
import { styled } from './factory.mjs';

export const FontFamily = /* @__PURE__ */ forwardRef(function FontFamily(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getFontFamilyStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getFontSizeStyle } from '../patterns/font-size.mjs';
import { styled } from './factory.mjs';

export const FontSize = /* @__PURE__ */ forwardRef(function FontSize(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getFontSizeStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackgroundColorStyle } from '../patterns/background-color.mjs';
import { styled } from './factory.mjs';

export const BackgroundColor = /* @__PURE__ */ forwardRef(function BackgroundColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackgroundColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
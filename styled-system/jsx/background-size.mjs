import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackgroundSizeStyle } from '../patterns/background-size.mjs';
import { styled } from './factory.mjs';

export const BackgroundSize = /* @__PURE__ */ forwardRef(function BackgroundSize(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackgroundSizeStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
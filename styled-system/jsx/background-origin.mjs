import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackgroundOriginStyle } from '../patterns/background-origin.mjs';
import { styled } from './factory.mjs';

export const BackgroundOrigin = /* @__PURE__ */ forwardRef(function BackgroundOrigin(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackgroundOriginStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
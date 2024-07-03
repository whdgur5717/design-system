import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackgroundPositionYStyle } from '../patterns/background-position-y.mjs';
import { styled } from './factory.mjs';

export const BackgroundPositionY = /* @__PURE__ */ forwardRef(function BackgroundPositionY(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackgroundPositionYStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
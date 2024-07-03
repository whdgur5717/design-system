import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackgroundPositionStyle } from '../patterns/background-position.mjs';
import { styled } from './factory.mjs';

export const BackgroundPosition = /* @__PURE__ */ forwardRef(function BackgroundPosition(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackgroundPositionStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
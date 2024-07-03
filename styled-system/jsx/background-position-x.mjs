import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackgroundPositionXStyle } from '../patterns/background-position-x.mjs';
import { styled } from './factory.mjs';

export const BackgroundPositionX = /* @__PURE__ */ forwardRef(function BackgroundPositionX(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackgroundPositionXStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
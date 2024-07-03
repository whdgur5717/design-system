import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackgroundRepeatStyle } from '../patterns/background-repeat.mjs';
import { styled } from './factory.mjs';

export const BackgroundRepeat = /* @__PURE__ */ forwardRef(function BackgroundRepeat(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackgroundRepeatStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
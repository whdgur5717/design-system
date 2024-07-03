import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackgroundClipStyle } from '../patterns/background-clip.mjs';
import { styled } from './factory.mjs';

export const BackgroundClip = /* @__PURE__ */ forwardRef(function BackgroundClip(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackgroundClipStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
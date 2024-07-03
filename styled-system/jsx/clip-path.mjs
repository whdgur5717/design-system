import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getClipPathStyle } from '../patterns/clip-path.mjs';
import { styled } from './factory.mjs';

export const ClipPath = /* @__PURE__ */ forwardRef(function ClipPath(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getClipPathStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
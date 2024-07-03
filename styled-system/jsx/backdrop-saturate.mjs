import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackdropSaturateStyle } from '../patterns/backdrop-saturate.mjs';
import { styled } from './factory.mjs';

export const BackdropSaturate = /* @__PURE__ */ forwardRef(function BackdropSaturate(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackdropSaturateStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
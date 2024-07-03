import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackdropSepiaStyle } from '../patterns/backdrop-sepia.mjs';
import { styled } from './factory.mjs';

export const BackdropSepia = /* @__PURE__ */ forwardRef(function BackdropSepia(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackdropSepiaStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBrightnessStyle } from '../patterns/brightness.mjs';
import { styled } from './factory.mjs';

export const Brightness = /* @__PURE__ */ forwardRef(function Brightness(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBrightnessStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
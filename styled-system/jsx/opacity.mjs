import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getOpacityStyle } from '../patterns/opacity.mjs';
import { styled } from './factory.mjs';

export const Opacity = /* @__PURE__ */ forwardRef(function Opacity(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getOpacityStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
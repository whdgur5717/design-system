import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBoxShadowStyle } from '../patterns/box-shadow.mjs';
import { styled } from './factory.mjs';

export const BoxShadow = /* @__PURE__ */ forwardRef(function BoxShadow(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBoxShadowStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
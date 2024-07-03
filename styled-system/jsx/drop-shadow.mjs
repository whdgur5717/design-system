import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getDropShadowStyle } from '../patterns/drop-shadow.mjs';
import { styled } from './factory.mjs';

export const DropShadow = /* @__PURE__ */ forwardRef(function DropShadow(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getDropShadowStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
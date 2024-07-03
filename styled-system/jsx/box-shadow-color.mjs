import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBoxShadowColorStyle } from '../patterns/box-shadow-color.mjs';
import { styled } from './factory.mjs';

export const BoxShadowColor = /* @__PURE__ */ forwardRef(function BoxShadowColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBoxShadowColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
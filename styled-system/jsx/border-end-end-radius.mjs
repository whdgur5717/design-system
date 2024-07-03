import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderEndEndRadiusStyle } from '../patterns/border-end-end-radius.mjs';
import { styled } from './factory.mjs';

export const BorderEndEndRadius = /* @__PURE__ */ forwardRef(function BorderEndEndRadius(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderEndEndRadiusStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
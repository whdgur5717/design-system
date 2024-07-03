import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderTopLeftRadiusStyle } from '../patterns/border-top-left-radius.mjs';
import { styled } from './factory.mjs';

export const BorderTopLeftRadius = /* @__PURE__ */ forwardRef(function BorderTopLeftRadius(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderTopLeftRadiusStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
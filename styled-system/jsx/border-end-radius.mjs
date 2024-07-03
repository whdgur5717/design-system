import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderEndRadiusStyle } from '../patterns/border-end-radius.mjs';
import { styled } from './factory.mjs';

export const BorderEndRadius = /* @__PURE__ */ forwardRef(function BorderEndRadius(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderEndRadiusStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
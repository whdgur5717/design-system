import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderStartEndRadiusStyle } from '../patterns/border-start-end-radius.mjs';
import { styled } from './factory.mjs';

export const BorderStartEndRadius = /* @__PURE__ */ forwardRef(function BorderStartEndRadius(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderStartEndRadiusStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
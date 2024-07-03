import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderStartStartRadiusStyle } from '../patterns/border-start-start-radius.mjs';
import { styled } from './factory.mjs';

export const BorderStartStartRadius = /* @__PURE__ */ forwardRef(function BorderStartStartRadius(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderStartStartRadiusStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
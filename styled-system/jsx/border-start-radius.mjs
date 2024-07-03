import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderStartRadiusStyle } from '../patterns/border-start-radius.mjs';
import { styled } from './factory.mjs';

export const BorderStartRadius = /* @__PURE__ */ forwardRef(function BorderStartRadius(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderStartRadiusStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
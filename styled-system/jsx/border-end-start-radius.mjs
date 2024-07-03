import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderEndStartRadiusStyle } from '../patterns/border-end-start-radius.mjs';
import { styled } from './factory.mjs';

export const BorderEndStartRadius = /* @__PURE__ */ forwardRef(function BorderEndStartRadius(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderEndStartRadiusStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
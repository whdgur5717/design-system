import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderLeftRadiusStyle } from '../patterns/border-left-radius.mjs';
import { styled } from './factory.mjs';

export const BorderLeftRadius = /* @__PURE__ */ forwardRef(function BorderLeftRadius(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderLeftRadiusStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
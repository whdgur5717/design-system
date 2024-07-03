import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderRadiusStyle } from '../patterns/border-radius.mjs';
import { styled } from './factory.mjs';

export const BorderRadius = /* @__PURE__ */ forwardRef(function BorderRadius(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderRadiusStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
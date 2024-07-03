import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderSpacingStyle } from '../patterns/border-spacing.mjs';
import { styled } from './factory.mjs';

export const BorderSpacing = /* @__PURE__ */ forwardRef(function BorderSpacing(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderSpacingStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
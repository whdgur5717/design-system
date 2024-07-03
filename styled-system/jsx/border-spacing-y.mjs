import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderSpacingYStyle } from '../patterns/border-spacing-y.mjs';
import { styled } from './factory.mjs';

export const BorderSpacingY = /* @__PURE__ */ forwardRef(function BorderSpacingY(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderSpacingYStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
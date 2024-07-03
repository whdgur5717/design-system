import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderSpacingXStyle } from '../patterns/border-spacing-x.mjs';
import { styled } from './factory.mjs';

export const BorderSpacingX = /* @__PURE__ */ forwardRef(function BorderSpacingX(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderSpacingXStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
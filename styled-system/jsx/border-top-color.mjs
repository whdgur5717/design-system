import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderTopColorStyle } from '../patterns/border-top-color.mjs';
import { styled } from './factory.mjs';

export const BorderTopColor = /* @__PURE__ */ forwardRef(function BorderTopColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderTopColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
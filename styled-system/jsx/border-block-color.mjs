import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderBlockColorStyle } from '../patterns/border-block-color.mjs';
import { styled } from './factory.mjs';

export const BorderBlockColor = /* @__PURE__ */ forwardRef(function BorderBlockColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderBlockColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
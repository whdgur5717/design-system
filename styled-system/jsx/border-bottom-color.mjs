import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderBottomColorStyle } from '../patterns/border-bottom-color.mjs';
import { styled } from './factory.mjs';

export const BorderBottomColor = /* @__PURE__ */ forwardRef(function BorderBottomColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderBottomColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
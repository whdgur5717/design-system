import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getCaretColorStyle } from '../patterns/caret-color.mjs';
import { styled } from './factory.mjs';

export const CaretColor = /* @__PURE__ */ forwardRef(function CaretColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getCaretColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
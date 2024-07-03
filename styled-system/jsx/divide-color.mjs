import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getDivideColorStyle } from '../patterns/divide-color.mjs';
import { styled } from './factory.mjs';

export const DivideColor = /* @__PURE__ */ forwardRef(function DivideColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getDivideColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
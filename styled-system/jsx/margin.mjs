import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMarginStyle } from '../patterns/margin.mjs';
import { styled } from './factory.mjs';

export const Margin = /* @__PURE__ */ forwardRef(function Margin(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMarginStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getLineHeightStyle } from '../patterns/line-height.mjs';
import { styled } from './factory.mjs';

export const LineHeight = /* @__PURE__ */ forwardRef(function LineHeight(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getLineHeightStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
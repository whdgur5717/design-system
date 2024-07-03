import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderBottomStyle } from '../patterns/border-bottom.mjs';
import { styled } from './factory.mjs';

export const BorderBottom = /* @__PURE__ */ forwardRef(function BorderBottom(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderBottomStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
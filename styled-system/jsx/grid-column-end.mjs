import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGridColumnEndStyle } from '../patterns/grid-column-end.mjs';
import { styled } from './factory.mjs';

export const GridColumnEnd = /* @__PURE__ */ forwardRef(function GridColumnEnd(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGridColumnEndStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
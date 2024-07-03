import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGridRowStyle } from '../patterns/grid-row.mjs';
import { styled } from './factory.mjs';

export const GridRow = /* @__PURE__ */ forwardRef(function GridRow(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGridRowStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
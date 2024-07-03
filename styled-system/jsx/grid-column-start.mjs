import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGridColumnStartStyle } from '../patterns/grid-column-start.mjs';
import { styled } from './factory.mjs';

export const GridColumnStart = /* @__PURE__ */ forwardRef(function GridColumnStart(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGridColumnStartStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
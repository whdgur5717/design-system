import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGridAutoColumnsStyle } from '../patterns/grid-auto-columns.mjs';
import { styled } from './factory.mjs';

export const GridAutoColumns = /* @__PURE__ */ forwardRef(function GridAutoColumns(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGridAutoColumnsStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
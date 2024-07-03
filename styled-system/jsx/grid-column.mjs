import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGridColumnStyle } from '../patterns/grid-column.mjs';
import { styled } from './factory.mjs';

export const GridColumn = /* @__PURE__ */ forwardRef(function GridColumn(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGridColumnStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
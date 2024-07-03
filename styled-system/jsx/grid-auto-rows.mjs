import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGridAutoRowsStyle } from '../patterns/grid-auto-rows.mjs';
import { styled } from './factory.mjs';

export const GridAutoRows = /* @__PURE__ */ forwardRef(function GridAutoRows(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGridAutoRowsStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
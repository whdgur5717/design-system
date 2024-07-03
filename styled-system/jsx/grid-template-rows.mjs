import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGridTemplateRowsStyle } from '../patterns/grid-template-rows.mjs';
import { styled } from './factory.mjs';

export const GridTemplateRows = /* @__PURE__ */ forwardRef(function GridTemplateRows(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGridTemplateRowsStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
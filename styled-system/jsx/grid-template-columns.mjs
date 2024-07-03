import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGridTemplateColumnsStyle } from '../patterns/grid-template-columns.mjs';
import { styled } from './factory.mjs';

export const GridTemplateColumns = /* @__PURE__ */ forwardRef(function GridTemplateColumns(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGridTemplateColumnsStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
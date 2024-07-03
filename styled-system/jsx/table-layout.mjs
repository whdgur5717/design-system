import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTableLayoutStyle } from '../patterns/table-layout.mjs';
import { styled } from './factory.mjs';

export const TableLayout = /* @__PURE__ */ forwardRef(function TableLayout(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTableLayoutStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
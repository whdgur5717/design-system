import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getColumnGapStyle } from '../patterns/column-gap.mjs';
import { styled } from './factory.mjs';

export const ColumnGap = /* @__PURE__ */ forwardRef(function ColumnGap(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getColumnGapStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
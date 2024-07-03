import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGridColumnGapStyle } from '../patterns/grid-column-gap.mjs';
import { styled } from './factory.mjs';

export const GridColumnGap = /* @__PURE__ */ forwardRef(function GridColumnGap(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGridColumnGapStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
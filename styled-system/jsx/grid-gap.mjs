import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGridGapStyle } from '../patterns/grid-gap.mjs';
import { styled } from './factory.mjs';

export const GridGap = /* @__PURE__ */ forwardRef(function GridGap(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGridGapStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGridRowGapStyle } from '../patterns/grid-row-gap.mjs';
import { styled } from './factory.mjs';

export const GridRowGap = /* @__PURE__ */ forwardRef(function GridRowGap(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGridRowGapStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
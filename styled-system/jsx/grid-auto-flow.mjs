import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGridAutoFlowStyle } from '../patterns/grid-auto-flow.mjs';
import { styled } from './factory.mjs';

export const GridAutoFlow = /* @__PURE__ */ forwardRef(function GridAutoFlow(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGridAutoFlowStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
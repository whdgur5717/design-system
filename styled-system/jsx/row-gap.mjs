import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getRowGapStyle } from '../patterns/row-gap.mjs';
import { styled } from './factory.mjs';

export const RowGap = /* @__PURE__ */ forwardRef(function RowGap(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getRowGapStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderCollapseStyle } from '../patterns/border-collapse.mjs';
import { styled } from './factory.mjs';

export const BorderCollapse = /* @__PURE__ */ forwardRef(function BorderCollapse(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderCollapseStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
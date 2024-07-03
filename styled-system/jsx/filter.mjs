import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getFilterStyle } from '../patterns/filter.mjs';
import { styled } from './factory.mjs';

export const Filter = /* @__PURE__ */ forwardRef(function Filter(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getFilterStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
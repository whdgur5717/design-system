import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getHideBelowStyle } from '../patterns/hide-below.mjs';
import { styled } from './factory.mjs';

export const HideBelow = /* @__PURE__ */ forwardRef(function HideBelow(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getHideBelowStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
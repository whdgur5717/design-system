import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollSnapStrictnessStyle } from '../patterns/scroll-snap-strictness.mjs';
import { styled } from './factory.mjs';

export const ScrollSnapStrictness = /* @__PURE__ */ forwardRef(function ScrollSnapStrictness(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollSnapStrictnessStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
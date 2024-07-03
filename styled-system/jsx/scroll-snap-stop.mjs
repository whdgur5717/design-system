import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollSnapStopStyle } from '../patterns/scroll-snap-stop.mjs';
import { styled } from './factory.mjs';

export const ScrollSnapStop = /* @__PURE__ */ forwardRef(function ScrollSnapStop(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollSnapStopStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
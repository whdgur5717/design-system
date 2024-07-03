import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getScrollBehaviorStyle } from '../patterns/scroll-behavior.mjs';
import { styled } from './factory.mjs';

export const ScrollBehavior = /* @__PURE__ */ forwardRef(function ScrollBehavior(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getScrollBehaviorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
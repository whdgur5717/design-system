import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getOverscrollBehaviorYStyle } from '../patterns/overscroll-behavior-y.mjs';
import { styled } from './factory.mjs';

export const OverscrollBehaviorY = /* @__PURE__ */ forwardRef(function OverscrollBehaviorY(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getOverscrollBehaviorYStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
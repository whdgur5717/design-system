import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getOverscrollBehaviorStyle } from '../patterns/overscroll-behavior.mjs';
import { styled } from './factory.mjs';

export const OverscrollBehavior = /* @__PURE__ */ forwardRef(function OverscrollBehavior(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getOverscrollBehaviorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getOverscrollBehaviorXStyle } from '../patterns/overscroll-behavior-x.mjs';
import { styled } from './factory.mjs';

export const OverscrollBehaviorX = /* @__PURE__ */ forwardRef(function OverscrollBehaviorX(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getOverscrollBehaviorXStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
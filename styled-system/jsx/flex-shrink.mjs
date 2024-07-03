import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getFlexShrinkStyle } from '../patterns/flex-shrink.mjs';
import { styled } from './factory.mjs';

export const FlexShrink = /* @__PURE__ */ forwardRef(function FlexShrink(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getFlexShrinkStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
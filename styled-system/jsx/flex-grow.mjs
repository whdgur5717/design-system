import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getFlexGrowStyle } from '../patterns/flex-grow.mjs';
import { styled } from './factory.mjs';

export const FlexGrow = /* @__PURE__ */ forwardRef(function FlexGrow(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getFlexGrowStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
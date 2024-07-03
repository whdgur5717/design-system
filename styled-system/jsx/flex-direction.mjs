import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getFlexDirectionStyle } from '../patterns/flex-direction.mjs';
import { styled } from './factory.mjs';

export const FlexDirection = /* @__PURE__ */ forwardRef(function FlexDirection(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getFlexDirectionStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
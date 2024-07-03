import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getPositionStyle } from '../patterns/position.mjs';
import { styled } from './factory.mjs';

export const Position = /* @__PURE__ */ forwardRef(function Position(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getPositionStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
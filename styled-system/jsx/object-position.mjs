import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getObjectPositionStyle } from '../patterns/object-position.mjs';
import { styled } from './factory.mjs';

export const ObjectPosition = /* @__PURE__ */ forwardRef(function ObjectPosition(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getObjectPositionStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getListStylePositionStyle } from '../patterns/list-style-position.mjs';
import { styled } from './factory.mjs';

export const ListStylePosition = /* @__PURE__ */ forwardRef(function ListStylePosition(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getListStylePositionStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
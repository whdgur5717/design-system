import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getListStyleTypeStyle } from '../patterns/list-style-type.mjs';
import { styled } from './factory.mjs';

export const ListStyleType = /* @__PURE__ */ forwardRef(function ListStyleType(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getListStyleTypeStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
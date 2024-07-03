import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getListStyleImageStyle } from '../patterns/list-style-image.mjs';
import { styled } from './factory.mjs';

export const ListStyleImage = /* @__PURE__ */ forwardRef(function ListStyleImage(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getListStyleImageStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
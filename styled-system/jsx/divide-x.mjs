import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getDivideXStyle } from '../patterns/divide-x.mjs';
import { styled } from './factory.mjs';

export const DivideX = /* @__PURE__ */ forwardRef(function DivideX(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getDivideXStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
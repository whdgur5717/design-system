import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getDivideStyleStyle } from '../patterns/divide-style.mjs';
import { styled } from './factory.mjs';

export const DivideStyle = /* @__PURE__ */ forwardRef(function DivideStyle(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getDivideStyleStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
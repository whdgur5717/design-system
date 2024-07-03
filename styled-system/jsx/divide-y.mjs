import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getDivideYStyle } from '../patterns/divide-y.mjs';
import { styled } from './factory.mjs';

export const DivideY = /* @__PURE__ */ forwardRef(function DivideY(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getDivideYStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getRightStyle } from '../patterns/right.mjs';
import { styled } from './factory.mjs';

export const Right = /* @__PURE__ */ forwardRef(function Right(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getRightStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
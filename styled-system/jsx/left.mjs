import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getLeftStyle } from '../patterns/left.mjs';
import { styled } from './factory.mjs';

export const Left = /* @__PURE__ */ forwardRef(function Left(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getLeftStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
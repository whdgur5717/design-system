import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getRotateYStyle } from '../patterns/rotate-y.mjs';
import { styled } from './factory.mjs';

export const RotateY = /* @__PURE__ */ forwardRef(function RotateY(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getRotateYStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
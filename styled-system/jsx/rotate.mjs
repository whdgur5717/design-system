import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getRotateStyle } from '../patterns/rotate.mjs';
import { styled } from './factory.mjs';

export const Rotate = /* @__PURE__ */ forwardRef(function Rotate(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getRotateStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
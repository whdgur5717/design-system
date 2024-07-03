import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getRotateXStyle } from '../patterns/rotate-x.mjs';
import { styled } from './factory.mjs';

export const RotateX = /* @__PURE__ */ forwardRef(function RotateX(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getRotateXStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
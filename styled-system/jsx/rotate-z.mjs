import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getRotateZStyle } from '../patterns/rotate-z.mjs';
import { styled } from './factory.mjs';

export const RotateZ = /* @__PURE__ */ forwardRef(function RotateZ(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getRotateZStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
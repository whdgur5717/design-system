import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderRightStyle } from '../patterns/border-right.mjs';
import { styled } from './factory.mjs';

export const BorderRight = /* @__PURE__ */ forwardRef(function BorderRight(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderRightStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
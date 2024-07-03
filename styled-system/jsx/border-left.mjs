import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderLeftStyle } from '../patterns/border-left.mjs';
import { styled } from './factory.mjs';

export const BorderLeft = /* @__PURE__ */ forwardRef(function BorderLeft(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderLeftStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
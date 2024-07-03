import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBottomStyle } from '../patterns/bottom.mjs';
import { styled } from './factory.mjs';

export const Bottom = /* @__PURE__ */ forwardRef(function Bottom(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBottomStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
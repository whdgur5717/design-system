import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderBlockStartStyle } from '../patterns/border-block-start.mjs';
import { styled } from './factory.mjs';

export const BorderBlockStart = /* @__PURE__ */ forwardRef(function BorderBlockStart(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderBlockStartStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
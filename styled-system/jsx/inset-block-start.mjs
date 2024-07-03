import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getInsetBlockStartStyle } from '../patterns/inset-block-start.mjs';
import { styled } from './factory.mjs';

export const InsetBlockStart = /* @__PURE__ */ forwardRef(function InsetBlockStart(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getInsetBlockStartStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
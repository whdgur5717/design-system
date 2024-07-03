import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getInsetBlockStyle } from '../patterns/inset-block.mjs';
import { styled } from './factory.mjs';

export const InsetBlock = /* @__PURE__ */ forwardRef(function InsetBlock(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getInsetBlockStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getInsetBlockEndStyle } from '../patterns/inset-block-end.mjs';
import { styled } from './factory.mjs';

export const InsetBlockEnd = /* @__PURE__ */ forwardRef(function InsetBlockEnd(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getInsetBlockEndStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
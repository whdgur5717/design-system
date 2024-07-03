import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getInlineSizeStyle } from '../patterns/inline-size.mjs';
import { styled } from './factory.mjs';

export const InlineSize = /* @__PURE__ */ forwardRef(function InlineSize(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getInlineSizeStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
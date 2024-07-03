import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderBlockEndStyle } from '../patterns/border-block-end.mjs';
import { styled } from './factory.mjs';

export const BorderBlockEnd = /* @__PURE__ */ forwardRef(function BorderBlockEnd(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderBlockEndStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
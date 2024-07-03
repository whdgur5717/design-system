import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getJustifyContentStyle } from '../patterns/justify-content.mjs';
import { styled } from './factory.mjs';

export const JustifyContent = /* @__PURE__ */ forwardRef(function JustifyContent(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getJustifyContentStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
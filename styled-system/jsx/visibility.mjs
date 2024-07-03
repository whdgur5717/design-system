import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getVisibilityStyle } from '../patterns/visibility.mjs';
import { styled } from './factory.mjs';

export const Visibility = /* @__PURE__ */ forwardRef(function Visibility(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getVisibilityStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
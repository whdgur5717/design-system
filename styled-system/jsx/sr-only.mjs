import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getSrOnlyStyle } from '../patterns/sr-only.mjs';
import { styled } from './factory.mjs';

export const SrOnly = /* @__PURE__ */ forwardRef(function SrOnly(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getSrOnlyStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
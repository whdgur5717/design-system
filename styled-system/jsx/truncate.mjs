import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTruncateStyle } from '../patterns/truncate.mjs';
import { styled } from './factory.mjs';

export const Truncate = /* @__PURE__ */ forwardRef(function Truncate(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTruncateStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
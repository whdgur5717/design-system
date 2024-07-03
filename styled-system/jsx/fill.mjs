import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getFillStyle } from '../patterns/fill.mjs';
import { styled } from './factory.mjs';

export const Fill = /* @__PURE__ */ forwardRef(function Fill(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getFillStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
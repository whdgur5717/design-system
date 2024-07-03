import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getInsetStyle } from '../patterns/inset.mjs';
import { styled } from './factory.mjs';

export const Inset = /* @__PURE__ */ forwardRef(function Inset(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getInsetStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
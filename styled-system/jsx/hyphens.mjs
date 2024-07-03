import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getHyphensStyle } from '../patterns/hyphens.mjs';
import { styled } from './factory.mjs';

export const Hyphens = /* @__PURE__ */ forwardRef(function Hyphens(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getHyphensStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
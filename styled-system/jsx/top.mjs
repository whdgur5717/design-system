import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTopStyle } from '../patterns/top.mjs';
import { styled } from './factory.mjs';

export const Top = /* @__PURE__ */ forwardRef(function Top(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTopStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
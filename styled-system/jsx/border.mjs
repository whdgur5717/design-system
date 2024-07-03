import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderStyle } from '../patterns/border.mjs';
import { styled } from './factory.mjs';

export const Border = /* @__PURE__ */ forwardRef(function Border(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMaskStyle } from '../patterns/mask.mjs';
import { styled } from './factory.mjs';

export const Mask = /* @__PURE__ */ forwardRef(function Mask(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMaskStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
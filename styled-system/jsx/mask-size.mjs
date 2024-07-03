import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMaskSizeStyle } from '../patterns/mask-size.mjs';
import { styled } from './factory.mjs';

export const MaskSize = /* @__PURE__ */ forwardRef(function MaskSize(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMaskSizeStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
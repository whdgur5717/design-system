import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBlockSizeStyle } from '../patterns/block-size.mjs';
import { styled } from './factory.mjs';

export const BlockSize = /* @__PURE__ */ forwardRef(function BlockSize(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBlockSizeStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMaxBlockSizeStyle } from '../patterns/max-block-size.mjs';
import { styled } from './factory.mjs';

export const MaxBlockSize = /* @__PURE__ */ forwardRef(function MaxBlockSize(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMaxBlockSizeStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMinBlockSizeStyle } from '../patterns/min-block-size.mjs';
import { styled } from './factory.mjs';

export const MinBlockSize = /* @__PURE__ */ forwardRef(function MinBlockSize(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMinBlockSizeStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
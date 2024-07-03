import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMarginBlockStyle } from '../patterns/margin-block.mjs';
import { styled } from './factory.mjs';

export const MarginBlock = /* @__PURE__ */ forwardRef(function MarginBlock(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMarginBlockStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
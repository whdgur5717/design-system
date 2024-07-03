import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderBlockStyle } from '../patterns/border-block.mjs';
import { styled } from './factory.mjs';

export const BorderBlock = /* @__PURE__ */ forwardRef(function BorderBlock(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderBlockStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
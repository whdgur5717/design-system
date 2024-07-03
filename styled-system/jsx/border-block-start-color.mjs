import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderBlockStartColorStyle } from '../patterns/border-block-start-color.mjs';
import { styled } from './factory.mjs';

export const BorderBlockStartColor = /* @__PURE__ */ forwardRef(function BorderBlockStartColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderBlockStartColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
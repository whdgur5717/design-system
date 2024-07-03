import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderBottomLeftRadiusStyle } from '../patterns/border-bottom-left-radius.mjs';
import { styled } from './factory.mjs';

export const BorderBottomLeftRadius = /* @__PURE__ */ forwardRef(function BorderBottomLeftRadius(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderBottomLeftRadiusStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
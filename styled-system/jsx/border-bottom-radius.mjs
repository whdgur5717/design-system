import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderBottomRadiusStyle } from '../patterns/border-bottom-radius.mjs';
import { styled } from './factory.mjs';

export const BorderBottomRadius = /* @__PURE__ */ forwardRef(function BorderBottomRadius(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderBottomRadiusStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderBottomRightRadiusStyle } from '../patterns/border-bottom-right-radius.mjs';
import { styled } from './factory.mjs';

export const BorderBottomRightRadius = /* @__PURE__ */ forwardRef(function BorderBottomRightRadius(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderBottomRightRadiusStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
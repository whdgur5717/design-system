import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderRightRadiusStyle } from '../patterns/border-right-radius.mjs';
import { styled } from './factory.mjs';

export const BorderRightRadius = /* @__PURE__ */ forwardRef(function BorderRightRadius(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderRightRadiusStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
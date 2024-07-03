import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderTopRightRadiusStyle } from '../patterns/border-top-right-radius.mjs';
import { styled } from './factory.mjs';

export const BorderTopRightRadius = /* @__PURE__ */ forwardRef(function BorderTopRightRadius(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderTopRightRadiusStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderTopRadiusStyle } from '../patterns/border-top-radius.mjs';
import { styled } from './factory.mjs';

export const BorderTopRadius = /* @__PURE__ */ forwardRef(function BorderTopRadius(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderTopRadiusStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
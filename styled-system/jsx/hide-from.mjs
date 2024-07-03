import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getHideFromStyle } from '../patterns/hide-from.mjs';
import { styled } from './factory.mjs';

export const HideFrom = /* @__PURE__ */ forwardRef(function HideFrom(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getHideFromStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
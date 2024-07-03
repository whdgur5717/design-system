import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getAccentColorStyle } from '../patterns/accent-color.mjs';
import { styled } from './factory.mjs';

export const AccentColor = /* @__PURE__ */ forwardRef(function AccentColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getAccentColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getAppearanceStyle } from '../patterns/appearance.mjs';
import { styled } from './factory.mjs';

export const Appearance = /* @__PURE__ */ forwardRef(function Appearance(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getAppearanceStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
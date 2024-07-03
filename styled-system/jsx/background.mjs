import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackgroundStyle } from '../patterns/background.mjs';
import { styled } from './factory.mjs';

export const Background = /* @__PURE__ */ forwardRef(function Background(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackgroundStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
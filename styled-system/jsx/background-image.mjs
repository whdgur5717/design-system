import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackgroundImageStyle } from '../patterns/background-image.mjs';
import { styled } from './factory.mjs';

export const BackgroundImage = /* @__PURE__ */ forwardRef(function BackgroundImage(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackgroundImageStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
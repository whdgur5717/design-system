import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMaskImageStyle } from '../patterns/mask-image.mjs';
import { styled } from './factory.mjs';

export const MaskImage = /* @__PURE__ */ forwardRef(function MaskImage(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMaskImageStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
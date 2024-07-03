import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBorderBlockEndColorStyle } from '../patterns/border-block-end-color.mjs';
import { styled } from './factory.mjs';

export const BorderBlockEndColor = /* @__PURE__ */ forwardRef(function BorderBlockEndColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBorderBlockEndColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
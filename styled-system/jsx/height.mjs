import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getHeightStyle } from '../patterns/height.mjs';
import { styled } from './factory.mjs';

export const Height = /* @__PURE__ */ forwardRef(function Height(props, ref) {
  const [patternProps, restProps] = splitProps(props, ["direction"])

const styleProps = getHeightStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
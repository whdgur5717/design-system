import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getObjectFitStyle } from '../patterns/object-fit.mjs';
import { styled } from './factory.mjs';

export const ObjectFit = /* @__PURE__ */ forwardRef(function ObjectFit(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getObjectFitStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
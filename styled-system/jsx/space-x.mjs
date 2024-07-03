import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getSpaceXStyle } from '../patterns/space-x.mjs';
import { styled } from './factory.mjs';

export const SpaceX = /* @__PURE__ */ forwardRef(function SpaceX(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getSpaceXStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
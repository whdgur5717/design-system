import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTouchActionStyle } from '../patterns/touch-action.mjs';
import { styled } from './factory.mjs';

export const TouchAction = /* @__PURE__ */ forwardRef(function TouchAction(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTouchActionStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
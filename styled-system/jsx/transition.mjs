import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTransitionStyle } from '../patterns/transition.mjs';
import { styled } from './factory.mjs';

export const Transition = /* @__PURE__ */ forwardRef(function Transition(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTransitionStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
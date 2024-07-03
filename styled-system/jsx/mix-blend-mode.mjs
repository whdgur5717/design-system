import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getMixBlendModeStyle } from '../patterns/mix-blend-mode.mjs';
import { styled } from './factory.mjs';

export const MixBlendMode = /* @__PURE__ */ forwardRef(function MixBlendMode(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getMixBlendModeStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
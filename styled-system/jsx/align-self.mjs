import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getAlignSelfStyle } from '../patterns/align-self.mjs';
import { styled } from './factory.mjs';

export const AlignSelf = /* @__PURE__ */ forwardRef(function AlignSelf(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getAlignSelfStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
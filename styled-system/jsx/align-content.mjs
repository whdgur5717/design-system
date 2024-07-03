import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getAlignContentStyle } from '../patterns/align-content.mjs';
import { styled } from './factory.mjs';

export const AlignContent = /* @__PURE__ */ forwardRef(function AlignContent(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getAlignContentStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
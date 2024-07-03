import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getWordBreakStyle } from '../patterns/word-break.mjs';
import { styled } from './factory.mjs';

export const WordBreak = /* @__PURE__ */ forwardRef(function WordBreak(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getWordBreakStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
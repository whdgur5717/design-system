import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getLetterSpacingStyle } from '../patterns/letter-spacing.mjs';
import { styled } from './factory.mjs';

export const LetterSpacing = /* @__PURE__ */ forwardRef(function LetterSpacing(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getLetterSpacingStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
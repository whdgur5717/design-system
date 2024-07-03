import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTextEmphasisColorStyle } from '../patterns/text-emphasis-color.mjs';
import { styled } from './factory.mjs';

export const TextEmphasisColor = /* @__PURE__ */ forwardRef(function TextEmphasisColor(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTextEmphasisColorStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
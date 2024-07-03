import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getGapStyle } from '../patterns/gap.mjs';
import { styled } from './factory.mjs';

export const Gap = /* @__PURE__ */ forwardRef(function Gap(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getGapStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
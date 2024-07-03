import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTranslateZStyle } from '../patterns/translate-z.mjs';
import { styled } from './factory.mjs';

export const TranslateZ = /* @__PURE__ */ forwardRef(function TranslateZ(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTranslateZStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
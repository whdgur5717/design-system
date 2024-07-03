import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTranslateYStyle } from '../patterns/translate-y.mjs';
import { styled } from './factory.mjs';

export const TranslateY = /* @__PURE__ */ forwardRef(function TranslateY(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTranslateYStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
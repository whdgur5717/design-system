import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTranslateXStyle } from '../patterns/translate-x.mjs';
import { styled } from './factory.mjs';

export const TranslateX = /* @__PURE__ */ forwardRef(function TranslateX(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTranslateXStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
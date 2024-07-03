import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getTranslateStyle } from '../patterns/translate.mjs';
import { styled } from './factory.mjs';

export const Translate = /* @__PURE__ */ forwardRef(function Translate(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getTranslateStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
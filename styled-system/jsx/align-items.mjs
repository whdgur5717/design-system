import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getAlignItemsStyle } from '../patterns/align-items.mjs';
import { styled } from './factory.mjs';

export const AlignItems = /* @__PURE__ */ forwardRef(function AlignItems(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getAlignItemsStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
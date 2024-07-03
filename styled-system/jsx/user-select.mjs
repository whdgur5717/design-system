import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getUserSelectStyle } from '../patterns/user-select.mjs';
import { styled } from './factory.mjs';

export const UserSelect = /* @__PURE__ */ forwardRef(function UserSelect(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getUserSelectStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
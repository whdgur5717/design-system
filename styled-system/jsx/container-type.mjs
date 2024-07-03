import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getContainerTypeStyle } from '../patterns/container-type.mjs';
import { styled } from './factory.mjs';

export const ContainerType = /* @__PURE__ */ forwardRef(function ContainerType(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getContainerTypeStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
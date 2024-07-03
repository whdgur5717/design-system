import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getContainerNameStyle } from '../patterns/container-name.mjs';
import { styled } from './factory.mjs';

export const ContainerName = /* @__PURE__ */ forwardRef(function ContainerName(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getContainerNameStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
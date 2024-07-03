import { createElement, forwardRef } from 'react'

import { splitProps } from '../helpers.mjs';
import { getBackgroundAttachmentStyle } from '../patterns/background-attachment.mjs';
import { styled } from './factory.mjs';

export const BackgroundAttachment = /* @__PURE__ */ forwardRef(function BackgroundAttachment(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBackgroundAttachmentStyle(patternProps)
const mergedProps = { ref, ...styleProps, ...restProps }

return createElement(styled.div, mergedProps)
  })
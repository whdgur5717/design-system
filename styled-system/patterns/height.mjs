import { getPatternStyles, patternFns } from '../helpers.mjs';
import { css } from '../css/index.mjs';

const heightConfig = {}

export const getHeightStyle = (styles = {}) => {
  const _styles = getPatternStyles(heightConfig, styles)
  return heightConfig.transform(_styles, patternFns)
}

export const height = (styles) => css(getHeightStyle(styles))
height.raw = getHeightStyle
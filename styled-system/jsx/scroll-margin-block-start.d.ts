/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollMarginBlockStartProperties } from '../patterns/scroll-margin-block-start';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollMarginBlockStartProps extends ScrollMarginBlockStartProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollMarginBlockStartProperties > {}


export declare const ScrollMarginBlockStart: FunctionComponent<ScrollMarginBlockStartProps>
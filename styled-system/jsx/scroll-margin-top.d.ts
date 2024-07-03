/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollMarginTopProperties } from '../patterns/scroll-margin-top';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollMarginTopProps extends ScrollMarginTopProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollMarginTopProperties > {}


export declare const ScrollMarginTop: FunctionComponent<ScrollMarginTopProps>
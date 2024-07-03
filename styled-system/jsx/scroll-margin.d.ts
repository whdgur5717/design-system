/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollMarginProperties } from '../patterns/scroll-margin';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollMarginProps extends ScrollMarginProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollMarginProperties > {}


export declare const ScrollMargin: FunctionComponent<ScrollMarginProps>
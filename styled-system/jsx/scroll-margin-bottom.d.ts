/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollMarginBottomProperties } from '../patterns/scroll-margin-bottom';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollMarginBottomProps extends ScrollMarginBottomProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollMarginBottomProperties > {}


export declare const ScrollMarginBottom: FunctionComponent<ScrollMarginBottomProps>
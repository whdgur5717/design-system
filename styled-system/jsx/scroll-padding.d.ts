/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollPaddingProperties } from '../patterns/scroll-padding';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollPaddingProps extends ScrollPaddingProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollPaddingProperties > {}


export declare const ScrollPadding: FunctionComponent<ScrollPaddingProps>
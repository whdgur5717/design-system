/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollPaddingRightProperties } from '../patterns/scroll-padding-right';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollPaddingRightProps extends ScrollPaddingRightProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollPaddingRightProperties > {}


export declare const ScrollPaddingRight: FunctionComponent<ScrollPaddingRightProps>
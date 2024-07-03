/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollPaddingBlockEndProperties } from '../patterns/scroll-padding-block-end';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollPaddingBlockEndProps extends ScrollPaddingBlockEndProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollPaddingBlockEndProperties > {}


export declare const ScrollPaddingBlockEnd: FunctionComponent<ScrollPaddingBlockEndProps>
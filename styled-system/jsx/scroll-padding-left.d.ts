/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollPaddingLeftProperties } from '../patterns/scroll-padding-left';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollPaddingLeftProps extends ScrollPaddingLeftProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollPaddingLeftProperties > {}


export declare const ScrollPaddingLeft: FunctionComponent<ScrollPaddingLeftProps>
/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollbarProperties } from '../patterns/scrollbar';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollbarProps extends ScrollbarProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollbarProperties > {}


export declare const Scrollbar: FunctionComponent<ScrollbarProps>
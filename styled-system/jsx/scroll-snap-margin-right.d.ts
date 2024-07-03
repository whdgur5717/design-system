/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollSnapMarginRightProperties } from '../patterns/scroll-snap-margin-right';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollSnapMarginRightProps extends ScrollSnapMarginRightProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollSnapMarginRightProperties > {}


export declare const ScrollSnapMarginRight: FunctionComponent<ScrollSnapMarginRightProps>
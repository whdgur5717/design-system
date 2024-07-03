/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollMarginRightProperties } from '../patterns/scroll-margin-right';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollMarginRightProps extends ScrollMarginRightProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollMarginRightProperties > {}


export declare const ScrollMarginRight: FunctionComponent<ScrollMarginRightProps>
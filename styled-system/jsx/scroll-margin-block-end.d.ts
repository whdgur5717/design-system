/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollMarginBlockEndProperties } from '../patterns/scroll-margin-block-end';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollMarginBlockEndProps extends ScrollMarginBlockEndProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollMarginBlockEndProperties > {}


export declare const ScrollMarginBlockEnd: FunctionComponent<ScrollMarginBlockEndProps>
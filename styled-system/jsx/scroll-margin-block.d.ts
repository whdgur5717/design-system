/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollMarginBlockProperties } from '../patterns/scroll-margin-block';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollMarginBlockProps extends ScrollMarginBlockProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollMarginBlockProperties > {}


export declare const ScrollMarginBlock: FunctionComponent<ScrollMarginBlockProps>
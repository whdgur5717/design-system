/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ScrollPaddingBlockProperties } from '../patterns/scroll-padding-block';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ScrollPaddingBlockProps extends ScrollPaddingBlockProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ScrollPaddingBlockProperties > {}


export declare const ScrollPaddingBlock: FunctionComponent<ScrollPaddingBlockProps>
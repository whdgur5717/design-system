/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { AlignItemsProperties } from '../patterns/align-items';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface AlignItemsProps extends AlignItemsProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof AlignItemsProperties > {}


export declare const AlignItems: FunctionComponent<AlignItemsProps>
/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MaxWidthProperties } from '../patterns/max-width';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MaxWidthProps extends MaxWidthProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MaxWidthProperties > {}


export declare const MaxWidth: FunctionComponent<MaxWidthProps>
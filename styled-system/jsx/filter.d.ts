/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { FilterProperties } from '../patterns/filter';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface FilterProps extends FilterProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof FilterProperties > {}


export declare const Filter: FunctionComponent<FilterProps>
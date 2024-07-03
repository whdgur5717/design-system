/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ListStylePositionProperties } from '../patterns/list-style-position';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ListStylePositionProps extends ListStylePositionProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ListStylePositionProperties > {}


export declare const ListStylePosition: FunctionComponent<ListStylePositionProps>
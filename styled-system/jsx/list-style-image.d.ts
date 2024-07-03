/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ListStyleImageProperties } from '../patterns/list-style-image';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ListStyleImageProps extends ListStyleImageProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ListStyleImageProperties > {}


export declare const ListStyleImage: FunctionComponent<ListStyleImageProps>
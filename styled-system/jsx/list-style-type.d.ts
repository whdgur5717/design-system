/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ListStyleTypeProperties } from '../patterns/list-style-type';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ListStyleTypeProps extends ListStyleTypeProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ListStyleTypeProperties > {}


export declare const ListStyleType: FunctionComponent<ListStyleTypeProps>
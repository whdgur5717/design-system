/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TopProperties } from '../patterns/top';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TopProps extends TopProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TopProperties > {}


export declare const Top: FunctionComponent<TopProps>
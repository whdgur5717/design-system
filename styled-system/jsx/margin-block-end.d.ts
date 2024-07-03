/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MarginBlockEndProperties } from '../patterns/margin-block-end';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MarginBlockEndProps extends MarginBlockEndProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MarginBlockEndProperties > {}


export declare const MarginBlockEnd: FunctionComponent<MarginBlockEndProps>
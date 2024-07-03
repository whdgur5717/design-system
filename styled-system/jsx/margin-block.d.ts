/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MarginBlockProperties } from '../patterns/margin-block';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MarginBlockProps extends MarginBlockProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MarginBlockProperties > {}


export declare const MarginBlock: FunctionComponent<MarginBlockProps>
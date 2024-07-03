/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MarginBlockStartProperties } from '../patterns/margin-block-start';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MarginBlockStartProps extends MarginBlockStartProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MarginBlockStartProperties > {}


export declare const MarginBlockStart: FunctionComponent<MarginBlockStartProps>
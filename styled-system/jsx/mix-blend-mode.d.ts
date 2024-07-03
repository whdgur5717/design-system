/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MixBlendModeProperties } from '../patterns/mix-blend-mode';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MixBlendModeProps extends MixBlendModeProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MixBlendModeProperties > {}


export declare const MixBlendMode: FunctionComponent<MixBlendModeProps>
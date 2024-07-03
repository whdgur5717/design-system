/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { GapProperties } from '../patterns/gap';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GapProps extends GapProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GapProperties > {}


export declare const Gap: FunctionComponent<GapProps>
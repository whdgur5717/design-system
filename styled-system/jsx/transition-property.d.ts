/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TransitionPropertyProperties } from '../patterns/transition-property';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TransitionPropertyProps extends TransitionPropertyProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TransitionPropertyProperties > {}


export declare const TransitionProperty: FunctionComponent<TransitionPropertyProps>
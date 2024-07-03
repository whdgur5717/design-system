/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { FlexGrowProperties } from '../patterns/flex-grow';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface FlexGrowProps extends FlexGrowProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof FlexGrowProperties > {}


export declare const FlexGrow: FunctionComponent<FlexGrowProps>
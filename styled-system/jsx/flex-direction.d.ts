/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { FlexDirectionProperties } from '../patterns/flex-direction';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface FlexDirectionProps extends FlexDirectionProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof FlexDirectionProperties > {}


export declare const FlexDirection: FunctionComponent<FlexDirectionProps>
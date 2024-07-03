/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { FlexBasisProperties } from '../patterns/flex-basis';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface FlexBasisProps extends FlexBasisProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof FlexBasisProperties > {}


export declare const FlexBasis: FunctionComponent<FlexBasisProps>
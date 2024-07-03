/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { DivideYProperties } from '../patterns/divide-y';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface DivideYProps extends DivideYProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof DivideYProperties > {}


export declare const DivideY: FunctionComponent<DivideYProps>
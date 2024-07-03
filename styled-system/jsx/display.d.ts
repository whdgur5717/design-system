/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { DisplayProperties } from '../patterns/display';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface DisplayProps extends DisplayProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof DisplayProperties > {}


export declare const Display: FunctionComponent<DisplayProps>
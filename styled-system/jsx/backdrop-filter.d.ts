/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackdropFilterProperties } from '../patterns/backdrop-filter';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackdropFilterProps extends BackdropFilterProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackdropFilterProperties > {}


export declare const BackdropFilter: FunctionComponent<BackdropFilterProps>
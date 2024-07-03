/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { HyphensProperties } from '../patterns/hyphens';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface HyphensProps extends HyphensProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof HyphensProperties > {}


export declare const Hyphens: FunctionComponent<HyphensProps>
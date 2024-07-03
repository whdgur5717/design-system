/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderBlockEndProperties } from '../patterns/border-block-end';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderBlockEndProps extends BorderBlockEndProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderBlockEndProperties > {}


export declare const BorderBlockEnd: FunctionComponent<BorderBlockEndProps>
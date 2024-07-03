/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { AlignSelfProperties } from '../patterns/align-self';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface AlignSelfProps extends AlignSelfProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof AlignSelfProperties > {}


export declare const AlignSelf: FunctionComponent<AlignSelfProps>
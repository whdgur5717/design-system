/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { AlignContentProperties } from '../patterns/align-content';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface AlignContentProps extends AlignContentProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof AlignContentProperties > {}


export declare const AlignContent: FunctionComponent<AlignContentProps>
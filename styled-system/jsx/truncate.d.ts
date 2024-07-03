/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TruncateProperties } from '../patterns/truncate';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TruncateProps extends TruncateProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TruncateProperties > {}


export declare const Truncate: FunctionComponent<TruncateProps>
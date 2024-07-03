/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { OutlineOffsetProperties } from '../patterns/outline-offset';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface OutlineOffsetProps extends OutlineOffsetProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof OutlineOffsetProperties > {}


export declare const OutlineOffset: FunctionComponent<OutlineOffsetProps>
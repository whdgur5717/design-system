/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MaxInlineSizeProperties } from '../patterns/max-inline-size';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MaxInlineSizeProps extends MaxInlineSizeProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MaxInlineSizeProperties > {}


export declare const MaxInlineSize: FunctionComponent<MaxInlineSizeProps>
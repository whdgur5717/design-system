/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { InlineSizeProperties } from '../patterns/inline-size';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface InlineSizeProps extends InlineSizeProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof InlineSizeProperties > {}


export declare const InlineSize: FunctionComponent<InlineSizeProps>
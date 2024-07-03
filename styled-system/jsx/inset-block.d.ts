/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { InsetBlockProperties } from '../patterns/inset-block';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface InsetBlockProps extends InsetBlockProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof InsetBlockProperties > {}


export declare const InsetBlock: FunctionComponent<InsetBlockProps>
/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { InsetInlineEndProperties } from '../patterns/inset-inline-end';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface InsetInlineEndProps extends InsetInlineEndProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof InsetInlineEndProperties > {}


export declare const InsetInlineEnd: FunctionComponent<InsetInlineEndProps>
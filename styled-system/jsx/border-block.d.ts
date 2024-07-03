/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderBlockProperties } from '../patterns/border-block';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderBlockProps extends BorderBlockProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderBlockProperties > {}


export declare const BorderBlock: FunctionComponent<BorderBlockProps>
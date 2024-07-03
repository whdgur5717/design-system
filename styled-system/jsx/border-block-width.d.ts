/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderBlockWidthProperties } from '../patterns/border-block-width';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderBlockWidthProps extends BorderBlockWidthProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderBlockWidthProperties > {}


export declare const BorderBlockWidth: FunctionComponent<BorderBlockWidthProps>
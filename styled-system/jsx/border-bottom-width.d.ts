/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderBottomWidthProperties } from '../patterns/border-bottom-width';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderBottomWidthProps extends BorderBottomWidthProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderBottomWidthProperties > {}


export declare const BorderBottomWidth: FunctionComponent<BorderBottomWidthProps>
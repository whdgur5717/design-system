/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { FontSizeProperties } from '../patterns/font-size';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface FontSizeProps extends FontSizeProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof FontSizeProperties > {}


export declare const FontSize: FunctionComponent<FontSizeProps>
/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { OutlineWidthProperties } from '../patterns/outline-width';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface OutlineWidthProps extends OutlineWidthProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof OutlineWidthProperties > {}


export declare const OutlineWidth: FunctionComponent<OutlineWidthProps>
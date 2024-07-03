/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { MinWidthProperties } from '../patterns/min-width';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface MinWidthProps extends MinWidthProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof MinWidthProperties > {}


export declare const MinWidth: FunctionComponent<MinWidthProps>
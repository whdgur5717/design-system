/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ZIndexProperties } from '../patterns/z-index';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ZIndexProps extends ZIndexProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ZIndexProperties > {}


export declare const ZIndex: FunctionComponent<ZIndexProps>
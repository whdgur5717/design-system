/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { HideFromProperties } from '../patterns/hide-from';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface HideFromProps extends HideFromProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof HideFromProperties > {}


export declare const HideFrom: FunctionComponent<HideFromProps>
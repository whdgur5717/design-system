/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { JustifyContentProperties } from '../patterns/justify-content';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface JustifyContentProps extends JustifyContentProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof JustifyContentProperties > {}


export declare const JustifyContent: FunctionComponent<JustifyContentProps>
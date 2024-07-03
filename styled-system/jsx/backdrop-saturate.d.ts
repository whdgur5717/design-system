/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BackdropSaturateProperties } from '../patterns/backdrop-saturate';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BackdropSaturateProps extends BackdropSaturateProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BackdropSaturateProperties > {}


export declare const BackdropSaturate: FunctionComponent<BackdropSaturateProps>
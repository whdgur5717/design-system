/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { AppearanceProperties } from '../patterns/appearance';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface AppearanceProps extends AppearanceProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof AppearanceProperties > {}


export declare const Appearance: FunctionComponent<AppearanceProps>
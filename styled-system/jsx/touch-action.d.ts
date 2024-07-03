/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { TouchActionProperties } from '../patterns/touch-action';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface TouchActionProps extends TouchActionProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof TouchActionProperties > {}


export declare const TouchAction: FunctionComponent<TouchActionProps>
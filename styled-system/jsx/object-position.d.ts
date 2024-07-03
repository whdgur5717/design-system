/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ObjectPositionProperties } from '../patterns/object-position';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ObjectPositionProps extends ObjectPositionProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ObjectPositionProperties > {}


export declare const ObjectPosition: FunctionComponent<ObjectPositionProps>
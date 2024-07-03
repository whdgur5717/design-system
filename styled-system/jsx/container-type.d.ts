/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ContainerTypeProperties } from '../patterns/container-type';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ContainerTypeProps extends ContainerTypeProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ContainerTypeProperties > {}


export declare const ContainerType: FunctionComponent<ContainerTypeProps>
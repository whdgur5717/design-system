/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { ContainerNameProperties } from '../patterns/container-name';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface ContainerNameProps extends ContainerNameProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof ContainerNameProperties > {}


export declare const ContainerName: FunctionComponent<ContainerNameProps>
/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { UserSelectProperties } from '../patterns/user-select';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface UserSelectProps extends UserSelectProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof UserSelectProperties > {}


export declare const UserSelect: FunctionComponent<UserSelectProps>
/* eslint-disable */
import type { FunctionComponent } from 'react'
import type { BorderCollapseProperties } from '../patterns/border-collapse';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BorderCollapseProps extends BorderCollapseProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BorderCollapseProperties > {}


export declare const BorderCollapse: FunctionComponent<BorderCollapseProps>
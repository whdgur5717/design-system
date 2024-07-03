/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types/index';
import type { Properties } from '../types/csstype';
import type { SystemProperties } from '../types/style-props';
import type { DistributiveOmit } from '../types/system-types';
import type { Tokens } from '../tokens/index';

export interface HeightProperties {
   direction?: ConditionalValue<string>
}


interface HeightStyles extends HeightProperties, DistributiveOmit<SystemStyleObject, keyof HeightProperties > {}

interface HeightPatternFn {
  (styles?: HeightStyles): string
  raw: (styles?: HeightStyles) => SystemStyleObject
}


export declare const height: HeightPatternFn;

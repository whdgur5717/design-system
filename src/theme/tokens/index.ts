import light from "./light.json"
import dark from "./dark.json"
import core from "./core.json"
// Extracting value properties from core.light and core.dark

export type ObjectKeys<T extends Record<PropertyKey, unknown>> =
  `${Exclude<keyof T, symbol>}`

export function objectKeys<Type extends Record<PropertyKey, unknown>>(
  obj: Type,
): Array<ObjectKeys<Type>> {
  return Object.keys(obj) as Array<ObjectKeys<Type>>
}

export const basicColorToken: Record<
  string,
  { value: { base: string; _dark: string } }
> = objectKeys(core.light).reduce(
  (acc, colorKey) => {
    objectKeys(core.light[colorKey]).forEach((numberKey) => {
      const num = numberKey as keyof (typeof core.light)[typeof colorKey]

      // Use type assertion to access 'value' property
      const lightValue = (core.light[colorKey][num] as { value: string })?.value
      const darkValue = (core.dark[colorKey][num] as { value: string })?.value

      if (lightValue && darkValue) {
        acc[`${colorKey}_${num}`] = {
          value: {
            base: lightValue,
            _dark: darkValue,
          },
        }
      }
    })

    return acc
  },
  {} as Record<string, { value: { base: string; _dark: string } }>,
)

// Example of semantic color token extraction
// Assuming light and dark objects have a structure with 'value' property

export const semanticColorToken = Object.keys(light).reduce(
  (acc, key) => {
    const colorKey = key as keyof typeof light

    if (Object.hasOwn(dark, colorKey)) {
      acc[colorKey] = {
        value: {
          base: light[colorKey].value,
          _dark: dark[colorKey].value,
        },
      }
    }
    return acc
  },
  {} as Record<keyof typeof light, { value: { base: string; _dark: string } }>,
)

type TypoVariant = ObjectKeys<typeof core.typography>

type Typography = {
  [key: string]: {
    value: {
      [prop: string]: any
    }
  }
}

export const typography = Object.keys(core.typography).reduce((acc, key) => {
  const typoVariant = key as TypoVariant
  acc[typoVariant] = {
    value: Object.keys(core.typography[typoVariant]).reduce(
      (innerAcc, prop) => {
        const innerKey = prop as ObjectKeys<
          (typeof core.typography)[typeof typoVariant]
        >
        innerAcc[prop] = core.typography[typoVariant][innerKey].value
        return innerAcc
      },
      {} as { [key: string]: any },
    ),
  }
  return acc
}, {} as Typography)

export const { borderRadius, fontSize } = core

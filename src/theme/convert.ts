type ObjValue<T> = { value: T }
type Obj<T> = Record<string, ObjValue<T>>

export const transformObject = <T>(input: Record<string, T>): Obj<T> => {
  return Object.entries(input).reduce<Obj<T>>((acc, [key, value]) => {
    acc[key] = { value }
    return acc
  }, {})
}

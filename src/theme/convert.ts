type ObjValue = {
  value: string | number
  type?: string
  description?: string
}

type Obj = Record<string, { value: string }>

export const transformObject = (input: Record<string, ObjValue>): Obj => {
  return Object.entries(input).reduce<Obj>((acc, [key, value]) => {
    acc[key] = { value: value.value.toString() }
    return acc
  }, {})
}

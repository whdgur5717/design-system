/* eslint-disable react-hooks/exhaustive-deps */
import { KeyboardEvent, useCallback, useRef } from "react"

type UseKeybaordEvent = {
  keyList: string[]
  changeIndex?: (index: number) => void
}

export const useKeyboardEvent = ({
  keyList,
  changeIndex,
}: UseKeybaordEvent) => {
  const refs = useRef<HTMLElement[]>([])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>, callback?: () => void) => {
      if (!keyList.includes(event.key)) return
      const length = refs.current.length
      const target = event.target as HTMLElement
      const currentIndex = refs.current.indexOf(target)
      event.preventDefault()

      let nextIndex = 0
      switch (event.key) {
        case "ArrowDown":
          nextIndex = (currentIndex + 1) % length
          break
        case "ArrowUp":
          nextIndex = (currentIndex - 1 + length) % length
          break
        case "ArrowRight":
          nextIndex = (currentIndex + 1) % length
          break
        case "ArrowLeft":
          nextIndex = (currentIndex - 1 + length) % length
          break
        case "Home":
          nextIndex = 0
          break
        case "End":
          nextIndex = length - 1
          break
        case "Tab":
          nextIndex = (currentIndex + 1) % length
          break
        case "Enter":
          callback?.()
      }
      changeIndex?.(nextIndex)
      refs.current[nextIndex]?.focus()
    },
    [],
  )

  return { refs, handleKeyDown }
}

export default useKeyboardEvent

import {
  ReactNode,
  useCallback,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react"
import { useControlledState } from "../../hooks/useControllableState"
import { RovingTabIndexProvider } from "./useRovingTabIndex"
import { composeRefs } from "../../hooks/useComposedRefs"

export const NODE_SELECTOR = "data-roving-tabindex-node"
const ROOT_SELECTOR = "data-roving-tabindex-root"
const NOT_FOCUSABLE_SELECTOR = "data-roving-tabindex-not-focusable"
const SELECTOR_ACTIVE = `:where([${NODE_SELECTOR}=true]):not(:where([${NOT_FOCUSABLE_SELECTOR}=true] *))`

type RovingTabIndexRootBaseProps<T> = {
  children: ReactNode | ReactNode[]
  active?: string
  setActive?: (value: string) => void
  as?: T
  dir?: "horizontal" | "vertical"
}

type RovingTabIndexRootProps<T extends ElementType> =
  RovingTabIndexRootBaseProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof RovingTabIndexRootBaseProps<T>>

function onFocusFirst(candidates: HTMLElement[]) {
  const previousFocus = document.activeElement
  while (document.activeElement === previousFocus && candidates.length > 0) {
    candidates.shift()?.focus()
  }
}

export const RovingTabIndexRoot = <T extends ElementType>({
  children,
  active,
  setActive,
  as,
  ref,
  dir = "horizontal",
  ...props
}: RovingTabIndexRootProps<T>) => {
  const Component = as || "div"
  const [isShiftTabbing, setIsShiftTabbing] = useState(false)

  const [value = null, setValue] = useControlledState({
    prop: active,
    onChange: setActive,
  })
  const rootRef = useRef<HTMLDivElement | null>(null)
  const elementsRef = useRef<Map<string, HTMLElement>>(new Map())
  const getOrderedItems = useCallback(() => {
    if (!rootRef.current) return []
    const activeElements = Array.from(
      rootRef.current.querySelectorAll(SELECTOR_ACTIVE),
    )

    return Array.from(elementsRef.current)
      .sort(
        (a, b) => activeElements.indexOf(a[1]) - activeElements.indexOf(b[1]),
      )
      .map(([value, element]) => ({ value, element }))
  }, [])

  return (
    <RovingTabIndexProvider
      setFocusableId={(value: string) => {
        setValue(value)
      }}
      onShiftTab={() => {
        setIsShiftTabbing(true)
      }}
      currentFocusedValue={value}
      getOrderedItems={getOrderedItems}
      elements={elementsRef}
      dir={dir}
    >
      <Component
        {...{ [ROOT_SELECTOR]: true }}
        tabIndex={isShiftTabbing ? -1 : 0}
        onFocus={(e) => {
          if (e.target !== e.currentTarget) return
          if (isShiftTabbing) return
          const orderedItems = getOrderedItems()
          if (orderedItems.length === 0) return
          const candidates = [
            elementsRef.current.get(value ?? ""),
            ...orderedItems.map((i) => i.element),
          ].filter((element): element is HTMLElement => element != null)

          onFocusFirst(candidates)
        }}
        onBlur={() => setIsShiftTabbing(false)}
        ref={composeRefs(ref, rootRef)}
        {...props}
      >
        {children}
      </Component>
    </RovingTabIndexProvider>
  )
}

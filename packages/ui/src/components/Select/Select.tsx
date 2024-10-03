import { type CSSProperties, type ReactNode } from "react"
import { createContext } from "../../hooks/createContext"
import { useControlledState } from "../../hooks/useControllableState"
import { Slot } from "@radix-ui/react-slot"
import { RovingTabIndexRoot } from "../Roving/RovingTabIndexRoot"
import {
  autoUpdate,
  flip,
  offset,
  size,
  useFloating,
} from "@floating-ui/react-dom"
import { useRovingTabIndex, useRovingTabIndexContext } from "../Roving"
import {
  getNextFocusableId,
  getPrevFocusableId,
} from "../../utils/getFocusableId"

const CONTEXT_NAME = "select"

interface SelectContext {
  isOpen: boolean //option들의 열림/닫힘 여부
  onOpenChange: (Open: boolean) => void
  selected: string | null //option들 중 선택된 value
  onSelect: (value: string) => void
  floatingStyles?: CSSProperties
  setFloating: (node: HTMLElement) => void
  setReference: (node: HTMLElement | null) => void
  dir: "horizontal" | "vertical"
}

const [SelectContextProvider, useSelectContext] =
  createContext<SelectContext>(CONTEXT_NAME)

interface SelectProps {
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
  selected?: string
  onSelect?: (value: string) => void
  defaultValue?: string
  placeholder?: string
  children: ReactNode
  dir?: "horizontal" | "vertical"
}

export const Select = ({
  isOpen,
  onOpenChange,
  defaultOpen,
  selected,
  onSelect,
  defaultValue,
  dir = "vertical",
  children,
}: SelectProps) => {
  const [open = false, setIsOpen] = useControlledState({
    prop: isOpen,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  })

  const [selectedValue, setSelectedValue] = useControlledState({
    prop: selected,
    defaultProp: defaultValue,
    onChange: onSelect,
  })

  const { refs, floatingStyles } = useFloating({
    strategy: "absolute",
    open: open,
    middleware: [
      offset(10),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}`,
          })
        },
        padding: 10,
      }),
    ],
    whileElementsMounted: autoUpdate,
  })

  return (
    <SelectContextProvider
      isOpen={open}
      onOpenChange={setIsOpen}
      selected={selectedValue || null}
      onSelect={setSelectedValue}
      floatingStyles={floatingStyles}
      setFloating={refs.setFloating}
      setReference={refs.setReference}
      dir={dir}
    >
      <RovingTabIndexRoot active={selectedValue} dir="vertical">
        <div className="select" style={{ position: "relative" }} tabIndex={-1}>
          {children}
        </div>
      </RovingTabIndexRoot>
    </SelectContextProvider>
  )
}

interface SelectTriggeProps {
  placeholder: string
}

export const SelectTrigger = ({ placeholder }: SelectTriggeProps) => {
  const { getOrderedItems } = useRovingTabIndexContext("rovingTabIndex")

  const { setReference, onOpenChange, isOpen, selected } =
    useSelectContext(CONTEXT_NAME)

  return (
    <div>
      <button
        className="select_trigger"
        ref={setReference}
        onClick={(e) => {
          e.preventDefault()
          onOpenChange(!isOpen)
        }}
        onKeyDown={(e) => {
          setTimeout(() => {
            if (e.key === "ArrowDown") {
              onOpenChange(true)
              getOrderedItems()[0]?.element.focus()
            }
          })
        }}
      >
        <span className="select_placeholder">{selected || placeholder}</span>
      </button>
    </div>
  )
}
interface SelectPortalProps {
  children: ReactNode
}
export const SelectPortal = ({ children }: SelectPortalProps) => {
  const { isOpen, floatingStyles, setFloating } = useSelectContext(CONTEXT_NAME)

  if (!isOpen) {
    return null
  }

  return (
    <div
      style={{ ...floatingStyles, backgroundColor: "pink" }}
      ref={(node) => setFloating(node as HTMLElement)}
    >
      {children}
    </div>
  )
}

interface SelectItemProps {
  children?: ReactNode
  value: string
  asChild?: boolean
}
export const SelectItem = ({ children, value, asChild }: SelectItemProps) => {
  const Comp = asChild ? Slot : "li"
  const { onSelect, onOpenChange, dir } = useSelectContext(CONTEXT_NAME)
  const { getOrderedItems, getRovingProps } = useRovingTabIndex(value)
  return (
    <Comp
      {...getRovingProps<typeof Slot>({
        onClick: () => {
          onSelect?.(value)
          onOpenChange(false)
        },
        onKeyDown: (e) => {
          const items = getOrderedItems()
          let nextItem
          if (dir === "horizontal") {
            if (e.key === "ArrowRight") {
              nextItem = getNextFocusableId(items, value)
            } else if (e.key === "ArrowLeft") {
              nextItem = getPrevFocusableId(items, value)
            }
          }
          if (dir === "vertical") {
            if (e.key === "ArrowDown") {
              nextItem = getNextFocusableId(items, value)
            } else if (e.key === "ArrowUp") {
              nextItem = getPrevFocusableId(items, value)
            }
          }
          nextItem?.element.focus()
        },
      })}
    >
      {children}
    </Comp>
  )
}

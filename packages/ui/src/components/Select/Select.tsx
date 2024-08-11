import { type ReactNode } from "react"
import { createContext } from "../../hooks/createContext"
import { useControlledState } from "../../hooks/useControllableState"
import { Slot } from "@radix-ui/react-slot"

const CONTEXT_NAME = "select"

interface SelectContext {
  isOpen: boolean //option들의 열림/닫힘 여부
  onOpenChange: (Open: boolean) => void
  selected: string | null //option들 중 선택된 value
  onSelect: (value: string) => void
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
}

export const Select = ({
  isOpen,
  onOpenChange,
  defaultOpen,
  selected,
  onSelect,
  defaultValue,
  placeholder,
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

  return (
    <SelectContextProvider
      isOpen={open}
      onOpenChange={setIsOpen}
      selected={selectedValue || null}
      onSelect={setSelectedValue}
    >
      <div className="select" style={{ position: "relative" }}>
        <button
          className="select_trigger"
          ref={(node) => {
            if (!node?.parentElement) {
              return
            }
            node.parentElement.style.setProperty(
              "--trigger-width",
              `${node.offsetWidth}px`,
            )
          }}
          onClick={(e) => {
            e.preventDefault()
            setIsOpen(!open)
          }}
        >
          <span className="select_placeholder">
            {selectedValue || placeholder}
          </span>
        </button>
        {children}
      </div>
    </SelectContextProvider>
  )
}

interface SelectPortalProps {
  children: ReactNode
}
export const SelectPortal = ({ children }: SelectPortalProps) => {
  const { isOpen } = useSelectContext(CONTEXT_NAME)

  if (!isOpen) {
    return null
  }

  return (
    <div
      style={{
        border: "1px solid black",
        zIndex: 1000,
        minWidth: "var(--trigger-width)",
        position: "absolute",
        backgroundColor: "aliceblue",
      }}
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
  const { onSelect, onOpenChange } = useSelectContext(CONTEXT_NAME)

  return (
    <Comp
      onClick={() => {
        onSelect?.(value)
        onOpenChange(false)
      }}
    >
      {children}
    </Comp>
  )
}

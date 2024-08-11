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
      <button
        onClick={(e) => {
          e.preventDefault()
          setIsOpen(!open)
        }}
      >
        {selectedValue || placeholder}
      </button>
      {children}
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
    <div style={{ position: "fixed", border: "1px solid black" }}>
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

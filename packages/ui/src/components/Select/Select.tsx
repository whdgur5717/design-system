import { forwardRef, type ReactNode } from "react"
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
  children: ReactNode
}

export const Select = ({
  isOpen,
  onOpenChange,
  defaultOpen,
  selected,
  onSelect,
  defaultValue,
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
      <div onClick={() => setIsOpen(!open)}>트리거임</div>
      {children}
    </SelectContextProvider>
  )
}

interface SelectTriggerProps {
  asChild?: boolean
  children?: ReactNode
}

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ asChild, children }, ref) => {
    const Comp = asChild ? Slot : "button"

    const { isOpen, onOpenChange } = useSelectContext(CONTEXT_NAME)

    return (
      <Comp
        ref={ref}
        onClick={(e) => {
          e.preventDefault()
          onOpenChange(!isOpen)
        }}
      >
        {children}
      </Comp>
    )
  },
)

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
      style={{ position: "fixed", zIndex: 1000, backgroundColor: "mediumblue" }}
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
  const { onSelect } = useSelectContext(CONTEXT_NAME)

  return <Comp onClick={() => onSelect?.(value)}>{children}</Comp>
}

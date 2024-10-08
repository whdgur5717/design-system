import { PropsWithChildren, forwardRef, useCallback } from "react"
import { createContext } from "../../hooks/createContext"
import { useControlledState } from "../../hooks/useControllableState"
import { useAccordionHeight } from "./useAccordionHeight"
import { useKeyboardEvent } from "../../hooks/useKeyboardEvent"
import { css, cx } from "jh-generated/css"
import { accordion } from "jh-generated/recipes"

const ACCORDION_KEYS = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight",
]
export type TAccordionContext = {
  selected?: string[]
  onItemOpen: (value: string) => void
  onItemClose: (value: string) => void
  refs?: HTMLElement[]
}

const [AccordionProvider, useAccordionContext] =
  createContext<TAccordionContext>("accordion")

export interface AccordionProps extends PropsWithChildren {
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  type?: "single" | "multi"
}
//ref 관련 문제 해결 필요
export const Accordion = forwardRef<HTMLElement, AccordionProps>((props, _) => {
  const { type = "single", ...accordionProps } = props
  if (type === "single") {
    return <SingleAccordion {...accordionProps} />
  }
  if (type === "multi") {
    return <MultiAccordion {...accordionProps} />
  }
})

Accordion.displayName = "Accordion"

interface AccordionImplSingleProps extends PropsWithChildren {
  value?: string[] //value -> selected는 현재 선택되어있는 item들을 담아놓는용도

  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
}

const SingleAccordion = ({
  value,
  defaultValue = [],
  onValueChange,
  children,
}: AccordionImplSingleProps) => {
  const [selected = [], setSelected] = useControlledState({
    prop: value,
    defaultProp: defaultValue,
    onChange: onValueChange,
  })

  const { refs: accordionRefs, handleKeyDown } = useKeyboardEvent({
    keyList: ACCORDION_KEYS,
  })

  return (
    <AccordionProvider
      selected={selected}
      onItemOpen={(value) => setSelected((_) => [value])}
      onItemClose={() => setSelected((_) => [])}
      refs={accordionRefs.current || []}
    >
      <div
        ref={(node) => {
          accordionRefs.current = Array.from(
            node?.children || [],
          ) as HTMLElement[]
        }}
        className={cx(accordion({}))}
        onKeyDown={(e) => {
          handleKeyDown(e)
        }}
      >
        {children}
      </div>
    </AccordionProvider>
  )
}

interface AccordionImplMultiProps extends PropsWithChildren {
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
}

const MultiAccordion = ({
  value,
  defaultValue,
  onValueChange,
  children,
}: AccordionImplMultiProps) => {
  const [selected, setSelected] = useControlledState({
    prop: value,
    defaultProp: defaultValue,
    onChange: onValueChange,
  })

  const handleItemOpen = useCallback(
    (item: string) => {
      setSelected((prev = []) => [...prev, item])
    },
    [setSelected],
  )

  const handleItemClose = useCallback(
    (item: string) =>
      setSelected((prev = []) => prev.filter((value) => value !== item)),
    [setSelected],
  )

  const { refs: accordionRefs, handleKeyDown } = useKeyboardEvent({
    keyList: ACCORDION_KEYS,
  })

  return (
    <AccordionProvider
      selected={selected}
      onItemOpen={handleItemOpen}
      onItemClose={handleItemClose}
    >
      <div
        ref={(node) => {
          accordionRefs.current = Array.from(
            node?.children || [],
          ) as HTMLElement[]
        }}
        onKeyDown={handleKeyDown}
        className={cx(accordion({}))}
      >
        {children}
      </div>
    </AccordionProvider>
  )
}
//AccordionItem
interface TAccordionItemContext {
  isOpen: boolean
  onToggle: () => void
  value?: string
}

const [AccordionItemProvider, useAccordionItemProvider] =
  createContext<TAccordionItemContext>("accordionItem")

interface AccordionItemProps extends PropsWithChildren {
  value: string //unique value
  disabled?: boolean
}

export const AccordionItem = ({
  value,
  disabled = false,
  children,
}: AccordionItemProps) => {
  const { selected, onItemOpen, onItemClose } = useAccordionContext("accordion")

  const isOpen = selected?.includes(value) && !disabled
  const onToggle = () => {
    if (disabled) {
      return
    }
    isOpen ? onItemClose(value) : onItemOpen(value)
  }
  //disabled면 -> 무조건 닫혀있어야됨
  return (
    <AccordionItemProvider isOpen={!!isOpen} onToggle={onToggle} value={value}>
      <div
        data-state={isOpen ? "open" : "close"}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onToggle()
          }
        }}
      >
        {children}
      </div>
    </AccordionItemProvider>
  )
}
export const AccordionTrigger = ({ children }: PropsWithChildren) => {
  const { onToggle, isOpen, value } = useAccordionItemProvider("accordionItem")
  return (
    <h3 data-state={isOpen ? "open" : "close"}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls={`content-${value}`}
      >
        <span>{children}</span>
      </button>
    </h3>
  )
}
//AccordionContent
export const AccordionContent = ({
  children,
}: PropsWithChildren<{ duration?: number }>) => {
  const { isOpen, value } = useAccordionItemProvider("accordionItem")

  const contentRef = useAccordionHeight<HTMLDivElement>(isOpen, 150) //duration 초 뒤에 accordion을 열거나 닫아줌

  if (!isOpen) {
    return null
  }

  return (
    <div
      className={css({
        display: "none",
        overflow: "hidden",
        border: "1px solid black",
        animation: isOpen
          ? `accordionDown 0.2s cubic-bezier(.4,0,.2,1)`
          : `accordionUp 0.2s cubic-bezier(.4,0,.2,1)`,
      })}
      data-state={isOpen ? "open" : "close"}
      id={`content-${value}`}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  )
}

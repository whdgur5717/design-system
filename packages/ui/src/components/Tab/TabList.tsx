import { type ReactNode, type ComponentPropsWithRef, forwardRef } from "react"
import { useTabContext } from "./useTabContext"

import { css, cx } from "jh-generated/css"
import { RovingTabIndexRoot } from "../Roving/RovingTabIndexRoot"

import { RovingItem } from "../Roving/RovingItem"
import { composeRefs } from "../../hooks/useComposedRefs"

interface TabListProps {
  children: ReactNode
  className?: string
}

const setIndicatorStyle = (target: HTMLElement) => {
  const targetRect = target.getBoundingClientRect()
  const parentRect = target.parentElement?.getBoundingClientRect()
  if (!targetRect || !parentRect) {
    return
  }
  document.documentElement.style.setProperty(
    "--indicator-left",
    `${Math.abs(parentRect.left - targetRect.left)}px`,
  )
  document.documentElement.style.setProperty(
    "--indicator-width",
    `${Math.abs(targetRect.width)}px`,
  )
}

export const TabList = ({ children, className }: TabListProps) => {
  const { selected } = useTabContext("tab")
  return (
    <RovingTabIndexRoot as="div" active={selected}>
      <div
        role="tablist"
        className={cx(
          className,
          css({ position: "relative", display: "flex" }),
        )}
      >
        {children}
      </div>
    </RovingTabIndexRoot>
  )
}
type TabItemProps = ComponentPropsWithRef<"button"> & {
  value: string
}

export const TabItem = forwardRef<HTMLButtonElement, TabItemProps>(
  ({ children, className, value, ...props }: TabItemProps, forwardRef) => {
    const { selected, onSelect, tabId } = useTabContext("tab")
    const isSelected = selected === value

    const handleSelect = () => {
      onSelect?.(value)
    }

    return (
      <RovingItem value={value}>
        <button
          ref={composeRefs((node) => {
            if (isSelected && node) {
              setIndicatorStyle(node as HTMLElement)
            }
          }, forwardRef)}
          onClick={handleSelect}
          onFocus={handleSelect}
          role="tab"
          aria-selected={isSelected}
          id={tabId + "-tabitem-" + value}
          aria-controls={tabId + "-tabpanel-" + value}
          {...props}
        >
          {children}
        </button>
      </RovingItem>
    )
  },
)

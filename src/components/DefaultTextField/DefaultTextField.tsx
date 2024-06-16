import { forwardRef, useRef, type ComponentProps, type ReactNode } from "react"
import { useControlledState } from "../../hooks/useControllableState"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import CrossIcon from "../Icons/CrossIcon"
import { css } from "@emotion/react"
import { height, getRootStyle, inputStyle } from "./style"
import { colorPalette } from "../../theme/themeMode"

interface TextFieldProps
  extends Omit<ComponentProps<"input">, "size" | "onChange"> {
  size: keyof typeof height
  placeholder?: string
  label?: string
  value?: string
  defaultValue?: string
  onChange?: (v: string) => void
  error?: string
  children?: ReactNode
  className?: string
}

const DefaultTextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      size = "lg",
      value,
      defaultValue,
      onChange,
      placeholder,
      error,
      children,
      className,
      label,
      ...props
    },
    ref,
  ) => {
    const [inputValue = "", setInputValue] = useControlledState({
      prop: value,
      defaultProp: defaultValue,
      onChange,
    })
    const inputRef = useRef<HTMLInputElement>(null)
    return (
      <div
        css={getRootStyle(size)}
        className={className}
        onPointerDown={(e) => {
          const target = e.target as HTMLElement
          if (target.closest("input, button, a")) {
            return
          }
          const input = inputRef.current
          if (!input) {
            return
          }
          requestAnimationFrame(() => {
            input.focus()
            input.setSelectionRange(input.value.length, input.value.length)
            input.scrollLeft = input.value.length
          })
        }}
      >
        {!!label && <label>{label}</label>}
        <div style={{ display: "flex" }}>
          <input
            ref={inputRef}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            css={inputStyle}
            {...props}
          />
          {children}
          {!!inputValue && (
            <CrossIcon
              onClick={() => {
                setInputValue("")
              }}
              color={colorPalette["grey_400"]}
              aria-describedby="delete"
            />
          )}
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    )
  },
)

interface TextFieldIconProps {
  side: "left" | "right"
  children?: ReactNode
}

export const TextFieldIcon = ({
  side = "left",
  children,
}: TextFieldIconProps) => {
  return (
    <div
      css={css({
        order: side === "left" ? -1 : 0,
        display: "flex",
        flexShrink: 0,
        alignItems: "center",
        marginLeft: 4,
        marginRight: 4,
      })}
    >
      {children}
    </div>
  )
}
export default DefaultTextField

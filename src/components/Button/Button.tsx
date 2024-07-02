import { forwardRef, type ComponentPropsWithoutRef } from "react"
import { buttonCva, type ButtonStyleVariants } from "./style"
import Slot from "../Slot/Slot"

const status = {
  disabled: "disabled",
  loading: "loading",
  normal: "normal",
} as const

type ButtonProps = ButtonStyleVariants &
  ComponentPropsWithoutRef<"button"> & { as?: boolean } & {
    status?: keyof typeof status
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as,
      className,
      children,
      disabled = false,
      onClick,
      status = "normal",
      ...rest
    },
    ref,
  ) => {
    const Comp = as ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={buttonCva({ ...rest })}
        disabled={status !== "normal"}
      >
        {status === "loading" ? "스피너 돌아가는중" : children}
      </Comp>
    )
  },
)
//버튼의 상태는 무조건 외부에서 주입
//로딩 상태일때 Spinner를 보여줘야 함

export default Button

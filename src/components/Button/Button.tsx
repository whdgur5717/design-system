import { forwardRef, type ComponentPropsWithoutRef } from "react"
import { buttonCva, type ButtonVariants } from "./style"
import Slot from "../Slot/Slot"

type ButtonProps = ButtonVariants &
  ComponentPropsWithoutRef<"button"> & { as?: boolean }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ as, children, disabled = false, onClick, ...rest }, ref) => {
    const Comp = as ? Slot : "button"
    return (
      <Comp ref={ref} className={buttonCva({ ...rest })}>
        {children}
      </Comp>
    )
  },
)

export default Button

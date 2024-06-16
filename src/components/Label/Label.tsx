import { ReactNode } from "react"
import { colorPalette } from "../../theme/themeMode"

interface LabelProps {
  htmlFor: string
  children: ReactNode
  size?: "L" | "S"
}

const Label = ({ htmlFor, children, size = "S" }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      css={(theme) => ({
        ...theme.typography[size === "L" ? "subHeader_01" : "subHeader_02"],
      })}
      style={{
        color: colorPalette["text_primary"],
      }}
    >
      {children}
    </label>
  )
}

export default Label

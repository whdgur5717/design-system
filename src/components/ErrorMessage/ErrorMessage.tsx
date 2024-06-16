import { colorPalette } from "../../theme/themeMode"

interface ErrorMessageProps {
  children: string
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <p
      css={(theme) => ({
        ...theme.typography["caption_01"],
      })}
      style={{
        color: colorPalette["text_danger"],
      }}
      aria-describedby="error-message"
    >
      {children}
    </p>
  )
}

export default ErrorMessage

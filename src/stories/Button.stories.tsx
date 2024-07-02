import Button from "../components/Button/Button.tsx"
import type { Meta, StoryObj } from "@storybook/react"
export default {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    size: "large",
    variant: "primary",
    children: "클릭하기",
    onClick: () => alert("button clicked"),
    disabled: false,
    br: "rounded",
  },
}

export const Primary_Disabled: Story = {
  args: {
    size: "large",
    variant: "primary",
    children: "disabled",
    onClick: () => alert("button clicked"),
    disabled: true,
  },
}

export const Text: Story = {
  args: {
    size: "large",
    variant: "text",
    children: "클릭하기",
    onClick: () => alert("a"),
  },
}

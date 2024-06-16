import Button from "../components/Button/Button.tsx"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
export default {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      description: "버튼의 높이를 조절할 수 있습니다",
      options: ["small", "medium", "large"],
    },
    variant: {
      control: { type: "radio" },
      description: "border의 여부에 따라 primary/text로 나뉩니다",
      options: ["primary", "text"],
    },
    br: {
      control: { type: "radio" },
      description: "borderRadius를 조절할 수 있습니다",
      options: ["normal", "rounded"],
    },
    disabled: {
      control: { type: "boolean" },
      description: "버튼의 클릭을 제어할 수 있습니다",
    },
  },
  args: {
    onClick: fn(),
  },
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
    children: "클릭할 수 없습니다",
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

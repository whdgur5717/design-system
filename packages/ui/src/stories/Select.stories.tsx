import type { Meta, StoryObj } from "@storybook/react"

import { Select, SelectPortal } from "../components/Select/Select.tsx"

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: (
      <SelectPortal>
        <div>아이템</div>
      </SelectPortal>
    ),
  },
}

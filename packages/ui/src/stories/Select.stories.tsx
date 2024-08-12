import type { Meta, StoryObj } from "@storybook/react"

import {
  Select,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "../components/Select/Select.tsx"

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
      <>
        <SelectTrigger placeholder="클릭" />
        <SelectPortal>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
        </SelectPortal>
      </>
    ),
  },
}

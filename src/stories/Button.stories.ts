import type { Meta, StoryObj } from '@storybook/react'

import Button from '../components/Button'

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof Button>


export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label'
  },
}
import type { Meta, StoryObj } from '@storybook/react'

import Timer from '../components/Timer'

const meta = {
  title: 'UI/Timer',
  component: Timer,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof Timer>


export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 1,
    duration: 120
  },
}
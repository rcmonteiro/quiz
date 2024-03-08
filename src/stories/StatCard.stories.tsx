import type { Meta, StoryObj } from '@storybook/react'

import StatCard from '../components/StatCard'

const meta = {
  title: 'UI/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof StatCard>


export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 10,
    text: 'Lorem ipsum'
  },
}
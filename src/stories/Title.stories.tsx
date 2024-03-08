import type { Meta, StoryObj } from '@storybook/react'

import Title from '../components/Title'

const meta = {
  title: 'UI/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof Title>


export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
}
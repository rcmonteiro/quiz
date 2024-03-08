import type { Meta, StoryObj } from '@storybook/react'

import Answer from '../components/Answer'
import AnswerModel from '../model/answer';

const meta = {
  title: 'UI/Answer',
  component: Answer,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col items-center w-96">
        {Story()}
      </div>
    )
  ]
  // tags: ['autodocs'],
} satisfies Meta<typeof Answer>


export default meta;
type Story = StoryObj<typeof meta>

const answerDefault = AnswerModel.incorrect('Lorem ipsum dolor sit amet',)
const answerIncorrect = AnswerModel.incorrect('Lorem ipsum dolor sit amet').unveil()
const answerCorrect = AnswerModel.incorrect('Lorem ipsum dolor sit amet').unveil()

export const Default: Story = {
  args: {
    value: answerDefault,
    index: 1,
    letter: 'A'
  },
}

answerIncorrect.unveil()
export const Incorrect: Story = {
  args: {
    value: answerIncorrect,
    index: 1,
    letter: 'A'
  },
}

answerCorrect.unveil()
export const Correct: Story = {
  args: {
    value: answerCorrect,
    index: 1,
    letter: 'A'
  },
}
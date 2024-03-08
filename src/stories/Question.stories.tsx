import type { Meta, StoryObj } from '@storybook/react'

import Question from '../components/Question'
import QuestionModel from '../model/question';
import AnswerModel from '../model/answer';

const meta = {
  title: 'Components/Question',
  component: Question,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof Question>


export default meta;
type Story = StoryObj<typeof meta>

const question = new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
  AnswerModel.incorrect('Caju'),
  AnswerModel.incorrect('Côco'),
  AnswerModel.incorrect('Chuchu'),
  AnswerModel.correct('Abóbora'),
])

export const Default: Story = {
  args: {
    value: question
  },
}
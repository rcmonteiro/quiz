import { PrismaClient } from '@prisma/client'
import questions from './questions'

const prisma = new PrismaClient()

async function main() {

  questions.map(async question => {
    const newQuestion = await prisma.question.create({
      data: {
        number: question.num,
        title: question.title,
        difficulty: question.level
      }
    })
    question.answers.map(async (answer,index) => {
      const newAnswer = await prisma.answer.create({
        data: {
          questionId: newQuestion.id,
          value: answer,
          correct: (question.correct===(index+1)) ? true : false
        }
      })      
    })
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})
import { NextResponse } from "next/server"
import questions from "../../questionDb"
import { error } from "@/utils/apiCore"
import { shuffle } from "@/utils/common"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// Retorna uma questão a partir de um ID
const get = async (id: number) => {

  // ----------------------------------------------
  //     Local questions database file version
  // ----------------------------------------------
  // const requestedQuestion = questions.filter(question => question.id === id)
  // if (requestedQuestion.length === 0) 
  //   return error('Question not Found', 404)
  // const question = requestedQuestion[0].shuffleAnswers().toObject()

  // ----------------------------------------------
  //     Database version
  // ----------------------------------------------
  const question = await prisma.question.findUnique({ 
    where: { id },
    select: {
      id: true,
      title: true,
      answers: true 
    }
  })

  return NextResponse.json(question, { status: 200 })
}

// Retorna a lista de IDs das questões em uma ordem aleatória
const list = async () => {
  // ----------------------------------------------
  //     Local questions database file version
  // ----------------------------------------------
  // const questionIds = questions.map(question => question.id)
  // return NextResponse.json(shuffle(questionIds), { status: 200 })

  // ----------------------------------------------
  //     Database version
  // ----------------------------------------------
  let questionIds:number[] = []
  
  const getIdsBydifficulty = async (difficulty: string) => {
    let data = await prisma.question.findMany({ 
      where: { difficulty: difficulty },
      select: {
        id: true
      }
    })
    data = shuffle(data)
    data = data.slice(0,5)
    data.map(item => questionIds.push(item.id))
  }

  await getIdsBydifficulty('easy')
  await getIdsBydifficulty('medium')
  await getIdsBydifficulty('hard')
  
  return NextResponse.json(questionIds, { status: 200 })
}

// Mapear os possíveis acesso por GET em /api/question
const GET = (req: Request, { params }: { params : { id: any[] }}) =>  {
  if (!params.id || !params.id[0]) 
    return list()
  else
    return get(+params.id[0])  
}

// Recusar o acesso de qualquer outro método
const POST = () => error('Request not Found', 404)
const OPTIONS = () => error('Request not Found', 404)
const PUT = () => error('Request not Found', 404)
const PATCH = () => error('Request not Found', 404)
const DELETE = () => error('Request not Found', 404)
const HEAD = () => error('Request not Found', 404)

export { GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS }
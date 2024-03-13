'use client'

import Quiz from "@/components/Quiz";
import QuizSkeleton from "@/components/Quiz.skeleton";
import QuestionModel from "@/model/question";
import { API_URL } from "@/utils/constants";
import { sendGTMEvent } from "@next/third-parties/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter()

  const [questionIds, setIds] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  let [hits, setHits] = useState<number>(0)

  const loadQuestionIds = async () => {
    const resp = await fetch(`${API_URL}/api/question`)
    const questionIds = await resp.json()
    setIds(questionIds)

  }
  const loadQuestion = async (id: number) => {
    const resp = await fetch(`${API_URL}/api/question/${id}`)
    const questionData = await resp.json()
    const newQuestion:QuestionModel = QuestionModel.fromObject(questionData)
    setQuestion(newQuestion)
  }

  const getNextId = () => {
    if (question) {
      const nextId = questionIds.indexOf(question.id) + 1
      return questionIds[nextId]
    } else
      return undefined
  }

  useEffect(() => {
    loadQuestionIds()
  },[])

  useEffect(() => {
    if (questionIds.length > 0)
      loadQuestion(questionIds[0])
  },[questionIds])

  const goToNextStep = () => {
    const nextId = getNextId()
    nextId ? loadQuestion(nextId) : openStats()
  }

  const openStats = () => {
    localStorage.setItem('quiz',`${hits}`)
    sendGTMEvent({
      event: 'score',
      value: hits/15
    })
    router.push(`/stats`)
  }

  const answeredQuestion = (question: QuestionModel) => {
    const hit = question.correct
    if (hit) setHits(++hits)
    sendGTMEvent({
      event: 'answer',
      value: hit
    })
    setQuestion(question)
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      {
        question ? 
          <Quiz 
            isLast={getNextId()===undefined} 
            goToNextStep={goToNextStep} 
            answeredQuestion={answeredQuestion} question={question} 
          />
        : <QuizSkeleton />
      }
    </div>    
  )
}

export default Page
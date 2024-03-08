import QuestionModel from "@/model/question"
import Question from "./Question"
import Button from "./Button"

interface QuizProps {
  question: QuestionModel
  isLast: boolean
  answeredQuestion: (question: QuestionModel) => void
  goToNextStep: () => void
}

const Quiz = ({ question, isLast, answeredQuestion, goToNextStep } : QuizProps) => {

  const onResponse = (index: number) => {
    if (!question.answered)
    answeredQuestion(question.answerQuestion(index))
  }

  return (
    <div className="flex flex-col items-center justify-center">
      { 
        question ? 
          <Question value={question} timeToRespond={12} onResponse={onResponse} onTimeOut={goToNextStep} />
        : null 
      }
      <Button label={isLast ? 'Finalizar' : 'Próxima'} onClick={goToNextStep}/>
    </div>
  )
}
export default Quiz
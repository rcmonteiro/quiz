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

  const onTimeOut = () => {
    // if (!question.answered)
    //   answeredQuestion(question.answerQuestion(-1))
  }

  return (
    <div className="flex flex-col items-stretch justify-center md:w-2/3 lg:w-1/2 sm:w-auto">
      { 
        question ? 
          <Question value={question} timeToRespond={40} onResponse={onResponse} onTimeOut={onTimeOut} />
        : null 
      }
      <div className="flex flex-col items-center justify-center">
        <Button label={isLast ? 'Finalizar' : 'Próxima'} bgColor='#9857F2' onClick={goToNextStep}/>
      </div>      
    </div>
  )
}
export default Quiz
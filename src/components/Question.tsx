import QuestionModel from "@/model/question";
import QuestionTitle from "./Title";
import Answer from "./Answer";
import Timer from "./Timer";

const letters = [
  { value: 'A', color: '#049DD9' },
  { value: 'B', color: '#14A647' },
  { value: 'C', color: '#F2C84B' },
  { value: 'D', color: '#F24E29' }
]

interface QuestionProps {
  value: QuestionModel
  timeToRespond?: number
  onResponse: (index: number) => void
  onTimeOut: () => void
}

const Question = ({ value, timeToRespond = 10, onResponse, onTimeOut }: QuestionProps) => {
  const question = value
  const render = () => {
    return question.answers.map((answer, index) => {
      return <Answer 
                key={`${question.id}-${index}`} 
                value={answer} 
                index={index} 
                letter={letters[index].value}
                letterBg={letters[index].color}
                onResponse={onResponse}
              />
    })
  }
  return (
    <div className="flex flex-col items-center">
      <QuestionTitle text={question.title} />
      <Timer id={question.id} duration={timeToRespond} onTimeOut={onTimeOut}/>
      {render()}
    </div>
  )
}

export default Question
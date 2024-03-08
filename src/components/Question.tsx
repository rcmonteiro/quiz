import QuestionModel from "@/model/question";
import QuestionTitle from "./Title";
import Answer from "./Answer";
import Timer from "./Timer";

const letters = [
  { value: 'A', color: '#F2C866' },
  { value: 'B', color: '#F266BA' },
  { value: 'C', color: '#85D4F2' },
  { value: 'D', color: '#BCE596' }
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
    <div className="flex flex-col items-center w-96">
      <QuestionTitle text={question.title} />
      <Timer id={question.id} duration={timeToRespond} onTimeOut={onTimeOut}/>
      {render()}
    </div>
  )
}

export default Question
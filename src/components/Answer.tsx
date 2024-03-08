import clsx from 'clsx'
import AnswerModel from "@/model/answer"

interface AnswerProps {
  value: AnswerModel
  index: number
  letter: string
  letterBg?: string
  onResponse: (index: number) => void
}

const Answer = ({ value, index, letter, letterBg = '#ccc', onResponse }: AnswerProps) => {
  const answer = value
  // const unveiledAnswer = answer.unveiled ?
  return (
    <div className="flex h-20 m-2 self-stretch perspective-1000" onClick={() => onResponse(index)}>
      <div className={
        clsx(
          'flex flex-1 relative preserve-3d transition-transform duration-700',
          {
            'rotateY-180': answer.unveiled
          }
        )
      }>
        
        <div className="flex h-full w-full absolute bg-white text-black items-center rounded-2xl p-4 backface-hidden">
          <div style={{ backgroundColor: letterBg }} className="flex rounded-full text-white justify-center items-center text-xl font-bold w-10 h-10 mr-5">
            {letter}
          </div>
          <div className="flex font-bold">
            {answer.value}
          </div>
        </div>
      
        <div className="flex h-full w-full absolute backface-hidden rotateY-180">
          {answer.correct ? (
            <div className="flex flex-1 flex-col justify-center items-center bg-green-500 rounded-2xl">
              <div className="">
                A resposta certa é...
              </div>
              <div className="font-bold text-2xl">
                {answer.value}
              </div>
            </div>
          ) : (
            <div className="flex flex-1 flex-col justify-center items-center bg-red-500 rounded-2xl">
              <div className="">
                A resposta informada está errada...
              </div>
              <div className="font-bold text-2xl">
                {answer.value}
              </div>
            </div>
          )}          
        </div>
        
      </div>
    </div>
  )
}

export default Answer
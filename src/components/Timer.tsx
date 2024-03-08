import { CountdownCircleTimer } from "react-countdown-circle-timer"

interface TimerProps {
  id: number,
  duration: number
  onTimeOut: () => void
}

const Timer = ({ id, duration, onTimeOut }: TimerProps) => {

  return (
    <div className="flex text-5xl my-4">
      <CountdownCircleTimer 
        key={id}
        duration={duration}
        size={110} 
        colors={['#BCE596', '#F7B801', '#ED827A', '#ED827A']}
        colorsTime={[duration, duration/3*2, duration/3, 0]}
        isPlaying
        onComplete={onTimeOut}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}
export default Timer
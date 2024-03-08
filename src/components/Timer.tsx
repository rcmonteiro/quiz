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
        colors={['#0FA650', '#F2B705', '#F24822', '#F24822']}
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
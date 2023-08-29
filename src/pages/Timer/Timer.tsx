import { AppLayout } from '@/components/AppLayout'
import { Button } from '@/components/Button/Button'
import { Timer } from '@/components/Timer'
import { COLORS } from '@/constants/colors'
import { useTimer } from '@/packages/timer'
import { css } from '@emotion/css'
import { useEffect } from 'react'

export const TimerPage = () => {
  const {
    hours,
    minutes,
    seconds,
    totalMilliSeconds,
    isRunning,
    isFinished,
    timerRun: run,
    timerPause: pause,
    timerFinally,
    timerReset: reset,
  } = useTimer({
    type: 'stopwatch',
    startWith: {
      hours: 1,
    },
    endTime: 0,
  })

  const handlerClick = () => {
    if (isFinished) reset()

    isRunning ? pause() : run()
  }

  useEffect(() => {
    if (totalMilliSeconds === 0) timerFinally()
  })

  return (
    <AppLayout
      timer={
        !isFinished ? (
          <Timer hours={hours} minutes={minutes} seconds={seconds} />
        ) : (
          <h1 className={css({ color: COLORS['text-primary'] })}>Time end!</h1>
        )
      }
      actions={
        <>
          <Button onClick={handlerClick}>{isRunning ? 'Stop' : 'Start'}</Button>
          <Button onClick={() => reset()}>Reset</Button>
        </>
      }
    />
  )
}

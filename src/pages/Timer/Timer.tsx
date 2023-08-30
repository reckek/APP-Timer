import { AppLayout } from '@/components/AppLayout'
import { Button } from '@/components/Button/Button'
import { Layout } from '@/components/Layout/Layout'
import { Timer } from '@/components/Timer'
import { COLORS } from '@/constants/colors'
import { TimerContext } from '@/packages/TimerContext'
import { useTimer } from '@/packages/timer'
import { css } from '@emotion/css'
import { useContext, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const TimerPage = () => {
  const { time: startTime } = useContext(TimerContext)

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
    startWith: startTime,
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
    <>
      <AppLayout
        timer={
          !isFinished ? (
            <Timer hours={hours} minutes={minutes} seconds={seconds} />
          ) : (
            <h1 className={css({ color: COLORS['text-primary'] })}>
              Time end!
            </h1>
          )
        }
        actions={
          <Layout flexDirection='column'>
            <Layout flexDirection='column' justifyContent='stretch'>
              <Button onClick={handlerClick} className={css({ width: '100%' })}>
                {isRunning ? 'Stop' : 'Start'}
              </Button>
              <Button
                onClick={() => reset()}
                className={css({ width: '100%' })}
              >
                Reset
              </Button>
            </Layout>
            <Link
              to='/settings'
              className={css({ width: '100%', marginTop: '10px' })}
            >
              <Button className={css({ width: '100%' })}>
                Got to settings
              </Button>
            </Link>
          </Layout>
        }
      />
      <Outlet />
    </>
  )
}

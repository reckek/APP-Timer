import { useEffect, useState } from 'react'
import { TimerOptions, Status, UseTimerReturn } from './timer.types'
import { timeToMilliseconds } from './utils'
import { getTimeFromMilliseconds } from './utils/getTimeFromMilliseconds'

/**
 * Timer hook
 *
 * @default
 * @param options
 * @returns Hours, Minutes, Seconds
 * @example
 * ```tsx
 * const { hours, minutes, seconds } = useTimer()
 *
 * ```
 */
export const useTimer = (options: Partial<TimerOptions>): UseTimerReturn => {
  const { type = 'timer', startWith = 0, intervalTick = 0 } = options

  const [status, setStatus] = useState<Status>('paused')
  const [totalMilliSeconds, setTotalMilliSeconds] = useState(
    timeToMilliseconds(startWith)
  )

  useEffect(() => {
    if (status === 'finished' || status === 'paused') return

    const intervalId = setInterval(() => {
      if (type === 'timer') {
        setTotalMilliSeconds((prev) => prev - 2)
        return
      }

      setTotalMilliSeconds((prev) => prev - 2)
    }, intervalTick)

    return () => clearInterval(intervalId)
  })

  const { days, hours, minutes, seconds, milliseconds } =
    getTimeFromMilliseconds(totalMilliSeconds)

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    totalMilliSeconds,
    isRunning: status === 'running',
    isPaused: status === 'paused',
    isFinished: status === 'finished',
    timerRun: () => setStatus('running'),
    timerPause: () => setStatus('paused'),
    timerFinally: () => setStatus('finished'),
    timerReset: () => {
      setStatus('paused')
      setTotalMilliSeconds(timeToMilliseconds(startWith))
    },
  }
}

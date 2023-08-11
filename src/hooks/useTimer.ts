import { useEffect, useState } from 'react'

const HOUR_IN_SECONDS = 3_600
const HOUR_IN_MINUTES = 60
const MINUTE_IN_SECONDS = 60
const SECOND = 1

export type Time =
  | {
      hours?: number
      minutes?: number
      seconds?: number
    }
  | number

type IncrementOrDecrement =
  | {
      increment: false
      negativeNumbers: boolean
    }
  | {
      increment: true
    }

export type ITimerOptions = {
  // In seconds
  startTime?: Time
  endTime: Time
  timeInterval?: number
  interval?: number
} & Partial<IncrementOrDecrement>

const formattingTime = (time: number) => String(time).padStart(2, '0')

const defaultOptions = {
  startTime: 0,
  timeInterval: SECOND * 1000,
  increment: false,
  negativeNumbers: false,
  interval: 1,
} satisfies Partial<ITimerOptions>

/**
 * Timer hook
 *
 * @default {
 *  startTime: 0,
 *  timeInterval: 1000,
 *  increment: false,
 *  negativeNumbers: false,
 *  interval: 1,
 * }
 * @param options
 * @returns Hours, Minutes, Seconds
 * @example
 * ```tsx
 * const { hours, minutes, seconds } = useTimer()
 *
 * ```
 */
export const useTimer = (options?: ITimerOptions) => {
  const assignOptions = {
    intervalID: 0,
    ...defaultOptions,
    ...options,
  }

  const startTime = timeToSeconds(assignOptions.startTime)
  const endTime =
    'endTime' in assignOptions ? timeToSeconds(assignOptions.endTime) : 0

  const [seconds, setSeconds] = useState(startTime)

  useEffect(() => {
    assignOptions.intervalID = setInterval(() => {
      if (assignOptions.increment) {
        assignOptions.endTime
          ? endTime > seconds
            ? setSeconds((prev) => ++prev)
            : clearInterval(assignOptions.intervalID)
          : setSeconds((prev) => ++prev)
      } else {
        !assignOptions.negativeNumbers
          ? seconds <= 0
            ? clearInterval(assignOptions.intervalID)
            : setSeconds((prev) => --prev)
          : setSeconds((prev) => --prev)
      }
    }, assignOptions.timeInterval)

    return () => {
      clearInterval(assignOptions.intervalID)
    }
  })

  const hours =
    seconds >= HOUR_IN_SECONDS ? Math.floor(seconds / HOUR_IN_SECONDS) : 0
  const minutes =
    seconds >= MINUTE_IN_SECONDS ? Math.floor(seconds / MINUTE_IN_SECONDS) : 0
  const secondsInMinute = seconds % MINUTE_IN_SECONDS

  const hoursFormatted =
    minutes <= HOUR_IN_SECONDS
      ? minutes > HOUR_IN_SECONDS
        ? hours + 1
        : hours
      : hours
  const minutesFormatted = minutes < HOUR_IN_SECONDS ? minutes % 60 : minutes

  return {
    hours: formattingTime(hoursFormatted),
    minutes: formattingTime(minutesFormatted),
    seconds: formattingTime(secondsInMinute),
  }
}

function timeToSeconds(time: Time): number {
  if (typeof time === 'number') {
    return time
  }

  if (!time.hours && !time.minutes && !time.seconds) {
    return 0
  }

  // Validate time format
  if (time.minutes && time.minutes > HOUR_IN_MINUTES) {
    throw new Error('Invalid time (minutes > hour)')
  }

  if (time.seconds && time.seconds > MINUTE_IN_SECONDS) {
    throw new Error('Invalid time (seconds > minute)')
  }

  const hoursInSeconds = time.hours ? time.hours * HOUR_IN_SECONDS : 0
  const minutesInSeconds = time.minutes ? time.minutes * MINUTE_IN_SECONDS : 0
  const seconds = time.seconds || 0

  return hoursInSeconds + minutesInSeconds + seconds
}

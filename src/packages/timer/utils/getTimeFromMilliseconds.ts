import { ITime } from '../timer.types'
import {
  DAY_IN_HOURS,
  DAY_IN_SECONDS,
  HOUR_IN_MINUTES,
  HOUR_IN_SECONDS,
  MINUTE_IN_SECONDS,
  SECOND_IN_MILLISECONDS,
  WEEK_IN_DAYS,
} from '../constants'

export const getTimeFromMilliseconds = (totalMilliseconds: number): ITime => {
  const totalSeconds = Math.floor(totalMilliseconds / SECOND_IN_MILLISECONDS)

  const milliseconds = Math.floor(totalMilliseconds % SECOND_IN_MILLISECONDS)

  const seconds = Math.floor(totalSeconds % MINUTE_IN_SECONDS)

  const minutes = Math.floor(
    (totalSeconds / MINUTE_IN_SECONDS) % HOUR_IN_MINUTES
  )

  const hours = Math.floor((totalSeconds / HOUR_IN_SECONDS) % DAY_IN_HOURS)

  const days = Math.floor((totalSeconds / DAY_IN_SECONDS) % WEEK_IN_DAYS)

  return { milliseconds, seconds, minutes, hours, days }
}

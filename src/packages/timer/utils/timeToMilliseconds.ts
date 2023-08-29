import {
  DAY_IN_HOURS,
  DAY_IN_MILLISECONDS,
  HOUR_IN_MILLISECONDS,
  HOUR_IN_MINUTES,
  MINUTE_IN_MILLISECONDS,
  MINUTE_IN_SECONDS,
  SECOND_IN_MILLISECONDS,
  WEEK_IN_DAYS,
} from '../constants'
import { ITime } from '../timer.types'

/**
 * Convert hours, minutes and seconds to seconds
 *
 * @example
 * ```ts
 * // 9999 seconds to 9999 second
 * const time = timeToSeconds(9999)
 *
 * // Convert 1 hour, 2 minutes and 3 seconds to 3723000 milliseconds
 * const time = timeToSeconds({ hours: 1, minutes: 2, seconds: 3 })
 *
 * // Convert 0 hours, 35 minutes and 3 seconds to 2103000 milliseconds
 * const time = timeToSeconds({ hours: 0, minutes: 35, seconds: 3 })
 *
 * // Convert 1 hour, 0 minutes and 0 seconds to 3600000 milliseconds
 * const time = timeToSeconds({ hours: 1, minutes: 0, seconds: 0 })
 *
 * // Convert 0 hours, 0 minutes, 0 seconds and 0 milliseconds to 0 milliseconds
 * const time = timeToSeconds({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 })
 * ```
 *
 * @throws Invalid time
 * @param time - Object with hours, minutes and seconds or number in seconds
 * @returns Seconds
 */
export function timeToMilliseconds(time: Partial<ITime> | number): number {
  if (typeof time === 'number') return time

  if (
    !time.days &&
    !time.hours &&
    !time.minutes &&
    !time.seconds &&
    !time.milliseconds
  ) {
    return 0
  }

  const days = time.days || 0
  const hours = time.hours || 0
  const minutes = time.minutes || 0
  const seconds = time.seconds || 0
  const milliseconds = time.milliseconds || 0

  if (
    days === 0 &&
    hours === 0 &&
    minutes === 0 &&
    seconds === 0 &&
    milliseconds === 0
  ) {
    return 0
  }

  // Validate time format
  if (days < 0 || days >= WEEK_IN_DAYS) {
    throw new Error('Invalid time (days < 0 || days >= 7)')
  }

  if (hours < 0 || hours >= DAY_IN_HOURS) {
    throw new Error('Invalid time (hours < 0 || hours >= 24)')
  }

  if (minutes < 0 || minutes >= HOUR_IN_MINUTES) {
    throw new Error('Invalid time (minutes < 0 || minutes >= 60)')
  }

  if (seconds < 0 || seconds >= MINUTE_IN_SECONDS) {
    throw new Error('Invalid time (seconds < 0 || seconds >= 60)')
  }

  if (milliseconds < 0 || milliseconds >= SECOND_IN_MILLISECONDS) {
    throw new Error('Invalid time (milliseconds < 0 || milliseconds >= 1000)')
  }

  // Convert to milliseconds
  const daysInMilliseconds = days * DAY_IN_MILLISECONDS
  const hoursInMilliseconds = hours * HOUR_IN_MILLISECONDS
  const minutesInMilliseconds = minutes * MINUTE_IN_MILLISECONDS
  const secondsInMilliseconds = seconds * SECOND_IN_MILLISECONDS

  return (
    daysInMilliseconds +
    hoursInMilliseconds +
    minutesInMilliseconds +
    secondsInMilliseconds +
    milliseconds
  )
}

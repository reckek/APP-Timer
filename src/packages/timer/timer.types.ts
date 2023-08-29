export type TimerType = 'timer' | 'stopwatch'

export interface ITime {
  milliseconds: number
  seconds: number
  minutes: number
  hours: number
  days: number
}

export interface IBaseOptions {
  type: TimerType
  /** Start time */
  startWith: Partial<ITime> | number
  /**
   * Time in milliseconds
   */
  intervalTick: number
  endTime?: Partial<ITime> | number
}

export type TimerOptions = IBaseOptions

export type Status = 'running' | 'paused' | 'finished'

export type UseTimerReturn = {
  totalMilliSeconds: number
  isRunning: boolean
  isPaused: boolean
  isFinished: boolean
  timerRun: () => void
  timerPause: () => void
  timerFinally: () => void
  timerReset: () => void
} & ITime

import { FC } from 'react'
import { ITimerOptions, useTimer } from '../hooks'

type TimerProps = {
  text: string
} & Partial<ITimerOptions>

export const Timer: FC<TimerProps> = (props) => {
  const { seconds, minutes, hours } = useTimer(props)

  return (
    <>
      <p>
        StartTime: {props.startTime} <br />
        Time:{' '}
        <b>
          {hours}:{minutes}:{seconds}
        </b>
        <br />
        <br />
        Hours: <b>{hours}</b> <br />
        Minutes: <b>{minutes}</b> <br />
        Seconds: <b>{seconds}</b>
      </p>
    </>
  )
}

import { FC } from 'react'
import { ITime } from '@/packages/timer'
import styled from '@emotion/styled'
import { COLORS } from '@/constants/colors'
import { formatTime } from '@/packages/timer/utils'

const TimerContainer = styled('h1')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: COLORS['text-primary'],
})

export const Timer: FC<Partial<ITime>> = ({ hours, minutes, seconds }) => {
  return (
    <TimerContainer>
      {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
    </TimerContainer>
  )
}

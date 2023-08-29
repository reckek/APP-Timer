import { ITime } from '@/packages/timer'
import { FC, PropsWithChildren, createContext, useState } from 'react'

export const TimerContext = createContext(
  {} as {
    time: Partial<ITime>
    setTime: React.Dispatch<React.SetStateAction<Partial<ITime>>>
  }
)

export const TimerContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [time, setTime] = useState<Partial<ITime>>({ hours: 1 })

  return (
    <TimerContext.Provider value={{ time, setTime }}>
      {children}
    </TimerContext.Provider>
  )
}

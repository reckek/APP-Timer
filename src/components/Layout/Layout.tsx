import { css } from '@emotion/css'
import { FC, PropsWithChildren } from 'react'

interface LayoutProps {
  type: 'flex'
  position: 'horizontal' | 'vertical'
  gap: number
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
  alignContent:
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
  alignItems:
    | 'baseline'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'self-start'
    | 'self-end'
}

export const Layout: FC<PropsWithChildren<Partial<LayoutProps>>> = (props) => {
  const {
    children,
    type = 'flex',
    position = 'horizontal',
    justifyContent = 'flex-start',
    alignContent = 'stretch',
    alignItems = 'stretch',
    gap = 4,
  } = props

  return (
    <div
      className={css({
        display: type,
        flexDirection: position === 'horizontal' ? 'row' : 'column',
        justifyContent,
        alignContent,
        alignItems,
        gap,
        width: '100%',
      })}
    >
      {children}
    </div>
  )
}

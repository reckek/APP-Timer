import React, { FC } from 'react'
import styled from '@emotion/styled'
import { COLORS } from '@/constants/colors'

interface AppLayoutProps {
  timer: React.ReactElement
  actions: React.ReactElement
}

const Layout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: COLORS['background-primary'],
})

const TimerContainer = styled('div')({
  display: 'flex',
  justifyItems: 'center',
  justifyContent: 'center',
})

const ActionsContainer = styled('div')({
  display: 'flex',
  justifyItems: 'center',
  justifyContent: 'center',
})

export const AppLayout: FC<AppLayoutProps> = ({ actions, timer }) => {
  return (
    <Layout>
      <div>
        <TimerContainer>{timer}</TimerContainer>
        <ActionsContainer>{actions}</ActionsContainer>
      </div>
    </Layout>
  )
}

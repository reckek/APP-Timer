import { FC, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import styled from '@emotion/styled'

const ModalOverlay = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
})

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  return createPortal(<ModalOverlay>{children}</ModalOverlay>, document.body)
}

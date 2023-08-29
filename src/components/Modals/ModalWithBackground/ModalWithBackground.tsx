import { FC, PropsWithChildren } from 'react'
import { Modal } from '../Modal'
import styled from '@emotion/styled'

const Background = styled.div({
  borderRadius: '3px',
  padding: '10px',
  backgroundColor: '#e5e1e1',
})

interface ModalWithBackgroundProps {
  width: number
  height?: number
}

export const ModalWithBackground: FC<
  PropsWithChildren<ModalWithBackgroundProps>
> = ({ height, width, children }) => {
  return (
    <Modal>
      <Background style={{ height, width }}>{children}</Background>
    </Modal>
  )
}

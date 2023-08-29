import { COLORS } from '@/constants/colors'
import styled from '@emotion/styled'
import { ButtonHTMLAttributes, FC } from 'react'

const ButtonStyle = styled.button({
  color: COLORS['text-primary'],
  backgroundColor: COLORS['background-secondary'],
  border: 'none',
  padding: '6px',
  borderRadius: '3px',
  transition: 'background-color 0.3s',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: COLORS['background-tertiary'],
  },
})

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <ButtonStyle {...props}>{props.children}</ButtonStyle>
}

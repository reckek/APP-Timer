import { COLORS } from '@/constants/colors'
import styled from '@emotion/styled'
import { ButtonHTMLAttributes, FC } from 'react'

const ButtonStyle = styled.button({
  color: COLORS['text-primary'],
  backgroundColor: COLORS['background-secondary'],
  ':hover': {
    backgroundColor: COLORS['background-tertiary'],
    transition: 'background-color 0.3s',
  },
})

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <ButtonStyle {...props}>{props.children}</ButtonStyle>
}

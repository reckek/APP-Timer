import { FC, InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/css'

interface FormItemProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Container = styled.div({
  marginTop: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
})

const Input = styled.input({
  padding: '6px',
  width: '100%',
})

export const FormItem: FC<FormItemProps> = (props) => {
  const { label } = props

  return label ? (
    <Container>
      <label
        className={css({
          width: '100%',
          display: 'flex',
          gap: '8px',
        })}
      >
        {label}
        <Input {...props} />
      </label>
    </Container>
  ) : (
    <input type='text' />
  )
}

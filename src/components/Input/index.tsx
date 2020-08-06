import React, { InputHTMLAttributes } from "react"

import * as S from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Input: React.FC<IInputProps> = ({ name, label, ...rest }) => {
  return (
    <S.InputBlock>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </S.InputBlock>
  )
}

export default Input

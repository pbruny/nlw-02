import React, { SelectHTMLAttributes } from "react"

import * as S from './styles'

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  options: Array<{
    value: string
    label: string
  }>
}

const Select: React.FC<ISelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <S.SelectBlock>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        <option value="" disabled selected hidden >Selecione uma opção</option>
        {options.map(option => (<option key={option.value} value={option.value}>{option.label}</option>))}
      </select>
    </S.SelectBlock>
  )
}

export default Select

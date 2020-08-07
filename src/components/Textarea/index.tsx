import React, { TextareaHTMLAttributes } from "react"

import * as S from './styles'

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
}

const Textarea: React.FC<ITextAreaProps> = ({ name, label, ...rest }) => {
  return (
    <S.TextareaBlock>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </S.TextareaBlock>
  )
}

export default Textarea

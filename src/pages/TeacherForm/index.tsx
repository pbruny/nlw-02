import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'

import * as S from './styles'
import waningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea'

function TeacherForm() {
  return (
    <S.TeacherFormPage>
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher este formulário de inscrição"
      />

      <S.Main>
        <S.Fieldset>
          <S.Legend>
            Seus dados
          </S.Legend>

          <Input name="name" label="Nome" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />
        </S.Fieldset>

        <S.Fieldset>
          <S.Legend>
            Sobre a aula
          </S.Legend>

          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Preço da sua hora/aula" />
        </S.Fieldset>

        <S.Footer>
          <p>
            <img src={waningIcon} alt="Ícone de aviso"/>
            Importante! <br/>
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </S.Footer>

      </S.Main>
    </S.TeacherFormPage>
  )
}

export default TeacherForm
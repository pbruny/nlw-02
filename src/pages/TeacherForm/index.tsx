import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'

import * as S from './styles'
import waningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

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

          <Select 
            name="subject" 
            label="Matéria" 
            options={[
              { value: 'Matemática', label: 'Matemática'},
              { value: 'Português', label: 'Português'},
              { value: 'Química', label: 'Química'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Física', label: 'Física'},
              { value: 'Artes', label: 'Artes'},
              { value: 'História', label: 'História'},
              { value: 'Geografia', label: 'Geografia'},
              { value: 'Literatura', label: 'Literatura'},
              { value: 'Meio ambiente', label: 'Meio ambiente'},
              { value: 'Empreendedorismo', label: 'Empreendedorismo'},
            ]}
          />

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
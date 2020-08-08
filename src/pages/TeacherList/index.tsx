import React from "react"
import PageHeader from "../../components/PageHeader"
import TeacherCard from "../../components/TeacherCard"
import Input from "../../components/Input"
import Select from "../../components/Select"
import * as S from "./styles"

function TeacherList() {
  return (
    <S.pageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <S.formTeacher>
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

          <Select 
            name="subject" 
            label="Matéria" 
            options={[
              { value: '0', label: 'Domingo'},
              { value: '1', label: 'Segunda-feira'},
              { value: '2', label: 'Terça-feira'},
              { value: '3', label: 'Quarta-feira'},
              { value: '4', label: 'Quinta-feira'},
              { value: '5', label: 'Sexta-feira'},
              { value: '6', label: 'Sábado'},
            ]}
          />

          <Input name="time" label="Horário" type="time" />
        </S.formTeacher>
      </PageHeader>

      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
    </S.pageTeacherList>
  )
}

export default TeacherList

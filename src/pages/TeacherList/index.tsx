import React from "react"
import * as S from "./styles"
import PageHeader from "../../components/PageHeader"
import TeacherCard from "../../components/TeacherCard"
import Input from "../../components/Input"

function TeacherList() {
  return (
    <S.pageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <S.formTeacher>
          <Input name="subject" label="Matéria" />
          <Input name="week_day" label="Dia da semana" type="date" />
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

import React from "react"
import * as S from "./styles"
import PageHeader from "../../components/PageHeader"
import TeacherCard from "../../components/TeacherCard"

function TeacherList() {
  return (
    <S.pageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
        <S.formTeacher>
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>
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

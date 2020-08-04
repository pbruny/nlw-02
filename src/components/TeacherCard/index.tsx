import React from "react"

import * as S from "./styles"

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


const TeacherCard = () => {
  return (
    <S.proffyCard>
      <article className="teacher-item">
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/14647700?s=460&u=18119ff02309fb80ba5d8b0cc1b858b37429fd5b&v=4"
            alt="Paulo Bruny Lima"
          />
          <div>
            <strong>Paulo Bruny Lima</strong>
            <span>Matemática</span>
          </div>
        </header>

        <p>
          Entusiasta dos números e cálculos.
          <br />
          <br />
          Já fiz cálculos que você não consegue nem mesmo imaginar, fui à lua e
          voltei no mesmo dia e ainda sou chamado de pescador. Você vai aprender
          a usar matemática para mentir para todos os seus amigos.
        </p>

        <footer>
          <p>
            Preço/hora:
            <strong>R$ 90,00</strong>
          </p>

          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>
    </S.proffyCard>
  )
}

export default TeacherCard

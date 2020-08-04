import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClasses from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import * as S from './styles'

function Landing() {
  return (
    <S.pageLanding>
      <S.pageLandingContent className="container">
        <S.logoContainer>
          <img src={logoImg} alt="Proffy Logo"/>
          <h2>Sua plataforma de estudos online</h2>
        </S.logoContainer>

        <img 
          src={landingImg} 
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <S.buttonsContainer>
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClasses} alt="Dar aula"/>
            Dar aulas
          </Link>
        </S.buttonsContainer>

        <S.totalConnections>
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
        </S.totalConnections>
      </S.pageLandingContent>
    </S.pageLanding>  
  )
}

export default Landing
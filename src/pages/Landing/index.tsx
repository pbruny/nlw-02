import React from 'react'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClasses from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import * as S from './styles'

function Landing() {
  return (
    <S.pageLanding>
      <div id="page-landing-content" className="container">
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
          <a href="/" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </a>
          <a href="/" className="give-classes">
            <img src={giveClasses} alt="Dar aula"/>
            Dar aulas
          </a>
        </S.buttonsContainer>

        <S.totalConnections>
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
        </S.totalConnections>
      </div>
    </S.pageLanding>  
  )
}

export default Landing
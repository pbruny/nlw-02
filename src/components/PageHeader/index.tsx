import React from "react"
import { Link } from "react-router-dom"

import * as S from "./styles"

import logoImg from "../../assets/images/logo.svg"
import backIcon from "../../assets/images/icons/back.svg"

interface PageHeaderProps {
  title: string
  description?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, children }) => {
  return (
    <S.pageHeader>
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar para página inicial" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}

        {children}
      </div>

    </S.pageHeader>
  )
}

export default PageHeader

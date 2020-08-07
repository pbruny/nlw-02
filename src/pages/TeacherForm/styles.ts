import styled from 'styled-components'

export const Main = styled.main`
  background: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;
`

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;

  & + & {
    margin-top: 6.4rem;
  }

  label {
    color: var(--color-text-complement);
  }
`

export const Legend = styled.legend`
  font: 700 2.4rem Archivo;
  color: var(--color-text-title);
  margin-bottom: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid var(--color-line-in-white);  
`

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  background: var(--color-line-in-white);
  border-top: 1px solid var(color-in-line-white);
  margin-top: 6.4rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--color-text-complement);
  }

  img {
    margin-left: 2rem;
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-title-in-primary);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
    margin-top: 3.2rem;
  }

  button:hover {
    background: var(--color-secundary-dark);
  }
`

export const TeacherFormPage = styled.div`
  width: 100vw;
  height: 100vh;

  .header-content {
    margin-bottom: 6.4rem;
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    .header-content {
      margin-bottom: 0;
    }

    ${Fieldset} {
      padding: 0 6.4rem;
    }

    ${Footer} {
      padding: 4rem 6.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        width: 20rem;
        margin-top: 0;
      }
    }
  }
`


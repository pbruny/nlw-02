import styled from 'styled-components'

export const pageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

`

export const pageLandingContent = styled.div`
  @media (min-width: 1100px) {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: 
      "logo hero hero"
      "buttons buttons total";
  }

  .hero-image {
    width: 100%;
    grid-area: hero;
  }

`

export const logoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
  
  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
`

export const buttonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
  grid-area: buttons;

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2.0rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--color-button-text);
    transition: background-color 0.3s ease-in-out;

    &:first-child {
      margin-right: 1.6rem;
    }

    img {
      width: 4rem;
    }

    &.study {
      background: var(--color-primary-lighter);
    }

    &.study:hover {
      background: var(--color-primary-light);
    }

    &.give-classes {
      background: var(--color-secundary);
    }

    &.give-classes:hover {
      background: var(--color-secundary-dark);
    }
  }
`

export const totalConnections = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: total;

  img {
    margin-left: 0.8rem;
  }
`

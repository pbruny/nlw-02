import styled from 'styled-components'


export const proffyCard = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  .teacher-item {
    background: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;

    > p {
      padding: 0 2rem;
      font-size: 1.6rem;
      line-height: 2.8rem;
    }

    header {
      padding: 3.2rem 2rem;
      display: flex;
      align-items: center;

      img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
      }

      div {
        margin-left: 2.4rem;

        strong {
          font: 700 2.4rem Archivo;
          display: block;
          color: var(--color-text-title);
        }

        span {
          font-size: 1.6rem;
          display: block;
          /* color: var(--color-text-title); */
          margin-top: 0.4rem;
        }
      }
    }

    footer {
      padding: 3.2rem 2rem;
      background: var(--color-box-footer);
      border-top: 1px solid var(--color-line-in-white);
      margin-top: 3.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p strong {
        color: var(--color-primary);
        font-size: 1.6rem;
        display: block;
      }

      button {
        width: 20rem;
        height: 5.6rem;
        background: var(--color-secundary);
        color: var(--color-button-text);
        border: 0;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.4rem Archivo;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: 0.3s;
      }

      button:hover {
        background: var(--color-secundary-dark);
      }
    }
  }

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 74rem;
    margin: 0 auto;

    .teacher-item {
      header,
      footer {
        padding: 3.2rem;
      }

      > p {
        padding: 0 3.2rem;
      }

      footer p strong {
        display: initial;
        margin-left: 1.6rem;
      }

      footer button {
        font-size: 1.6rem;
        width: 24.5rem;
        justify-content: center;
      }

      footer button img {
        margin-right: 1.6rem;
      }
    }
  }
`
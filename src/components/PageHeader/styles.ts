import styled from 'styled-components'


export const pageHeader = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-primary);

  .top-bar-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-text-in-primary);
    padding: 1.6rem 0;

    > img {
      height: 1.6rem;
    }

    a {
      height: 3.2rem;
      transition: opacity 0.3s;
    }

    a:hover {
      opacity: 0.75;
    }
  }

  .header-content {
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto;

    strong {
      font: 700 3.6rem Archivo;
      line-height: 4.2rem;
      color: var(--color-title-in-primary);
    }

    p {
      max-width: 30rem;
      font-size: 1.6rem;
      line-height: 2.6rem;
      color: var(--color-text-in-primary);
      margin-top: 2.4rem;
    }
  }

  @media (min-width: 700px) {
    height: 34rem;

    .top-bar-container {
      max-width: 110rem;
    }

    .header-content {
      flex: 1;
      max-width: 74rem;
      margin: 0 auto;
      padding-bottom: 4.8rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      strong {
        max-width: 35rem;
      }
    }
  }
`
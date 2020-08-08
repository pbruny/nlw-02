import styled from "styled-components"

export const SelectBlock = styled.div`
  position: relative;
  margin-bottom: 2.4rem;
  label {
    font-size: 1.4rem;
  }

  select {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    resize: vertical;
    outline: 0;
    padding: 1.2rem 1.6rem;
    font: 1.6rem Archivo;
    outline: 0;
  }

  & + & {
    margin-top: 1.4rem;
  }

  @media (min-width: 700px) {

    & + & {
      margin: 0;
    }
  }
`

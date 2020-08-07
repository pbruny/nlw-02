import styled from "styled-components"

export const TextareaBlock = styled.div`
  position: relative;
  margin-top: 2.4rem;

  label {
    font-size: 1.4rem;
  }

  textarea {
    width: 100%;
    height: 16rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    resize: vertical;
    outline: 0;
    padding: 1.2rem 1.6rem;
    font: 1.6rem Archivo;
    min-height: 14rem;
  }

  & + & {
    margin-top: 1.4rem;
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    content: "";
    height: 2px;
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0.8rem;
  }

  @media (min-width: 700px) {

    & + & {
      margin: 0;
    }
  }
`

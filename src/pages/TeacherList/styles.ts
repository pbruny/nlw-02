import styled from "styled-components"

export const pageTeacherList = styled.div`
  height: 100vh;
  width: 100vw;
`

export const formTeacher = styled.form`
  margin-top: 3.2rem;

  label {
    color: var(--color-text-in-primary);
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.6rem;
    position: absolute;
    bottom: -2.8rem;

    .input-block + .input-block {
      margin: 0;
    }
  }
`

import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-self: center;
  align-self: flex-start;

  margin: 40px 0;
  padding: 2rem;

  width: 350px;

  background: white;
  border-radius: 0.5rem;
  border: 1px solid #ebebeb;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.08);

  > p {
    margin-top: 2rem;
  }

  form {
    margin-top: 1rem;
  }

  a {
    display: block;
    position: right;
    margin-top: 0.5rem;
    text-align: right;
  }

  hr {
    border: 0;
    border-top: 1px solid var(--light_gray);
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 450px) {
    border: none;
    box-shadow: none;
  }
`;

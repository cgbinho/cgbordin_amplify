import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  /* margin-top: 8px; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 14px;
  width: 100%;
  margin-top: 4px;

  border: 2px solid var(--gray-400);
  border-radius: 0.5rem;

  color: var(--primary);
  font-size: 14px;
  background: var(--gray-100);
  transition: border 0.2s;

  input {
    width: 90%;
    border: 0;
    background: transparent;
    font-size: 1rem;
    color: var(--primary);

    &::placeholder {
      color: var(--gray-400);
    }
  }

  /*
  IF AN ELEMENT INSIDE THIS ELEMENT (input in this case) GETS FOCUS:
  */
  &:focus-within {
    border: 2px solid var(--scent-550);
  }

  svg {
    flex-shrink: 0;
    margin-right: 8px;
  }
`;

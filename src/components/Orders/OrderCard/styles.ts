import styled from 'styled-components';

export const OrderCardContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
  max-width: 450px;
  /* background-color: var(--gray-100); */
  padding: 2rem;
  border-radius: 8px;
  width: 350px;

  code {
    background: var(--scent-350);
    border-radius: 4px;
    padding: 0.4rem;
    font-size: 0.8rem;
  }
`;

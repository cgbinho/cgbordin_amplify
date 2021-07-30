import styled from 'styled-components';

export const OrderCardContainer = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;
  max-width: 950px;
  background-color: var(--gray-170);
  padding: 2rem;
  border-radius: 8px;
  justify-content: space-between;

  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }

  code {
    background: var(--gray-100);
    border-radius: 4px;
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
  }

  svg {
    margin: 0 4px;
  }
`;

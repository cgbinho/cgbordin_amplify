import styled from 'styled-components';

export const EmptyOrderCardContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 950px;
  background-color: var(--gray-170);
  padding: 2rem;
  border-radius: 8px;

  svg {
    margin: 0 4px;
    fill: var(--error_color);
  }
`;

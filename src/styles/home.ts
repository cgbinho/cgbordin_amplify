import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  align-items: flex-start;
  padding-top: 1rem;

  .content {
    display: grid;
    grid-auto-flow: row;
    justify-items: center;
    align-items: center;
    gap: 3rem;
    max-width: 650px;
    padding: 2rem 0;
  }

  hr {
    border: 0;
    height: 1px;
    background: var(--gray-400);
  }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
`;

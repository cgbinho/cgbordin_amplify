import styled from 'styled-components';

export const ProjectsContent = styled.div`
  display: grid;
  grid-auto-flow: row;
  width: 100%;
  margin: 2rem 0;
  gap: 1rem;
  /* max-width: 950px; */

  > h3 {
    text-align: center;
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    align-items: center;
    justify-items: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 2rem;
    padding: 2rem;
    background-color: var(--gray-170);
    border-radius: 4px;
  }
`;

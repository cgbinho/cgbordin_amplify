import styled from 'styled-components';

export const ProjectsContent = styled.div`
  display: grid;
  grid-auto-flow: row;
  margin: 2rem 0;
  gap: 1rem;
  width: 100%;

  > h3 {
    text-align: center;
  }

  section {
    display: grid;
    grid-auto-flow: row;
    align-items: flex-start;
    justify-items: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 2rem;
    padding: 2rem;
    background-color: var(--gray-170);
    border-radius: 4px;
  }

  p {
    margin: 1rem 0;
  }

  .projects_list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    align-items: center;
    justify-items: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 2rem;
    padding: 2rem;
    border-radius: 4px;
    /* max-width: 980px; */
  }
`;

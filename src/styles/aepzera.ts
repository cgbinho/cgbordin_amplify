import styled from 'styled-components';

export const AepzeraCard = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  max-width: 980px;
  margin: 2rem;
  width: 90%;

  background-color: var(--gray-170);
  border-radius: 8px;

  aside {
    display: grid;
    grid-auto-flow: row;
    gap: 2rem;
    justify-items: center;
    align-items: center;
  }
`;

export const AepzeraContent = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  margin: 2rem 1rem;
  gap: 2rem;
  max-width: 950px;

  li {
    padding: 0.5rem 0;
  }

  img {
    border: 4px solid var(--gray-100);
    box-shadow: 4px 4px 16px var(--gray-100);
  }

  code {
    overflow-wrap: 'break-word';
    background-color: #2f3644;
    padding: 0.03em 0.3em;
    border-radius: 0.2em;
    margin: 0 0.1em;
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    align-items: center;
    justify-items: center;
    width: 100%;
    padding: 2rem;
    /* min-width: 350px; */
    /* grid-auto-flow: column; */
    margin-top: 1rem;
    row-gap: 1rem;
    column-gap: 3rem;
    background-color: var(--gray-170);
    border-radius: 4px;
  }
`;

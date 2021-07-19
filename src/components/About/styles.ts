import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  justify-items: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 650px;
  gap: 1rem;
  padding: 2rem;

  h3 {
    text-align: center;
  }

  .about_tecnologies {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    justify-items: flex-start;
    gap: 1rem;
    width: 100%;
  }
  .img_rounded {
    border-radius: 8px;
  }
`;

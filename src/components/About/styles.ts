import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  /* justify-items: flex-start; */
  align-items: flex-start;
  width: 90%;
  max-width: 950px;
  gap: 1rem;
  padding: 2rem;

  h1 {
    text-align: center;
  }

  .about_tecnologies {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    justify-items: flex-start;
    gap: 1rem;
    width: 100%;
  }

  .about_description {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr 200px;
    align-items: center;
    gap: 2rem;

    @media only screen and (max-width: 600px) {
      display: grid;
      grid-auto-flow: row;
      justify-items: center;
      align-items: center;

      img {
        grid-column: 1;
        grid-row: 1 / 2;
      }
    }
  }

  .about_img {
    width: 200px;
    border-radius: 50%;
  }
`;

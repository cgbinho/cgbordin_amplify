import styled from 'styled-components';
import Button from '../../components/Form/Button';

export const Container = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-area: header;
  justify-content: space-between;
  grid-gap: 1rem;
  align-items: center;
  padding: 0 2rem;
  background-color: var(--gray-100);
  height: 80px;

  .navbar_desktop {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    list-style: none;
    gap: 2rem;

    .vertical_line {
      border-left: 2px solid var(--gray-200);
      height: 28px;
    }

    li {
      display: grid;
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      gap: 0.2rem;
    }

    @media (max-width: 920px) {
      display: none;
    }
  }
`;

export const BurguerContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  @media (min-width: 921px) {
    display: none;
  }
`;

export const SignedContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

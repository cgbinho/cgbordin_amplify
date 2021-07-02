import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
`;

export const Content = styled.main`
  grid-area: main;
  overflow: auto;

  background-color: var(--gray-200);
`;

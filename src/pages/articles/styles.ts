import styled from 'styled-components';

export const ArticlesContent = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  gap: 1rem;

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

export const ArticleContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  margin: 0 2rem;
  justify-content: center;
  align-items: center;
  max-width: 650px;

  .video_container {
    position: relative;
    padding-top: 56.25%;
    margin: 2rem 0;
  }

  .video_content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    padding-top: 1rem;
  }
  em {
    text-align: justify;
    text-justify: inter-word;
  }
`;

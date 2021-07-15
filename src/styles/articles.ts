import styled from 'styled-components';

export const ArticlesContent = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  /* gap: 1rem; */

  > h3 {
    text-align: center;
  }

  section {
    display: grid;
    grid-auto-flow: row;
    align-items: center;
    justify-items: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 2rem;
    padding: 2rem;
    background-color: var(--gray-170);
    border-radius: 4px;
  }

  .article_list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    align-items: center;
    justify-items: flex-start;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem;
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

  h2 {
    line-height: 1.4;
  }

  p {
    margin: 1rem 0;
    line-height: 1.4;
  }

  pre {
    background-color: var(--gray-100);
    border-radius: 4px;
    padding: 1rem;
  }

  a {
    color: var(--scent-450);

    &:hover {
      color: var(--scent-550);
    }
  }

  img {
    width: 100%;
    display: block;
    margin: 1rem auto;
    border: 2px solid var(--gray-100);
    box-shadow: 4px 4px 16px var(--gray-100);
  }

  img[src*='width_auto'] {
    text-align: center;
    width: auto;
  }

  img[src*='width_80'] {
    text-align: center;
    width: 80%;
  }

  img[src*='width_100'] {
    text-align: center;
    width: 100%;
  }

  img[src~='bordered'] {
    border: 2px solid var(--gray-100);
  }

  img + em {
    padding-bottom: 0.5rem;
    display: block;
    text-align: center;
  }
`;

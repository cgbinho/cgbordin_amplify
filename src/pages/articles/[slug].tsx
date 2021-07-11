import Head from 'next/head';
import React from 'react';
import DateFormatter from '../../components/DateFormatter';
import Layout from '../../components/Layout';
import {
  getAllArticles,
  getArticleBySlug,
} from '../../helpers/articles/api_articles';
import markdownToHtml from '../../helpers/markdownToHtml';
import { Container } from '../../styles/home';
import { ArticleContainer } from './styles';

export default function ArticlePage({ article }) {
  console.log(article);

  return (
    <Layout>
      <Container>
        <Head>
          <title>CGBORDIN.com - {article.title}</title>
        </Head>
        <ArticleContainer>
          <main>
            <div>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <DateFormatter dateString={article.date} />
            </div>
            <div>
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          </main>
        </ArticleContainer>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const article = getArticleBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);

  // const content = await serialize(article.content);
  const content = await markdownToHtml(article.content || '');

  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const articles = getAllArticles(['slug']);

  return {
    paths: articles.map((articles) => {
      return {
        params: {
          slug: articles.slug,
        },
      };
    }),
    fallback: false,
  };
}

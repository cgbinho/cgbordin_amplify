import Head from 'next/head';
import React from 'react';
import DateFormatter from '../../components/DateFormatter';
import Layout from '../../components/Layout';
import {
  getAllArticles,
  getArticleBySlug,
} from '../../helpers/articles/api_articles';
import markdownToHtml from '../../helpers/markdownToHtml';
import { ArticleContainer } from '../../styles/articles';
import { Container } from '../../styles/home';

export default function ArticlePage({ article }) {
  return (
    <Layout>
      <Container>
        <Head>
          <title>CGBORDIN.com - {article.title}</title>
        </Head>
        <ArticleContainer>
          <main>
            <div>
              <DateFormatter dateString={article.date} />
              <h2>
                {article.title} - {article.excerpt}
              </h2>
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
    'excerpt',
    'content',
    'coverImage',
  ]);

  console.log(article);
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

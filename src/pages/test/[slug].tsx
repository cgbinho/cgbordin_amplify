import { Params } from 'next/dist/next-server/server/router';
import Head from 'next/head';
import { useRouter } from 'next/router';
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

export default function TestPage({ post }) {
  // const router = useRouter();

  // const { id } = router.query;
  console.log({ post });

  return (
    <Layout>
      <Container>
        <Head>
          <title>CGBORDIN.com</title>
        </Head>
        <p>test</p>
        <ArticleContainer>{post}</ArticleContainer>
      </Container>
    </Layout>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  return {
    props: {
      post: 'testo_1',
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: 'testo',
        },
      },
    ],
    fallback: false,
  };
}

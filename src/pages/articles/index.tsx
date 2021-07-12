import { getAllArticles } from '../../helpers/articles/api_articles';
import Link from 'next/link';
import DateFormatter from '../../components/DateFormatter';
import React from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';

import { ArticlesContent } from './styles';

export default function Articles({ allArticles }) {
  return (
    <Layout>
      <Head>
        <title>CGBORDIN.com - Artigos</title>
      </Head>
      <ArticlesContent>
        <h3>Artigos</h3>
        <div className="article_list">
          {allArticles.map(
            ({ slug, date, title, excerpt, coverImage }, index) => (
              <section key={index}>
                <img src={coverImage} alt={title} width="100%" />
                <aside>
                  <Link href={`/articles/${slug}`}>
                    <a>
                      <h4>{title}</h4>
                    </a>
                  </Link>
                  <p>{excerpt}</p>
                  <br />
                  <DateFormatter dateString={date} />
                </aside>
              </section>
            )
          )}
        </div>
      </ArticlesContent>
    </Layout>
  );
}

export async function getStaticProps() {
  const allArticles = getAllArticles([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allArticles },
  };
}

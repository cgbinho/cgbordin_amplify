import { getAllArticles } from '../../helpers/articles/api_articles';
import Link from 'next/link';
import DateFormatter from '../../components/DateFormatter';
import React from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';

import { ArticlesContent } from '../../styles/articles';

export default function Articles({ allArticles, content }) {
  return (
    <Layout>
      <Head>
        <title>CGBORDIN.com - {content.title}</title>
      </Head>
      <ArticlesContent>
        <h1>{content.title}</h1>
        <div className="article_list">
          {allArticles.map(
            ({ slug, date, title, excerpt, coverImage }, index) => (
              // <Link href={`/articles/${slug}`} key={index} locale="pt-BR">
              <Link href={`/articles/${slug}`} key={index}>
                <a>
                  <section>
                    <img src={coverImage} alt={title} width="100%" />
                    <aside>
                      <h4>{title}</h4>
                      <p>{excerpt}</p>
                      <br />
                      <DateFormatter dateString={date} />
                    </aside>
                  </section>
                </a>
              </Link>
            )
          )}
        </div>
      </ArticlesContent>
    </Layout>
  );
}

export async function getStaticProps({ locale = 'pt-BR' }) {
  const allArticles = getAllArticles([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);
  const content = (await import(`../../locales/${locale}/articles.js`)).default;

  return {
    props: { allArticles, content },
  };
}

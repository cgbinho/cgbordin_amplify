import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { serialize } from 'next-mdx-remote/serialize';

const articlesDirectory = join(process.cwd(), 'src', '_articles');

export function getArticleSlugs() {
  const files = fs.readdirSync(articlesDirectory);
  return files;
}

export function getArticleBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(articlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllArticles(fields: string[] = []) {
  const slugs = getArticleSlugs();
  // console.log({ slugs });
  const articles = slugs
    .map((slug) => getArticleBySlug(slug, fields))
    // sort articles by date in descending order
    .sort((article1, article2) => (article1.date > article2.date ? -1 : 1));

  return articles;
}

import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import markdownToHtml from '../markdownToHtml';

const localesDirectory = join(process.cwd(), 'src', 'locales');

export async function getSectionByLocale(section: string, locale: string) {
  const sectionName = section.replace(/\.md$/, '');
  const fullPath = join(localesDirectory, locale, `${sectionName}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content: rawContent } = matter(fileContents);

  const content = await markdownToHtml(rawContent || '');

  return { data, content };
}

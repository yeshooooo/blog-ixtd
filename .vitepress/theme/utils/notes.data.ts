// .vitepress/theme/utils/notes.data.js

import { createContentLoader } from 'vitepress';

console.log('Script started');

export const data = [];

export default createContentLoader('../notes/*/*.md', {
  transform(raw) {
    console.log('Raw data:', raw);

    return raw
      .map(({ url, frontmatter }) => {
        if (!frontmatter) {
          return null;
        }

        const { title, created, updated } = frontmatter;

        if (!title || !created || !updated) {
          return null;
        }

        return {
          title,
          url,
          targs: frontmatter.tags || [],
          created: formatDate(created),
          updated: formatDate(updated),
        };
      })
      .filter((post) => post !== null)
      .sort((a, b) => b.updated.time - a.updated.time);
  },
});

function formatDate(raw) {
  const date = new Date(raw);
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };
}

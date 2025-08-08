import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, extname, basename } from 'node:path';
import matter from 'gray-matter';

const postsDir = join(process.cwd(), 'public', 'posts');
const outFile = join(postsDir, 'index.json');

if (!existsSync(postsDir)) {
  mkdirSync(postsDir, { recursive: true });
}

const entries = readdirSync(postsDir)
  .filter((f) => extname(f).toLowerCase() === '.md')
  .map((file) => {
    const full = join(postsDir, file);
    const raw = readFileSync(full, 'utf8');
    const { data } = matter(raw);
    const slug = basename(file, '.md');
    return {
      title: data.title ?? slug,
      date: data.date ?? new Date().toISOString(),
      description: data.description ?? '',
      slug,
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

writeFileSync(outFile, JSON.stringify(entries, null, 2));
console.log(`Wrote ${entries.length} posts to ${outFile}`);



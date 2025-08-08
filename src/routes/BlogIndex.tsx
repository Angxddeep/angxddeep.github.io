import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type PostMeta = {
  title: string;
  date: string;
  description?: string;
  slug: string;
};

export default function BlogIndex() {
  const [posts, setPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    fetch('/posts/index.json')
      .then((r) => r.json())
      .then((data: PostMeta[]) => setPosts(data));
  }, []);

  return (
    <section>
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="text-white/80 mt-2">Writing in Markdown, rendered statically.</p>
      <div className="mt-6 grid gap-4">
        {posts.map((p) => (
          <Link key={p.slug} to={`/blog/${p.slug}`} className="glass rounded-2xl p-5 block hover:bg-white/15 transition-colors">
            <div className="text-white/70 text-sm">{new Date(p.date).toLocaleDateString()}</div>
            <div className="text-xl font-semibold">{p.title}</div>
            {p.description && <div className="text-white/80 mt-1">{p.description}</div>}
          </Link>
        ))}
      </div>
    </section>
  );
}



import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import matter from 'gray-matter';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

type Post = {
  html: string;
  title: string;
  date: string;
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!slug) return;

    fetch(`/posts/${slug}.md`)
      .then((r) => r.text())
      .then((raw) => {
        const { content, data } = matter(raw);
        const html = DOMPurify.sanitize(marked.parse(content) as string);
        setPost({
          html,
          title: (data.title as string) ?? slug,
          date: (data.date as string) ?? new Date().toISOString(),
        });
      });
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    // Highlight code blocks after content is injected
    hljs.highlightAll();
  }, [post]);

  if (!post) return <div className="text-white/80">Loading…</div>;

  return (
    <article className="prose prose-invert prose-lg max-w-none prose-pre:bg-white/10 prose-pre:p-0 prose-pre:rounded-xl">
      <Link to="/blog" className="no-underline text-white/70 hover:text-white">← Back</Link>
      <h1>{post.title}</h1>
      <p className="text-white/70">{new Date(post.date).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}



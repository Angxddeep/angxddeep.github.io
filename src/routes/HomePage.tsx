import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 glass rounded-3xl p-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Hey, I'm Angad</h1>
        <p className="mt-4 text-white/80 max-w-prose">
          I build fast, minimal web experiences. This is my corner of the internet where I write about code,
          share experiments, and keep notes. The design favors a calm bluish-teal gradient and smooth micro-interactions.
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/blog" className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/20 transition-colors">
            Read the blog
          </Link>
          <a href="https://github.com/angxddeep" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition-colors">
            GitHub
          </a>
        </div>
      </div>

      <div className="glass rounded-3xl p-8">
        <h2 className="text-xl font-semibold">Now</h2>
        <p className="mt-2 text-white/80">Tinkering with React performance, TypeScript ergonomics, and small tools.</p>
      </div>
    </section>
  );
}



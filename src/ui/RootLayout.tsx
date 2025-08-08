import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

export default function RootLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40">
        <nav className="mx-auto max-w-5xl mt-6 px-4">
          <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
            <Link to="/" className="font-semibold tracking-wide">Angad</Link>
            <div className="flex items-center gap-4 text-sm">
              <NavLink to="/" className={({isActive}) => `hover:opacity-90 ${isActive && location.pathname === '/' ? 'underline' : ''}`}>Home</NavLink>
              <NavLink to="/blog" className={({isActive}) => `hover:opacity-90 ${isActive ? 'underline' : ''}`}>Blog</NavLink>
              <a href="https://github.com/angxddeep" target="_blank" rel="noreferrer" className="hover:opacity-90">GitHub</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <Outlet />
      </main>

      <footer className="mt-12 mb-8 text-center text-white/70 text-sm">
        © {new Date().getFullYear()} Angad • Built with React + Vite
      </footer>
    </div>
  );
}



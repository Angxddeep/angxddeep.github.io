import Link from 'next/link'
import { getSortedPostsData } from '@/lib/blog'
import { format } from 'date-fns'

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <div className="mx-auto max-w-4xl px-4 pt-20 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.id} className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <Link href={`/blog/${post.id}`}>
              <h2 className="mb-2 text-xl font-semibold hover:text-primary-600 dark:hover:text-primary-400">
                {post.title}
              </h2>
            </Link>
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            <p className="mt-4 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
            <Link
              href={`/blog/${post.id}`}
              className="mt-4 inline-block text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

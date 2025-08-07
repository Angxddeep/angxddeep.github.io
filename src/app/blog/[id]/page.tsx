import { format } from 'date-fns'
import { getPostData, getSortedPostsData } from '@/lib/blog'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id)

  return (
    <div className="mx-auto max-w-3xl px-4 pt-20 sm:px-6 lg:px-8">
      <article className="prose prose-lg dark:prose-invert prose-a:text-primary-600 dark:prose-a:text-primary-400">
        <h1>{post.title}</h1>
        <time className="text-sm text-gray-500 dark:text-gray-400">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </time>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}

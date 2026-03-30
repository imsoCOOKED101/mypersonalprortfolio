export default function BlogsPage() {
  return (
    <div className="flex flex-col items-center text-center mt-20 px-4">
      <h1 className="text-3xl font-semibold mb-2">Blogs</h1>

      <p className="text-gray-600 max-w-xl dark:text-white">
        Welcome to the blog section! Stay tuned for updates, articles, and insights.
      </p>

      <div className="border p-10 mt-6 rounded-lg text-gray-500 dark:text-white">
        No blog posts available yet. Check back soon!
      </div>
    </div>
  )
}

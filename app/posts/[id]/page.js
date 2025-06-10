import Link from "next/link";
import posts from "@/app/data/posts";

export default async function PostPage({ params }) {
  // Await params to fix the "params should be awaited" error
  const { id } = await params;
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return (
      <main>
        <h1>Post not found.</h1>
        <p>
          <Link href="/">Go back to Home Page</Link>
        </p>
      </main>
    );

  }
  return (
    <main>
      <h1>Title: {post.title}</h1>
      <p>Content: {post.content}</p>
      <p>
        <Link href="/">Go back to Home Page</Link>
      </p>
    </main>
  );
}
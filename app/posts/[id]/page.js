import Link from "next/link";
import posts from "@/app/data/posts";
import styles from "@/app/posts/[id]/Post.module.css";

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
    <main className={styles.container}>
      <h1 className={styles.title}>Title: {post.title}</h1>
      <p className={styles.content}>Content: {post.content}</p>
      <p>
        <Link href="/">Go back to Home Page</Link>
      </p>
    </main>
  );
}
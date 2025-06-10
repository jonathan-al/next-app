import Link from "next/link";

export default function PostPage({ params }) {
  const { id } = params;

  return (
    <main>
      <h1>Post ID: {id}</h1>
      <p>This is the page for post with ID: {id}.</p>
      <p>
        <Link href="/">Go back to Home Page</Link>
      </p>
    </main>
  );
}
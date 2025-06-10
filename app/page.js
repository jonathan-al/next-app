import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Our Application</h1>
      <p>This is the home page of our application.</p>
      <p>
        <Link href="/about">Go to About Page</Link>
      </p>
      <p>
        <Link href="/posts/1">Go to Post 1</Link>
      </p>
      <p>
        <Link href="/posts/2">Go to Post 2</Link>
      </p>
    </main>
  );
}
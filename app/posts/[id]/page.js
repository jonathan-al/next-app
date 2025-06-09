export default function PostPage({ params }) {
  const { id } = params;

  return (
    <main>
      <h1>Post ID: {id}</h1>
      <p>This is the page for post with ID: {id}.</p>
    </main>
  );
}
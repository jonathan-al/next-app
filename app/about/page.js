import Link from "next/link";
import Navigation from "../navigation";

export default function About() {
  return (
    <Navigation>
      <main>
        <h1>About Us</h1>
        <p>This is the about page of our application.</p>
        <p>
          <Link href="/">Go back to Home Page</Link>
        </p>
      </main>
    </Navigation>
  );
}
import Link from "next/link";

export default async function Home() {
  return (
    <div className="home">
      <div className="home-info">
        <h1>Best Posts App</h1>
        <p>
          This is the best app for list your posts and your Favorite Posts,
          Enjoy
        </p>
        <Link href="/posts">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

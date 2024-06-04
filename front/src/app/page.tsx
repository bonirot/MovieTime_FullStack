import Link from "next/link";

export default async function Home() {
  return (
    <div className="loginContainer">
      <div className="loginContainer_logo">
        <img className="loginContainer_logo-img" src="/popcorn_time.png" />
        <h1 className="loginContainer_logo-title">Movie Time</h1>
      </div>
      <p>It is time for a Movie!</p>

      <button>
        <Link className="loginContainer_btn" href="/api/auth/login">
          Login
        </Link>
      </button>
    </div>
  );
}

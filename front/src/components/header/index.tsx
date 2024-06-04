import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";
import "./header.css";

export default async function Header() {
  const session = await getSession();
  console.log(session);
  return (
    <header>
      <Link className="headerTtileLink" href="/movies">
        <div className="headerName">
          <img className="headerLogo" src="/popcorn_time.png" />
          <p className="headerTitle">Movie Time</p>
        </div>
      </Link>
      <div className="headerUser">
        <p className="headerUser_name">Hello, {session?.user.name}!</p>
        <img
          className="headerUser_avatar"
          src={session?.user.picture}
          alt={session?.user.name}
        />
        <Link href="/api/auth/logout">
          <img className="headerLogout" src="./turn-on.png" />
        </Link>
      </div>
    </header>
  );
}

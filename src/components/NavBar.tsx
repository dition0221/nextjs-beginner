import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Image src="/vercel.svg" alt="" width={100} height={100} />
      <div>
        <Link href="/" className={router.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          href="/about"
          className={router.pathname === "/about" ? "active" : ""}
        >
          About
        </Link>
      </div>

      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        Image {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav div {
          display: flex;
          gap: 10px;
          text-decoration: none;
          font-style: italic;
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}

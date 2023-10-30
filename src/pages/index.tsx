import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// API & Interface
import { IFetchProps } from "./api/getMovies";
// Components
import Seo from "@/components/Seo";

export default function Home() {
  // Get movie API
  const [data, setData] = useState<IFetchProps>();
  useEffect(() => {
    (async () => {
      const res = (await (await fetch("/api/getMovies")).json()) as IFetchProps;
      if (res) setData(res);
    })();
  }, []);

  // Routing Hook
  const router = useRouter();
  const onClick = (id: number, title: string) =>
    router.push(`/movies/${title}/${id}`);

  return (
    <div className="container">
      <Seo title="Home" />
      {!data && <h3>Loading...</h3>}
      {data?.results.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <Link href={`/movies/${movie.original_title}/${movie.id}`}>
            <h4>{movie.original_title}</h4>
          </Link>
        </div>
      ))}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// * Server Side Rendering (SSR)
/* export async function getServerSideProps() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };
  const { results }: IFetchProps = await (
    await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&region=KR",
      options
    )
  ).json();

  return { props: { results } };
}
 */
